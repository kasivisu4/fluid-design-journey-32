import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  "Initial Application",
  "Proposal",
  "Grant",
  "Funding Agreement",
  "Contacts",
  "Transactions",
  "Quarterly Report",
];

export const Navigation = () => {
  return (
    <motion.nav 
      className="mb-8 border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab}
            className={cn(
              "py-4 px-1 relative font-medium text-sm whitespace-nowrap",
              index === 0 ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-gray-700"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};