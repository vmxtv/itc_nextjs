import Image from "next/image";
import { useEffect, useState } from "react";

interface ItcSvgProps {
  src: string;
}
export default function ItcSvg({ src }: ItcSvgProps) {
  const [svg, setSvg] = useState({ __html: "" });
  /*useEffect(() => {
    async function fetchSvg() {
      const res = await fetch(src);
      const data = await res.text();
      setSvg({ __html: data });
    }
    fetchSvg();
  });

  return <div dangerouslySetInnerHTML={svg} />;*/

  return <Image src={src} alt="ITC Logo" width={100} height={100} />;
}
