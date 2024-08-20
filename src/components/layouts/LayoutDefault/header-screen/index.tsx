import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import imageBannerMobile from "@/images/banner_mobile.png";
import imageBannerMobileOverlay from "@/images/about.png";
import imageBanner from "@/images/about.png";
import Menu from "@/components/layouts/LayoutDefault/menu";
import { useRouter } from "next/router";

type Props = {};

const HeaderScreen = (props: Props) => {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <div className="wrapper-logo relative relative">
      <div
        style={{ zIndex: 1 }}
        className="tab max-[768px]:px-[10px] px-[30px] py-2 bg-red flex absolute bottom-[-1px] left-[10%] justify-center"
      >
        <p className="text-[#898989]">{t("home")}</p>
        <p className="text-[#131620]">{" / "}</p>
        <p className="text-[#131620]">
          {t(
            router?.pathname.includes("services")
              ? "services_only"
              : router?.pathname?.replace("/", ""),
          )}
        </p>
      </div>
      <Image
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "450px",
          overflow: "hidden",
          objectFit: "cover",
        }}
        className="object-cover max-h-[900px] banner-web"
        src={imageBanner}
        alt=""
      />
      <div className="max-[768px]:hidden absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
      <Image
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        className="object-cover max-h-[900px] banner-mobile"
        src={imageBannerMobile}
        alt=""
      />
      <Image
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        className="object-cover max-h-[900px] banner-mobile"
        src={imageBannerMobileOverlay}
        alt=""
      />
      <div className="max-[768px]:flex hidden absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>

      <div className="px-[10%] padding-x-10-mb header">
        <Menu />
        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {router?.pathname?.replace("/", "") === "about" ? (
            <div className="items-center mt-40-mb xl:flex xl:gap-[10px] lg:flex lg:gap-[10px] md:flex md:gap-[10px]">
              <p className="font-[800] lg:text-[40px] md:text-[40px] xl:text-[60px] xxl:text-[60px] text-40-mb text-[#fff]">
                {t("meet")}
              </p>
              <p className=" font-[800] sx:text-[10px] lg:text-[40px] md:text-[40px] xl:text-[60px] xxl:text-[60px] text-40-mb text-[#D82C2C]">
                {t("1tek")}
              </p>
            </div>
          ) : (
            <div className="items-center mt-50-mb xl:flex xl:gap-[10px] lg:flex lg:gap-[10px] md:flex md:gap-[10px]">
              <p className="font-[800] lg:text-[40px] md:text-[40px] xl:text-[60px] xxl:text-[60px] text-40-mb text-[#fff]">
                {t(router?.pathname?.replace("/", ""))}
              </p>
            </div>
          )}

          <p className="text-[16px] font-[400] text-[#fff] mt-[10px] ms:max-w-[500px]">
            {t("banner-content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderScreen;
