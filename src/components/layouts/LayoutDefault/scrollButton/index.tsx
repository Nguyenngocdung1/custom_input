import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

type Props = {};

const ScrollButton = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      onClick={scrollToTop}
      className={
        visible
          ? "scroll-btn btn_primary btn_primary_hover btn-show"
          : "scroll-btn btn_primary btn_primary_hover"
      }
    >
    </div>
  );
};

export default ScrollButton;
