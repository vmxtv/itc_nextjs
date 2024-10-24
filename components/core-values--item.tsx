import { absoluteUrl } from "lib/utils";
import Image from "next/image";
export interface CoreValueItemProps {
  title: string;
  description: string;
  image: {
    field_media_image: {
      uri: {
        url: string;
      };
    };
  };
}

export default function CoreValueItem({
  title,
  description,
  image,
}: CoreValueItemProps) {
  return (
    <div className="flex rounded-xl bg-white p-5 my-5">
      <div className="w-1/4">
        <Image
          className="mx-auto"
          src={absoluteUrl(image.field_media_image.uri.url)}
          width={150}
          height={250}
          alt={title}
        />
      </div>
      <div className="w-3/4 mx-10 text-sm">
        <h1 className="text-xl">{title}</h1>
        <p className="py-5">{description}</p>
      </div>
    </div>
  );
}
