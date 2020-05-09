import styled from "styled-components";
import { greenColor, whiteColor, fontBlackColor } from "../../../../constants/constants";

export const FilterWrapper = styled.div`
.filter-row{
    margin:0;
    padding:0;
    font-size:13px;
}

.filter-col{
    border-right:1px solid;
    border-right-color:rgb(213,213,213);
}

.card-footer-button{
    background-color:${greenColor};
    margin:3px;
}

.input-group{
    width:90px;
    height:50px;
}

.input-addon{
    height:31px;
}

.bttn{
    background-color:${whiteColor};
    border:none;
    color:${fontBlackColor};
    margin-right:30px;
}
`;