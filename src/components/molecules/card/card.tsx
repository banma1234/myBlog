import StyledCard from "./cardStyle";
import { CardType } from "./cardType";

const CardComponent: React.FC<CardType> = (props: CardType) => {
  return (
    <StyledCard {...props} color={props.color} type={props.type}>
      {props.children}
    </StyledCard>
  );
};

export default CardComponent;
