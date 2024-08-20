import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import IconEmail from "@/images/icons/email.svg";
import IconPhone from "@/images/icons/phone.svg";
import { dataFooter, dataHeader } from "@/configs/constant";
import Logo from "@/images/icons/Logo.svg";
import Facebook from "@/images/icons/facebook.svg";
import Xcode from "@/images/icons/xcode.svg";
import Linkedin from "@/images/icons/linkedin.svg";
import { useRouter } from "next/router";
type Props = {};

const Footer = (props: Props) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="bg-footer z-[5]">
      
    </div>
  );
};

export default Footer;
