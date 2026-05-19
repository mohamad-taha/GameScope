import CarouselCards from "../CarouselCards/CarouselCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const Carousel = ({ games }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Grid]}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        noSwiping={true}
        noSwipingSelector="h2"
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {games?.results.map((game) => (
          <SwiperSlide
            key={game.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CarouselCards game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
