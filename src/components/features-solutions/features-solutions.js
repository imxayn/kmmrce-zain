import React from "react";

import { Section, Container } from "@kmmrce/components";
import * as Styled from "./features-solutions.styles";
import FeaturesTable from "components/features-table/features-table";

export const FeaturesSolutions = () => {
  return (
    <Styled.Features>
      <Container>
        <Section
          title="Features &amp; Solutions"
          desc="Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi
            pellentesque eu dolor luctus sagittis, Praesent commodo velit eget
            urna mollis dignissim."
          alignLeft
        >
          <FeaturesTable />
        </Section>
      </Container>
    </Styled.Features>
  );
};

export default FeaturesSolutions;
