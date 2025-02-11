import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/components/store/store.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import PortFolio from "./components/PortFolio/PortFolio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/landing",
    element: <PortFolio />,
    errorElement: <h1>Not Found</h1>
  }
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
