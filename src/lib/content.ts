export type Language = 'es' | 'en';

export const content = {
  es: {
    nav: {
      about: 'Sobre mí',
      services: 'Servicios',
      projects: 'Proyectos',
      experience: 'Experiencia',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Arquitecto de Soluciones Big Data',
      subtitle: 'Profesional con más de 9 años de experiencia en ingeniería de datos, Big Data y Business Intelligence. Diseño e implemento soluciones de datos escalables.',
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
          title: 'Plataforma de Analytics en Tiempo Real',
          description: 'Diseño e implementación de una plataforma de analítica en tiempo real para una empresa de retail, procesando más de 1M de eventos por día.',
          tags: ['Apache Kafka', 'Spark Streaming', 'Power BI', 'AWS'],
        },
        {
          title: 'Migración de Data Warehouse a Cloud',
          description: 'Migración de un data warehouse on-premise a AWS Redshift, reduciendo costos en un 40%.',
          tags: ['AWS', 'Redshift', 'S3', 'Terraform'],
        },
        {
          title: 'Implementación de Data Lake',
          description: 'Construcción de un Data Lake para centralizar datos de múltiples fuentes, habilitando analytics avanzado.',
          tags: ['Databricks', 'Delta Lake', 'Spark', 'Azure'],
        },
        {
          title: 'Modelos de ML para Segmentación',
          description: 'Desarrollo de modelos de machine learning para segmentación de clientes con 92% de precisión.',
          tags: ['Python', 'Scikit-learn', 'MLflow', 'TensorFlow'],
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          company: 'Quantil',
          role: 'Arquitecto de Soluciones Big Data',
          period: '2022 - Presente',
          description: 'Diseño e implementación de arquitecturas de Big Data para clientes enterprise. Lidero equipos de ingeniería de datos y desarrollo de soluciones cloud.',
        },
        {
          company: 'Globant',
          role: 'Ingeniero de Datos Senior',
          period: '2020 - 2022',
          description: 'Desarrollo de pipelines de datos y soluciones de Big Data para clientes en múltiples industrias.',
        },
        {
          company: 'Oracle',
          role: 'Ingeniero de Datos',
          period: '2019 - 2020',
          description: 'Implementación de soluciones de base de datos y datos para productos Oracle Cloud.',
        },
        {
          company: 'Siesa',
          role: 'Analista de Business Intelligence',
          period: '2015 - 2019',
          description: 'Desarrollo de reportes y dashboards para apoyar la toma de decisiones ejecutivas.',
        },
      ],
    },
    testimonials: {
      title: 'Testimonios',
      items: [
        {
          quote: 'Anderson transformó completamente nuestra capacidad de tomar decisiones basadas en datos. Su expertise en Big Data fue fundamental para nuestro éxito.',
          author: 'Carlos Mendoza',
          role: 'CTO, TechCorp Latam',
        },
        {
          quote: 'Un profesional excepcional que combina conocimientos técnicos profundos con una visión estratégica de negocio.',
          author: 'Diana Ruiz',
          role: 'Directora de Datos, FinanceHub',
        },
        {
          quote: 'Su capacidad para simplificar conceptos complejos de datos hizo que todo el equipo adoptara la cultura data-driven.',
          author: 'Miguel Torres',
          role: 'CEO, InnovaData',
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
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Big Data Solutions Architect',
      subtitle: 'Professional with 9+ years of experience in data engineering, Big Data, and Business Intelligence. I design and implement scalable data solutions.',
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
          title: 'Real-time Analytics Platform',
          description: 'Design and implementation of a real-time analytics platform for a retail company, processing over 1M events per day.',
          tags: ['Apache Kafka', 'Spark Streaming', 'Power BI', 'AWS'],
        },
        {
          title: 'Data Warehouse Cloud Migration',
          description: 'Migration of an on-premise data warehouse to AWS Redshift, reducing costs by 40%.',
          tags: ['AWS', 'Redshift', 'S3', 'Terraform'],
        },
        {
          title: 'Data Lake Implementation',
          description: 'Construction of a Data Lake to centralize data from multiple sources, enabling advanced analytics.',
          tags: ['Databricks', 'Delta Lake', 'Spark', 'Azure'],
        },
        {
          title: 'ML Models for Customer Segmentation',
          description: 'Development of machine learning models for customer segmentation with 92% accuracy.',
          tags: ['Python', 'Scikit-learn', 'MLflow', 'TensorFlow'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'Quantil',
          role: 'Big Data Solutions Architect',
          period: '2022 - Present',
          description: 'Design and implementation of Big Data architectures for enterprise clients. Lead data engineering teams and develop cloud solutions.',
        },
        {
          company: 'Globant',
          role: 'Senior Data Engineer',
          period: '2020 - 2022',
          description: 'Development of data pipelines and Big Data solutions for clients across multiple industries.',
        },
        {
          company: 'Oracle',
          role: 'Data Engineer',
          period: '2019 - 2020',
          description: 'Implementation of database and data solutions for Oracle Cloud products.',
        },
        {
          company: 'Siesa',
          role: 'Business Intelligence Analyst',
          period: '2015 - 2019',
          description: 'Development of reports and dashboards to support executive decision-making.',
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        {
          quote: 'Anderson completely transformed our ability to make data-driven decisions. His expertise in Big Data was fundamental to our success.',
          author: 'Carlos Mendoza',
          role: 'CTO, TechCorp Latam',
        },
        {
          quote: 'An exceptional professional who combines deep technical knowledge with a strategic business vision.',
          author: 'Diana Ruiz',
          role: 'Director of Data, FinanceHub',
        },
        {
          quote: 'His ability to simplify complex data concepts made the entire team adopt a data-driven culture.',
          author: 'Miguel Torres',
          role: 'CEO, InnovaData',
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
