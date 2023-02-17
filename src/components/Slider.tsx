import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 25rem;
`;
const Slider = () => {
  const containerEl = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() =>
      gsap.from(containerEl.current, {
        opacity: 0,
        delay: 2,
        duration: 1,
      })
    );

    return () => ctx.revert();
  }, []);
  return (
    <Container ref={containerEl}>
      <Title>Slider</Title>
    </Container>
  );
};

export default Slider;
