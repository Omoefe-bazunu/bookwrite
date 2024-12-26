import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Contact } from "./ContactForm";

export const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Contact />
    </div>
  );
};
