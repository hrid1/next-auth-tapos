import { doLogout } from "@/app/actions";
import React from "react";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button className="bg-blue-500 py-2 px-3 my-4" type="submit">
        Logout
      </button>
    </form>
  );
};

export default Logout;
