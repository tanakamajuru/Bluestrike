import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink,
  navigationMenuTriggerStyle 
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-4">
        <NavigationMenu className="text-gray-900 dark:text-gray-100">
          <NavigationMenuList className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg px-2">
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/" 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/about" 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700")}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/portfolio" 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700")}
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/contacts" 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700")}
              >
                Contacts
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg p-1">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
