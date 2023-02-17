import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  padding: 50px 0;
  max-width: 80vw;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  &.active {
    border-bottom: 2px solid rgba(255, 0, 0, 0.5);
  }
`;
const Navbar = () => {
  const containerEl = useRef<HTMLDivElement | null>(null);
  const wrapperEl = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(wrapperEl.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
      });
    }, containerEl);
    return () => ctx.revert();
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper ref={wrapperEl} className="app">
        <NavItem to="/about">About</NavItem>
        <NavItem to="">Flirty Flowers</NavItem>
        <NavItem to="/service">Services</NavItem>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
