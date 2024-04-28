import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      }
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={myrouter} />
      
    </div>
  );
}

export default App;
