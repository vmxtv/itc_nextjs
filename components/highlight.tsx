import { absoluteUrl } from "lib/utils";
import Image from "next/image";
import classNames from "classnames";

interface HighlightProps {
  field_subtitle: string;
  field_title: string;
  description: {
    processed: string;
  };
  field_image: {
    field_media_image: {
      uri: {
        url: string;
      };
    };
  };
  field_image_position: number;
}
export default function Highlight({
  field_subtitle,
  field_title,
  description,
  field_image,
  field_image_position,
}: HighlightProps) {
  const highlightClasses = classNames({
    "flex items-center bg-[#f3f3f3] p-10": true,
    "flex-row": field_image_position == 0,
    "flex-row-reverse": field_image_position == 1,
  });

  return (
    <div className={highlightClasses}>
      <div className="w-1/4 text-center">
        <Image
          className="mx-auto"
          src={absoluteUrl(field_image.field_media_image.uri.url)}
          alt={field_title}
          width={200}
          height={200}
        />
      </div>
      <div className="w-3/4 p-5 text-xs text-zinc-400">
        <p>{field_subtitle}</p>
        <h1 className="uppercase font-bold text-black text-lg">
          {field_title}
        </h1>
        {description?.processed && (
          <div
            className="p-5 leading-6"
            dangerouslySetInnerHTML={{ __html: description?.processed }}
          />
        )}
      </div>
    </div>
  );
}
