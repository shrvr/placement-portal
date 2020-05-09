import styled from "styled-components"
import { whiteColor, greenColor, greenColorLight } from "../../../../constants/constants";

export const SLtableWrapper = styled.div`
.table-style{
    // background-color:Black; 
    // color:white;
    font-size:10pt;
    text-align:center;
    width:70%;
    margin:auto;
}

.table-style thead{
    background-image: linear-gradient(to bottom, rgb(108,108,108) , rgb(69,69,69)); 
    color:${whiteColor}
}

.table-style thead tr th{
    margin:10px;
    padding:9px;
} 

.table-style tbody tr td,th{
    margin:0;
    padding:3px;
}

.table-style tbody tr th{
    background-color:${whiteColor};
}

.bttn{
    background-color:${greenColor}
}

.bttn:hover{
    background-color:${greenColorLight};
}
`;