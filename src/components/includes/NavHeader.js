import React from 'react'
import styled from "styled-components";


export default function NavHeader() {
  return (
    <HeaderContainer>
        <LeftSide>
            <ButtonTag>Search</ButtonTag>
        </LeftSide>
        <RightSide>
            <Heading>Table 5</Heading>
            <SubHeading>Leslie k</SubHeading>
            
            <Image src={require("../../Asset/images/Edit.svg").default} alt="image"/>
        </RightSide>

    </HeaderContainer>
    
  )
}

const HeaderContainer=styled.div`
display:flex;

justify-content: space-between;

width:18%;
`;
const LeftSide=styled.div`
display: flex;
// flex-direction: column;
justify-content: space-between;
// height: 750px;`;
const ButtonTag=styled.div`



`;

    
const RightSide=styled.div``;
const Heading=styled.div``;
const SubHeading=styled.div``;
const Image=styled.img`
margin-right:40%
margin:0 
`;



