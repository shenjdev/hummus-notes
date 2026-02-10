'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({password}),
    });

    if (response.ok) {
      router.push("/admin");
      return;
    }

    const data = await response.json().catch(() => null);
    setError(data?.error ?? "Invalid password");



    console.log(password);


  }

  return (
    <div className="max-w-[740px] mx-auto py-20 px-6 border-2 my-10 flex flex-col items-center">

      <p>Admin</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col my-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2"

            />

            {error && <p className="text-red-500">Invalid password</p>}
    

          </div>
          <button type="submit" className="hover:cursor-pointer hover:bg-gray-100 active:bg-gray-300 bg-gray-200 rounded-md px-2 py-2 ">Submit</button>
      </form>
    </div>

  );

}