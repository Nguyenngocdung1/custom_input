import { HttpCommon } from "@/configs/axiosConfig";
import persistor, { store } from "@/lib/redux/store";
import NextNProgress from "nextjs-progressbar";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const queryClient = new QueryClient();
export const WrapNoneLayout = (page: ReactElement) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HttpCommon>
            <NextNProgress color={"red"} height={4} />
            {page}
          </HttpCommon>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};
