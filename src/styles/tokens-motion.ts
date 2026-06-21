import { css } from 'lit';

export const tokensMotion = css`
  @keyframes shadcn-fade-in {
    from { opacity: 0; }
  }

  @keyframes shadcn-zoom-in {
    from { opacity: 0; transform: scale(0.95); }
  }

  @keyframes shadcn-slide-in-from-right {
    from { transform: translateX(100%); }
  }

  @keyframes shadcn-slide-in-from-left {
    from { transform: translateX(-100%); }
  }

  @keyframes shadcn-slide-in-from-top {
    from { transform: translateY(-100%); }
  }

  @keyframes shadcn-slide-in-from-bottom {
    from { transform: translateY(100%); }
  }
`;
