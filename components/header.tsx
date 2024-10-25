import classNames from "classnames";
import Image from "next/image";
import Logo from "public/images/logo.b0b21a99.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [needChangeHeight, setNeedChangeHeight] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNeedChangeHeight(true);
      } else {
        setNeedChangeHeight(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [needChangeHeight]);

  const classes = classNames("fixed bg-white w-full z-30", {
    "h-10": !needChangeHeight,
    "h-20": needChangeHeight,
  });

  return (
    <header className={classes}>
      <div className="flex items-center justify-center h-full">
        <div className="mx-auto relative h-10 w-10">
          <Image
            className={needChangeHeight ? "scale-150" : ""}
            src={Logo}
            alt="Logo"
            fill={true}
          />
        </div>
      </div>
    </header>
  );
}
