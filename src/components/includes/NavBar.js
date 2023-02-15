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
    `;
    const Header=styled.div`
        display:flex;
        justify-content: space-between;
`;
    const LogoContainer=styled.div``;
    const LogoImage=styled.img``;
    const LeftSide=styled.div`
display: flex;
// flex-direction: column;
justify-content: space-between;
// height: 750px;`;
const ButtonTag=styled.form`
        height: 30px;
        width: 300px;
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
`;
const RightSideLeft=styled.div``;
const Heading=styled.div``;
const SubHeading=styled.div``;
const RightSideRight=styled.div``;
const Image=styled.img`
margin-right:40%
margin:0 
`;
      
    const LeftContainer=styled.div``;
    const MenuContainer=styled.div``;
    const ListItemsLink=styled.div``;
    const MiddleContainer=styled.div``;
    const Item=styled.div``;
    const ItemLetter=styled.div``;
    const Name=styled.div``;
    const BottomContainer=styled.div``;
    

    