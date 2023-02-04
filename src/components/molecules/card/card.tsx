import { StyledCard, ImageWrapper, Post } from "./cardStyle";
import { CardType } from "./cardType";
import Image from "next/legacy/image";
import imgUrl from "public/testImg.jpg";

const CardComponent: React.FC<CardType> = (props: CardType) => {
  return (
    <StyledCard {...props} color={props.color} type={props.type}>
      <ImageWrapper>
        <Image src={imgUrl} alt="card Img" priority />
      </ImageWrapper>
      <Post>{props.children}</Post>
    </StyledCard>
  );
};

export default CardComponent;
