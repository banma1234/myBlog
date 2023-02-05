import { StyledCard, ImageWrapper, Post, TitleBox, InfoBox } from "./cardStyle";
import { CardType } from "./cardType";
import Image from "next/legacy/image";
import imgUrl from "public/testImg.jpg";

const CardComponent: React.FC<CardType> = (props: CardType) => {
  return (
    <StyledCard {...props} color={props.color} type={props.type}>
      <ImageWrapper>
        <Image src={imgUrl} alt="card Img" />
      </ImageWrapper>
      <Post>
        <TitleBox>{props.children}</TitleBox>
        <InfoBox>test</InfoBox>
      </Post>
    </StyledCard>
  );
};

export default CardComponent;
