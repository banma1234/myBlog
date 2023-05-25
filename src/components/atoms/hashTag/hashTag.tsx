import { HashTagBox, HashTagContainer } from "./hashTagStyle";
import { HashTagType } from "./hashTagType";

const HashTagComponent: React.FC<HashTagType> = (props: HashTagType) => {
  return (
    <HashTagContainer>
      {props.keywords &&
        props.keywords.split(" ").map((item: string) => {
          item = "#" + item;
          return <HashTagBox>{item}</HashTagBox>;
        })}
    </HashTagContainer>
  );
};

export default HashTagComponent;
