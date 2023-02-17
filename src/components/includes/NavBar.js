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
                <ListContainer>
                    <ListItemsLink>Reservation</ListItemsLink>
                    <ListItemsLink>Table Services</ListItemsLink>
                    <ListItemsLink>Menu</ListItemsLink>
                    <ListItemsLink>Delivery</ListItemsLink>
                    <ListItemsLink>Accounting</ListItemsLink>
                </ListContainer>
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
            <RightContainer>
                <MenuContainer>
                        
                            <ListItems>
                                <Span>1</Span>
                                <Item>Roast chicken x2 </Item>
                                <Number>$25.50</Number>

                            </ListItems>
                        
                        
                            <ListItems>
                                <Span>2</Span>
                                <Item>Red caviar x3 </Item>
                                <Number>$36.50</Number>

                            </ListItems>
                       
                        
                            <ListItems>
                                <Span>4</Span>
                                <Item>German sausage x1 </Item>
                                <Number>$25.50</Number>

                            </ListItems>
                       
                            <ListItems>
                                <Span>4</Span>
                                <Item>Irish cream coffeex1 </Item>
                                <Number>$4.50</Number>

                            </ListItems>
                        
                </MenuContainer>

            </RightContainer>

 
    </MainContainer>

    )
 }
    const MainContainer=styled.div`
    position:relative;
    
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
    
        justify-content: space-between;
    `;
    const ButtonTag=styled.form`
        height: 40px;
        width: 280px;
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
     height:100vh;
    `;

    const ListContainer=styled.div`

    color: #a6a6a6;
    position: relative;
    
  ::before {

    position: absolute;
    top: -6px;
    left: 6px;
    background: #2d2d2d;
    
    
}
    `;  
    const ListItemsLink=styled.div`
    color: #a6a6a6;
    font-size: 15px;
    
    margin-left: 20px;
    padding: 15px;
    
  `;
    const MiddleContainer=styled.div`
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-top: 200px;
    `;
    const User=styled.div`
    margin-bottom: 15px;
    border-radius: 20px;
    background: #2D2D2D;
    padding: 6px;
    border: 1px solid #a6a6a6;
    display:flex;
    align-items:center;
    margin-left: 20px;
    
    
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
    const BottomContainer=styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:20px;
    padding-left:10px;
    
    `;
    const YearLetter=styled.div`
    font-size: 10px;
    font-weight: 800px;
    background: #c6b1e1;
    color: #000;
    border-radius: 25px;
    padding: 3px 8px;
   `;
    
    const AppYear=styled.div`
    color:#fff;
    // font-size:10px;
  
    `;
const RightContainer=styled.div`
     background: #2D2D2D;
     position:absolute;
     top:100px;
     right:0;
     height:100vh;
     width:21%;
     
    `;
const MenuContainer=styled.div`
    display:flex;
    justify-content:space-between;
    `;
const ListItems=styled.div`
    flex-direction: column;
     `;
const Span=styled.span``;
const Item=styled.div``;
const Number=styled.div``;
    
 