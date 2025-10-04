import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink,
  navigationMenuTriggerStyle 
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useNavigation } from '../App';

export default function Navbar() {
  const { currentPage, navigate } = useNavigation();

  const handleNavigation = (e, page) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-4">
        <NavigationMenu className="text-gray-900 dark:text-gray-100">
          <NavigationMenuList className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg px-2">
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/" 
                onClick={(e) => handleNavigation(e, 'home')}
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                  currentPage === 'home' && "bg-gray-100 dark:bg-gray-700"
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/about" 
                onClick={(e) => handleNavigation(e, 'about')}
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                  currentPage === 'about' && "bg-gray-100 dark:bg-gray-700"
                )}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/portfolio" 
                onClick={(e) => handleNavigation(e, 'portfolio')}
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                  currentPage === 'portfolio' && "bg-gray-100 dark:bg-gray-700"
                )}
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/contacts" 
                onClick={(e) => handleNavigation(e, 'contacts')}
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                  currentPage === 'contacts' && "bg-gray-100 dark:bg-gray-700"
                )}
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
