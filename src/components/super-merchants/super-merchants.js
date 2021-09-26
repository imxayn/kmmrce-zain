import React from "react";

import { Container, Button, Section } from "@kmmrce/components";
import * as Styled from "./super-merchants.styles";

export const SuperMerchants = () => {
  return (
    <Styled.SuperMerchants>
      <Container>
        <Section
          title="Super Merchants"
          desc="Multisite, made easy."
          subtitle="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi
            pellentesque eu dolor luctus sagittis, Praesent commodo velit eget
            urna mollis dignissim."
        >
          <Button variant="outlineLight">Explore Super Merchants</Button>
        </Section>
      </Container>
    </Styled.SuperMerchants>
  );
};

export default SuperMerchants;
