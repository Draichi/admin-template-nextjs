import AuthInput from "components/auth/AuthInput";
import { useState } from "react";
import Image from "next/image";
import { IconWarn } from "components/icons";
import useAuth from "data/hook/useAuth";

export default function Auth() {
  const { user, loginGoogle } = useAuth();
  const [error, setError] = useState(null);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showError = (msg: any, timeInSeconds = 5) => {
    setError(msg);
    setTimeout(() => {
      setError(null);
    }, timeInSeconds * 1000);
  };

  const submit = () => {
    if (mode === "login") {
      //
    } else {
      //
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Authentication page image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1
          className={`
            text-3xl font-bold mb-5
          `}
        >
          {mode === "login" ? "Enter with your account" : "Signup"}
        </h1>

        {error && (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {IconWarn("h-7 w-7")}
            <span className="ml-3">{error}</span>
          </div>
        )}

        <AuthInput
          type="email"
          label="Email"
          value={email}
          updateValue={setEmail}
          required
        />
        <AuthInput
          type="password"
          label="Password"
          value={password}
          updateValue={setPassword}
          required
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          value={password}
          updateValue={setPassword}
          required
          notRenderWhen={mode === "login"}
        />
        <button
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode == "login" ? "Signin" : "Signup"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={loginGoogle}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          Enter with google
        </button>

        {user && user.name}

        {mode === "login" ? (
          <p className="mt-8">
            New here?
            <a
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              onClick={() => setMode("signup")}
            >
              {" "}
              Create an account
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Already have an account?
            <a
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              onClick={() => setMode("login")}
            >
              {" "}
              Enter
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
