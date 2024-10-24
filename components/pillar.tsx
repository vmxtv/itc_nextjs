import ItcSvg from "components/itc-svg";
import PillarItem from "components/pillar-item";
import { absoluteUrl } from "lib/utils";
import Link from "next/link";

interface PillarItemProps {
  field_title: string;
  field_animation: {
    field_media_svg: {
      uri: {
        url: string;
      };
    };
  };
}

interface PillarProps {
  field_title: string;
  field_description: string;
  field_button: {
    "title": string;
    "uri": string;
  };
  field_pillars: PillarItemProps[];
}

export default function Pillars({
  field_title,
  field_description,
  field_button,
  field_pillars,
}: PillarProps) {
  let url = field_button.uri;
  if (url.startsWith("internal:")) {
    url = url.replace("internal:", "");
  }

  return (
    <div className="px-20">
      <div className="m-20 p-5">
        <h1 className="text-[30px] text-center leading-[30px] m-5 font-[700]">
          {field_title}
        </h1>
        <p className="text-xs leading-[30px] text-[#717171] text-center">
          {field_description}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {field_pillars.map((pillar, index) => (
          <PillarItem
            key={index}
            title={pillar.field_title}
            url={pillar.field_animation?.field_media_svg.uri.url}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href={url}
          className="text-white bg-black hover:bg-[#870000] w-[250px] h-[64px] mx-auto grid place-items-center"
        >
          {field_button.title}
        </Link>
      </div>
    </div>
  );
}
