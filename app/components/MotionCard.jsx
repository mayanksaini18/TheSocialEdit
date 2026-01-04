import { motion } from "framer-motion";

const MotionCard = ({ title, y, z }) => {
  return (
    <motion.div
      style={{ y }}
      className={`absolute inset-0 ${z} flex items-center justify-end p-4 md:p-8 lg:p-12`}
    >
      <div className="w-full max-w-xl rounded-3xl bg-[#e9e9dd] p-10 min-h-[380px] flex flex-col justify-end shadow-sm">
        <h3 className="text-3xl font-medium text-neutral-800">
          {title}
        </h3>

        <p className="mt-4 text-neutral-600">
          High-impact solutions designed to scale your brand effectively.
        </p>

        <a className="mt-6 inline-flex items-center gap-2 text-sm underline text-neutral-800">
          Know More <span>↗</span>
        </a>
      </div>
    </motion.div>
  );
};

export default MotionCard;
