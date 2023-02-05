import { StyledNavBar } from "./navBarStyle";

const NavBarComponent: React.FC = ({ series }: any) => {
  return <StyledNavBar>hello</StyledNavBar>;
};

export async function getServerSideProps() {
  let DEV_URL = process.env.DEV_URL;
  let myHeaders = new Headers({
    "Content-Type": "text/html; charset=utf-8",
  });
  myHeaders.append("viewType", "VIEW_SERIES");

  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/viewBoard`, {
    method: "GET",
    headers: myHeaders,
  });
  let data = await response.json();
  return {
    props: {
      series: data["message"],
    },
  };
}

export default NavBarComponent;
