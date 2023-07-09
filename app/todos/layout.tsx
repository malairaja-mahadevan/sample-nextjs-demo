import React from "react";
import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex mt-5">
      <TodosList />
      <div className="flex-1">{children}</div>
    </main>
  );
}
