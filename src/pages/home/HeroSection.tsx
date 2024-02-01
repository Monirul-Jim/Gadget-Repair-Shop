import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed 1.png";
import { motion } from "framer-motion";
const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };
  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const laptop = {
    initial: { y: 0, rotate: 0, scale: 5 },
    animate: {
      y: 20,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't Worry.</span>
            <br />
            <span>We'll fix it</span>
          </motion.h1>
          <motion.p
            className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
            variants={introChildren}
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>{" "}
            your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repair
            </span>{" "}
            and diagnostics
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 w-3/4 lg:w-full"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
