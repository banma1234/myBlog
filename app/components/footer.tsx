import Image from "next/image";
import Link from "next/link";
import imgUrl from "public/testImg.jpg";
import { useIcons } from "util/hooks";
import "../styles/layoutStyles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <Image src={imgUrl} alt="profile img" />
        <ul>
          <h1>Choco Ham</h1>
          <li>{useIcons("mail", "16")} &nbsp; banma1234@gmail.co</li>
          <li>
            <Link href="https://github.com/banma1234" legacyBehavior>
              {useIcons("github", "16")} &nbsp; github.com/banma1234
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
