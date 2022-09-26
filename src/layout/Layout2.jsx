import React from "react";

export default function Layout2({ children }) {
  return (
    <div>
      <aside>
        {" "}
        <nav>Nav</nav>
        <footer>Footer</footer>
      </aside>

      <main>{children}</main>
    </div>
  );
}
