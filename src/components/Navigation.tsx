import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "initial-application",
    label: "Initial Application",
    content: "Application details and initial project information"
  },
  {
    id: "proposal",
    label: "Proposal",
    content: "Project proposal and planning documents"
  },
  {
    id: "grant",
    label: "Grant",
    content: "Grant application and funding details"
  },
  {
    id: "funding-agreement",
    label: "Funding Agreement",
    content: "Terms and conditions of funding"
  },
  {
    id: "contacts",
    label: "Contacts",
    content: "Project stakeholders and team members"
  },
  {
    id: "transactions",
    label: "Transactions",
    content: "Financial transactions and budget tracking"
  },
  {
    id: "quarterly-report",
    label: "Quarterly Report",
    content: "Progress reports and performance metrics"
  }
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
            key={tab.id}
            className={cn(
              "py-4 px-1 relative font-medium text-sm whitespace-nowrap",
              index === 0 ? "text-[#ea384c] border-b-2 border-[#ea384c]" : "text-gray-500 hover:text-gray-700"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};