import styled from "styled-components";
import { whiteColor, fontBlackColor, greenColor } from "../../../constants/constants";


export const DashboardWrapper = styled.div`
  .background-style {
    background-color:${whiteColor}; 
    height: 92vh;
  }

  .card-style {
    box-shadow:  rgba(1, 162, 129, 0.2) 0px 4px 7px 0px;

  }

  .card-right-text{
    font-size:15px;
    color:${fontBlackColor};
  //  border: 1px solid;
    padding:0;
    text-align:center;
  }

  .card-right-text span{
    font-size:22px;
    color:black;
    font-weight:bold;
  }

  .card-left-icon{
    color:${greenColor}
  }
`;
//#d8d8d8