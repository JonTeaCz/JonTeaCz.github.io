// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JonTeaCz', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Bluetooth Car',
          description:
            'Wireless car controlled via Bluetooth (HC-05/HC-06) using UART. TM4C123GXL processes smartphone commands (forward/backward/left/right) and drives DC motors (PWM via DRV8838).',
          imageUrl:
            'https://media.istockphoto.com/id/625452252/photo/monochrome-image-steering-wheel-and-interior-of-a-classic-car.jpg?s=612x612&w=0&k=20&c=mulhUQVL5LOTc4-KqJaXgeWtvAQE7IZLjVpdJES9Grk=',
          link: 'https://docs.google.com/document/d/1s6S6M41HdKKUFulFcIRQTZr9nM4UEx29mkUaOvnrObo/edit?usp=sharing',
        },
        {
          title: 'Multi-Level Affine Cipher Encryption on FPGA',
          description:
            'Encryption system on FPGA with dynamic key generation using LFSR and pipelined architecture. Then implemented modular components and secure memory protocols.',
          imageUrl:
            'https://t4.ftcdn.net/jpg/09/81/21/07/360_F_981210797_XygxaAjjjrG6KXGtxFjdkWohxGgguamA.jpg',
          link: 'https://docs.google.com/document/d/1bBZMLn7vD2mRRhZCjW-8uqfHPBukCNA3zGP-jgq6b14/edit?usp=sharing',
        },
         {
          title: 'Digital Piano',
          description:
            '6-bit R-2R ladder DAC generates analog audio from digital tones (C4–B4). TM4C123GXL outputs timer-based frequencies via GPIO, amplified (LM386) to a speaker. Push buttons trigger notes.',
          imageUrl:
            'https://www.shutterstock.com/image-photo/recordplayer-on-600nw-546446188.jpg',
          link: 'https://docs.google.com/document/d/12Jt1C-PPy8DxbALdDkIgdQPDABDJqgR-oD94rVMCyE4/edit?usp=sharing',
        },
         {
          title: 'Weather Quest',
          description:
            'TM4C123GXL + Wi-Fi Booster Pack fetches weather data from OpenWeather API via HTTP. Parsed JSON (temperature/humidity) is displayed on ST7735 LCD and UART terminal.',
          imageUrl:
            'https://4.img-dpreview.com/files/p/E~TS520x520~articles/5185228461/Mitch-Dobrowner_Arm-of-God.jpeg',
          link: 'https://docs.google.com/document/d/1AW6p0zBzY2zhK-upwSCqfvh64oMHUv-bwr4xw5cjXa4/edit?usp=sharing',
        },
        {
          title: 'UART Communication',
          description:
            'UART communication between two TM4C123 LaunchPads and two PC Serial Terminals',
          imageUrl:
            'https://freerangestock.com/sample/120389/two-business-people-shake-hands--black-and-white.jpg',
          link: 'https://docs.google.com/document/d/1AecOWOi6NPoP58bVHQ3jI7ura1YmBhTWIprgy8kALWs/edit?usp=sharing',
        },
        {
          title: 'Ultrasonic Range Finder',
          description:
            'Embedded system integrating ultrasonic sensor with PLL and PWM for obstacle detection and LED feedback.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuOVfQ5lDgdyhnDhJ1JDV7Qd7iHVT8BwXnw&s',
          link: 'https://docs.google.com/document/d/1tRaDHrkYVIoHmeT89wLC_roYb93wqLMqp30W0dEPCbc/edit?usp=sharing',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jonathan Cerniaz',
    description: 'Jonathan Cerniaz is an Innovative Computer Engineer | Designing Embedded, Smart, and Automated Systems for a Smarter Future',
    imageURL: '',
  },
  social: {
    linkedin: 'Jonathan Cerniaz',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'Jonathancz._',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+1 (562) 353-3474',
    email: 'jonathan.cerniaz@gmail.com',
  },
  
  resume: {
    fileUrl:
      'https://1drv.ms/w/s!AhVOqNCVYqkUf7e6SpOXy_YRH9s?e=UaGgyw', // Empty fileUrl will hide the `Download Resume` button.
  },
  
  skills: [
    'C/C++', 
    'MATLAB', 
    'Python', 
    'SystemC', 
    'Verilog',
    'Altium Designer', 
    'Cursor', 
    'Git', 
    'GitHub', 
    'Jupyter Notebook', 
    'Keil uVision', 
    'Linux', 
    'LTspice', 
    'MATLAB', 
    'MySQL',
    'Oscilloscope',
    'Onshape',
    'OpenCV',
    'PixyMon', 
    'Replit', 
    'STM32Cube', 
    'Thonny', 
    'VS Code', 
    'VirtualBox', 
    'Vivado',
    'Calibration', 
    'Circuit Design', 
    'Testing', 
    'Troubleshooting',
  ],
  
  experiences: [
    {
      company: 'The Letics',
      position: 'Model',
      from: 'May 2022',
      to: 'May 2025',
      companyLink: 'https://www.theletics.com/',
    },
    {
      company: 'Walmart',
      position: 'Online Order Fulfillment & Front-End Associate',
      from: 'June 2022',
      to: 'January 2023',
      companyLink: 'https://careers.walmart.com/',
    },
  ],

    certifications: [
    {
      name: 'Introduction to Software Development (in progress)',
      body: 'This course introduces the basics of Java programming and software development. It covers the Software Development Lifecycle (SDLC), setting up a Java environment, writing simple programs, and understanding core concepts like variables, data types, and object-oriented programming.',
      year: 'June 2025 - Present',
      link: '',
    },
    {
      name: 'Google Data Analytics',
      body: 'This certificate provides hands-on training in the core skills, tools, and workflows used by entry-level data analysts, including data cleaning, analysis, and visualization using spreadsheets, SQL, R, and Tableau.',
      year: 'June 2025',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/N2OA1KDMRGP7',
    },
    {
      name: 'Microsoft 365 Fundamentals',
      body: 'Completed a Microsoft 365 Specialization designed for beginners, where I developed practical skills in Word, Excel, and PowerPoint. I learned how to navigate the interface, perform essential tasks, and use intelligent features to boost productivity and collaboration. This training prepared me to pursue Microsoft certification exams (MO-100, MO-200, MO-300).',
      year: 'June 2025',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/L07YA3J9QBBD',
    },
    {
      name: 'Microsoft IT Support Specialist',
      body: 'Having completed the Microsoft IT Support Specialist Professional Certificate, I’ve gained hands-on skills in system analysis, Microsoft 365 software configuration, security protocols, and troubleshooting—demonstrating my readiness for a career in IT.',
      year: 'June 2025',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/QAEYRVX0A95U',
    },
  ],

  /*
  awards: [
    {
      name: 'Long Beach Rotary Completion',
      body: 'To celebrate the completion of my four years with the Long Beach Rotary Scholarship foundation',
      year: 'May 2025',
      link: 'https://docs.google.com/document/d/1Uj3o3TDO6C3QA3Y1-Rpzy_fFxy_QOkhteIYq0slxLiA/edit?usp=sharing',
    },
    {
      name: 'Employee of the Month',
      body: 'Received after first month as employee.',
      year: 'July 2022',
      link: 'https://docs.google.com/document/d/1qksPVkABnZftpfP9QyjG6xGlEieV0fBFQyhtpkE9alQ/edit?usp=sharing',
    },
  ],
  */
  
  educations: [
    {
      institution: 'California State University, Long Beach',
      degree: 'B.S. Computer Engineering',
      awards: 'Long Beach Rotary Scholarship',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'St. Anthony High School',
      degree: 'Diploma',
      from: '2017',
      to: '2021',
    },
  ],
  /*
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  */
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'black',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
