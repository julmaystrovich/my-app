import React from "react";
import Box from "../../components/box";
import Heading from "../../components/heading";
import StyledFooter from "./styled-footer";
import logo from "../../imgs/ak_logo.svg";
import Text from "../../components/text";
import Link from "../../components/link";
import phone from "../../imgs/phone.svg";
import tg from "../../imgs/tg.svg";
import vk from "../../imgs/vk.svg";
import mail from "../../imgs/mail.svg";
import { Map, Placemark } from "react-yandex-maps";

const Footer = ({ ...rest }) => {
  const [zoom, setZoom] = React.useState(16);

  const mapState = React.useMemo(
    () => ({ center: [56.327231, 43.994623], controls: ['zoomControl', 'fullscreenControl'], zoom }),
    [zoom]
  );

  return (
    <StyledFooter>
      <Box>
        <div>
          <img src={logo} alt="logo" />
          <Text className="copyright">© 2022 ANNA KOVALEVA</Text>
        </div>
        <div>
          <Heading level={4}>КОНТАКТЫ</Heading>
          <Link href="tel:+79050122888"><img src={phone} alt="phone" />+7 (905) 012-28-88</Link>
          <Link href="mailto:anka1992@inbox.ru"><img src={mail} alt="e-mail" />anka1992@inbox.ru</Link>
        </div>
        <div>
          <Heading level={4}>СОЦИАЛЬНЫЕ СЕТИ</Heading>
          <Link href="https://vk.com/privetannet888"><img src={vk} alt="vk.com" />@privetannet888</Link>
          <Link href="https://t.me/privet_annet888"><img src={tg} alt="telegram" />@privet_annet888</Link>
        </div>
        <div>
          <Map state={mapState} modules={['control.ZoomControl', 'control.FullscreenControl']}><Placemark defaultGeometry={[56.327231, 43.994623]} /></Map>
          <Text fontSize="16px">г. Нижний Новгород, ул. Почаинская, д. 17М</Text>
        </div>
      </Box>
    </StyledFooter>
  );
};

export default Footer;