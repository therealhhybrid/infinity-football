import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="League News"
        description="The League news will be posted here"
        LeftBtn="Book a Game"
        RightBtn="Reserve a sit"
        backgroundImg="ball.jpg"
      />
      <Section
        title="Place order for beep"
        description="Without the beep players would not be allowed to play"
        LeftBtn="Place Order"
        RightBtn=""
        backgroundImg="beep.jpg"
      />
      <Section
        title="League News"
        description="The League news will be posted here"
        LeftBtn="Book a Game"
        RightBtn="Reserve a sit"
        backgroundImg="boot.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
overflow-x: hidden;

 
  }
`;
