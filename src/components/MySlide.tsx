import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

const Container = styled.div``;
interface SlideProps {
  bgUrl: string;
}
const Slide = styled.div<SlideProps>`
  height: calc(100vw * 9 / 16);
  width: 100vw;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
`;
const SlideChild = styled.div`
  height: 200px;
  width: 200px;
  background: red;
  opacity: 0;
  transform: translateY(100%);
`;
const MySlide = () => {
  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slideEl = useRef<Slider>(null);
  interface ISliderItem {
    title: string;
  }
  const sliderItems: ISliderItem[] = useMemo(
    () => [
      {
        title: "Your Financial Status is Our Goal",
      },
      {
        title: "Your Financial Status is Our Goal",
      },
      {
        title: "Your Financial Status is Our Goal",
      },
      {
        title: "Your Financial Status is Our Goal",
      },
    ],
    []
  );
  const containerEl = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.to(".slick-slide", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".slick-slide",
        start: "top center",
        end: "bottom 60%",
        onEnter: () => console.log("entered"),
      },
    });
  }, []);

  return (
    <Container ref={containerEl}>
      <Slider className="container" {...settings} ref={slideEl}>
        {sliderItems.map(({ title }, idx) => (
          <Slide
            bgUrl={`${process.env.PUBLIC_URL}/assets/carousel-${idx + 1}.jpg`}
          >
            <SlideChild className="slick-slide" />
          </Slide>
        ))}
      </Slider>
    </Container>
  );
};

export default MySlide;

interface SlideItemProps {
  idx: number;
}
const SlideItem = ({ idx }: SlideItemProps) => {
  const slideEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slideEl.current,
        start: "top-=200% center",
      },
    });
    tl.to(slideEl.current, {
      opacity: 1,
      y: 0,
      onStart: () => console.log("end"),
    });
  }, []);
  return (
    <Slide
      ref={slideEl}
      bgUrl={`${process.env.PUBLIC_URL}/assets/carousel-${idx + 1}.jpg`}
    />
  );
};
