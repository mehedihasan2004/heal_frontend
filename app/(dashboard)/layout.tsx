"use client";

import { isLoggedIn } from "@/services/authService";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const userLoggedIn = isLoggedIn();
  const { push } = useRouter();

  useEffect(() => {
    if (!userLoggedIn) push("/auth");

    setLoading(true);
  }, [push, userLoggedIn, isLoading]);

  if (!isLoading)
    return (
      <h3 className="text-green-400 text-4xl font-bold text-center">
        Loading....
      </h3>
    );

  return (
    <div className="flex flex-row items-center justify-evenly">
      <aside>Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
