import Image from 'next/image'

export function MountainGradient() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full">
      <Image
        src="/assets/images/group.png"
        alt="Mountain gradient"
        width={1440}
        height={200}
        className="w-full object-cover object-bottom mountain-gradient"
        priority
        quality={100}
      />
    </div>
  )
}