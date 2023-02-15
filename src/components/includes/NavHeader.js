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



            
            

        </RightSide>

    </HeaderContainer>
    
  )
}
const HeaderContainer=styled.div``;
const LeftSide=styled.div``;
const ButtonTag=styled.button``;
    const RightSide=styled.div``;
    const Heading=styled.img``;
    const SubHeading=styled.div``;
    
