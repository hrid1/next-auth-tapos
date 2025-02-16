import { auth } from "@/auth";
import Logout from "@/components/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Homepage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div>
      <h2>Welcome Home</h2>
      <div className="flex flex-col items-center">
        <Image
          src={session?.user?.image}
          alt="profile pic"
          width={80}
          height={80}
        />

        <h2>{session?.user?.name}</h2>
        <Logout />
      </div>
    </div>
  );
};

export default Homepage;
