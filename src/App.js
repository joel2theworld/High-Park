import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trimnell from "./pages/AllProjects/Trimnell";
import AtlanticNominees from "./pages/AllProjects/AtlanticNominees";
import Ark from "./pages/AllProjects/Ark";
import Villam from "./pages/AllProjects/Villam";
import Integrity from "./pages/AllProjects/Integrity";
import Jasmine from "./pages/AllProjects/Jasmine"
import ScrollToTop from "./ScrollToTop";
function App() {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/trimnell-tower",
        element: <Trimnell/>,
      },
      {
        path: "/projects/jasmine-villas",
        element: <Jasmine/>,
      },
      {
        path: "/projects/integrity-tower",
        element: <Integrity/>,
      },
      {
        path: "/projects/villa-m",
        element: <Villam/>,
      },
      {
        path: "/projects/the-ark",
        element: <Ark/>,
      },
      {
        path: "/projects/atlantic-nominees",
        element: <AtlanticNominees/>,
      }
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={myrouter} />

    </div>
  );
}

export default App;
