import styled from "styled-components";

export const Button=styled.button`
color:${(props)=>{return props.btn_type!=="normal"&&props.btn_type!=="dashede"?"white":"black"}};
background-color:${(props)=>{return props.btn_type==="primary"?"blue":"white"}};
border:${(props)=>{return props.btn_type==="dashede"?"dashed":"solid"}};
margin-right:5px;
font-weight:solid;
`