import { HttpCommon } from "@/configs/axiosConfig";
import persistor, { store } from "@/lib/redux/store";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LayoutDefault from "../LayoutDefault";
const queryClient = new QueryClient();
import AOS from "aos";
import "aos/dist/aos.css";
export const WrapLayout = (page: ReactElement) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HttpCommon>
            <NextNProgress color={"red"} height={4} />
            <LayoutDefault>{page}</LayoutDefault>
          </HttpCommon>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};
