import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import History from "./pages/History.jsx";
import Ticket from "./pages/Ticket.jsx"; // Impor halaman tiket
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/ticket", // Tambahkan rute untuk halaman tiket
    element: <Ticket />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
