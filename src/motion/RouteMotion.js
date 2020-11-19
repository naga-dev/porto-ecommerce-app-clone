const routeMotion = {
  hidden: {
    opacity: 0,
  },
  visiable: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export default routeMotion;
