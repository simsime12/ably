import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./page/home/Home";
import TestHome from "./test/TestHome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestHome />,
    },
    {
      path: "/search",
      element: <div>Search page</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
