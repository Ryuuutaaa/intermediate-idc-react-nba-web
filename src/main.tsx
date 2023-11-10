import React from "react";
import { createRoot } from "react-dom/client";
import User from "./pages/user/index.tsx";
import Index from "./pages/index.tsx";
import UserInfo from "./components/user/userInfo.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TanstackQuery from "./provider/tanstack";
import "./index.css";
import Next from "./pages/next.tsx";
import TeamWest from "./pages/teamWest.tsx";
import TeamEast from "./pages/teamEast.tsx";
import About from "./pages/about.tsx";
import Lakers from "./pages/teamEast/lakers.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQuery>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserInfo />} />
          <Route path="/next" element={<Next />} />

          {/* team */}
          <Route path="/west" element={<TeamWest />} />
          <Route path="/east" element={<TeamEast />} />

          {/*  team east */}
          <Route path="lakers" element={<Lakers />} />

          {/* team west */}
        </Routes>
      </BrowserRouter>
    </TanstackQuery>
  </React.StrictMode>
);
