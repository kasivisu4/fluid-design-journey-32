import { motion } from "framer-motion";
import { FormField } from "@/components/FormField";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    fiscalYear: "",
    number: "",
    status: "",
    resourceType: "",
    phaseCost: "",
    projectCost: "",
    fundsRequested: "",
    cashInHand: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Project created successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div 
        className="container py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Create Projects
        </motion.h1>
        
        <Navigation />

        <motion.div 
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-6">PROJECT DATA</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormField label="Project Name" required>
              <Input 
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              />
            </FormField>

            <FormField label="Fiscal Year" required>
              <Input 
                placeholder="Enter fiscal year"
                value={formData.fiscalYear}
                onChange={(e) => setFormData({ ...formData, fiscalYear: e.target.value })}
              />
            </FormField>

            <FormField label="Number">
              <Input 
                placeholder="Enter number"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              />
            </FormField>

            <FormField label="Status" required>
              <Select>
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </Select>
            </FormField>

            <FormField label="Resource Type" required>
              <Select>
                <option value="">Select resource type</option>
                <option value="human">Human</option>
                <option value="material">Material</option>
                <option value="financial">Financial</option>
              </Select>
            </FormField>

            <FormField label="Phase Cost" required>
              <Input 
                type="number"
                placeholder="Enter phase cost"
                value={formData.phaseCost}
                onChange={(e) => setFormData({ ...formData, phaseCost: e.target.value })}
              />
            </FormField>

            <FormField label="Project Cost" required>
              <Input 
                type="number"
                placeholder="Enter project cost"
                value={formData.projectCost}
                onChange={(e) => setFormData({ ...formData, projectCost: e.target.value })}
              />
            </FormField>

            <FormField label="Funds Requested" required>
              <Input 
                type="number"
                placeholder="Enter funds requested"
                value={formData.fundsRequested}
                onChange={(e) => setFormData({ ...formData, fundsRequested: e.target.value })}
              />
            </FormField>

            <FormField label="Cash in Hand" required>
              <Input 
                type="number"
                placeholder="Enter cash in hand"
                value={formData.cashInHand}
                onChange={(e) => setFormData({ ...formData, cashInHand: e.target.value })}
              />
            </FormField>

            <FormField label="Project Description" className="col-span-full">
              <Textarea 
                placeholder="Enter project description"
                className="h-32"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </FormField>
          </form>
        </motion.div>

        <motion.div 
          className="flex justify-end space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;