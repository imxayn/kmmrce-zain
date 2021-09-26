import styled from "@emotion/styled";
import { mq } from "styles/styles";

export const HeroBanner = styled.div`
  display: flex;
  ${mq({ flexDirection: ["column", "row", "row"] })}
`;
export const Wrapper = styled.div((props) => {
  return mq({
    display: "flex",
    flexDirection: "column",
    alignItems: ["center", "flex-start"],
    justifyContent: "center",
    flex: "1 1 0",
    borderRight: ["none", `1px solid ${props.theme.gray}`],
    order: [1, 0, 0],
    marginBottom: [`${props.theme.spaces[7]}px`, 0],
  });
});

export const Title = styled.h1`
  font-weight: 300;
  margin-bottom: ${(props) => props.theme.spaces[5]}px;

  & > span {
    color: ${(props) => props.theme.secondary};
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  margin: ${(props) => props.theme.spaces[7]}px 0;
  ${mq({ order: [0, 1, 1] })}
`;
export const Img = styled.img`
  ${mq({ maxWidth: ["100%", "70%"] })}
`;
