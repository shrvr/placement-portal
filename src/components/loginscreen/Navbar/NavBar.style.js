import styled from "styled-components"
import { greenColor, whiteColor } from "../../constants/constants";

export const NavBarWrapper = styled.div`
.background-style {
    background-color:${greenColor};
  }

.header-style{
  font-size:15pt;
  color:white;
}

.navlink-style{
  cursor:pointer;
  margin:0;
  margin-top:8px;
  margin-bottom:8px;
  padding:0;
}

.dropdown-style{
  font-size:13px;
  padding:0;
}

.dropdown-item{
  color:${greenColor};
  border-bottom: 1px solid ;
  border-bottom-color:rgb(213,213,213);
}
.dropdown-item:hover{
  color:${whiteColor};
  background-color:${greenColor};
}

`;