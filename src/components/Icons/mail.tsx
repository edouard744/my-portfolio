import { iconProps } from "./icon-types";

export function MailIcon({ size = 24, ...props }: iconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
      >
        <g>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </g>
      </svg>
    );
  }