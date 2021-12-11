import { useSession, getSession, signIn } from "next-auth/react";
import React, { useEffect } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();

  return data;
};

function Dashboard() {
  const { data: session, status } = useSession();
  const { data, error } = useSWR("dashboard", fetcher);

  if (status === "unauthenticated") {
    signIn();
  }

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return (
    <div>
      <h2>Dashboard</h2>
      <div>Name: {data.name}</div>
      <div>Likes: {data.likes}</div>
    </div>
  );
}

export default Dashboard;
