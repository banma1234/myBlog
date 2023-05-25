import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Input } from "src/components/atoms";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const router = useRouter();

  const initData = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleAuth = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!email || !password)
      return setError("email 혹은 password를 입력해주세요");

    let requestUser = {
      email: email,
      password: password
    };

    console.log("requestUser : ", requestUser)

    let response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestUser),
    });

    let data = await response.json();

    if (data.success) {
      initData();
      alert(data.message);
      console.log(data)
      router.replace("/");
    } else {
      alert(data.message);
      console.log(data.message);
      return setError(data.message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <Input
        size="small"
        placeholder="e-mail"
        value={email}
        type="string"
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <Input
        size="small"
        placeholder="password"
        value={password}
        type="password"
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <Button ButtonType="small" color="green" onClick={handleAuth}>
        Submit
      </Button>
    </>
  );
}
