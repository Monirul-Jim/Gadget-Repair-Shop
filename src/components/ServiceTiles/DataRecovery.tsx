import useScrollGrowHook from "@/hooks/useScrollGrowHook";
import { motion } from "framer-motion";
const DataRecovery = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] col-span-6 lg:col-span-7"
    ></motion.div>
  );
};

export default DataRecovery;
