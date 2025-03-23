"use client";

import { useAuth } from "@/app/context/AuthContext";
import { Button } from "./ui/button";
import { loginWithGoogle } from "@/app/auth";

const Auth = () => {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Button onClick={loginWithGoogle}>Login with Google</Button>
      )}
    </div>
  );
};

export default Auth;
