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
import '../styles/brand-colors.css';

export default function Navbar() {
  const { currentPage, navigate } = useNavigation();

  const handleNavigation = (e, page) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <img 
          src="/src/assets/logo.jpg" 
          alt="BlueStrike Logo" 
          className="h-12 w-12 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 shadow-xl border-2 border-white/20 dark:border-[#4A90E2]/30"
          onClick={() => navigate('home')}
        />
        
        <NavigationMenu className="text-[#2E4057] dark:text-[#E8EEF4]">
          <NavigationMenuList className="bg-[#E8EEF4] dark:bg-[#2E4057] backdrop-blur-sm rounded-full shadow-xl border border-[#D1DDE8] dark:border-[#4A5568] px-2">
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/" 
                onClick={(e) => handleNavigation(e, 'home')}
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent hover:bg-[#D1DDE8] hover:text-[#1A1F2E] dark:hover:bg-[#3D5270] dark:hover:text-[#F5F7FA] cursor-pointer text-[#2E4057] dark:text-[#E8EEF4] transition-all duration-200 font-medium",
                  currentPage === 'home' && "border-b-2 border-[#4A90E2] dark:border-[#64B5F6] text-[#4A90E2] dark:text-[#64B5F6] font-semibold"
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
                  "bg-transparent hover:bg-[#D1DDE8] hover:text-[#1A1F2E] dark:hover:bg-[#3D5270] dark:hover:text-[#F5F7FA] cursor-pointer text-[#2E4057] dark:text-[#E8EEF4] transition-all duration-200 font-medium",
                  currentPage === 'about' && "border-b-2 border-[#4A90E2] dark:border-[#64B5F6] text-[#4A90E2] dark:text-[#64B5F6] font-semibold"
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
                  "bg-transparent hover:bg-[#D1DDE8] hover:text-[#1A1F2E] dark:hover:bg-[#3D5270] dark:hover:text-[#F5F7FA] cursor-pointer text-[#2E4057] dark:text-[#E8EEF4] transition-all duration-200 font-medium",
                  currentPage === 'portfolio' && "border-b-2 border-[#4A90E2] dark:border-[#64B5F6] text-[#4A90E2] dark:text-[#64B5F6] font-semibold"
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
                  "bg-transparent hover:bg-[#D1DDE8] hover:text-[#1A1F2E] dark:hover:bg-[#3D5270] dark:hover:text-[#F5F7FA] cursor-pointer text-[#2E4057] dark:text-[#E8EEF4] transition-all duration-200 font-medium",
                  currentPage === 'contacts' && "border-b-2 border-[#4A90E2] dark:border-[#64B5F6] text-[#4A90E2] dark:text-[#64B5F6] font-semibold"
                )}
              >
                Contacts
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="bg-[#E8EEF4] dark:bg-[#2E4057] hover:bg-[#D1DDE8] dark:hover:bg-[#3D5270] backdrop-blur-sm rounded-full shadow-xl border border-[#D1DDE8] dark:border-[#4A5568] p-1 transition-all duration-200">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
