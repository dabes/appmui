/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

     

      <div className={`display-block fixed inset-y-0 left-0 z-30 w-6 overflow-hidden transition duration-300 ease-out transform bg-white border-r-2 g:static lg:inset-0`}>
        <button
          className="btn-menu"
          onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform bg-white border-r-2 g:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            Menu
          </span>
        </div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
            setIsSidebarOpen(false);
          }}

          items={[
            {
              title: "Home",
              itemId: "/home",
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "Datatable",
              itemId: "/datatable",
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "Sobre",
              itemId: "/sobre",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "Projects",
                  itemId: "/sobre/projects"
                },
                {
                  title: "Curriculo",
                  itemId: "/sobre/curriculo"
                }
              ]
            },
            {
              title: "Portifolio",
              itemId: "/portifolio",
              elemBefore: () => <Icon name="activity" />,
              subNav: [
                {
                  title: "Home",
                  itemId: "/portifolio"
                },
                {
                  title: "Backend",
                  itemId: "/portifolio/backend"
                },
                {
                  title: "Frontend",
                  itemId: "/portifolio/frontend"
                },
                {
                  title: "Componentes",
                  itemId: "/portifolio/componentes"
                }
              ]
            }
          ]}
        />
      </div>
    </React.Fragment>
  );
};
