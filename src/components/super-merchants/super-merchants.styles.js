import styled from "@emotion/styled";

export const SuperMerchants = styled.div`
  display: flex;
  align-items: center;
  background-image: url("/images/super-merchants.png");
  background-size: cover;
  background-blend-mode: overlay;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  height: 100vh;
`;
