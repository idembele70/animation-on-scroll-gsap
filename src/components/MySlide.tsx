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
import VisibilitySensor from "react-visibility-sensor";
const Container = styled.div``;
interface SlideProps {
  bgUrl: string;
}
const Slide = styled.div<SlideProps>`
  height: calc(100vw * 9 / 16);
  width: 100vw;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  transform: translateY(100%)
  opacity:0;
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
    // fade: true,
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
  return (
    <Container ref={containerEl}>
      <Slider className="container" {...settings} ref={slideEl}>
        <SlideItem idx={1} />
        <SlideItem idx={2} />
      </Slider>
    </Container>
  );
};

/* 

{sliderItems.map(({ title }, idx) => (
          <Slide
            bgUrl={`${process.env.PUBLIC_URL}/assets/carousel-${idx + 1}.jpg`}
          />
))}
*/

export default MySlide;

interface SlideItemProps {
  idx: number;
}
const SlideItem = ({ idx }: SlideItemProps) => {
  const slideEl = useRef<HTMLDivElement>(null);
  const [isVisibile, setisVisibile] = useState<number>(0);
  const onChange = (isInViewport: boolean) => {
    if (isInViewport) setisVisibile(isVisibile + 1);
  };
  React.useLayoutEffect(() => {
    if (isVisibile === 1) {
      console.log("first", idx);
      gsap.to(".child", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".slidered",
          start: "top-=100% center",
        },
      });
    }
  }, [isVisibile]);
  return (
    <VisibilitySensor onChange={onChange}>
      <Slide
        className="slidered"
        ref={slideEl}
        bgUrl={`${process.env.PUBLIC_URL}/assets/carousel-${idx}.jpg`}
      >
        {isVisibile ? <SlideChild className="child" /> : null}
      </Slide>
    </VisibilitySensor>
  );
};
