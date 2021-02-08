import {
  FlexBox,
  FlexBox1,
  FlexBox2,
  Button1,
  Button2,
  Button3,
  Button4,
  Link1,
} from "../styled-components/PageFavart.jsx";

import SideBar from "./Sidebar";
import Footer from "./Footer";

export default function PageFavart() {
  return (
    <>
      <FlexBox>
        <FlexBox1>
          <SideBar />
        </FlexBox1>
        <FlexBox2>
          <Link1 to="/DisplayClient">
            <Button1>Accéder à la base de données client</Button1>
          </Link1>
          <Link1 to="/addressources">
            <Button2>Accéder aux ressources Favart</Button2>
          </Link1>
          <Link1 to="/addressourcesext">
            <Button3>Accéder aux ressources externes</Button3>
          </Link1>
          <Link1>
            <Button4>Administrer le site</Button4>
          </Link1>
        </FlexBox2>
      </FlexBox>
      <Footer />
    </>
  );
}
