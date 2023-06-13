import styled from '@emotion/styled';

export const LoaderIcon = styled.div`
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }

  &:before {
    animation: before8 2s infinite;
  }

  &:after {
    animation: after6 2s infinite;
  }

  @keyframes before8 {
    0% {
      width: 0.5em;
      box-shadow: 1em -0.5em #e6847b, -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
      width: 2.5em;
      box-shadow: 0 -0.5em #e6847b, 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
      width: 0.5em;
      box-shadow: -1em -0.5em #e6847b, 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
      box-shadow: 1em -0.5em #e6847b, -1em 0.5em rgba(111, 202, 220, 0.75);
    }
  }

  @keyframes after6 {
    0% {
      height: 0.5em;
      box-shadow: 0.5em 1em #75677a, -0.5em -1em #c1bf84;
    }

    35% {
      height: 2.5em;
      box-shadow: 0.5em 0 #75677a, -0.5em 0 #c1bf84;
    }

    70% {
      height: 0.5em;
      box-shadow: 0.5em -1em #75677a, -0.5em 1em #c1bf84;
    }

    100% {
      box-shadow: 0.5em 1em #75677a, -0.5em -1em #c1bf84;
    }
  }
`;
