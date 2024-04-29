import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import "./navBar.css";
import PageLayout from "./PageLayout";
import MainPage from "./Components/MainPage";
import Component from "./Components/test";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/test", element: <Component /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
