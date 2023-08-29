let timelineElements = [
    {
        id: 12,
        title: "SpeakAIPro",
        location: "Home",
        description:
            "The Speakaipro Web Application is a comprehensive project that seamlessly combines Vite, React, TypeScript, " +
            "and Django to create a versatile platform aimed at enhancing communication skills through AI interaction. This " +
            "project leverages OpenAI's advanced logic alongside Elevenlabs for voice audio generation, resulting in a highly " +
            "adaptable and user-centric experience. On the frontend, Speakaipro employs the power of Vite, React, and TypeScript " +
            "to provide a dynamic and responsive interface. TailwindCSS takes charge of styling, ensuring an aesthetically pleasing " +
            "design. Behind the scenes, Django forms the robust backend foundation, handling essential functionalities seamlessly. " +
            "Speakaipro's mission is to empower users with tailored AI interactions, making it perfect for scenarios like job interviews " +
            "or language practice. Through cutting-edge technology, this web app allows individuals to hone their speaking abilities " +
            "with ease and precision.",
        date: "july 2023 - Current",
        buttonText: 'Projects',
        link: 'https://speakaipro.dev/',
        icon: "school",
    },
    {
        id: 11,
        title: "Location Based Real Estate Listing",
        location: "Home",
        description:
            "The Location-Based Real Estate Website project is a full stack web application that combines Django and React Js to create a platform for showcasing real estate listings. The website utilizes Material UI, a React library for building UI components, to design and style the frontend. Leaflet, a JavaScript library for interactive maps, is integrated with React using React-Leaflet to add a geographic aspect to the project.\n" +
            "\n" +
            "The PostgreSQL database used in this project is made spatially aware by adding the PostGIS extension. This allows for both regular and spatial queries, including geometric information such as distance calculations.\n" +
            "\n" +
            "User authentication is implemented using the Djoser library, enabling users to add, delete, or update property listings from the frontend. Error handling for both client-side and server-side errors in forms is also covered.",
        date: "jun 2023 - july 2023",
        buttonText: 'Projects',
        link: 'https://vaqueraoscar0.github.io/Real-Estate-Website/',
        icon: "school",
    },
    {
        id: 10,
        title: "Frontend Mentor Challenges",
        location: "Home",
        description:
            "Completed Various Frontend Mentor Challenges (Project Showcasing down below)",
        date: "May 2023 - NOW",
        buttonText: 'Projects',
        link: '/#projects',
        icon: "school",
    },

    {
        id: 9,
        title: "Pro Store",
        location: "Home",
        description:
            "E-commerce Website: Developed a full stack e-commerce website using Django, React, and PostgreSQL. Implemented key features such as product reviews, top products carousel, user profiles with order history, admin product and user management, and a seamless checkout process with PayPal and credit card integration. Leveraged React's functional components, hooks, and React-Bootstrap UI library for a modern user interface. Designed RESTful services to handle live data requests in Django and PostgreSQL. Ensured secure access with sessions and JWT authentication, including custom error handling.",
        buttonText: "Github Link",
        link: "https://github.com/vaqueraoscar0/EcommerceWebsite",
        date: "February 2021 - December - 2021",
        icon: "school",
    },

    {
        id: 8,
        title: "Player One",
        location: "Remote",
        description:
            "Personal Project: Collaborated with a friend to create 'Player One,' a full stack application for a gaming community. Built using React, Express, and MongoDB, the project offered a comprehensive platform for gaming enthusiasts. Implemented a web scraping script to automate fetching articles, ensuring the database remained regularly populated. Leveraged web sockets to facilitate real-time chat rooms and group messaging among authorized users. Integrated security measures, including Bcrypt, cookie parser, and web tokens libraries, to manage authentication and session control, ensuring restricted access for unauthorized users",
        buttonText: "Github Link",
        link: "https://github.com/imjenn/game-app",
        date: "February 2022",
        icon: "personal",
    },


    {
        id: 7,
        title: "SMS For Academics",
        location: "Sacramento, California",
        description:
            "Midtown Micro Project: Developed 'SMS for Academics,' a JavaScript/EJS-based application that sends SMS notifications about courses. Collaborated on the design of a responsive web application with RESTful API and MVC architecture. Integrated Twilio's SMS service, TinyMCE text editor, and implemented scheduled SMS notifications using cron jobs. Implemented JWT token-based authentication for secure user sessions.",
        date: "February 2021 - December - 2021",
        icon: "school",
    },
    {
        id: 6,
        title: "SMS Scheduler (Project)",
        location: "Home",
        description:
            "Personal Project: Created an SMS scheduler API as a test project. Leveraged Twilio's SMS API to send text messages and utilized the node-cron library for scheduling the timing of API requests. This project enabled automated scheduling and delivery of SMS messages, providing a practical solution for time-sensitive communication. Through this project, I gained hands-on experience with integrating third-party APIs and utilizing scheduling libraries in Node.js",
        buttonText: "Github Link",
        link: "https://github.com/vaqueraoscar0/SMS_Scheduler",
        date: "June 2021 - June 2021",
        icon: "personal",
    },
    {
        id: 5,
        title: "FaceRecognition (Project)",
        location: "Home",
        description:
            "Personal Project: Developed a web app called 'FaceRecognition' to gain practical experience in web development. This project utilized the Clarifai API to implement face recognition functionality, allowing users to detect faces in uploaded images. The web app also featured user login and registration functionality, utilizing Postgres for secure storage of user information. Through this project, I honed my skills in web development, API integration, and database management.",
        buttonText: "Github Link",
        link: "https://github.com/vaqueraoscar0?tab=repositories",
        date: "May 2021 – June 2021",
        icon: "personal",
    },
    {
        id: 4,
        title: "Text-Expander (Project)",
        location: "Sacramento, California",
        description:
            "Collaborative Project: Java-based text expander called 'Keyboard Warriors'. keyboard shortcut program, allows users to expand custom code and text blocks, improving productivity. Project was created using only Java.",
        buttonText: "Github Link",
        link: 'https://github.com/icarus44-zer0/Keyboard-Warrior/tree/2.0',
        date: "February 2020 - May 2020",
        icon: "school",
    },
    {
        id: 3,
        title: "CSUS - Sacramento",
        location: "Sacramento, California",
        description:
            "Sacramento State University: Graduated with a B.S. degree in Computer Science (GPA - 3.7). Studied Object-Oriented Programming, Software Design, Database Management Systems (SQL), and Computer Networks (Python). Equipped with a strong foundation in computer science principles and practical skills for software development.",
        date: "2019 - 2022",
        icon: "school",
    },

    {
        id: 2,
        title: "Woodland Community College",
        location: "Woodland, California",
        description:
            "Woodland Community College: Attended and graduated with a degree in Mathematics. Transferred to San Jose State University for further studies.",
        date: "2014 - 2018",
        icon: "school",
    },
    {
        id: 1,
        title: "WordPress Developer",
        location: "Davis, California",
        description:
            "WordPress Developer at Gifted Child Institute, involved in maintaining and enhancing a responsive website. Developed interfaces, collaborated on site-map guidelines, and optimized performance through integrations, templates, and plugins.",
        date: "2012 - 2015",
        icon: "work",
    },
];

export default timelineElements;