import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 255, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 25rem;
`;
const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerEl = useRef<HTMLDivElement | null>(null);
  const titleEl = useRef<HTMLHeadingElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() =>
      gsap.from(containerEl.current, {
        opacity: 0,
        delay: 1,
        x: "100vw",
        duration: 1,
        scrollTrigger: {
          trigger: containerEl.current,
        },
      })
    );

    return () => ctx.revert();
  }, []);
  return (
    <Container ref={containerEl}>
      <Title>Services</Title>
    </Container>
  );
};

export default Services;
