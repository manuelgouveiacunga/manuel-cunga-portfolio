export type Language = "pt" | "en";

const common = {
  name: "Manuel Gouveia Cunga",
  email: "manuelgouveiacunga18@outlook.com",
  phone: "+244 926 329 731",
  whatsapp: "https://wa.me/244926329731",
  location: "Luanda, Angola",
  linkedIn: "https://www.linkedin.com/in/manuel-gouveia-cunga-943a62332/",
  github: "https://github.com/manuelgouveiacunga",
};

const skillGroups = {
  pt: [
    { name: "Análise de Teste", skills: ["Testes funcionais", "Exploratórios", "Regressão", "Integração", "Web e Mobile", "Critérios de aceitação", "Documentação de bugs"] },
    { name: "UI / UX Design", skills: ["Design de interfaces (UI)", "Experiência do utilizador (UX)", "Figma", "Wireframes e protótipos", "Design responsivo", "Acessibilidade", "Design systems", "Usabilidade"] },
    { name: "Ferramentas de Teste", skills: ["Postman", "Insomnia", "Swagger / OpenAPI", "Playwright"] },
    { name: "Front-end", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "shadcn/ui"] },
    { name: "Backend e Mobile", skills: ["Firebase", "APIs RESTful", "Flutter", "Dart"] },
    { name: "Ferramentas e Gestão", skills: ["Git", "GitHub", "GitLab", "Jira", "Confluence", "Scrum", "Kanban"] },
  ],
  en: [
    { name: "Test Analysis", skills: ["Functional testing", "Exploratory", "Regression", "Integration", "Web & Mobile", "Acceptance criteria", "Bug reporting"] },
    { name: "UI / UX Design", skills: ["Interface design (UI)", "User experience (UX)", "Figma", "Wireframes & prototypes", "Responsive design", "Accessibility", "Design systems", "Usability"] },
    { name: "Testing Tools", skills: ["Postman", "Insomnia", "Swagger / OpenAPI", "Playwright"] },
    { name: "Front-end", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "shadcn/ui"] },
    { name: "Backend & Mobile", skills: ["Firebase", "RESTful APIs", "Flutter", "Dart"] },
    { name: "Tools & Management", skills: ["Git", "GitHub", "GitLab", "Jira", "Confluence", "Scrum", "Kanban"] },
  ],
};

