import styled from "@emotion/styled";
import { mq } from "styles/styles";

export const Services = styled.div`
  background: ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.white};
`;

export const ServicesWrapper = styled.div((props) => {
  return mq({
    display: "flex",
    flexDirection: ["column", "row"],
    justifyContent: "center",
    alignItems: "center",
    borderTop: [`1px solid ${props.theme.gray}`],
    padding: [0, `0px ${props.theme.spaces[3]}px`],
  });
});

export const ServiceWrapper = styled.div((props) => {
  return mq({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRight: ["none", `1px solid ${props.theme.gray}`],
    borderBottom: [`1px solid ${props.theme.gray}`, "none"],
    padding: [`${props.theme.spaces[7]}px`],
    "&:last-child ": {
      border: "none",
    },
  });
});

export const Icon = styled.img`
  width: 50px;
  margin-bottom: ${(props) => props.theme.spaces[4]}px;
`;
export const ServiceTitle = styled.span`
  font-family: "akkurat-monoregular";
  font-size: ${(props) => props.theme.fontSizes[5]}px;
`;
export const ServiceDesc = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spaces[6]}px 0;
`;
