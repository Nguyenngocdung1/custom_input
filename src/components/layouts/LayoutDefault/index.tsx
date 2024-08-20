import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import dynamic from "next/dynamic";
import { ReactNode, useEffect } from "react";
import ScrollButton from "./scrollButton";
const Footer = dynamic(() => import("./footer"));
type Props = {};

const LayoutDefault = ({ children }: { children: ReactNode }) => {
  const { loading } = useAppSelector((state) => state.loadings);

  return (
    <div className="relative">
      <div className="max-[768px]:hidden absolute h-full z-[-1] top-0 left-0 right-0 max-[768px]:px-[10px] px-[10%]">
        <div className="flex h-full">
          <div className="flex-1 border-x border-[#F5F5F5]"></div>
          <div className="flex-1 border-r border-[#F5F5F5]"></div>
          <div className="flex-1 border-r border-[#F5F5F5]"></div>
          <div className="flex-1 border-r border-[#F5F5F5]"></div>
        </div>
      </div>
      <ScrollButton />
      <div
        style={{
          width: "100wh",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          height: loading ? "100vh" : "auto",
          justifyContent: "space-between",
          overflowY: loading ? "hidden" : "auto",
          overflowX: "hidden",
        }}
        className="hide-scroll"
      >
        <div>
          <div className="flex-col w-full z-[1000]">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutDefault;
