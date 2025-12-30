interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', showText = true, size = 'md' }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: 'text-xs', subtext: 'text-[8px]', gap: '-mt-0.5' },
    md: { icon: 44, text: 'text-sm', subtext: 'text-[9px]', gap: '-mt-1' },
    lg: { icon: 56, text: 'text-base', subtext: 'text-[10px]', gap: '-mt-1' },
  };

  const { icon, text, subtext, gap } = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Icon - Square with E */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(190, 90%, 50%)" />
            <stop offset="100%" stopColor="hsl(240, 60%, 60%)" />
          </linearGradient>
        </defs>
        
        {/* Square frame - open at bottom left */}
        <path
          d="M 25 20 L 80 20 L 80 80 L 45 80"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Left vertical line of square */}
        <path
          d="M 25 20 L 25 55"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* E letter */}
        <text
          x="52"
          y="62"
          textAnchor="middle"
          fill="url(#logoGradient)"
          fontSize="40"
          fontFamily="Inter, sans-serif"
          fontWeight="300"
        >
          E
        </text>
      </svg>

      {/* Text */}
      {showText && (
        <div className={`flex flex-col items-center ${gap}`}>
          <span 
            className={`${text} font-medium tracking-[0.25em] gradient-text`}
          >
            EQUILEDGER
          </span>
          <span 
            className={`${subtext} tracking-[0.35em] text-cyan -mt-0.5`}
          >
            ACCOUNTING
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;