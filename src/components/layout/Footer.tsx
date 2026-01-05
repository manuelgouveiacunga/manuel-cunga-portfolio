// import { useLanguage } from "@/contexts/LanguageContext";
// import { Heart } from "lucide-react";

// export default function Footer() {
//   const { language } = useLanguage();
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-primary text-white py-12">
//       <div className="container">
//         <div className="max-w-5xl mx-auto">
//           {/* Footer Content */}
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             {/* About */}
//             <div>
//               <h3 className="text-lg font-bold mb-4">Manuel Cunga</h3>
//               <p className="text-white/80 text-sm">
//                 {language === "pt"
//                   ? "Desenvolvedor Front-End apaixonado por criar experiências digitais incríveis."
//                   : "Front-End Developer passionate about creating amazing digital experiences."}
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-bold mb-4">
//                 {language === "pt" ? "Links Rápidos" : "Quick Links"}
//               </h3>
//               <ul className="space-y-2 text-sm text-white/80">
//                 <li>
//                   <a href="#hero" className="hover:text-white transition-colors">
//                     {language === "pt" ? "Início" : "Home"}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#about" className="hover:text-white transition-colors">
//                     {language === "pt" ? "Sobre" : "About"}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#projects" className="hover:text-white transition-colors">
//                     {language === "pt" ? "Projetos" : "Projects"}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#contact" className="hover:text-white transition-colors">
//                     {language === "pt" ? "Contato" : "Contact"}
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Social */}
//             <div>
//               <h3 className="text-lg font-bold mb-4">
//                 {language === "pt" ? "Redes Sociais" : "Social Media"}
//               </h3>
//               <ul className="space-y-2 text-sm text-white/80">
//                 <li>
//                   <a
//                     href="https://linkedin.com/in/manuel-gouveia-cunga-943a62332/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white transition-colors"
//                   >
//                     LinkedIn
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white transition-colors"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="border-t border-white/20 pt-8">
//             {/* Copyright */}
//             <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
//               <p>
//                 {language === "pt" ? "© " : "© "}
//                 {currentYear} Manuel Cunga.{" "}
//                 {language === "pt"
//                   ? "Todos os direitos reservados."
//                   : "All rights reserved."}
//               </p>
//               <div className="flex items-center gap-1 mt-4 md:mt-0">
//                 {language === "pt" ? "Feito com" : "Made with"}
//                 <Heart size={16} className="text-secondary fill-secondary" />
//                 {language === "pt" ? "em Luanda" : "in Luanda"}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
