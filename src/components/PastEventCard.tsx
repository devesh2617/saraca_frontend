import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

import forest from '../public/Mechanical Design.jpg'
import sun from '../public/Automotive Software Development.jpg'

interface CardProps {
  name: string;
  imageSrc:string;
}

const PastEventCard: FC<CardProps> = (props) => {
  
  return (
    <div className="flex flex-col w-[75%] justify-start gap-12 mx-auto">
      <div className="flex justify-start">
            <Swiper
                modules={[ Navigation, Autoplay, EffectCoverflow]}
                slidesPerView={1.5}
                spaceBetween={100}
                loop
                navigation
                autoplay={{delay:6000}}
                centeredSlides
                effect="coverflow"
                >
                <SwiperSlide className="">
                  <img className="object-cover object-center aspect-[2.35/1] rounded-xl" src={forest} />
                </SwiperSlide>
                <SwiperSlide className="">
                  <img className="object-cover object-center aspect-[2.35/1] rounded-xl" src={sun} />
                </SwiperSlide>
                <SwiperSlide className="" >
                  <img className="object-cover object-center aspect-[2.35/1] rounded-xl" src={forest} />
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
