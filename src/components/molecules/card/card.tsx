import { StyledCard, ImageWrapper, Post, TitleBox, InfoBox } from "./cardStyle";
import { CardType } from "./cardType";
import Image from "next/image";
import noneImg from "public/default_thumbnail.svg";

const CardComponent: React.FC<CardType> = (props: CardType) => {
  let imgUrl = props.src ? props.src : noneImg;
  return (
    <StyledCard {...props} type={props.type}>
      <ImageWrapper>
        <Image
          src={imgUrl}
          alt="card Img"
          width={380}
          height={250}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </ImageWrapper>
      <Post>
        <TitleBox>{props.children}</TitleBox>
        <InfoBox>{props.info}</InfoBox>
      </Post>
    </StyledCard>
  );
};

export default CardComponent;
