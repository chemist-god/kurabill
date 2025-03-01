'use client'

export default function WorldMap() {
  return (
    <div className="relative w-full aspect-[2/1]">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))' }}
      >
        <image
          href="/assets/images/earth.png"
          width="1000"
          height="500"
          x="0"
          y="0"
        />
      </svg>
    </div>
  )
}