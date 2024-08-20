import { WrapLayout } from "@/components/layouts/WrapLayout";
import { Meta } from "@/components/meta";
import { HttpResponse } from "@/lib/api";
import { NextPageWithLayout } from "@/lib/next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/templates/home"));

type Props = HttpResponse<null>;

const Page: NextPageWithLayout<Props> = () => <HomePage />;

Page.getLayout = WrapLayout;
Page.getMeta = Meta(() => ({ title: "1TEK., JSC" }));
export const getServerSideProps = async (context: any) => {
  const { locale = "en" } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Page;
