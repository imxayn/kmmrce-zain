import React from "react";

import { Container, Button, Section } from "@kmmrce/components";
import * as Styled from "./services.styles";
import { SERVICES_MOCK } from "./services.mock";

export const Services = () => {
  return (
    <Styled.Services>
      <Container>
        <Section
          title="Serving Our Customers"
          desc="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi
            pellentesque eu dolor luctus sagittis, Praesent commodo velit eget
            urna mollis dignissim."
          alignLeft
        />
      </Container>
      <Styled.ServicesWrapper>
        {SERVICES_MOCK.map(({ icon, title, desc }) => (
          <Styled.ServiceWrapper>
            <Styled.Icon src={icon} alt={title} />
            <Styled.ServiceTitle>{title}</Styled.ServiceTitle>
            <Styled.ServiceDesc>{desc}</Styled.ServiceDesc>
            <Button variant="outlineLight">Request Demo</Button>
          </Styled.ServiceWrapper>
        ))}
      </Styled.ServicesWrapper>
    </Styled.Services>
  );
};

export default Services;
