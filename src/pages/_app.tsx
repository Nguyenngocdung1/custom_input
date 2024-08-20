import { AppPropsWithLayout } from "@/lib/next/types";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const getMeta = Component.getMeta ?? ((page) => page);
  return getLayout(getMeta(<Component {...pageProps} />, pageProps));
}

export default appWithTranslation(App);
