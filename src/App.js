import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./page/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <div>Search page</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
