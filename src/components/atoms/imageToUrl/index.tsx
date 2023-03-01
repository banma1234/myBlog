import ImagUrlComponent from "./imageUrl";
import { ImageUrlType } from "./imageUrlType";

const ImageUrl: React.FC<ImageUrlType> = (props: ImageUrlType) => (
  <ImagUrlComponent {...props} />
);

export default ImageUrl;
