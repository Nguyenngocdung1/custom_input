import { WrapLayout } from "@/components/layouts/WrapLayout";
import { Meta } from "@/components/meta";
import { HttpResponse } from "@/lib/api";
import { NextPageWithLayout } from "@/lib/next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const AboutPage = dynamic(() => import("@/components/templates/about"));

type Props = HttpResponse<null>;

const Page: NextPageWithLayout<Props> = () => <AboutPage />;

Page.getLayout = WrapLayout;
Page.getMeta = Meta(() => ({ title: "About" }));
export const getServerSideProps = async (context: any) => {
  const { locale = "en" } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Page;
