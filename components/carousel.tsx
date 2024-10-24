import CarouselItem from "components/carousel-item";
import { CarouseItemProps } from "components/carousel-item";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LeftArrow from "public/icons/Arrow-Left-Black.svg";
import RightArrow from "public/icons/Arrow-Right-Black.svg";

interface CarouselProps {
  title: string;
  items: CarouseItemProps[];
}
export default function ItcCarousel({ title, items }: CarouselProps) {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl py-5">{title}</h1>
      <div>
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <img src="/icons/Arrow-Left-Black.svg" alt="Left" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <img src="/icons/Arrow-Right-Black.svg" alt="Right" />
              </div>
            );
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="px-16">
              <CarouselItem
                title={item.title}
                job={item.job}
                image={item.image}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
