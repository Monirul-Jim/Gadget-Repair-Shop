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
        duration: 5,
      },
    },
  };
  const introChildren = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          className="text-5xl lg:text-8xl font-bold text-nowrap"
          variants={introChildren}
        >
          <span className="text-gray">Don't Worry.</span>
          <br />
          <span>We'll fix it</span>
        </motion.h1>
        <motion.p className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>{" "}
          your one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">
            Macbook repair
          </span>{" "}
          and diagnostics
        </motion.p>
        <Button>Book a service</Button>
      </motion.div>
      <div className="mt-10 w-3/4 lg:w-full">
        <img className="h-[95%] object-contain" src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
