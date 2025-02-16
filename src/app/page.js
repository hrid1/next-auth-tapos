import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function Home() {
  
  console.log(process.env.GITHUB_CLIENT_SECRET, "and",process.env.GITHUB_CLIENT_ID)

  return (
    <div>
      <h2>Sign In Your Account</h2>
      <LoginForm />
    </div>
  );
}
