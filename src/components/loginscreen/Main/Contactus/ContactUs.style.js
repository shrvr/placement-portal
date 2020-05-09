import styled from 'styled-components'
import { greenColor } from '../../../constants/constants'

export const ContactusWrapper=styled.div`
.contactus-card {
    box-shadow:  rgba(1, 162, 129, 0.2) 0px 4px 7px 0px;
    font-size:14px;
}
p {
    color:${greenColor};
    margin:10px;
    font-weight:bold;
}
.table-style{
    font-weight:bold;
}
.table-style tbody tr th{
    color:rgb(100,100,100);
}
`