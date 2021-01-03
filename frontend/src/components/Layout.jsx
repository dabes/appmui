import React from "react";
import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import Breadcrumb from "./BreadCrumb";

export const DashboardLayout = ({ children }) => {
  return (
    <BodyWrapper>
      <div className="flex bg-gray-200" style={{minHeight: "100vh"}}>
        <NavSidebar />

        <div className="flex flex-col flex-1 ">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box ml-6"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                <Breadcrumb />
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
