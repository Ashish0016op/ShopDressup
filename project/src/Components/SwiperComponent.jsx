import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "../../node_modules/swiper/swiper.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaStar } from "react-icons/fa";
const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="grid grid-rows-1">
        <SwiperSlide className="bg-white w-[200px] h-[200px] cursor-grab shadow-2xl text-black p-10">
          <div className="flex justify-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="py-4 flex justify-center text-center">
            One of my favourite women's dress boutiques Dress Up is my go-to for
            finding the best cute outfits. I love that Dress Up gets in cute
            clothes so often!
          </p>
          <p className="flex text-black font-bold justify-center">Lexi</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white w-[200px] h-[200px] cursor-grab shadow-2xl text-black p-10">
        <div className="flex justify-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="py-4 flex justify-center text-center">
            I ordered 3 times and got them all within just a few days, I love each item so much and can't wait to wear them! items are true to size and great quality and prices. They fit so well. Will definitely be buying from here again!
          </p>
          <p className="flex text-black font-bold justify-center text-center">Alyssa</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white w-[200px] h-[200px] cursor-grab shadow-2xl text-black p-10">
        <div className="flex justify-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="py-4 flex justify-center text-center">Dress Up provides over the top amazing customer service. I highly recommend this online boutique!</p>
          <p className="flex text-black font-bold justify-center">Natalie</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white w-[200px] h-[200px] cursor-grab shadow-2xl text-black p-10">
        <div className="flex justify-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="py-4 flex justify-center text-center">Dress Up provides over the top amazing customer service. I highly recommend this online boutique!</p>
          <p className="flex text-black font-bold justify-center">Natalie</p>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
