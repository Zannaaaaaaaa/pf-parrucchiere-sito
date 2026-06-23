type IconProps = {
  size?: number;
  className?: string;
};

export const ScissorsIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M20 5L8.5 12L20 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8.5 12L4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const BlowDryerIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 8h7a4 4 0 0 1 0 8h-1v4l-3-2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M9 8a4 4 0 1 0 0 8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const RazorIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 19c4-1 5-4 5-7s2-6 6-6c2 0 3 1 3 1l-2 2 2 2-2 2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 12 6 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const DropIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 3C12 3 5.5 11 5.5 15.5C5.5 19.09 8.41 22 12 22C15.59 22 18.5 19.09 18.5 15.5C18.5 11 12 3 12 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const LeafIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 14C4 7 11 3 20 3C20 12 16 19 9 19C6 19 4 17 4 14Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M5 19C8 15 11 12 16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.5L14.9 9.1L22 9.8L16.6 14.5L18.2 21.5L12 17.8L5.8 21.5L7.4 14.5L2 9.8L9.1 9.1L12 2.5Z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 4h3.2l1.4 4.2-2 1.6a12 12 0 0 0 6.6 6.6l1.6-2 4.2 1.4V19a2 2 0 0 1-2 2C11.4 21 3 12.6 3 6a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const PinIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
