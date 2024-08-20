import { WrapNoneLayout } from "@/components/layouts/WrapLayout/wrapperNoneLayout";
import { Meta } from "@/components/meta";
import { HttpResponse } from "@/lib/api";
import { NextPageWithLayout } from "@/lib/next/types";
import dynamic from "next/dynamic";

type Props = HttpResponse<null>;

const Page: NextPageWithLayout<Props> = () => <div>null</div>;

Page.getLayout = WrapNoneLayout;
Page.getMeta = Meta(() => ({ title: "404 Not Found" }));
export default Page;
