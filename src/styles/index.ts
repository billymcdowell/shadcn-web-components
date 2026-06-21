import { css } from 'lit';
import { tokensBase } from './tokens-base.js';
import { tokensMotion } from './tokens-motion.js';

export { tokensBase } from './tokens-base.js';
export { tokensMotion } from './tokens-motion.js';

export const focusRing = css`
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
`;

/** Combined base + motion tokens for backward-compatible barrel exports. */
export const tokens = [tokensBase, tokensMotion];
