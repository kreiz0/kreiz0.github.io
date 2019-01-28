import styled, { css } from "astroturf";

export const BnBlock = styled("div")`
  display: flex;
  margin-bottom: 2.2rem;
  img {
    width: 4.6rem;
    height: 4.6rem;
    margin-right: 2.2857rem;
  }
  h2 {
    display: flex;
    align-items: center;
    height: 4.6rem;
    margin-bottom: 0;
  }
  @media (max-width: 1199px) {
    margin-bottom: 0;
  }
  @media (max-width: 991px) {
    img {
      width: 3.8rem;
      height: 3.8rem;
      margin-right: 1rem;
    }
    h2 {
      height: 3.8rem;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.4rem;
    }
    figure {
      margin: 0 0 -0.4rem 0;
    }
    h2 {
      height: 3rem;
    }
  }
`;

export const WithVideoContent = styled("div")`
  max-width: 38.5714rem;
  p,
  ul {
    &:last-child {
      margin-bottom: 11%;
    }
  }
  @media (max-width: 1199px) {
    max-width: 26rem;
    p,
    ul {
      &:last-child {
        margin-bottom: 14%;
      }
    }
  }
`;

const styles = css`
  .bnWithVideo {
    article {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 86.2857rem;
    }
    &.bnWithVideoLeft {
      article {
        padding: 3.4rem 0 6rem 0;
      }
    }
    &.bnWithVideoRight {
      article {
        > div {
          &:first-child {
            margin-right: 2.4rem;
          }
        }
        padding: 6rem 0 0 4.4rem;
      }
    }
    @media (min-width: 1200px) {
      padding: 0 5.7142rem 0 5.7142rem;
    }
    @media (max-width: 1199px) {
      padding-top: 0;
      padding-bottom: 0;
      &.bnWithVideoLeft,
      &.bnWithVideoRight {
        article {
          justify-content: space-between;
          padding: 1.6rem 0 0 0;
        }
      }
    }
    @media (max-width: 991px) {
      &.bnWithVideoLeft,
      &.bnWithVideoRight {
        article {
          padding: 0;
        }
      }
    }
  }
  .top1Section {
    article {
      p:last-child {
        @media (max-width: 991px) {
          padding-bottom: 3rem;
        }
      }
    }
  }
  .gradient {
    position: relative;
    &:before {
      pointer-events: none;
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
  .gradientToTop {
    &:before {
      background-image: linear-gradient(to top, #e0f0f6, #fff);
    }
  }
  .gradientToBottom {
    &:before {
      background-image: linear-gradient(to bottom, #e0f0f6, #fff);
    }
  }
`;

export default styles;
