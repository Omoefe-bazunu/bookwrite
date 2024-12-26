import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layouts/Layout";
import { Home } from "./components/Pages/Home";
import { Books } from "./components/Pages/Books";
import AddBooks from "./components/Pages/AddBooks";
import { AdminLogin } from "./components/Pages/AdminLogin";
// import { Messages } from "./components/Pages/Messages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/AddBooks" element={<AddBooks />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      {/* <Route path="/Messages" element={<Messages />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