export const portfolioData = {
  pt: {
    ...common,
    ui: { nav: { about: "Sobre", achievements: "Conquistas", experience: "Experiência", education: "Formação", skills: "Competências", projects: "Projectos", contact: "Contacto" }, available: "Disponível para novas oportunidades", skip: "Saltar para o conteúdo", top: "Voltar ao topo", year: "ano", years: "anos", viewProject: "Ver projecto", send: "Enviar mensagem", sending: "A enviar...", sent: "Mensagem enviada com sucesso!", failed: "Não foi possível enviar. Tente novamente ou escreva para o meu email.", name: "Nome", message: "Mensagem", yourName: "O seu nome", yourMessage: "Escreva a sua mensagem", location: "Localização", social: "Redes", featured: "Em destaque" },
    title: "Analista de Teste e Desenvolvedor Front-end",
    hero: {
      heading: "Software que funciona, testado por quem também o constrói.",
      subheading: "Desenvolvo interfaces com React e Next.js e valido produtos com testes funcionais, de API e end-to-end. Em Luanda, Angola.",
      cta: "Ver projectos",
      ctaSecondary: "Falar comigo",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou profissional de tecnologia com experiência em desenvolvimento Front-end e foco actual em Análise de Teste e Qualidade de Software.",
        "Construí aplicações Web, implementei interfaces e integrei APIs. Por isso, ao testar, percebo o produto como quem o desenvolve e como quem precisa de garantir que ele funciona.",
        "Acredito que qualidade não é só entregar funcionalidades: é compreender comportamentos, antecipar falhas e garantir uma experiência consistente para os utilizadores.",
      ],
      stats: [
        { value: "4+", label: "anos em tecnologia" },
        { value: "3", label: "pódios em 2026" },
        { value: "10+", label: "projectos entregues" },
      ],
    },
    achievements: {
      title: "Conquistas em 2026",
      items: [
        { place: "3.º", title: "ANGOTIC Hackathon 2026", text: "Com o VUKA, solução que liga marcas e influenciadores digitais com tecnologia e inteligência artificial." },
        { place: "3.º", title: "AfricaCERT Cyber Drill 2026", text: "Desafios técnicos de cibersegurança, representando Angola a nível da SADC." },
        { place: "3.º", title: "LISTA JUMPSTART Hackathon / ACELERA ANGOLA 2026", text: "Novamente com o VUKA, desta vez na iniciativa de aceleração de projectos tecnológicos." },
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        { id: 1, company: "Mamboo", position: "Desenvolvedor Front-end", period: "Abr. 2025 – Mar. 2026", points: ["Refatoração de uma plataforma de gestão de frotas e entregadores.", "Interfaces com React, Next.js, TypeScript, Material UI e Tailwind CSS.", "Integração de APIs RESTful, testes manuais e de integração.", "Documentação técnica e colaboração com Produto e Backend."] },
        { id: 2, company: "Kubeta", position: "Desenvolvedor Web Front-end", period: "Ago. 2024 – Dez. 2025", points: ["Interfaces com React.js, TypeScript, HTML5 e Tailwind CSS.", "Correcção de bugs e optimização de componentes reutilizáveis.", "Colaboração com equipas de Design e Produto."] },
        { id: 3, company: "KUBICO", position: "Desenvolvedor Front-end / Mobile", period: "2022 – 2025", points: ["Aplicações multiplataforma com Flutter e Dart.", "Integração de APIs e interfaces responsivas.", "Revisão de código e processos ágeis com equipas UI/UX e Backend."] },
      ],
    },
    education: {
      title: "Percurso académico",
      items: [
        { id: 1, degree: "Engenharia Informática de Gestão", institution: "Universidade Jean Piaget de Angola", period: "2022 – 2024" },
        { id: 2, degree: "Informática Gestão", institution: "Instituto Politécnico de Administração e Gestão, Eliada", period: "2018 – 2022", status: "Concluído" },
      ],
      languagesTitle: "Idiomas",
      languages: [
        { language: "Português", level: "Nativo" },
        { language: "Inglês", level: "Intermédio (proficiência técnica)" },
      ],
    },
    skills: { title: "Competências", categories: skillGroups.pt },
    projects: {
      title: "Projectos",
      items: [
        { id: 1, title: "VUKA", featured: true, description: "Marketplace angolano que conecta marcas, empreendedores e influenciadores digitais, com criação de campanhas e gestão de colaborações com pagamentos em Kwanza. 3.º lugar em dois hackathons em 2026.", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Firebase"], link: "" },
        { id: 2, title: "Zuri", featured: true, description: "Marketplace com aplicações para utilizadores, lojistas, entregadores e administração. Valido funcionalidades, fluxos, APIs e documento defeitos em Pedidos, Entregas, Carteira, Pagamentos e Gestão.", technologies: ["Testes de API", "Web", "Mobile"], link: "" },
        { id: 3, title: "App Makas", description: "Aplicação do ecossistema Makas, onde valido fluxos de utilizador, comportamento das funcionalidades e qualidade da experiência.", technologies: ["Testes funcionais", "Mobile"], link: "" },
        { id: 4, title: "Software Testing Portfolio", description: "Casos de teste, testes exploratórios e de regressão, colecções Postman, validação com Swagger/OpenAPI, testes end-to-end com Playwright e relatórios de bugs.", technologies: ["Postman", "Swagger", "Playwright"], link: "https://github.com/manuelgouveiacunga" },
        { id: 5, title: "Site Institucional da Nzola Hub", technologies: ["Next.js", "TypeScript", "Tailwind CSS"], link: "https://nzola-hub-website.vercel.app" },
        { id: 6, title: "Kitadi - Controlo Financeiro", technologies: ["React.js", "TypeScript", "Tailwind CSS"], link: "https://kitadihub-controlo-financeiro.vercel.app/" },
        { id: 7, title: "ElephantBet - Site de Afiliados", technologies: ["React.js", "TypeScript", "Tailwind CSS"], link: "https://elephantbet.vercel.app/" },
        { id: 8, title: "Extensão VS Code: Removedor de comentários", technologies: ["TypeScript", "VS Code API"], link: "https://marketplace.visualstudio.com/items?itemName=manuelgouveiacunga.remove-unnecessary-comments-from-code-automatically" },
        { id: 9, title: "SwiftDrop - FAQs", technologies: ["React.js", "Tailwind CSS"], link: "https://github.com/manuelgouveiacunga/faqs_swiftdrop" },
        { id: 10, title: "Ngola Voz", technologies: ["HTML5", "CSS", "JS"], link: "https://manuelgouveiacunga.github.io/ngolavoz/" },
      ],
    },
    contact: { title: "Vamos conversar", description: "Aberto a oportunidades em Análise de Teste e desenvolvimento de produtos digitais." },
  },

  en: {
    ...common,
    ui: { nav: { about: "About", achievements: "Achievements", experience: "Experience", education: "Education", skills: "Skills", projects: "Projects", contact: "Contact" }, available: "Open to new opportunities", skip: "Skip to content", top: "Back to top", year: "year", years: "years", viewProject: "View project", send: "Send message", sending: "Sending...", sent: "Message sent successfully!", failed: "Could not send. Try again or email me directly.", name: "Name", message: "Message", yourName: "Your name", yourMessage: "Write your message", location: "Location", social: "Links", featured: "Featured" },
    title: "Test Analyst and Front-end Developer",
    hero: {
      heading: "Software that works, tested by someone who also builds it.",
      subheading: "I build interfaces with React and Next.js and validate products with functional, API and end-to-end testing. Based in Luanda, Angola.",
      cta: "See projects",
      ctaSecondary: "Get in touch",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a technology professional with a Front-end background and a current focus on Test Analysis and Software Quality.",
        "I've built web applications, implemented interfaces and integrated APIs. When I test, I see the product both as its developer and as someone who must make sure it works.",
        "I believe quality isn't only about shipping features: it's about understanding behaviour, anticipating failures and delivering a consistent experience to users.",
      ],
      stats: [
        { value: "4+", label: "years in tech" },
        { value: "3", label: "podium finishes in 2026" },
        { value: "10+", label: "projects delivered" },
      ],
    },
    achievements: {
      title: "2026 achievements",
      items: [
        { place: "3rd", title: "ANGOTIC Hackathon 2026", text: "With VUKA, a solution connecting brands and digital influencers using technology and artificial intelligence." },
        { place: "3rd", title: "AfricaCERT Cyber Drill 2026", text: "Technical cybersecurity challenges, representing Angola at SADC level." },
        { place: "3rd", title: "LISTA JUMPSTART Hackathon / ACELERA ANGOLA 2026", text: "VUKA again, this time in the tech project acceleration programme." },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        { id: 1, company: "Mamboo", position: "Front-end Developer", period: "Apr. 2025 – Mar. 2026", points: ["Refactored a fleet and delivery-driver management platform.", "Interfaces with React, Next.js, TypeScript, Material UI and Tailwind CSS.", "RESTful API integration, manual and integration testing.", "Technical documentation and collaboration with Product and Backend."] },
        { id: 2, company: "Kubeta", position: "Front-end Web Developer", period: "Aug. 2024 – Dec. 2025", points: ["Interfaces with React.js, TypeScript, HTML5 and Tailwind CSS.", "Bug fixing and optimisation of reusable components.", "Collaboration with Design and Product teams."] },
        { id: 3, company: "KUBICO", position: "Front-end / Mobile Developer", period: "2022 – 2025", points: ["Cross-platform apps with Flutter and Dart.", "API integration and responsive interfaces.", "Code review and agile processes with UI/UX and Backend teams."] },
      ],
    },
    education: {
      title: "Education",
      items: [
        { id: 1, degree: "Computer Science Engineering", institution: "Jean Piaget University of Angola", period: "2022 – 2024" },
        { id: 2, degree: "IT Management", institution: "Polytechnic Institute of Administration and Management, Eliada", period: "2018 – 2022", status: "Completed" },
      ],
      languagesTitle: "Languages",
      languages: [
        { language: "Portuguese", level: "Native" },
        { language: "English", level: "Intermediate (technical proficiency)" },
      ],
    },
    skills: { title: "Skills", categories: skillGroups.en },
    projects: {
      title: "Projects",
      items: [
        { id: 1, title: "VUKA", featured: true, description: "An Angolan marketplace connecting brands, entrepreneurs and digital influencers, with campaign creation and collaboration management paid in Kwanza. 3rd place at two hackathons in 2026.", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Firebase"], link: "" },
        { id: 2, title: "Zuri", featured: true, description: "A marketplace with apps for customers, shop owners, delivery drivers and administration. I validate features, flows and APIs, and document defects across Orders, Deliveries, Wallet, Payments and Management.", technologies: ["Test Analysis", "API testing", "Web", "Mobile"], link: "" },
        { id: 3, title: "App Makas", description: "An app in the Makas ecosystem where I validate user flows, feature behaviour and overall experience quality.", technologies: ["Test Analysis", "Mobile"], link: "" },
        { id: 4, title: "Software Testing Portfolio", description: "Test cases, exploratory and regression testing, Postman collections, Swagger/OpenAPI validation, Playwright end-to-end tests and bug reports.", technologies: ["Postman", "Swagger", "Playwright"], link: "https://github.com/manuelgouveiacunga" },
        { id: 5, title: "Nzola Hub Website", technologies: ["Next.js", "TypeScript", "Tailwind CSS"], link: "https://nzola-hub-website.vercel.app" },
        { id: 6, title: "Kitadi - Finance Control", technologies: ["React.js", "TypeScript", "Tailwind CSS"], link: "https://kitadihub-controlo-financeiro.vercel.app/" },
        { id: 7, title: "ElephantBet - Affiliate Site", technologies: ["React.js", "TypeScript", "Tailwind CSS"], link: "https://elephantbet.vercel.app/" },
        { id: 8, title: "VS Code Extension: Comment Remover", technologies: ["TypeScript", "VS Code API"], link: "https://marketplace.visualstudio.com/items?itemName=manuelgouveiacunga.remove-unnecessary-comments-from-code-automatically" },
        { id: 9, title: "SwiftDrop - FAQs", technologies: ["React.js", "Tailwind CSS"], link: "https://github.com/manuelgouveiacunga/faqs_swiftdrop" },
        { id: 10, title: "Ngola Voz", technologies: ["HTML5", "CSS", "JS"], link: "https://manuelgouveiacunga.github.io/ngolavoz/" },
      ],
    },
    contact: { title: "Let's talk", description: "Open to opportunities in Test Analysis, digital product development." },
  },
};

export type PortfolioData = typeof portfolioData.pt;
