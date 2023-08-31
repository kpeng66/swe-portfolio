import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    splashtop,
    carrent,
    jobit,
    tripguide,
    threejs,
    salesforce,
    formation,
    c,
    sql,
    spark,
    tensorflow,
    pytorch,
    linux,
    nextjs,
    django,
    postgres,
    houseparty,
    localenergy,
    promptopia,
    store
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Software Engineer",
      icon: web,
    },
    {
      title: "Product Engineer",
      icon: mobile,
    },
    {
      title: "Backend Software Engineer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Engineer",
      company_name: "Splashtop",
      icon: splashtop,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Improve analytics efficiency by 35% by building data pipelines with Fivetran to ETL cloud data into Snowflake",
        "Support web development team by handling a data integrity bug in form submission logic in Django server",
        "Increase lead conversion rates by 10% by implementing random forest ML model with SKlearn and MLflow",
        "Transform and manage data models, queries, and scripts in Dbt following analytics best practices (i.e. CI/CD)",
        "Program 50+ advanced SQL queries (i.e. window functions, UDFs) to extract churn KPIs from MySQL database",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Salesforce",
      icon: salesforce,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - March 2023",
      points: [
       "Authored 100+ advanced SQL queries (i.e. CTEs) in Snowflake to construct and update 2 critical dashboards",
       "Increased productivity among sales teams by 20% by developing Tableau dashboard to track sales attainment",
       "Launched an interactive Google Sheets dashboard to track 15 key opportunity pipeline metrics for 5 directors",
       "Integrated 3 new fields (i.e. activity) from Salesforce into Snowflake by partnering with Data Engineering",
       "Led enablement efforts for 100+ sales managers by communicating migration into Salesforce Lightning",
      ],
    },
    {
      title: "Full Stack Software Engineering Fellow",
      company_name: "Formation",
      icon: formation,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Selected for a highly competitive fellowship for coaching and mentorship from top-tier software engineers",
        "Completing intensive training in data structures, algorithms, and coding principles in Python and JavaScript",
        "Studying key system design concepts in modern web apps and machine learning models for production"
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "TBD",
      name: "TBD",
      designation: "TBD",
      company: "TBD",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Local Energy E-commerce Bundling Platform (Admin Dashboard)",
      description:
        "A dual-site full-stack e-commerce web app that allows sellers with local energy generation to bundle products with renewable energy credits for eco-conscious buyers. This is the seller-facing admin dashboard. Simulated solar energy generation data with 3rd-party NREL PVWatts API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: localenergy,
      source_code_link: "https://github.com/kpeng66/local-energy-marketplace-admin",
      deployment_link: "https://local-energy-ecommerce-admin.vercel.app/"
    },
    {
      name: "Local Energy E-commerce Bundling Platform (Storefront)",
      description:
        "A dual-site full-stack e-commerce web app that allows sellers with local energy generation to bundle products with renewable energy credits for eco-conscious buyers. This is the user-facing storefront. Implemented checkout and payment functionality with 3rd-party Stripe API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: store,
      source_code_link: "https://github.com/kpeng66/local-energy-marketplace-store",
      deployment_link: "https://local-energy-ecommerce-store.vercel.app/"
    },
    {
      name: "Promptopia",
      description:
        "A full-stack CRUD web app that allows users to share and collaborate on useful Chat-GPT prompts. Implemented registration and authorization with Google OAuth 2.0.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/kpeng66/promptopia",
      deployment_link: "https://promptopia-eta-one.vercel.app/"
    },
    {
      name: "Music Controller",
      description:
        "A full-stack web app that allows users to join and create rooms to listen to Spotify songs simultaneously. Implemented features like pausing and skipping songs and account authorization through 3rd-party Spotify API.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: houseparty,
      source_code_link: "https://github.com/kpeng66/Music-Controller",
      deployment_link: "https://houseparty-42f08c977e5f.herokuapp.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };