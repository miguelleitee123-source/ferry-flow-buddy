const FerryLogo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Waves */}
        <path
          d="M20 140 Q 35 130, 50 140 T 80 140 T 110 140 T 140 140 T 170 140 T 200 140"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 155 Q 35 145, 50 155 T 80 155 T 110 155 T 140 155 T 170 155 T 200 155"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 170 Q 35 160, 50 170 T 80 170 T 110 170 T 140 170 T 170 170 T 200 170"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Boat */}
        <path
          d="M70 120 Q 100 125, 130 120 L 120 135 L 80 135 Z"
          fill="white"
        />
        
        {/* Sails */}
        <path
          d="M95 40 L 95 120 L 65 120 Z"
          fill="white"
        />
        <path
          d="M105 50 L 105 120 L 135 120 Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default FerryLogo;
