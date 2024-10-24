import { absoluteUrl } from "lib/utils";
import Image from "next/image";
export interface CarouseItemProps {
  title: string;
  job: string;
  image: {
    field_media_image: {
      uri: {
        url: string;
      };
    };
  };
  description: {
    processed: string;
  };
}

export default function CarouseItem({
  title,
  job,
  image,
  description,
}: CarouseItemProps) {
  return (
    <div className="flex">
      <div className="w-1/4">
        <div className="relative w-[300px] aspect-[3/4] mx-auto">
          <Image
            src={absoluteUrl(image.field_media_image.uri.url)}
            alt={title}
            fill={true}
          />
        </div>
      </div>
      <div className="w-3/4 text-left">
        <h1 className="text-2xl pb-5">{title}</h1>
        <h2 className="pb-5">{job}</h2>
        <div dangerouslySetInnerHTML={{ __html: description?.processed }} />
      </div>
    </div>
  );
}
