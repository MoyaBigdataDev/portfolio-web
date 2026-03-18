export type Language = 'es' | 'en';

export const content = {
  es: {
    nav: {
      about: 'Sobre mí',
      services: 'Servicios',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Formación',
      certifications: 'Certificaciones',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Arquitecto de Soluciones Big Data',
      subtitle: 'Ingeniero de Sistemas con experiencia en análisis de datos, visualización de información y monitoreo de plataformas IBM i (AS400). Analista de Producción, especializado en dashboards, automatización de reportes y generación de información estratégica para la toma de decisiones. Especialista en Big Data de la universidad UNIMINUTO y cuento con certificación Scrum Practitioner (CM-SPC), además conocimientos básicos de nube con AWS.',
      cta: 'Contáctame',
      scroll: 'Desliza para explorar',
    },
    about: {
      title: 'Sobre Mí',
      description: 'Profesional en Gestión de Sistemas de Información con más de 9 años de experiencia en ingeniería de datos, Big Data y Business Intelligence. Especializado en diseñar e implementar soluciones de datos, pipelines de datos y análisis avanzado.',
      skills: ['Apache Spark', 'AWS', 'Azure', 'Python', 'SQL', 'Power BI', 'Machine Learning', 'Apache Airflow', 'Databricks', 'Terraform'],
    },
    services: {
      title: 'Servicios',
      items: [
        {
          title: 'Arquitectura de Datos',
          description: 'Diseño de arquitecturas de datos escalables y robustas en la nube (AWS, Azure, GCP).',
        },
        {
          title: 'Ingeniería de Datos',
          description: 'Construcción de pipelines de datos robustos usando Apache Spark, Kafka, Airflow y Databricks.',
        },
        {
          title: 'Analytics e Insights',
          description: 'Implementación de soluciones analíticas avanzadas con Power BI, Tableau y Looker.',
        },
        {
          title: 'Machine Learning',
          description: 'Desarrollo de modelos predictivos con TensorFlow, PyTorch y Scikit-learn.',
        },
        {
          title: 'Migración a la Nube',
          description: 'Migración de data warehouses on-premise a soluciones cloud nativas.',
        },
        {
          title: 'Formación y Capacitación',
          description: 'Capacitación en herramientas de Big Data, cloud y analytics para equipos técnicos.',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          title: 'Extracción de Datos AS400',
          description: 'Desarrollo de proyectos de extracción de datos de tiempos de procesamiento en plataformas IBM i (AS400). Automatización de reportes y generación de información estratégica.',
          tags: ['AS400', 'IBM i', 'SQL', 'Python'],
          image: '/ibm.jpg',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Gestión de Tickets GLPI',
          description: 'Desarrollo de proyectos de extracción, tratamiento de datos y presentación de procesos para la gestión de tickets de GLPI.',
          tags: ['GLPI', 'Python', 'ETL', 'Dashboards'],
          image: '/GLPI.png',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Monitoreo de Infraestructura',
          description: 'Desarrollo de dashboards para monitoreo de infraestructura, visualización de información y alertas en tiempo real.',
          tags: ['Power BI', 'Python', 'Monitoreo', 'Dashboards'],
          image: '/powerbi-dashboard.png',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Especialización Big Data - Python Data Science',
          description: 'Proyectos de la especialización en Big Data: talleres de Python, análisis de datos, extracción y transformación de datos.',
          tags: ['Python', 'Jupyter', 'Pandas', 'SQL'],
          image: '/sql.jpg',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Práctica Bases de Datos Masivas',
          description: 'Práctica de Bases de Datos Masivas - procesamiento de grandes volúmenes de datos con Apache Spark.',
          tags: ['Spark', 'Hadoop', 'Big Data'],
          image: '/hadoop.jpg',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          company: 'Empresa del sector financiero',
          role: 'Analista de Reportería y Datos',
          period: '2024 - Presente',
          description: 'Generación de reportería del área de producción para empresa del sector financiero con más de 13 entidades como clientes. Diseño, extracción, tratamiento y presentación de datos. Integración de herramientas como AS400, Excel, archivos CSV y Python. Desarrollo de dashboards en Power BI para apoyo a la toma de decisiones.',
        },
        {
          company: 'Comercializadora Contreras Hermanos',
          role: 'Consultor en Gestión de Datos',
          period: '2025',
          description: 'Consultoría para empresa dedicada a la fabricación de estructuras metálicas. Realicé diagnóstico integral de procesos y redefinición de estándares de uso de datos. Optimización de procesos de compras, venta y producción, logrando una mejora general del 24% en eficiencia operativa.',
        },
      ],
    },
    education: {
      title: 'Formación Académica',
      items: [
        {
          institution: 'UNIMINUTO',
          degree: 'Especialización Big Data',
          period: 'Agosto 2025 - En curso',
          description: 'Especialización enfocada en arquitecturas de Big Data, procesamiento distribuido y análisis de datos a gran escala.',
        },
        {
          institution: 'Universidad del Tolima',
          degree: 'Ingeniería de Sistemas',
          period: 'Agosto 2021 - Junio 2023',
          description: 'Formación en ingeniería de sistemas, análisis de datos y tecnologías de la información.',
        },
        {
          institution: 'Universidad del Tolima',
          degree: 'Tecnología en Gestión de Bases de Datos',
          period: 'Agosto 2020 - Junio 2021',
          description: 'Formación en gestión de bases de datos, administración y optimización.',
        },
      ],
    },
    certifications: {
      title: 'Certificaciones',
      items: [
        {
          name: 'SCRUM Practitioner (CM-SPC)',
          issuer: 'Scrum Alliance',
          year: '2025',
          image: '/Scrum.png',
        },
        {
          name: 'AWS Cloud Practitioner Essentials',
          issuer: 'Coursera',
          year: '2026',
          image: '/aws.png',
        },
      ],
    },
    testimonials: {
      title: 'Testimonios',
      items: [
        {
          quote: 'Anderson ha sido fundamental en la optimización de nuestros procesos de producción. Su capacidad para transformar datos en información útil nos permitió mejorar nuestra eficiencia operativa.',
          author: 'Mauricio Contreras',
          role: 'Jefe de Producción, Comercializadora Contreras Hermanos',
        },
        {
          quote: 'Su habilidad para integrar diferentes fuentes de datos y crear dashboards claros ha mejorado significativamente nuestra toma de decisiones.',
          author: 'Edwin González',
          role: 'Coordinador de Producción',
        },
        {
          quote: 'Excelente profesional, siempre dispuesto a colaborar y encontrar soluciones efectivas para los desafíos de datos.',
          author: 'Miguel Hernández',
          role: 'Especialista en Producción',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para transformar tu negocio con datos? Hablemos.',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      form: {
        name: 'Nombre',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
      },
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Big Data Solutions Architect',
      subtitle: 'Systems Engineer with experience in data analysis, information visualization, and IBM i (AS400) platform monitoring. Production Analyst, specialized in dashboards, report automation, and strategic information generation for decision-making. Big Data Specialist from UNIMINUTO University, certified as Scrum Practitioner (CM-SPC), with basic cloud knowledge in AWS.',
      cta: 'Contact Me',
      scroll: 'Scroll to explore',
    },
    about: {
      title: 'About Me',
      description: 'Information Systems Management professional with 9+ years of experience in data engineering, Big Data, and Business Intelligence. Specialized in designing and implementing data solutions, data pipelines, and advanced analytics.',
      skills: ['Apache Spark', 'AWS', 'Azure', 'Python', 'SQL', 'Power BI', 'Machine Learning', 'Apache Airflow', 'Databricks', 'Terraform'],
    },
    services: {
      title: 'Services',
      items: [
        {
          title: 'Data Architecture',
          description: 'Design of scalable and robust data architectures in the cloud (AWS, Azure, GCP).',
        },
        {
          title: 'Data Engineering',
          description: 'Building robust data pipelines using Apache Spark, Kafka, Airflow, and Databricks.',
        },
        {
          title: 'Analytics & Insights',
          description: 'Implementation of advanced analytics solutions with Power BI, Tableau, and Looker.',
        },
        {
          title: 'Machine Learning',
          description: 'Development of predictive models with TensorFlow, PyTorch, and Scikit-learn.',
        },
        {
          title: 'Cloud Migration',
          description: 'Migration of on-premise data warehouses to native cloud solutions.',
        },
        {
          title: 'Training & Education',
          description: 'Training in Big Data, cloud, and analytics tools for technical teams.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'AS400 Data Extraction',
          description: 'Development of data extraction projects for processing times on IBM i (AS400) platforms. Report automation and strategic information generation.',
          tags: ['AS400', 'IBM i', 'SQL', 'Python'],
          image: '/ibm.jpg',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'GLPI Ticket Management',
          description: 'Development of data extraction, processing, and presentation projects for GLPI ticket management.',
          tags: ['GLPI', 'Python', 'ETL', 'Dashboards'],
          image: '/GLPI.png',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Infrastructure Monitoring',
          description: 'Development of dashboards for infrastructure monitoring, information visualization, and real-time alerts.',
          tags: ['Power BI', 'Python', 'Monitoring', 'Dashboards'],
          image: '/powerbi-dashboard.png',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Big Data Specialization - Python Data Science',
          description: 'Projects from the Big Data specialization: Python workshops, data analysis, data extraction and transformation.',
          tags: ['Python', 'Jupyter', 'Pandas', 'SQL'],
          image: '/sql.jpg',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
        {
          title: 'Massive Databases Practice',
          description: 'Massive Databases practice - processing large data volumes with Apache Spark.',
          tags: ['Spark', 'Hadoop', 'Big Data'],
          image: '/hadoop.jpg',
          link: 'https://github.com/MoyaBigdataDev/especializacion-bigdata',
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'Financial sector company',
          role: 'Reporting and Data Analyst',
          period: '2024 - Present',
          description: 'Generation of production area reporting for a financial sector company with more than 13 client entities. Design, extraction, processing, and data presentation. Integration of tools like AS400, Excel, CSV files, and Python. Development of Power BI dashboards for decision-making support.',
        },
        {
          company: 'Comercializadora Contreras Hermanos',
          role: 'Data Management Consultant',
          period: '2025',
          description: 'Consulting for a company dedicated to metal structure manufacturing. Conducted comprehensive process diagnosis and redefined data usage standards. Optimization of purchasing, sales, and production processes, achieving a 24% improvement in overall operational efficiency.',
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          institution: 'UNIMINUTO',
          degree: 'Big Data Specialization',
          period: 'August 2025 - In progress',
          description: 'Specialization focused on Big Data architectures, distributed processing, and large-scale data analysis.',
        },
        {
          institution: 'Universidad del Tolima',
          degree: 'Systems Engineering',
          period: 'August 2021 - June 2023',
          description: 'Training in systems engineering, data analysis, and information technology.',
        },
        {
          institution: 'Universidad del Tolima',
          degree: 'Database Management Technology',
          period: 'August 2020 - June 2021',
          description: 'Training in database management, administration, and optimization.',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'SCRUM Practitioner (CM-SPC)',
          issuer: 'Scrum Alliance',
          year: '2025',
          image: '/Scrum.png',
        },
        {
          name: 'AWS Cloud Practitioner Essentials',
          issuer: 'Coursera',
          year: '2026',
          image: '/aws.png',
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        {
          quote: 'Anderson has been fundamental in optimizing our production processes. His ability to transform data into useful information allowed us to improve our operational efficiency.',
          author: 'Mauricio Contreras',
          role: 'Production Manager, Comercializadora Contreras Hermanos',
        },
        {
          quote: 'His ability to integrate different data sources and create clear dashboards has significantly improved our decision-making.',
          author: 'Edwin González',
          role: 'Production Coordinator',
        },
        {
          quote: 'Excellent professional, always willing to collaborate and find effective solutions for data challenges.',
          author: 'Miguel Hernández',
          role: 'Production Specialist',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Ready to transform your business with data? Let\'s talk.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      form: {
        name: 'Name',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

export const getContent = (lang: Language) => content[lang];
