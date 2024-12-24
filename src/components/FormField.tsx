import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const FormField = ({ label, children, required = false, className }: FormFieldProps) => {
  return (
    <motion.div 
      className={cn("mb-4", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </motion.div>
  );
};