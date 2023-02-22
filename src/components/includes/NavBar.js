import React, { useState } from "react";
import styled from "styled-components";

export default function NavBar() {
  const [fish, setFish] = useState(0);
  const [chicken, setChicken] = useState(0);
  const [filler, setFiller] = useState(0);
  const [beef, setBeef] = useState(0);
  const [rbeef, setBroast] = useState(0);
  const [bufallo, setBufallo] = useState(0);
  const [lobstar, setLobstar] = useState(0);
  const [redc, setRedc] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  return (
    <MainContainer>
      <Header>
        <LogoContainer>
          <LogoImage src={require("../../Asset/images/logo.png")} alt="logo" />
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
            <Image
              src={require("../../Asset/images/Edit.svg").default}
              alt="image"
            />
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

          <ListItems className="two">
            <Span>2</Span>
            <Item>Red caviar x3 </Item>
            <Number>$36.50</Number>
          </ListItems>

          <ListItems className="three">
            <Span>3</Span>
            <Item>German sausage x1 </Item>
            <Number>$25.50</Number>
          </ListItems>

          <ListItems className="four">
            <Span>4</Span>
            <Item>Irish cream coffeex1 </Item>
            <Number>$4.50</Number>
          </ListItems>
        </MenuContainer>

        <TotalContainer>
          <TopSection>
            <SubTotal>
              <SubTitle>Subtotal</SubTitle>
              <SubPrice>
                {(beef +
                  rbeef +
                  fish +
                  chicken +
                  filler +
                  lobstar +
                  redc +
                  bufallo) *
                  7.5}
              </SubPrice>
            </SubTotal>
            <Tax>
              <TaxTitle>Tax 10%</TaxTitle>
              <TaxPrice>
                $
                {(beef +
                  rbeef +
                  fish +
                  chicken +
                  filler +
                  lobstar +
                  redc +
                  bufallo) *
                  7.5 *
                  0.1}
              </TaxPrice>
            </Tax>
            <Line />

            <Total>
              <TotalTitle>Total</TotalTitle>
              <TotalPrice>
                $
                {(beef +
                  rbeef +
                  fish +
                  chicken +
                  filler +
                  lobstar +
                  redc +
                  bufallo) *
                  7.5 +
                  (beef +
                    rbeef +
                    fish +
                    chicken +
                    filler +
                    lobstar +
                    redc +
                    bufallo) *
                    7.5 *
                    0.1}
              </TotalPrice>
            </Total>
            <BottomItem>
            <MainTitle>PaymentMethod</MainTitle>
            <PaymentOption>
              <Methods>
                <Method>
                  <Cash
                    src={require("../../Asset/images/Dollar.svg").default}
                  />
                  <Text className="one">Cash</Text>
                </Method>
                <Method>
                  <DebitCard
                    src={require("../../Asset/images/Credit.svg").default}
                  />
                  <Text className="two">DebitCard</Text>
                </Method>
                <Method>
                  <Cash src={require("../../Asset/images/Scan.svg").default} />
                  <Text className="three">E-wallet</Text>
                </Method>
              </Methods>
            </PaymentOption>
            <Button>Place Order</Button>
              {/* <TextInputlast type="text" placeholder="Place Order" /> */}
          </BottomItem>
          </TopSection>

       
        </TotalContainer>
      </RightContainer>

      <MiddleSection>
        <Itemssection>
          <TopContainerone>
            <ImageSection>
              <Image1
                src={require("../../Asset/images/Break-Fast.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>Break fast</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainerone>
          <TopContainertwo>
            <ImageSection>
              <Image
                src={require("../../Asset/images/soup.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>soups</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainertwo>
          <TopContainerthree>
            <ImageSection>
              <Image
                src={require("../../Asset/images/pasta.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>pasta</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainerthree>
          <TopContainerfour>
            <ImageSection>
              <Image
                src={require("../../Asset/images/Sushi.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>sushi</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainerfour>
        </Itemssection>

        <Itemssection>
          <TopContainerfive>
            <ImageSection>
              <Image
                src={require("../../Asset/images/Main-Course.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>Main course</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainerfive>
          <TopContainersix>
            <ImageSection>
              <Image
                src={require("../../Asset/images/Desserts.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>Desserts</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainersix>
          <TopContainersvn>
            <ImageSection>
              <Image
                src={require("../../Asset/images/Drinks.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>Drinks</Title>
              <Number>13 items</Number>
            </Content>
          </TopContainersvn>
          <TopContaineregt>
            <ImageSection>
              <Image
                src={require("../../Asset/images/Alcohol.svg").default}
                alt="image"
              />
            </ImageSection>
            <Content>
              <Title>Alcohol</Title>
              <Number>13 items</Number>
            </Content>
          </TopContaineregt>
        </Itemssection>
      </MiddleSection>

      <SectionBottom>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags> Fish and chips</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setFish(fish - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{fish}</SubItem>
              <Plus
                onClick={() => setFish(fish + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <SubTitle>Kitchen</SubTitle>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Roast Chicken</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setChicken(chicken - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{chicken}</SubItem>
              <Plus
                onClick={() => setChicken(chicken + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Fillet Steak</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setFiller(filler - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{filler}</SubItem>
              <Plus
                onClick={() => setFiller(filler + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Beefsteak</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setBeef(beef - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{beef}</SubItem>
              <Plus
                onClick={() => setBeef(beef + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Roast Beef</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setBroast(rbeef - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{rbeef}</SubItem>s
              <Plus
                onClick={() => setBroast(rbeef + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Bufallo Wings</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setBufallo(bufallo - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{bufallo}</SubItem>
              <Plus
                onClick={() => setBufallo(bufallo + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Lobster</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setLobstar(lobstar - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{lobstar}</SubItem>
              <Plus
                onClick={() => setLobstar(lobstar + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <ProcessingOrders>
          <MainSet>
            <H1>Orders</H1>
            <Arrow>
              <ArrowIcon
                src={require("../../Asset/images/Arrow.svg").default}
              />
            </Arrow>
            <H1>Kitchen</H1>
          </MainSet>
          <ItemPrice>
            <HeadingTags>Red Cavier</HeadingTags>
            <DollerRate>$7.50</DollerRate>
          </ItemPrice>
          <MainButton>
            <IconImage>
              <Minus
                onClick={() => setRedc(redc - 1)}
                src={require("../../Asset/images/minus.svg").default}
              />
              <SubItem>{redc}</SubItem>
              <Plus
                onClick={() => setRedc(redc + 1)}
                src={require("../../Asset/images/plus.svg").default}
              />
            </IconImage>
          </MainButton>
        </ProcessingOrders>
        <Footer>
        <Oder>
          <LeftOrderdering1>
            <Code>T4</Code>
          </LeftOrderdering1>
          <Rightoder>
            <Nameing>Lesliya</Nameing>
            <All>
              <ContentItem>6 Items</ContentItem>
              <RightArrow>
                <Arros src={require("../../Asset/images/Arrow.svg").default} />
              </RightArrow>
              <SettingContent>Kitchen</SettingContent>
            </All>
          </Rightoder>
        </Oder>
        <Oder>
          <LeftOrderdering1>
            <Code>T4</Code>
          </LeftOrderdering1>
          <Rightoder>
            <Nameing>Lesliya</Nameing>
            <All>
              <ContentItem>6 Items</ContentItem>
              <RightArrow>
                <Arros src={require("../../Asset/images/Arrow.svg").default} />
              </RightArrow>
              <SettingContent>Kitchen</SettingContent>
            </All>
          </Rightoder>
        </Oder>
        <Oder>
          <LeftOrderdering1>
            <Code>T4</Code>
          </LeftOrderdering1>
          <Rightoder>
            <Nameing>Lesliya</Nameing>
            <All>
              <ContentItem>6 Items</ContentItem>
              <RightArrow>
                <Arros src={require("../../Asset/images/Arrow.svg").default} />
              </RightArrow>
              <SettingContent>Kitchen</SettingContent>
            </All>
          </Rightoder>
        </Oder>
      </Footer>
      </SectionBottom>
     
    </MainContainer>
  );
}
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #000;
  /* height: 105vh; */
  /* background-color:black; */
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #000;
  width: 100%;
`;
const LogoContainer = styled.div`
  width: 10%;
`;
const LogoImage = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
`;
const LeftSide = styled.div`
  display: flex;
  width: 44%;
  justify-content: space-between;
`;
const ButtonTag = styled.form`
  height: 40px;
  width: 300px;
  left: 30px;
  background: #2d2d2d;
  position: relative;

  text-align: center;

  &::before {
    content: url(${require("../../Asset/images/search.svg").default});
    position: absolute;
    top: 7px;
    left: 10px;
    bottom: 0;
    filter: invert(1);
    display: block;
  }
`;
const TextInput = styled.input`
  margin-top: 11px;
  background: none;
  border: none;
  font-weight: bold;
  ::placeholder {
    color: #fff;
  }
`;
const TextInputlast = styled.input`
  background: none;
  border: none;
  font-weight: bold;
  ::placeholder {
    color: #000;
  }
`;
const SectionRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightSideLeft = styled.div`
  width: 20%;
  margin-left: 280px;
`;
const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  color: #fff;
`;
const SubHeading = styled.h2`
  color: grey;
  margin-top: -11px;
  font-size: 12px;
`;
const RightSideRight = styled.div`
  width: 33px;
  height: 34px;
  border-radius: 45px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 44px;
`;
const Image = styled.img`
  width: 55%;
  display: block;
`;

const LeftContainer = styled.div`
  margin-top: 0px;
  width: 12%;
  background: #000;
  /* height: 900px; */
  //  height:100vh;
`;

const ListContainer = styled.div`
  color: #a6a6a6;
  position: relative;

  ::before {
    position: absolute;
    top: -6px;
    left: 6px;
    background: #2d2d2d;
  }
`;
const ListItemsLink = styled.div`
  color: #a6a6a6;
  font-size: 15px;

  margin-left: 20px;
  padding: 15px;
`;
const MiddleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 245px;
`;
const User = styled.div`
  width: 82%;
  margin-bottom: 15px;
  border-radius: 20px;
  background: #2d2d2d;
  padding: 6px;
  border: 1px solid #a6a6a6;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Letter = styled.div`
  color: #fff;
  padding: 5px 12px;
  background: #e4cdee;
  border-radius: 50%;
  font-weight: 500;
  margin-right: 12px;
  &.two {
    background: #c3e9de;
  }
  &.three {
    background: #fac2d9;
  }
`;
const Name = styled.div`
  font-size: 14px;
  color: #fff;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  padding-left: 10px;
`;
const YearLetter = styled.div`
  font-size: 10px;
  font-weight: 800px;
  background: #c6b1e1;
  color: #000;
  border-radius: 25px;
  padding: 3px 8px;
`;

const AppYear = styled.div`
  color: #fff;
  // font-size:10px;
`;
const RightContainer = styled.div`
  background: #000;
  position: absolute;
  top: 80px;
  right: 0px;
  width: 27%;
  /* height: 920px; */
`;
const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // width:40%;
  // height:30%;
  width: 90%;
  margin: 26px 44px;
`;
const ListItems = styled.div`
  width: 67%;
  height: 40%;
  background: #2d2d2d;
  margin: 6px auto;
  border-radius: 10px;
  padding: 0 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  padding: 6px 12px;
  border-radius: 41px;
  color: #000;
  background-color: #fff;
  border-radius: 50px;
  padding: 4px 10px;
`;
const Item = styled.h4`
  font-size: 15px;
  color: #fff;
`;

const TotalContainer = styled.div`
  background-color: #000;
  position: relative;
`;

const TopSection = styled.div`
  /*
    border-radius: 8px;
    margin-top: -9px;
    position: absolute;
    right: 26px;
    height: 100%; */
  border-radius: 7px;
  background-color:#2d2d2d;
  width: 68%;
  margin-left: 82px;
  /* height: 57vh; */
`;

const SubTotal = styled.div`
  padding-top: 12px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 15px;
`;
const SubTitle = styled.div`
  color: #a6a6a6;
  font-weight: 500;
  font-size: 17px;
`;
const SubPrice = styled.div`
  margin-right: 27px;
  color: #a6a6a6;
`;
const Tax = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 22px;
  font-size: 19px;
`;
const TaxTitle = styled.div`
  color: #a6a6a6;
`;
const TaxPrice = styled.div`
  color: #a6a6a6;
  margin-right: 27px;
`;
const Line = styled.hr`
  border-top: 1px dashed #8e8e8e;
`;
const Total = styled.div`
  margin-left: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
const TotalTitle = styled.div`
  font-weight: normal;
  font-size: 22px;
  color: #fff;
`;
const TotalPrice = styled.div`
  margin-right: 27px;
  font-weight: 700;
  color: #fff;
`;
const BottomItem = styled.div`
  padding-top:150px;
`;
const MainTitle = styled.div`
  font-size: 15px;
  color: #a6a6a6;
  margin-bottom: 10px;
`;
const PaymentOption = styled.div`
  width: 100%;
`;
const Text = styled.div`
  color: white;
  font-size: 12px;
  text-align: center;
`;
const Methods = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Method = styled.div`
  /* margin-left: 20px; */
`;
const Cash = styled.img`
  padding: 2px 10px;
  width: 70%;
  font-size: 13px;
  font-size: 13px;
  border: 1px solid #000;
  border-radius: 5px;
  filter: invert(1);
  cursor: pointer;
  &:hover {
    filter: invert(0);
    background-color: #fff;
    color: white;
  }
`;
const DebitCard = styled.img`
  margin-right: 10px;
  padding: 2.5px 10px;
  width: 50%;
  border: 1px solid #000;
  border-radius: 5px;
  filter: invert(1);

  cursor: pointer;
  &:hover {
    filter: invert(0);
    background-color: #fff;
    color: white;
  }
`;
const Wallet = styled.img`
  height: 30px;
  margin-top: 40px;
  font-size: 13px;
  border: 1px solid #000;
  border-radius: 5px;
  filter: invert(1);
  cursor: pointer;
  &:hover {
    filter: invert(0);
    background-color: #fff;
    color: white;
  }
`;
const Button = styled.div`
  margin-top: 20px;
  text-align: center;
  background: #fff;
  display: block;
  width: 90%;
  padding: 10px 18px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
`;
const MiddleSection = styled.div`
  background: #000;
  position: absolute;
  /* height: 120vh; */
  top: 100px;
  left: 182px;
  width: 65%;
  border-bottom: 1px dotted grey;
  justify-content: space-between;
`;
const Itemssection = styled.div`
  /* margin-top: 20px; */
  /* margin-left: 70px; */
  display: flex;
`;
const TopContainerone = styled.div`
  margin: 10px;
  width: 40%;
  height: 20%;
  border-radius: 6px;
  background-color: #cfdedb;
`;
const TopContainertwo = styled.div`
  margin: 10px;
  background-color: #e5cdef;
  width: 40%;
  height: 20%;
  border-radius: 6px;
`;
const TopContainerfour = styled.div`
  margin: 10px;
  background-color: #cacaee;
  width: 40%;
  height: 20%;
  border-radius: 6px;
`;
const TopContainerfive = styled.div`
  margin: 10px;
  background-color: red;
  width: 40%;
  height: 20%;
  background-color: #f9c2d9;
  border-radius: 6px;
`;
const TopContainersix = styled.div`
  margin: 10px;
  background-color: red;
  width: 40%;
  height: 20%;
  background-color: #e6dade;
  border-radius: 6px;
`;
const TopContainersvn = styled.div`
  margin: 10px;
  background-color: red;
  width: 40%;
  height: 20%;
  background-color: #f0c8d0;
  border-radius: 6px;
`;
const TopContaineregt = styled.div`
  margin: 10px;
  background-color: red;
  width: 40%;
  height: 20%;
  background-color: #c3e8de;
  border-radius: 6px;
`;
const TopContainerthree = styled.div`
  margin: 10px;
  background-color: red;
  width: 40%;
  height: 20%;
  border-radius: 6px;
  background-color: #c1dbe8;
`;
const ImageSection = styled.div`
  width: 25%;
  margin: 21px;
`;
const Image1 = styled.img`
  // dispy:block;
  // width:100%;
`;
const Content = styled.div`
  margin: 20px;
`;
const Title = styled.small`
  font-size: 19px;
  font-weight: bold;
`;
const Number = styled.p`
  color: gray;
  margin-bottom: 20px;
`;
const SectionBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 63%;
  justify-content: space-between;
  position: absolute;
  top: 456px;
  left: 197px;
`;
const ProcessingOrders = styled.div`
  padding: 10px;
  width:20%;
  margin-top: 10px;
  border: 30px;
  background-color: #2d2d2d;
  color: #fff;
`;
const MainSet = styled.div`
  display: flex;
  align-items: center;
  /* color: #fff; */
  width: 18%;
`;
const H1 = styled.h1`
  font-size: 14px;
`;
const Arrow = styled.div``;
const ArrowIcon = styled.img``;
const ItemPrice = styled.div``;
const HeadingTags = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const DollerRate = styled.div`
  font-size: 13px;
`;
const MainButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const IconImage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82%;
`;
const Minus = styled.img`
  height: 73%;
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 30px;
  padding: 5px;
`;
const SubItem = styled.div``;
const Plus = styled.img`
  height: 73%;
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 30px;
  padding: 5px;
  cursor: pointer;
`;
const Footer = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: -117px;
  left: 0;
  border-top: 1px solid white;  
`;
const Orderdering1 = styled.div`
`;
const Oder = styled.div`
  display: flex;
  width: 30%;
  height: 100px;
  justify-content: center;
  align-items: center;
  &:nth-child(2){
    border-right: 1px solid white;
    border-left: 1px solid white;
  }
`;
const Rightoder = styled.div``;
const Code = styled.div`
  background-color: white;
  padding: 5px;
`;
const LeftOrderdering1 = styled.div`
  margin-right: 20px;
`;
const All = styled.div`
  display: flex;
  color: white;
`;
const Nameing = styled.h4`
  color: white;
`;
const ContentItem = styled.div``;
const RightArrow = styled.div``;
const Arros = styled.img``;
const SettingContent = styled.div``;
const LastButton = styled.div``;
