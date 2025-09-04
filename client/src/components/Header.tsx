import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Pricing", href: "#pricing" },
    { 
      name: "Features", 
      href: "#features",
      submenu: [
        { name: "AI Caption Generation", href: "#ai-captions" },
        { name: "Multi-Platform Posting", href: "#platforms" },
        { name: "Content Calendar", href: "#calendar" },
        { name: "Analytics Dashboard", href: "#analytics" },
      ]
    },
    {
      name: "Tools",
      href: "#tools", 
      submenu: [
        { name: "Hashtag Generator", href: "#hashtags" },
        { name: "Content Planner", href: "#planner" },
        { name: "Post Templates", href: "#templates" },
        { name: "Brand Assets", href: "#assets" },
      ]
    },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SocialKit</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <a
                        href={subItem.href}
                        className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 shadow-md">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Button variant="ghost" className="w-full mb-2 justify-start">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  </header>
)

};

export default Header;