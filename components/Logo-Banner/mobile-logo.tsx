import Image from 'next/image';

export function MobileLogoBanner() {
  const logos = [
    { src: '/assets/logos/roku.png', alt: 'Roku' },
    { src: '/assets/logos/syneos-health.png', alt: 'Syneos Health' },
    { src: '/assets/logos/nemours.png', alt: 'Nemours' },
    { src: '/assets/logos/klarna.png', alt: 'Klarna' },
    { src: '/assets/logos/pfizer.png', alt: 'Pfizer' },
    { src: '/assets/logos/novartis.png', alt: 'Novartis' },
    { src: '/assets/logos/merck.png', alt: 'Merck' },
  ];

  return (
    <div className="flex items-center justify-center flex-nowrap overflow-x-auto gap-x-8 py-4">
      {logos.map((logo) => (
        <div key={logo.alt} className="flex-shrink-0 h-[60px]">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100} 
            height={60}  
            className="object-contain grayscale opacity-60"
            quality={100}
          />
        </div>
      ))}
    </div>
  );
}