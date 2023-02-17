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
                <SectionRight>
                    <RightSideLeft>
                        <Heading>Table 5</Heading>
                        <SubHeading>Leslie k</SubHeading>
                    </RightSideLeft>    
                    <RightSideRight>    
                        <Image src={require("../../Asset/images/Edit.svg").default} alt="image"/>
                    </RightSideRight>
                </SectionRight>
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
                    <User>
                        <Letter>L</Letter>
                        <Name>Lesliya K</Name>
                    </User>
                    <User>
                        <Letter className="two">C</Letter>
                        <Name>Camaron w.</Name>
                    </User>
                    <User>
                        <Letter className="three">J</Letter>
                        <Name>Jacob j.</Name>
                    </User>
                </MiddleContainer>
                <BottomContainer>
                        <YearLetter>c</YearLetter>
                        <AppYear>2022C0syPOS App</AppYear>
                    
                </BottomContainer>
            </LeftContainer>
 
    </MainContainer>

    )
 }
    const MainContainer=styled.div`
    // background-color:#2d2d2d;
    `;
    const Header=styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        background-color:#000;
        width:100%;
        
        
`;
    const LogoContainer=styled.div`
        width:10%`;
    const LogoImage=styled.img`
        display:block;
        width:100%;
        margin:0 auto;
    `;
    const LeftSide=styled.div`
        display: flex;
     // flex-direction: column;
        justify-content: space-between;
    `;
const ButtonTag=styled.form`
        height: 40px;
        width: 280px;
        // top:16px;
        background: #2d2d2d;
        position: relative;
        margin-left:-415px;
        text-align:center;
       
        &::before{
            content: url(${require("../../Asset/images/search.svg").default});
            position: absolute;
            top: 7px;
            left:10px;
            bottom: 0;
            filter:invert(1);
            // left: 10px;
            display:block;
            
        }
`;  
const TextInput=styled.input`
 background: none;
 border: none;
 margin-top:10px;

 
`;
const SectionRight=styled.div`
width:40%;
display:flex;
justify-content:space-between;
align-items:center;
`;
const RightSideLeft=styled.div`
width:10%;
 margin-left:350px;
`;
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
const RightSideRight=styled.div`
width: 60px;
height: 60px;
border-radius: 45px;
background: #fff;
display: flex;
justify-content:center;
align-items: center;
margin-right:50px;

`;
const Image=styled.img`

   width:55%;
    display:block;
`;
      
    const LeftContainer=styled.div`
    margin-top: 0px;
    width: 12%;
    background: #000;
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
    padding-bottom: 15px;
    `;
    const User=styled.div`
    margin-bottom: 15px;
    border-radius: 20px;
    background: #2D2D2D;
    padding: 6px;
    border: 1px solid #a6a6a6;
    display: flex;
    align-items:center;
    // width: fit-content;
     
      
    
   `;
    const Letter=styled.div`
    color:#fff;
    padding: 5px 12px;
    background: #E4CDEE;
    border-radius: 50%;
    font-weight: 500;
    margin-right: 12px;
    &.two {
    background: #C3E9DE;
    };
    &.three {
        background: #FAC2D9;
    };
    `;
    const Name=styled.div`
    font-size: 14px;
    color:#fff;
   
    `;
    const BottomContainer=styled.div``;
    const YearLetter=styled.div`
    font-size: 10px;
    font-weight: 800;
    border-radius: 25px;
    padding: 3px 8px;`;
    const AppYear=styled.div``;

    
 