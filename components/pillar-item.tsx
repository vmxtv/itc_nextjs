import ItcSvg from "components/itc-svg";
import { absoluteUrl } from "lib/utils";
import InlineSVG from "react-inlinesvg";
import SVG from "react-inlinesvg";

interface PillarItemProps {
  title: string;
  url: string | undefined;
}
export default function PillarItem({ title, url }: PillarItemProps) {
  return (
    <div className="rounded-[20px] bg-[#f3f3f3] text-center py-[39px] px-[21px]">
      <div className="mb-10 aspect-square">
        {url && <InlineSVG src={absoluteUrl(url)} />}
      </div>
      <div>
        <h3 className="text-[16px] font-bold leading-6">{title}</h3>
      </div>
    </div>
  );
}
