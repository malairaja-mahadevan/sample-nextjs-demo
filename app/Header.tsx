import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="p-5 bg-blue-500">
      <p className="font-bold text-white text-center">Welcome to NextJS Demo</p>
      <Link
        href="/"
        className="px-2 py-1 mx-2 bg-white text-blue-500 rounded-lg"
      >
        Home
      </Link>

      <Link
        href="/todos"
        className="px-2 py-1 mx-2 bg-white text-blue-500 rounded-lg"
      >
        Todos
      </Link>

      <Link
        href="/search"
        className="px-2 py-1 mx-2 bg-white text-blue-500 rounded-lg"
      >
        Search
      </Link>
    </header>
  );
}

export default Header;
