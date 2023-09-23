import { SVGProps } from 'react';

export function CheckIcons(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M3 21V3h18v18H3Zm2-2h14V5H5v14Z"></path>
    </svg>
  );
}
