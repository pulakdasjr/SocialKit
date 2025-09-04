// import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

// const Footer = () => {
//   const footerLinks = {
//     Product: [
//       { name: "Features", href: "#features" },
//       { name: "Pricing", href: "#pricing" },
//       { name: "Templates", href: "#templates" },
//       { name: "Integrations", href: "#integrations" },
//     ],
//     Company: [
//       { name: "About", href: "#about" },
//       { name: "Blog", href: "#blog" },
//       { name: "Careers", href: "#careers" },
//       { name: "Press", href: "#press" },
//     ],
//     Resources: [
//       { name: "Help Center", href: "#help" },
//       { name: "API Docs", href: "#api" },
//       { name: "Community", href: "#community" },
//       { name: "Status", href: "#status" },
//     ],
//     Legal: [
//       { name: "Privacy", href: "#privacy" },
//       { name: "Terms", href: "#terms" },
//       { name: "Security", href: "#security" },
//       { name: "Cookies", href: "#cookies" },
//     ],
//   };

//   const socialLinks = [
//     { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
//     { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
//     { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
//     { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" },
//   ];

//   return (
//     <footer className="bg-gray-50 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
//           {/* Brand Section */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">S</span>
//               </div>
//               <span className="text-xl font-bold text-gray-900">SocialKit</span>
//             </div>
//             <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
//               The easiest way to schedule and manage your social media content across all platforms.
//             </p>
            
//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-600 transition-all duration-300"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h3 className="text-gray-900 font-semibold mb-4">{category}</h3>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className="text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-200 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-500 text-sm">
//               © 2024 SocialPlan. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-6 text-sm">
//               <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#cookies" className="text-gray-600 hover:text-gray-900 transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Templates", href: "#templates" },
      { name: "Integrations", href: "#integrations" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    Resources: [
      { name: "Help Center", href: "#help" },
      { name: "API Docs", href: "#api" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" },
    ],
    Legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Cookies", href: "#cookies" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                SocialKit
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
              The easiest way to schedule and manage your social media content across all platforms.
            </p>
            
            {/* Social Links */}
            <nav aria-label="Social media">
              <ul className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, name }) => (
                  <li key={name}>
                    <a
                      href={href}
                      aria-label={name}
                      className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} SocialPlan. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
