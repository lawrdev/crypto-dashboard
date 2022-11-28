import styled from "styled-components";
import Protect_image from "../../assets/img/protect_image.png";

interface StyledSidebarOptionProps {
  $activeItem: boolean;
}

export const StyledSidebar = styled.div`
  height: 100vh;

  overflow: hidden;
  user-select: none;
  padding-block: 22px;
  padding-inline: 8px;

  background-color: ${(props) => props.theme.colors.sidebarColor};
  border-right: 1px solid rbg(219, 219, 219);

  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledSidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
`;

export const StyledSidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .logo {
    margin-inline: auto;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.016em;

      /* Stroke 2nd */
      color: ${({ theme }) => theme.colors.text900};
    }
  }
`;

export const StyledSidebarOptions = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-inline: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-inline: 20px;
  }
`;

export const StyledSidebarOption = styled.div<StyledSidebarOptionProps>`
  padding: 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: ${(props) => (props.$activeItem ? "#33333305" : "none")};
  border-radius: ${(props) => (props.$activeItem ? "12px" : "none")};

  p {
    font-weight: ${(props) => (props.$activeItem ? 700 : 500)};
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.016em;

    color: ${(props) =>
      props.$activeItem
        ? props.theme.colors.green500
        : props.theme.colors.text900};
  }

  &:hover {
    background: #33333305;
    border-radius: 12px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: fit-content;
  }
`;

export const StyledSidebarOptionActive = styled.span`
  border-radius: 50%;
  width: 8px;
  height: 8px;

  background-color: ${(props) => props.theme.colors.green500};
`;

export const StyledSidebarProtect = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-right: 19.5px;
  padding-inline: 14.5px;
  padding-block: 27px;

  text-align: center;

  min-height: 200px;
  position: relative;

  background-image: url(${Protect_image});
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 16px;

  h2 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.016em;

    /* Colors/Grey/100 */
    color: #fafcfe;
  }

  p {
    margin-bottom: 23px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;

    /* Colors/Grey/900 */
    color: ${(props) => props.theme.colors.text900};
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.016em;

    /* Colors/Primary White */
    color: #ffffff;
  }
`;

export const StyledSidebarProtectIcon = styled.div`
  width: 72px;
  height: 72px;
  margin-inline: auto;
  margin-bottom: 8px;

  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 6px 16px rgba(0, 222, 163, 0.16);

  display: flex;
  align-items: center;
  justify-content: center;
`;
