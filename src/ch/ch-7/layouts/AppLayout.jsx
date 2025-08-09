import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const AppLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 My Application</p>
      </footer>
    </>
  );
};

export default AppLayout;
