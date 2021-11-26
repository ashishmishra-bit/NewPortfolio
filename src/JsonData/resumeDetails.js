import React from 'react';
import Project1 from '../images/discord.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import javaScript from "../icons/javaScript.svg"
import Nodejs from "../icons/nodejs.png"
import Express from "../icons/expressjs.png"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
import Wordpress from "../icons/Wordpress.png"
import Php from "../icons/php.png"
import Kotlin from "../icons/kotlin.png"
import Firebase from "../icons/firebase.png"
import Java from "../icons/java.gif"
import BlogImage1 from '../images/BlogImage2.png'
import BlogImage3 from '../images/datascience.jpg'
import BlogImage2 from '../images/mongodb.png'


//Journey Page Imports
import KiitLogo from '../icons/KiitLogo.png'
import Narangi from '../images/Narangi.png'
import Company from '../images/Company.png'
import Freelance from '../images/freelance.png'
import Kenisha from '../images/kenisha.png'
import Gfgkiit from '../images/gfgkiit.png'
import A2d from '../images/a2d.png'
import Apsn from '../images/apsn.png'
import Gfg2 from '../images/gfg2.png'
import A2d2 from '../images/a2d2.png'
import Free from '../images/free.png'
import Kiit2 from '../images/kiit2.png'

export default {

    // Home Page Data Start

    name: 'I am Ashish Kumar Mishra',
    title: 'Frontend | Android | Data Science | UI/UX',

    // jobs: 'Student',
    // email: 'ashish.mishra52002@gmail.com',
    // phone: '+91-8822161061',
    // address: 'Guwahati , Assam',
    // address2: 'Pragati Nagar , Bylane-1 ,House-No. - 2 , Pin - 781171, Guwahat , Assam',

    // social: {
    //     LinkedIn: {
    //         link: 'https://www.linkedin.com/in/ashish-kumar-mishra-91366b193',
    //         text: '@ashish-kumar-mishra',
    //         icon: <LinkedInIcon />,
    //     },       
    //     Instagram: {
    //         link: 'https://www.instagram.com/a_s_h_i_s_h_mishra/',
    //         text: 'a_s_h_i_s_h_mishra',
    //         icon: <InstagramIcon />,
    //     },
    //     Twitter: {
    //         link: 'https://www.instagram.com/a_s_h_i_s_h_mishra/',
    //         text: 'a_s_h_i_s_h_mishra',
    //         icon: <TwitterIcon />,
    //     },
    // },

    about: 'Hello Folks, I am Ashish Kumar Mishra. I am a hardworking, self-motivated, and well-organized person, sincerely dedicated to my allocated job. I am an IT undergraduate scholar with a penchant for exploring various innovations that are emerging in the technical field. Web Development fascinates me the most. I have acquired skills in Android development and SEO and currently, I have lessons in Data Science and working on research papers. I have obtained certification in UI/UX and terminated with designing websites and projects. I am brushing up my skills to attain more perfection and intend to generate newness in the field of Information and Technology.',


    journeyExperienceHome: [
        {
            title: 'Full Stack Developer & UI/UX Designer(GFG-KIIT)',
            date: 'December-2020 - Present',
            desc: 'I have contributed in the projects from all domains(Web, Android, UI/UX, ML) I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.',
        },
    ],

    journeyEducationHome: [
        {
            title: 'B.Tech Information Technology (KIIT)',
            date: 'July-2019 - Present',
            desc: 'I am a 3rd year IT student , currently studying in KIIT. I secured 8.5 CGPA in my 2nd Year. I have started doing development stuffs from mid of my 1st year and development facinated me a lot. I also got the opportunity to do research work and publish it. I am working on Deep Learning technologies and my papers will be published soon.',
        },
    ],
    projectHome:[
        {
            title: 'Discord Music Bot',
            imgUrl: Project1,
            techStack1: javaScript,
            techStack2:Nodejs,
            techStack3:Express
        },
        {
            title: 'Be Fresh Groceries',
            imgUrl: Project2,
            techStack1: javaScript,
            techStack2:Wordpress,
            techStack3:html,
            techStack4:css,
            techStack5:Php,
        },
        {
            title: `Simhan's e-VedaShree`,
            imgUrl: Project3,
            techStack1: Java,
            techStack2:Kotlin,
            techStack3:Firebase
        }
    ],

    blogs: [
        {
            imgUrl: BlogImage1,
        },
        {
            imgUrl: BlogImage2,
        },
        {
            imgUrl: BlogImage3,
        }
    ],

    // Home Page Data End



    //Journey Data Start

    experiences: [
        {
            title: 'Full Stack Developer & UI/UX Designer(GFG-KIIT)',
            date: 'December-2020 - Present',
            desc: 'I have contributed in the projects from all domains(Web, Android, UI/UX, ML) I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.',
            imgUrl:Gfgkiit,
        },
        {
            title: 'Web Developer (freelancecomunitee.com)',
            date: 'January-2021 - May-2021',
            desc: 'I was responsible for developing the website and integrating it with automation tools like Integromat , Automate.io ,Zapier , Mailchimp,etc. I also learned new cloud and linux technologies like Linode, Vultr and also how to manage the servers.',
            imgUrl:Freelance,
        },
        {
            title: 'Web Developer (A2D Web)',
            date: 'November-2020 - January-2021',
            desc: 'I developed the company website through WordPress. I got the to learn about WordPress and how it functions. Learned new web scripting language PHP .',
            imgUrl:A2d,
        },
        {
            title: 'Web Developer (Kenisha Styles)',
            date: 'July-2020 - September-2020',
            desc: 'I was responsible for developing the company website and collecting the data for user visit , updating the website with new contents on regular basis, and updating the UI to increase user interaction .',
            imgUrl:Kenisha,
        },
    ],

    educations: [
        {
            title: 'B.Tech Information Technology (KIIT)',
            date: 'July-2019 - Present',
            desc: 'I am a 3rd year IT student , currently studying in KIIT. I secured 8.5 CGPA in my 2nd Year. I have started doing development stuffs from mid of my 1st year and development facinated me a lot. I also got the opportunity to do research work and publish it. I am working on Deep Learning technologies and my papers will be published soon.',
            imgUrl:Kiit,
        },
        {
            title: 'Senior Secondary (XII)',
            date: '05/2018 - 05/2019',
            desc: 'I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 83.3% in my XIIth grade and my subjects were (Physics,Chemistry,Maths,English,Physical Education)',
            imgUrl:Apsn,
        },
        {
            title: 'Secondary (X)',
            date: '05/2016 - 05/2017',
            desc: 'I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 9.8 CGPA in my Xth grade and my subjects were (English,Maths,Science,Social Science & Hindi)',
            imgUrl:Apsn,
        },

    ],

    //Journey Data End

    services: [
        {
            title: 'Web Development',
            desc: 'I have been developing scalable Website and Web Applications from past 1 year. I have Developed almost all type of websites.',
            icon: <LanguageIcon />
        },
        {
            title: 'Android & Flutter Development',
            desc: 'I have been developing & learning Android Development from past 3-4 months. I have developed 3 Android Application',
            icon: <PhoneAndroidIcon />
        },
        {
            title: 'UI / UX Designer',
            desc: 'I gained the interest in UI/UX designing as I started with Front-End development and it always facinated me.',
            icon: <ShutterSpeedIcon />
        },
    ],

    skills: [
        {
            title: "Front-End",
            desc: [
                "ReactJs",
                "JavaScript",
                "Bootstrap",
                "Materia UI",
                "SAAS & Tailwind css",
                "Wordpress"
            ],
        },
        {
            title: "Back-End",
            desc: [
                "Node.js",
                "Java",
                "Python",
                "Django",
                "Express.js",
                "PHP",
                "Dart"
            ],
        },
        {
            title: "Databases",
            desc: [
                "Firebase",
                "MySQL",
                "MongoDB",
                "NoSQL",
                "SQL Lite"
            ],
        },
        {
            title: "Graphics",
            desc: [
                "Figma",
                "Adobe XD",
                "Adobe Photoshop",
                "Adobe illustrator"
            ],
        },
    ],

    projects: [
        {
            tag: 'Websites',
            images: Port,
            title: 'Notes Application',
            caption: 'PHP coded CRUD Application',
            desc: 'Its a simple PHP project. Basically known as CRUD Application. It Use Bootstrap and Css for front-end design.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },

        {
            tag: 'Websites',
            images: Port2,
            title: 'Kenisha Styles',
            caption: 'A web site for the Start Up',
            desc: 'This was the website on which i have worked on as an Intern to this company. I have embeded facebook page and pixel to this website through facebook developer API. It was a great experience with lots of mistake as it was my first work professionally.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://www.kenishastyles.com/',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port3,
            title: 'Be-Fresh Groceries',
            caption: 'Online Grocery Store',
            desc: 'This is the website for online grocery store , basically and online ecommerce website. It has support for firebase authentication and use MySql databse.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://www.befreshgroceries.com/',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port4,
            title: 'Django Ecommerce Website',
            caption: 'Ecommerce Website Using Django',
            desc: 'This is an Ecommerce website using Python framework Django and it has most of the features includind payment gateway integration with PayPal.The website is still under developement. It will be completed and hosted soon.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit/Django_Ecomm',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port5,
            title: 'PHP Chat Application',
            caption: 'PHP Coded Chat Appllication',
            desc: 'This is the PHP coded chat application that provides the unique id to every chat room created. I have used here MySql database from php my admin locally to connect and store the data entry.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit/ChatApp-PHP',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port6,
            title: 'Zoom Clone',
            caption: 'Simple Zoom-Clone Web Application',
            desc: 'This is the clone of popular video conferencing application called "ZOOM". This is build using node.js, express.js and peer.js , most the features are added here and it works perfect.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit/zoom_clone',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port7,
            title: 'Blog Template',
            caption: 'This is Blog Template',
            desc: 'This is Blog Template coded on Basic Html , Css , JavaScript , & Bootstrap.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port8,
            title: 'freelancecommunity.com',
            caption: 'A web site for the Start Up.',
            desc: 'The is the website for the company named freelancecommunitee.com.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port9,
            title: 'A2D Web',
            caption: 'A web site for the Start Up',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port10,
            title: 'WhatsApp Clone',
            caption: 'A web site for the Start Up',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port13,
            title: 'JavaScript Music Player',
            caption: 'A web site for the Start Up',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Websites',
            images: Port14,
            title: 'Discord Music Bot',
            caption: 'A web site for the Start Up',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },

        {
            tag: 'Android',
            images: Port11,
            title: 'Music Player APP',
            caption: 'A short Description about project',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'Android',
            images: Port12,
            title: 'Billing App',
            caption: 'A short Description about project',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'UI / UX',
            images: Port15,
            title: 'A2D UI Design',
            caption: 'A short Description about project',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'UI / UX',
            images: Port16,
            title: 'GFG-KIIT UI Design',
            caption: 'A short Description about project',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },
        {
            tag: 'UI / UX',
            images: Port17,
            title: 'MusicPlayer UI',
            caption: 'A short Description about project',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },
            ]
        },


        {
            tag: 'UI / UX',
            images: Port18,
            title: 'Photoshop Editing',
            caption: 'A short Description about project',
            desc: 'This is the notes application coded in php.',
            links: [
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://github.com/ashishmishra-bit',
                    icon: <LanguageIcon />
                },

            ]
        }
    ],
};
