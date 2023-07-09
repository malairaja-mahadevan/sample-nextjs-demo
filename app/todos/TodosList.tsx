import React from "react";

import { Todo } from "@/typings";
import Link from "next/link";

const fetchTodos = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data: Todo[] = await res.json();

  return data.splice(0, 10);
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <ul className="list-disc ml-5">
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
