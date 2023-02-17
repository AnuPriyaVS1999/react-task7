import React from 'react';
import styled from "styled-components";

 export default function NavBar() {
    return(
        <MainContainer>

            <Header>
                <LogoContainer>
                    <LogoImage src={require("../../Asset/images/logo.png")} alt="logo"/>
                </LogoContainer>
                <LeftSide>
                    <ButtonTag>
                        <TextInput type="text" placeholder="Search" />
                    </ButtonTag>
                </LeftSide>
                <RightSideLeft>
                    <Heading>Table 5</Heading>
                    <SubHeading>Leslie k</SubHeading>
                </RightSideLeft>    
                <RightSideRight>    
                    <Image src={require("../../Asset/images/Edit.svg").default} alt="image"/>
                </RightSideRight>
            </Header>
        
            <LeftContainer>
                <MenuContainer>
                    <ListItemsLink>Reservation</ListItemsLink>
                    <ListItemsLink>Table Services</ListItemsLink>
                    <ListItemsLink>Menu</ListItemsLink>
                    <ListItemsLink>Delivery</ListItemsLink>
                    <ListItemsLink>Accounting</ListItemsLink>
                </MenuContainer>
                <MiddleContainer>
                    <Item>
                        <ItemLetter>L</ItemLetter>
                        <Name>Lesliya K</Name>
                    </Item>
                    <Item>
                        <ItemLetter>C</ItemLetter>
                        <Name>Camaron w.</Name>
                    </Item>
                    <Item>
                        <ItemLetter>J</ItemLetter>
                        <Name>Jacob j.</Name>
                    </Item>
                </MiddleContainer>
                <BottomContainer>
                        <ItemLetter>c</ItemLetter>
                        <Name>2022C0syPOS App</Name>
                    
                </BottomContainer>
            </LeftContainer>
 
    </MainContainer>

    )
 }
    const MainContainer=styled.div`
    background-color:#2D2D2D;
    `;
    const Header=styled.div`
        display:flex;
        justify-content: space-between;
        padding:20px;
        
        
`;
    const LogoContainer=styled.div``;
    const LogoImage=styled.img`
        display:flex;
        width:70%;
        margin:0 auto;
        padding-top:15px;
        display:inline-block;
    `;
    const LeftSide=styled.div`
        display: flex;
     // flex-direction: column;
        justify-content: space-between;
     // height: 750px;`;
const ButtonTag=styled.form`
        height: 33px;
        width: 280px;
        top:16px;
        background: #888;
        position: relative;
        left:-361px;
       
        &::before{
            content: url(${require("../../Asset/images/search.svg").default});
            position: absolute;
            top: 3px;
            bottom: 0;
            left: 10px;
            display:block;
            
        }
`;  
const TextInput=styled.input`
 background: none;
 border: none;
 margin-left: 40px;

 
 
`;
const RightSideLeft=styled.div`
width;10px;`;
const Heading=styled.h1`
  font-size:20px;
  margin-bottom:20px;
  color:#fff;

`;
const SubHeading=styled.h2`
   color:#fff;
   margin-top:-11px;
   font-size:15px
`;
const RightSideRight=styled.div``;
const Image=styled.img`

   width:100%;
    display:flex;
    margin-right: 37px;
`;
      
    const LeftContainer=styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
    align-items: center;
    `;
    const MenuContainer=styled.div`
    width: 100%;
    color: #a6a6a6;
    position: relative;
    cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 6px;
    height: 40px;
    width: 170px;
    border-radius: 8px;
    background: #2d2d2d;
    opacity: 0;
    z-index: -1;
    cursor: pointer;
}
:hover {
  color: #fff;
}
:hover::before {
  opacity: 0.7;
  transition: opacity 0.2s ease-out;
}
    `;  
    const ListItemsLink=styled.div`
    color: #a6a6a6;
    font-size: 15px;
    margin-left: 20px;
    padding: 15px;
    
  `;
    const MiddleContainer=styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;`;
    const Item=styled.div`
    height: 50%;
    margin: auto 0;`;
    const ItemLetter=styled.div`
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 6px;
    border: 1px solid #a6a6a6;
    width: fit-content;
    cursor: pointer;
    &:hover {
    background: #8e8e8e4a;
    padding: 5px 12px;
    border-radius: 50%;
    background: var(--card-2);
    color: #000;
    font-weight: 500;
    margin-right: 12px;`;
    const Name=styled.div`
    font-size: 14px;
    `;
    const BottomContainer=styled.div``;
    
