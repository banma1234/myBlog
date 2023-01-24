import StyledCard from "./cardStyle";
import { CardType } from "./cardType";
import Image from "next/image";
import imgUrl from 'public/testImg.jpg';

const CardComponent: React.FC<CardType> = (props: CardType) => {
  return (
    <StyledCard {...props} color={props.color} type={props.type}>
      <Image src={imgUrl} alt='card Img' placeholder="blur"
      width='300' height='300'/>
      {props.children}
    </StyledCard>
  );
};

export default CardComponent;
