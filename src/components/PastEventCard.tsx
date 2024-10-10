import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import forest from './images/forest.png'
import sun from './images/sun.png'

interface CardProps {
  name: string;
  imageSrc:string;
}

const PastEventCard: FC<CardProps> = (props) => {
  
  return (
    <div className="flex flex-col w-[75%] justify-start gap-12 mx-auto">
      <div className="flex justify-start">
            <Swiper
                modules={[ Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop
                navigation
                autoplay={{delay:6000}}
                >
                <SwiperSlide className="">
                  <img className="object-cover object-center aspect-[2.35/1]"  style={{ }}  src={forest} />
                </SwiperSlide>
                <SwiperSlide className="">
                  <img className="object-cover object-center aspect-[2.35/1]" style={{  }} src={sun} />
                </SwiperSlide>
                <SwiperSlide className="" >
                  <img className="object-cover object-center aspect-[2.35/1]" style={{  }} src={sun} />
                </SwiperSlide>
                
            </Swiper>
        </div>
        <div className="flex flex-col justify-start">
            <p className='text-5xl font-semibold pb-10'>
                Event - 1
            </p>
            <p className='text-3xl font-semibold tracking-wide'>
              Date
            </p>
            <p className='text-3xl font-semibold tracking-wide'>
              Location
            </p>
            <p className='text-2xl mt-4 text-gray-500 font-semibold tracking-wide'>Lorem ipsum dolor sit amet.
            Sint iusto cupiditate ipsa quaerat.
            Ipsam delectus odio provident fugit.</p>
        </div>
    </div>
  );
};

export default PastEventCard;
