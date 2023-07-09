import React, { Suspense } from "react";
import TodosList from "./todos/TodosList";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <p className="text-cyan-700 pt-5 pl-5">This is home page</p>
      <Suspense
        fallback={<p className="text-cyan-700 p-5">Loading the Todos</p>}
      >
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}
