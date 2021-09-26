import styled from "@emotion/styled";

export const Header = styled.div`
  padding: ${(props) => props.theme.spaces[5]}px 0;
  border-bottom: 1px solid ${(props) => props.theme.gray};
`;

export const Drawer = styled.div`
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
    /* z-index: 9999; */
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 30px;
`;

export const ToggleButtonWrapper = styled.div`
  position: relative;
  z-index: 999;
  display: inline-block;
  width: 30px;
  height: 26px;
`;

export const ToggleButton = styled.input`
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
  &:checked {
    + span {
      background: transparent;

      &:after {
        transform: rotate(45deg) translate(-1px, -8px);
        background-color: ${(props) => props.theme.white};
      }
      &:before {
        transform: rotate(-45deg) translate(-4px, 12px);
        background-color: ${(props) => props.theme.white};
      }
    }
  }
`;

export const Bar = styled.span`
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.black};
  margin-top: 10px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.black};
    top: -9px;
    transition: 0.3s;
  }
  &:after {
    top: 9px;
  }
`;
