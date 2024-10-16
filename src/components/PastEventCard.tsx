import { FC } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type EventData = {
  name: string;
  images: string[];
  from_date: Date;
  to_date: Date;
  location: string;
  description: string;
};

type PastEventCardProps = {
  data: EventData;
};

const PastEventCard: FC<PastEventCardProps> = ({ data }) => {
  const { name, images, from_date, to_date, location, description } = data;

  return (
    <div className="flex flex-col container justify-start gap-12 mx-auto">
      <div className="flex justify-start">
        {images.length>1?(<Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          slidesPerView={1.5}
          spaceBetween={25}
          loop
          navigation
          autoplay={{ delay: 2000 }}
          centeredSlides
          effect="coverflow"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="object-cover object-center w-full aspect-video rounded-xl"
                src={`${import.meta.env.VITE_REACT_APP_API_URL}${image}`}
                alt={`Event image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>):(<img
                className="object-cover object-center w-full aspect-video rounded-xl"
                src={`${import.meta.env.VITE_REACT_APP_API_URL}${images[0]}`}
              />)}
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-5xl font-semibold pb-10">{name}</p>
        <p className="text-3xl font-semibold tracking-wide">
          {new Date(from_date).toLocaleString("en-IN", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "Asia/Kolkata",
          })}
          {to_date
            ? ` - ${new Date(to_date).toLocaleString("en-IN", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                timeZone: "Asia/Kolkata",
              })}`
            : ""}
        </p>
        <p className="text-3xl font-semibold tracking-wide">{location}</p>
        <p className="text-2xl mt-4 text-gray-500 font-semibold tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PastEventCard;
