import styled from "styled-components"
import { greenColor, whiteColor, fontBlackColor } from "../../constants/constants";

export const SideBarWrapper=styled.div`
.background-style {
    background-color: ${whiteColor};
    box-shadow: rgba(1, 162, 129, 0.2) 0px 4px 7px 0px;
    height: 100vh;
    position: fixed;
    width:15%;
    z-index: 2;
  }

  .sidebar-header {
    text-align: center;
  }

  // .active {
  //   background: linear-gradient(
  //     45deg,
  //     rgb(167, 139, 252),
  //     rgb(82, 107, 248)
  //   ) !important;
  //   color: white !important;
  // }

  .clgLogo-background{
    background-color: ${greenColor};
    background-style:cover;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
    padding:6px;  
  }

  .clgLogo-background img{
    margin-left:65px;
  }

//  .sidebar-navitem-style:hover{
//    blackground-color:yellow;
//  }

.menu-navlink-style{
  background-color:rgb(10, 196, 158);
  color:white;
  paadding:0;
}

.navlink-style{
  color:${fontBlackColor};
  font-size:11pt;
  border-left: 4px solid;
  border-left-color:${whiteColor};
  border-bottom: 1px solid ;
  border-bottom-color:rgb(213,213,213);
}

.navlink-style:hover{
  color:${greenColor};
  border-left-color:${greenColor};
}

`;