import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { listLanguage } from "./listLanguage";
import { Dropdown, Menu, MenuProps } from "antd";

interface Props {
  placement?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight"
    | "top"
    | "bottom"
    | undefined;
}

const LanguageButton = (props: Props) => {
  const { placement = "bottomLeft" } = props;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(false);
  const [codeHover, setCodeHover] = useState<string>("");

  const handleClose = (e: boolean) => {
    setAnchorEl(e);
  };

  const changeLocale = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale: locale });
    handleClose(false);
  };

  const items: any = listLanguage.map((item, index) => ({
    label: (
      <div
        onClick={() => changeLocale(item.code.toLowerCase())}
        className="flex items-center"
        onMouseEnter={() => setCodeHover(item.code)}
        onMouseLeave={() => setCodeHover("")}
      >
        <ReactCountryFlag
          countryCode={item?.flag}
          svg
          style={{
            width: "22px",
            height: "17px",
          }}
          className={`mr-4 text-[22px] border-[${codeHover === item.code ? "1px" : "0px"}] border-[#c2c2c2]`}
        />
        <p className="p-2 font-[500]">{item?.name}</p>
      </div>
    ),
    key: "0",
    style: {
      backgroundColor: codeHover === item.code ? "#d82c2c" : "",
    },
  }));

  if (true)
    return (
      <div>
        <Dropdown
          menu={{ items }}
          onOpenChange={handleClose}
          trigger={["hover"]}
          placement={placement}
        >
          
        </Dropdown>
      </div>
    );
  return null;
};

export default LanguageButton;
