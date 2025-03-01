import { motion } from 'framer-motion';
import { MedicationBubble } from '@/types';

const MedicationBubbles = ({ bubbles }: { bubbles: MedicationBubble[] }) => {
  return (
    <>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2 cursor-default hover:shadow-xl transition-shadow duration-300"
          style={bubble.position as React.CSSProperties}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: bubble.id * 0.1 }}
        >
          <div className="bg-gray-100 rounded-full p-0.5">
            <span>{bubble.icon}</span>
          </div>
          <span>{bubble.type}</span>
        </motion.div>
      ))}
    </>
  );
};

export default MedicationBubbles;