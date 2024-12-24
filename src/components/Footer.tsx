import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      className="bg-white border-t border-gray-200 px-6 py-4 mt-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center text-sm text-gray-500">
        © 2024 Project Management System. All rights reserved.
      </div>
    </motion.footer>
  );
};