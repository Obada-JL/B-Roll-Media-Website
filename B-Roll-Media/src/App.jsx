// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";

// import "./navBar.css";
// import PageLayout from "./PageLayout";
// import MainPage from "./Components/MainPage";
// import Component from "./Components/test";
// import ProjectsLayout from "./Components/ProjectsLayout";
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <PageLayout />,
//       children: [
//         { path: "/", element: <MainPage /> },
//         { path: "/test", element: <Component /> },
//       ],
//     },
//     {
//       path: "/testFile",
//       element: <ProjectsLayout />,
//       children: [{ path: "", element: <Component /> }],
//     },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./navBar.css";
import PageLayout from "./PageLayout";
import MainPage from "./Components/MainPage";
import ProjectsDetails from "./Components/ProjectsDetails";
import ProjectsLayout from "./Components/ProjectsLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [{ path: "/", element: <MainPage /> }],
    },
    {
      path: "/projects",
      element: <ProjectsLayout />,
      children: [{ path: "", element: <ProjectsDetails /> }],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
