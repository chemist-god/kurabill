import { motion } from 'framer-motion';
import Image from 'next/image';

const CoinAnimations = () => {
  return (
    <>
      {/* First Coin */}
      <motion.div
        className="absolute z-10 top-[7%] right-[12%]"
        animate={{
          y: [-10, 0, -10],
          rotate: [0, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/assets/images/coin.png"
          alt="Stable coin"
          width={42}
          height={42}
          className="w-full h-full object-contain"
        />
      </motion.div>
      {/* Second Coin */}
      <motion.div
        className="absolute z-10 bottom-[40%] left-[8%]"
        animate={{
          y: [-20, 0, -20],
          rotate: [0, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Image
          src="/assets/images/coin.png"
          alt="Stable coin"
          width={78}
          height={78}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </>
  );
};

export default CoinAnimations;