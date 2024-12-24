import { motion } from "framer-motion";
import { Bell, Settings } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <motion.header 
      className="bg-white border-b border-gray-200 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#ea384c]">Project Management</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-gray-500" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-[#ea384c] text-white flex items-center justify-center">
            JD
          </div>
        </div>
      </div>
    </motion.header>
  );
};