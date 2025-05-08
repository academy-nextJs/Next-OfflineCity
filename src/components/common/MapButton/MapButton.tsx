import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface IProps {
  onClick: () => void;
}
const MapButton = ({ onClick }: IProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MapPin className="w-8 h-8 text-blue-600" />
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className="absolute right-10 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap"
      >
        نمایش داخل نقشه
      </motion.div>
    </div>
  );
};

export default MapButton;
