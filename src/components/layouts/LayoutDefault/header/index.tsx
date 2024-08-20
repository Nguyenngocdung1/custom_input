import imageBanner from "@/images/homeBG.png";
import imageBannerMobile from "@/images/homeBG.png";
import IconPhoneRT from "@/images/icons/phone_rt.svg";
import { Col, Row } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Menu from "../menu";
import { useRouter } from "next/router";
type Props = {};
export const listLanguage = [
  {
    id: 1,
    flag: "VN",
    name: "Việt Nam",
    code: "VN",
    description: null,
  },
  {
    id: 2,
    flag: "GB",
    name: "English",
    code: "EN",
    description: null,
  },
];

const Header = (props: Props) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="wrapper-logo xl:max-h-full lg:max-h-full md:max-h-[500px] sm:max-h-[500px] overflow-hidden max-[320px]:h-[500px]">
      
    </div>
  );
};

export default Header;
