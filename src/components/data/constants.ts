import { Variants } from "framer-motion";

// Interfaces
interface NavItem {
  id: number;
  title: string;
  href: string;
}

interface Service {
  id: number;
  title: string;
  src: string;
  description: string[];
}

// Extended Sidebar Variants Interface
interface SidebarVariants extends Variants {
  open: (height?: number) => {
    clipPath: string;
    transition: {
      type: string;
      stiffness: number;
      restDelta: number;
    };
  };
  closed: {
    clipPath: string;
    transition: {
      delay: number;
      type: string;
      stiffness: number;
      damping: number;
    };
  };
}

// Sidebar Variants
export const sidebarVariants: SidebarVariants = {
  open: (height = 100) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
};

// Menu Item Variants
export const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      duration: 0.1
    }
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 100 }
    }
  }
};

// Navigation Items
export const navItems: NavItem[] = [
  { id: 1, title: "Servicios", href: "#services" },
  { id: 2, title: "Sobre Mi", href: "#whyme" },
  { id: 3, title: "Proyectos", href: "#projects" },
  { id: 5, title: "Contacta Me", href: "#contact" }
];

// Navigation Variants
export const navVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: -1
    },
  }
};

// Hero Section Utilities
export const randomNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const role = "".split("");
export const description = "En este momento soy estudiante de la universidad EIA en el programa Ingenieria en sistemas y computacion. Por ahora este es el comienzo de mi portafolio, que se ira construyecto en el trayecto de los años faltantes como estudiante.".split("");
export const name = "Bienvenidos, yo soy".split("");
export const personame = "Ma Fernanda".split("");

// Services
export const services: Service[] = [
  {
    id: 1,
    title: "Ui/Ux Design",
    src: "https://img.icons8.com/ios/50/66c61c/web-design.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nobis, labore libero fugit accusamus, reprehenderit totam modi placeat, dignissimos itaque sed corrupti eos cumque pariatur architecto eveniet necessitatibus eaque inventore.".split("")
  }, 
  {
    id: 2,
    title: "App Development",
    src: "https://img.icons8.com/fluency-systems-regular/50/66c61c/web-design.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nobis, labore libero fugit accusamus, reprehenderit totam modi placeat, dignissimos itaque sed corrupti eos cumque pariatur architecto eveniet necessitatibus eaque inventore.".split("")
  },
  {
    id: 3,
    title: "Web Development",
    src: "https://img.icons8.com/ios/50/66c61c/laptop-coding.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nobis, labore libero fugit accusamus, reprehenderit totam modi placeat, dignissimos itaque sed corrupti eos cumque pariatur architecto eveniet necessitatibus eaque inventore.".split("")
  },
];

// General Variants
export const animationVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -100
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1
    }
  }
};

export const WhyMeTabs=[
  {label:"Experience"},
  {label:"Education"},
  {label:"Skills"}
]