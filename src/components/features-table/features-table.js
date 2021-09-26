import React from "react";

import { Button } from "@kmmrce/components";
import { FEATURES_MOCK, FEATURES_TITLE_MOCK } from "./features-table.mock";
import * as Styled from "./features-table.styles";
import useBreakpoints from "hooks/useBreakpoint";

const FeaturesTable = () => {
  const { isDesktop, isMobile } = useBreakpoints();
  return (
    <Styled.Table>
      <Styled.Row>
        <Styled.Head></Styled.Head>
        {FEATURES_TITLE_MOCK.map(({ icon, title }) => (
          <Styled.Head>
            <Styled.Icon src={icon} alt={title} />
            <Styled.Title>{title}</Styled.Title>
            {isDesktop && <Button variant="outlineDark">Request Demo</Button>}
          </Styled.Head>
        ))}
      </Styled.Row>
      <Styled.Body>
        <Styled.SubTitle>Core Features</Styled.SubTitle>
        {FEATURES_MOCK.coreFeatures.map(
          ({ title, isStandard, isProfessional, isEnterprise }) => (
            <Styled.Row>
              <Styled.Col key={title}>{title}</Styled.Col>
              <Styled.Wrapper>
                <Styled.Col>
                  {isMobile && <Styled.Feature>is Standard</Styled.Feature>}
                  <Styled.SupportIcon
                    src={isStandard ? `/images/tick.svg` : `/images/null.svg`}
                    alt="is Standard"
                  />
                </Styled.Col>

                <Styled.Col>
                  {isMobile && <Styled.Feature>is Professional</Styled.Feature>}
                  <Styled.SupportIcon
                    src={
                      isProfessional ? `/images/tick.svg` : `/images/null.svg`
                    }
                    alt="is Professional"
                  />
                </Styled.Col>
                <Styled.Col>
                  {isMobile && <Styled.Feature>is Enterprise</Styled.Feature>}
                  <Styled.SupportIcon
                    src={isEnterprise ? `/images/tick.svg` : `/images/null.svg`}
                    alt="is Enterprise"
                  />
                </Styled.Col>
              </Styled.Wrapper>
            </Styled.Row>
          )
        )}

        <Styled.SubTitle>Team Support</Styled.SubTitle>
        {FEATURES_MOCK.teamSupport.map(
          ({ title, isStandard, isProfessional, isEnterprise }) => (
            <Styled.Row>
              <Styled.Col key={title}>{title}</Styled.Col>
              <Styled.Wrapper>
                <Styled.Col>
                  {isMobile && <Styled.Feature>is Standard</Styled.Feature>}
                  <Styled.SupportIcon
                    src={isStandard ? `/images/tick.svg` : `/images/null.svg`}
                    alt="is Standard"
                  />
                </Styled.Col>
                <Styled.Col>
                  {isMobile && <Styled.Feature>is Professional</Styled.Feature>}
                  <Styled.SupportIcon
                    src={
                      isProfessional ? `/images/tick.svg` : `/images/null.svg`
                    }
                    alt="is Professional"
                  />
                </Styled.Col>
                <Styled.Col>
                  {isMobile && <Styled.Feature>is Enterprise</Styled.Feature>}
                  <Styled.SupportIcon
                    src={isEnterprise ? `/images/tick.svg` : `/images/null.svg`}
                    alt="is Enterprise"
                  />
                </Styled.Col>
              </Styled.Wrapper>
            </Styled.Row>
          )
        )}
        {isDesktop && (
          <Styled.Row>
            <Styled.Col></Styled.Col>
            <Styled.Col>
              <Styled.Price>$100/month</Styled.Price>
              <Button variant="outlineDark">Select this plan</Button>
            </Styled.Col>
            <Styled.Col>
              <Styled.Price>$2000/month</Styled.Price>
              <Button variant="outlineDark">Select this plan</Button>
            </Styled.Col>
            <Styled.Col>
              <Styled.Price>$3,500/month</Styled.Price>
              <Button variant="outlineDark">Select this plan</Button>
            </Styled.Col>
          </Styled.Row>
        )}
      </Styled.Body>
    </Styled.Table>
  );
};

export default FeaturesTable;
