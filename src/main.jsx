import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Index from "./page";
import "./index.css";
import Layout1 from "./layout/Layout1";
import Layout2 from "./layout/Layout2";

import About from "./page/About";
import Nope from "./page/Nope";

const load = async () => {
  const user = false;
  if (!user) {
    // if you know you can't render the route, you can
    // throw a redirect to stop executing code here,
    // sending the user to a new route
    throw redirect("/nope");
  }

  // otherwise continue
  const stats = await fake.getDashboardStats();
  return { user, stats };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout1>
        <Index></Index>
      </Layout1>
    ),
  },
  {
    path: "about",
    element: (
      <Layout2>
        <About />
      </Layout2>
    ),
    loader: load,
  },
  {
    path: "nope",
    element: (
      <Layout2>
        <Nope />
      </Layout2>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
