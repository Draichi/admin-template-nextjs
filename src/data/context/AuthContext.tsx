import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  onIdTokenChanged,
  User as FirebaseUser,
} from "firebase/auth";
import Cookies from "js-cookie";
import firebaseApp from "../../firebase/config";
import User from "model/User";
import { createContext, useEffect, useState } from "react";
import route from "next/router";

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalizedUser(userFromFirebase: FirebaseUser): Promise<User> {
  const token = await userFromFirebase.getIdToken();
  return {
    uid: userFromFirebase.uid,
    email: userFromFirebase.email,
    imageUrl: userFromFirebase.photoURL,
    name: userFromFirebase.displayName,
    token,
    provider: userFromFirebase.providerId,
  };
}

function handleCookie(logged: boolean) {
  if (logged) {
    Cookies.set("admin-template-auth-logged", String(logged), {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth-logged");
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const cancel = onIdTokenChanged(auth, setupSession);

    return () => cancel();
  }, []);

  async function setupSession(firebaseUser: FirebaseUser) {
    if (!!firebaseUser?.email) {
      const sanitazedUser = await normalizedUser(firebaseUser);
      setUser(sanitazedUser);
      handleCookie(true);
      setLoading(false);

      return sanitazedUser.email;
    } else {
      setUser(null);
      handleCookie(false);
      setLoading(false);

      return false;
    }
  }

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const userFromFirebase = result.user;
      setupSession(userFromFirebase);
      route.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
