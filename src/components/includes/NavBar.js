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
        height: 30px;
        width: 280px;
        background: #888;
        position: relative;
       
        &::before{
            content: url(${require("../../Asset/images/search.svg").default});
            position: absolute;
            top: 0;
            bottom: 0;
            left: 10px;
            display:block;
        }
`;  
const TextInput=styled.input`
 background: none;
 border: none;
 margin-left: 30px;
 
 
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
    `;
    const MenuContainer=styled.div``;
    const ListItemsLink=styled.div``;
    const MiddleContainer=styled.div``;
    const Item=styled.div``;
    const ItemLetter=styled.div``;
    const Name=styled.div``;
    const BottomContainer=styled.div``;
    
