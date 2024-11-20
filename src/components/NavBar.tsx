import React, { useRef, useState } from "react";
import { useCycle, motion, SVGMotionProps } from "framer-motion";
import { useDimensions } from "./data/use-dimensions";
import { sidebarVariants, menuItemVariants, navItems, navVariants } from "./data/constants";

// Corregimos la interfaz PathProps
interface PathProps extends SVGMotionProps<SVGPathElement> {
  variants?: {
    closed: { d?: string; opacity?: number };
    open: { d?: string; opacity?: number };
  };
}

interface MenuToggleProps {
  toggle: () => void;
}

interface MenuItemProps {
  title: string;
  href: string;
}

// Corregimos el componente Path
const Path = ({ ...props }: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#003070"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-5 left-5 z-20 w-[40px] h-[40px] bg-transparent flex items-center justify-center"
  >
    <svg width={23} height={23} viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const MenuItem: React.FC<MenuItemProps> = ({ title, href }) => {
  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-4 flex items-center cursor-pointer p-2"
    >
      <span className="text-white font-bold text-2xl hover:text-primary">
        <a href={href} className="flex items-center w-full">
          {title}
        </a>
      </span>
    </motion.li>
  );
};

const NavBar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [zIndex, setZIndex] = useState(50);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);

  const handleToggle = () => {
    toggleOpen();
    setZIndex(!isOpen ? 1000 : 50);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full h-full"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{ zIndex }}
    >
      <motion.div
        className="absolute top-0 left-0 w-64 h-full backdrop-blur-sm bg-white/30"
        variants={sidebarVariants}
      >
        <motion.ul className="p-8 mt-20" variants={navVariants}>
          {navItems.map((item) => (
            <MenuItem title={item.title} href={item.href} key={item.id} />
          ))}
        </motion.ul>
        <MenuToggle toggle={handleToggle} />
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;