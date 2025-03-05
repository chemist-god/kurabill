// components/KurabillLogo.tsx
import React from 'react';
import Image from 'next/image';

const KurabillLogo = () => {
  return (
    <Image
      src="/assets/kurabill-logo.svg"
      alt="KuraBill Logo"
      width={120}
      height={40}
      className="h-10 w-auto"
    />
  );
};

export default KurabillLogo;