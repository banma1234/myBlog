import { StyledCard, ImageWrapper, Post, TitleBox, InfoBox } from "./cardStyle";
import { CardType } from "./cardType";
import Image from "next/legacy/image";
import noneImg from "public/default_thumbnail.png";

const CardComponent: React.FC<CardType> = (props: CardType) => {
  let imgUrl = props.src ? props.src : noneImg;
  return (
    <StyledCard {...props} color={props.color} type={props.type}>
      <ImageWrapper>
        <Image src={imgUrl} alt="card Img" width={290} height={200} />
      </ImageWrapper>
      <Post>
        <TitleBox>{props.children}</TitleBox>
        <InfoBox>{props.info}</InfoBox>
      </Post>
    </StyledCard>
  );
};

export default CardComponent;
