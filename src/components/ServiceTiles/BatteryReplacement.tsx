import useScrollGrowHook from "@/hooks/useScrollGrowHook";
import { motion } from "framer-motion";
const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
