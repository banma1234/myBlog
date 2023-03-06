import CardComponent from "./card";
import { CardType } from "./cardType";

const Card: React.FC<CardType> = props => <CardComponent {...props} />;

export default Card;
