import React from 'react';
import styled from "styled-components";

 export default function NavBar() {
    return(
        <MainContainer>
        
            <LeftContainer>
                <LogoImage src={require("../../Asset/images/logo.png")} alt="logo"/>
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
    const MainContainer=styled.div``;
    const LeftContainer=styled.div``;
    const LogoImage=styled.img``;
    const MenuContainer=styled.div``;
    const ListItemsLink=styled.div``;
    const MiddleContainer=styled.div``;
    const Item=styled.div``;
    const ItemLetter=styled.div``;
    const Name=styled.div``;
    const BottomContainer=styled.div``;
    

    