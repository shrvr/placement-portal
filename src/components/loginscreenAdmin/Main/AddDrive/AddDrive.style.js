import styled from "styled-components";
import { greenColor, fontBlackColor, whiteColor } from "../../../constants/constants";

export const AddDriveWrapper = styled.div`
.background-style{
    height: 230vh;
    width:100%;
    backdround-size:cover;
    // background-color:${greenColor};

}

.card-adddrive{
    font-size:13px;
    width:70%;
    margin:auto;
    margin-top:20px;
}

.card-header-adddrive{
    background-color:${greenColor};
    color:white;
}

.table-adddrive{
    margin-top:10px;
    font-size:13px;
}

.table-adddrive tbody tr th{
    color:rgb(100,100,100);
    width:15%;
}

// .table-adddrive tbody tr td{
//     width:10%;
// }

.table-adddrive tbody tr th,td{
    margin:0px;
    padding:7px;
}

.table-adddrive tbody tr td{
    color:${fontBlackColor};
    font-weight:bold;
}

.edit-input-style{
    width:40%;
    height:25px;
}

.edit-input-style:focus{
    box-shadow: 0 0 0 2px rgba(1,162,129,0.2);
}

.eligi-table {
    width:65%;
}

#input-xshort{
    width:11%;
}

#input-location{
    margin-bottom:5px;
    width:20%;
}

.bttn{
    background-color:${whiteColor};
    border:none;
    color:${fontBlackColor};
    margin-right:30px;
}

.bttn:active{
    background-color:${greenColor};
    // border:none;
    color:${whiteColor};
    // margin-right:30px;
}

.add-other-style{
    font-size:11px;
    color:${greenColor}; 
    width:9%;
}

.add-other-style:hover{
    background-color:${greenColor};
    color:${whiteColor};
    cursor: pointer
}

`;