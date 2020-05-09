import styled from "styled-components"
import { greenColor, whiteColor, fontBlackColor } from "../../../constants/constants";

export const ProfileWrapper=styled.div`

.card-profile{
    font-size:13px;
    width:70%;
    margin:auto;
    margin-top:20px;
}

.card-profile-header{
    background-color:${greenColor};
    color:white;
}

.table-profile{
    margin-top:10px;
    font-size:13px;
}

.table-profile tbody tr th{
    color:rgb(100,100,100);
    width:35%;
}

.table-profile tbody tr th,td{
    margin:0px;
    padding:4px;

}

.table-profile tbody tr td{
    color:${fontBlackColor};
    font-weight:bold;
}

#rawHeader td{
    background-color:${whiteColor};
    color:${greenColor};
}

#eduTable tbody tr th{
    width:15%;
}
#eduTable{
    text-align:center;
}
 
//----------edit profilr-----------

.edit-input-style{
    width:50%;
    height:25px;
}
#input-long{
    width:100%;
    margin-bottom:7px;

    // height:25px;
}

.checkBox-btn{
    background-color:${whiteColor};
    color:${fontBlackColor};
    margin-right:10px;
}

// .checkBox-btn:hover{
//     background-color:${greenColor};
//     color:${whiteColor};
// }

.bttn-save{
    background-color:${greenColor};
    float:right;
}
`;