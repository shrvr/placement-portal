import styled from "styled-components";
import { whiteColor, fontBlackColor, greenColor, greenColorLight } from "../../constants/constants";

export const MainNavbarWrapper = styled.div`
.main-navbar-style{
    background-color:${whiteColor};
    box-shadow:  rgba(1, 162, 129, 0.2) 0px 4px 7px 0px;
    padding:0;
  }

  .navbrand-style {
    color:${fontBlackColor};
    font-size:15px;
    margin-left:5px;
    padding:8.5px;
  }

  .filter-style{
    color:${greenColor};
    margin-right:240px;
    cursor: pointer;
  }

  .filter-style:hover{
    color:${greenColorLight};
  }

  .search-container{
    margin-top:4px;
  }

  .search-container Button{
    font-size:15px;
    padding-top:3px;
    padding-bottom:3px;
    background-color:${greenColor};
    margin-bottom:3px;
    border-color: ${greenColor};

    border-radius:0px 15px 15px 0px;
  }
  .search-container Input{
    display:inline-block;
    margin:0px;
    width:70%;
    border-radius:15px 0px 0px 15px;
}

#edit-profile{
  color:${greenColor};
}
#edit-profile:hover{
  color:${greenColorLight};
}
`;