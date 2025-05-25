import { Button } from "@heroui/react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface IProps {
  children: React.ReactNode;
  className: string;
}
const BlueButton = ({ children, className }: IProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offestX = mouseX - centerX;
    const offestY = mouseY - centerY;

    const distance = Math.sqrt(offestX ** 2 + offestY ** 2);

    if (distance < 150) {
      x.set(offestX * 0.6);
      y.set(offestY * 0.6);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div ref={buttonRef} style={{ translateX: springX, translateY: springY }} className="inline-block">
          <Button className={className} radius="full">
            {children}
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default BlueButton;
