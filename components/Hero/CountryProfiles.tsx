import { motion } from 'framer-motion';
import Image from 'next/image';
import { CountryProfile } from '@/types';

const CountryProfiles = ({ profiles }: { profiles: CountryProfile[] }) => {
  return (
    <>
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          className="absolute"
          style={profile.position as React.CSSProperties}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, delay: profile.id * 0.2 }}
        >
          <div className="relative">
            <Image
              src={profile.image}
              alt={profile.country}
              width={80}
              height={80}
              className="rounded-full"
            />
            <Image
              src={profile.flag}
              alt={`${profile.country} flag`}
              width={40}
              height={40}
              className="absolute -top-2 -right-2"
            />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CountryProfiles;