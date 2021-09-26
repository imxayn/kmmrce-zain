import styled from "@emotion/styled";
import { mq } from "styles/styles";

export const Table = styled.table`
  width: 100%;
`;
export const Row = styled.tr((props) => {
  return mq({
    display: "flex",
    flexDirection: ["column", "row"],
    borderBottom: [`1px solid ${props.theme.gray}`],
    padding: [0, `${props.theme.spaces[5]}px`],
    "&:first-child": {
      borderBottom: "none",
    },
    "&:last-child": {
      borderBottom: "none",
    },
  });
});

export const Head = styled.th(() => {
  return mq({
    width: ["100%", "25%"],
    display: ["none", "block"],
  });
});
export const Wrapper = styled.div`
  display: flex;
  flex: 2;
`;
export const Icon = styled.img``;
export const Feature = styled.h4`
  padding-top: ${(props) => props.theme.spaces[3]}px;
  padding-bottom: ${(props) => props.theme.spaces[5]}px;
  font-size: ${(props) => props.theme.fontSizes[1]}px;
`;
export const Title = styled.h3`
  padding-top: ${(props) => props.theme.spaces[3]}px;
  padding-bottom: ${(props) => props.theme.spaces[5]}px;
  font-size: ${(props) => props.theme.fontSizes[5]}px;
`;
export const Body = styled.tbody``;
export const SubTitle = styled.h4`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes[6]}px;
  padding: ${(props) => props.theme.spaces[5]}px;
  border-bottom: 1px solid ${(props) => props.theme.gray};
`;
export const SupportIcon = styled.img``;
export const Col = styled.td((props) => {
  return mq({
    flex: ["100%", "1"],
    textAlign: "center",
    marginBottom: [`${props.theme.spaces[4]}px`],
    marginTop: [`${props.theme.spaces[3]}px`],

    "&:first-child": {
      textAlign: "left",
      marginTop: [`${props.theme.spaces[3]}px`],
    },
  });
});

export const Price = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSizes[6]}px;
  padding-bottom: ${(props) => props.theme.spaces[3]}px;
`;
