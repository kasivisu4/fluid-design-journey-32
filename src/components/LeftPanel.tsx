import { motion } from "framer-motion";
import { 
  LogOut, 
  Home, 
  FileText, 
  Users, 
  Search,
  Building2,
  ChartBar,
  Lock,
  FolderPlus,
  UserPlus,
  Building
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: FileText, label: "TPTF", href: "/tptf" },
  {
    icon: FileText,
    label: "Projects",
    href: "#",
    subItems: [
      { icon: FolderPlus, label: "Create", href: "/projects/create" },
      { icon: Search, label: "Search", href: "/projects/search" },
    ],
  },
  {
    icon: Users,
    label: "Contacts",
    href: "#",
    subItems: [
      { icon: UserPlus, label: "Create", href: "/contacts/create" },
      { icon: Search, label: "Search", href: "/contacts/search" },
    ],
  },
  {
    icon: Building2,
    label: "Properties",
    href: "#",
    subItems: [
      { icon: Building, label: "Create", href: "/properties/create" },
      { icon: Search, label: "Search", href: "/properties/search" },
    ],
  },
  { icon: ChartBar, label: "Reports", href: "/reports" },
  { icon: Lock, label: "Admin Rights", href: "/admin" },
];

export const LeftPanel = () => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-[#ea384c]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.href} 
                      className="flex items-center gap-2 text-white hover:bg-white/10"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.label}>
                          <SidebarMenuSubButton
                            href={subItem.href}
                            className="text-white hover:bg-white/10"
                          >
                            <subItem.icon className="h-4 w-4" />
                            <span>{subItem.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#ea384c]">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white hover:bg-white/10"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};