import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { useLocation } from 'react-router-dom'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function isHome(element, index, array) {
    return element === "home";
  }

function HeaderView() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  let link = "";
  if (!pathParts.some(isHome)){
    pathParts.unshift("home");
  }
  return pathParts.map(val => {
      if (val !== undefined && val !== "" && val !== null){
          if (link === "/home" ) link = "";
          if (val !== "home") link = link + "/" + val;
          else link = "/home";
          return (<MDBBreadcrumbItem ><a href={link} className="white-text bolder">{capitalizeFirstLetter(val)}</a></MDBBreadcrumbItem>)
      }else{
        return "";
      }
  },[])
//   return <span>Path : {location.pathname}</span>
}

const Breadcrumb = () => {  
  return (
    <MDBContainer>
       <MDBBreadcrumb color="primary">
            <HeaderView />
        </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default Breadcrumb;