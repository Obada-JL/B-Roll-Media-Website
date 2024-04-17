import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import "./navBar.css";
import PageLayout from "./PageLayout";
import MainPage from "./Components/MainPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [{ path: "/", element: <MainPage /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
