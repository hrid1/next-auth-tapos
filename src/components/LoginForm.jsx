import { doSocialLogin } from "@/app/actions";
import React from "react";

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-black px-3 py-2"
        type="submit"
        name="action"
        value="google"
      >
        Sign With Google
      </button>
      <button
        className="bg-pink-500 px-3 py-2"
        type="submit"
        name="action"
        value="github"
      >
        Sign With GitHub
      </button>
    </form>
  );
};

export default LoginForm;
