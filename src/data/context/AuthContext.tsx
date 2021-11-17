import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  User as FirebaseUser,
} from "firebase/auth";
import firebaseApp from "../../firebase/config";
import User from "model/User";
import { createContext, useState } from "react";
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

export function AuthProvider(props) {
  const [user, setUser] = useState<User>(null);

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    try {
      const result = await signInWithPopup(auth, provider);
      const userFromFirebase = result.user;
      const user = await normalizedUser(userFromFirebase);
      if (!user) {
        return;
      }
      setUser(user);
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
