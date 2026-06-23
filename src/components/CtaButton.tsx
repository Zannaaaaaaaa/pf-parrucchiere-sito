type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`group relative isolate overflow-hidden rounded-full bg-gold px-9 py-3.5 font-sans text-base font-semibold text-charcoal transition-colors duration-300 hover:bg-gold-light ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="motion-reduce:hidden absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-charcoal/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    </a>
  );
};
