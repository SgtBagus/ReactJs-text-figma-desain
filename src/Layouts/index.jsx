import React from "react";

import { HeaderComponents } from "./Components/Header";
import { SidebarComponents } from "./Components/Sidebar";
import { FooterComponents } from "./Components/Footer";

import { HeaderPageComponent } from "./Components/HeaderPageComponent";

import { ButtonContextProvider } from "../Context/ButtonContext";

export const LayoutDefault = ({ children, pageName, path }) => (
  <>
    <HeaderComponents />
    <SidebarComponents path={path} />
    <div className="content-wrapper">
      <ButtonContextProvider>
        <HeaderPageComponent />
        <section className="content m-3">
          <div className="container-fluid">{children}</div>
        </section>
      </ButtonContextProvider>
    </div>
    <FooterComponents />
  </>
);
