import React from 'react';
import Project1 from '../images/discord.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.jpg'
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
import HackerRankLogo from '../images/HackerRankLogo.png'
import Coursera from '../images/coursera.png'
import Eudonix from '../images/eudonix.png'
import Udemy from '../images/udemy.png'
import java from '../icons/java.png'


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
    projectHome: [
        {
            title: 'Discord Music Bot',
            imgUrl: Project1,

            techStack1: javaScript,
            techStack2: Nodejs,
            techStack3: Express
        },
        {
            title: 'Be Fresh Groceries',
            imgUrl: Project2,
            techStack1: javaScript,
            techStack2: Wordpress,
            techStack3: html,
            techStack4: css,
            techStack5: Php,
        },

    ],
    longProjectCardHome: [
        {
            title: `Simhan's e-VedaShree`,
            imgUrl: Project3,
            techStack1: java,
            techStack2: Kotlin,
            techStack3: Firebase
        }
    ],


    // Home Page Data End



    //Journey Data Start

    experiences: [
        {
            title: 'Full Stack Developer & UI/UX Designer(GFG-KIIT)',
            date: 'December-2020 - Present',
            desc: 'I have contributed in the projects from all domains(Web, Android, UI/UX, ML) I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.',
            imgUrl: Gfgkiit,
        },
        {
            title: 'Web Developer (freelancecomunitee.com)',
            date: 'January-2021 - May-2021',
            desc: 'I was responsible for developing the website and integrating it with automation tools like Integromat , Automate.io ,Zapier , Mailchimp,etc. I also learned new cloud and linux technologies like Linode, Vultr and also how to manage the servers.',
            imgUrl: Freelance,
        },
        {
            title: 'Web Developer (A2D Web)',
            date: 'November-2020 - January-2021',
            desc: 'I developed the company website through WordPress. I got the to learn about WordPress and how it functions. Learned new web scripting language PHP .',
            imgUrl: A2d,
        },
        {
            title: 'Web Developer (Kenisha Styles)',
            date: 'July-2020 - September-2020',
            desc: 'I was responsible for developing the company website and collecting the data for user visit , updating the website with new contents on regular basis, and updating the UI to increase user interaction .',
            imgUrl: Kenisha,
        },
    ],

    educations: [
        {
            title: 'B.Tech Information Technology (KIIT)',
            date: 'July-2019 - Present',
            desc: 'I am a 3rd year IT student , currently studying in KIIT. I secured 8.5 CGPA in my 2nd Year. I have started doing development stuffs from mid of my 1st year and development facinated me a lot.',
            imgUrl: KiitLogo,
        },
        {
            title: 'Senior Secondary (XII)',
            date: '05/2018 - 05/2019',
            desc: 'I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 83.3% in my XIIth grade and my subjects were (Physics,Chemistry,Maths,English,Physical Education)',
            imgUrl: Apsn,
        },
        {
            title: 'Secondary (X)',
            date: '05/2016 - 05/2017',
            desc: 'I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 9.8 CGPA in my Xth grade and my subjects were (English,Maths,Science,Social Science & Hindi)',
            imgUrl: Apsn,
        },

    ],

    //Journey Data End


    //Project Data Starts

    // projects: [

    //     //Project section 1 start

    //     {

    //         title: 'Discord Music Bot',
    //         imgUrl: Project1,
    //         techStack1: javaScript,
    //         techStack2:Nodejs,
    //         techStack3:Express,
    //         desc1: 'This Application allows you to stream music from YouTube while you are connected to voice channels',
    //         desc2: 'The application has multiple option like  PLay/Pause Option , Queueing the song , Song can be Looped',
    //         desc3: 'The application is built using a Javascript Library know as Discod.Js , Youtube API and is Hoted on Heroku',
    //         span1: 'Youtbe',
    //         span2: 'Discod.Js , Youtube API',
    //         span3: 'Heroku',
    //         links: [
    //             {
    //                 link: 'https://github.com/ashishmishra-bit/',

    //             },
    //             {
    //                 link: 'https://github.com/ashishmishra-bit',

    //             },
    //         ]
    //     },


    //     {

    //         title: 'Be Fresh Groceries',
    //         imgUrl: Project2,
    //         techStack1: javaScript,
    //         techStack2:Wordpress,
    //         techStack3:html,
    //         techStack4:css,
    //         techStack5:Php,
    //         desc1: 'Long back, vedas could only be taught through gurus. But with the advancement in technology and the evolution of learning to e-learning, this app aims to be a source for learning vedas.',
    //         desc2: 'The application has more than 5000+ Downlaods & it has recieved 4.5 ★ by the users',
    //         desc3: 'The application is built using Java , Kotlin , Firebase , XML.',
    //         span1: '5000+ Downlaods',
    //         span2: '4.5 ★',
    //         span3: 'Java , Kotlin , Firebase , XML.',
    //         links: [
    //             {
    //                 link: 'https://github.com/ashishmishra-bit/',

    //             },
    //             {
    //                 link: 'https://github.com/ashishmishra-bit',

    //             },
    //         ]
    //     },

    //     {

    //         title: `Simhan's e-VedaShree`,
    //         imgUrl: Project3,
    //         techStack1: Java,
    //         techStack2:Kotlin,
    //         techStack3:Firebase,
    //         desc1: 'Long back, vedas could only be taught through gurus. But with the advancement in technology and the evolution of learning to e-learning, this app aims to be a source for learning vedas.',
    //         desc2: 'The application has more than 5000+ Downlaods & it has recieved 4.5 ★ by the users',
    //         desc3: 'The application is built using Java , Kotlin , Firebase , XML.',
    //         span1: '5000+ Downlaods',
    //         span2: '4.5 ★',
    //         span3: 'Java , Kotlin , Firebase , XML.',
    //         links: [
    //             {
    //                 link: 'https://github.com/ashishmishra-bit/',

    //             },
    //             {
    //                 link: 'https://github.com/ashishmishra-bit',

    //             },
    //         ]
    //     },
    //Project section 1 end


    //Project section 2 start

    //         {

    //             title: 'Discord Music Bot',
    //             imgUrl: Project1,
    //             techStack1: javaScript,
    //             techStack2:Nodejs,
    //             techStack3:Express,
    //             desc1: 'This Application allows you to stream music from YouTube while you are connected to voice channels',
    //             desc2: 'The application has multiple option like  PLay/Pause Option , Queueing the song , Song can be Looped',
    //             desc3: 'The application is built using a Javascript Library know as Discod.Js , Youtube API and is Hoted on Heroku',
    //             span1: 'Youtbe',
    //             span2: 'Discod.Js , Youtube API',
    //             span3: 'Heroku',
    //             links: [
    //                 {
    //                     link: 'https://github.com/ashishmishra-bit/',

    //                 },
    //                 {
    //                     link: 'https://github.com/ashishmishra-bit',

    //                 },
    //             ]
    //         },


    //         {

    //             title: 'Be Fresh Groceries',
    //             imgUrl: Project2,
    //             techStack1: javaScript,
    //             techStack2:Wordpress,
    //             techStack3:html,
    //             techStack4:css,
    //             techStack5:Php,
    //             desc1: 'Long back, vedas could only be taught through gurus. But with the advancement in technology and the evolution of learning to e-learning, this app aims to be a source for learning vedas.',
    //             desc2: 'The application has more than 5000+ Downlaods & it has recieved 4.5 ★ by the users',
    //             desc3: 'The application is built using Java , Kotlin , Firebase , XML.',
    //             span1: '5000+ Downlaods',
    //             span2: '4.5 ★',
    //             span3: 'Java , Kotlin , Firebase , XML.',
    //             links: [
    //                 {
    //                     link: 'https://github.com/ashishmishra-bit/',

    //                 },
    //                 {
    //                     link: 'https://github.com/ashishmishra-bit',

    //                 },
    //             ]
    //         },

    //         {

    //             title: `Simhan's e-VedaShree`,
    //             imgUrl: Project3,
    //             techStack1: Java,
    //             techStack2:Kotlin,
    //             techStack3:Firebase,
    //             desc1: 'Long back, vedas could only be taught through gurus. But with the advancement in technology and the evolution of learning to e-learning, this app aims to be a source for learning vedas.',
    //             desc2: 'The application has more than 5000+ Downlaods & it has recieved 4.5 ★ by the users',
    //             desc3: 'The application is built using Java , Kotlin , Firebase , XML.',
    //             span1: '5000+ Downlaods',
    //             span2: '4.5 ★',
    //             span3: 'Java , Kotlin , Firebase , XML.',
    //             links: [
    //                 {
    //                     link: 'https://github.com/ashishmishra-bit/',

    //                 },
    //                 {
    //                     link: 'https://github.com/ashishmishra-bit',

    //                 },
    //             ]
    //         },

    //         //Project section 2 end


    //         //Achievements section start

    //         //Certifications section start



    //     ],

    certifications: [
        {
            imgUrl:  HackerRankLogo,
            title: "Problem Solving (Basic) Certificate",
            organization: "HackerRank",
            date: "Issue September , 2021 - No expiration date",
            link: "https://www.hackerrank.com/certificates/2d7d83a79116",
        },
        {
            imgUrl :HackerRankLogo,
                    title:"Problem Solving (Intermediate) Certificate",
                    organization:"HackerRank",
                    date:"Issue September , 2021 - No expiration date",
                    link:"https://www.hackerrank.com/certificates/d682e68f64f8",
        },
        {
            imgUrl : Eudonix,
                    title:"Socket Programming",
                    organization:"Eduonix Learning Solutions Pvt Ltd",
                    date:"Issued August , 2021 - No expiration date",
                    link:"https://www.eduonix.com/certificate/2cc7d367ae",
        },
        {
            imgUrl : Coursera,
                title:"AWS Fundamentals: Going Cloud-Native",
                organization:"Coursera",
                date:"Issue June , 2020 - No expiration date",
                link:"https://www.coursera.org/account/accomplishments/certificate/E4DSTYJMXKUJ",
        },
        {
            imgUrl : Udemy,                      
                title:"Complete Machine Learning",
                organization:"Udemy",
                date:"Issue April , 2020 - No expiration date",
                link:"https://udemy-certificate.s3.amazonaws.com/pdf/UC-0ed139a0-4c15-4742-a97e-1fd3750a9bb5.pdf",
        },
        {
            imgUrl : Coursera,
                title:"SEO Fundamentals",
                organization:"Coursera",
                date:"Issue July , 2020 - No expiration date",
                link:"https://www.coursera.org/account/accomplishments/verify/3S2BWL95EQMN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
        },
        {
            imgUrl : Coursera,
                title:"Introduction to Search Engine Optimisation",
                organization:"Coursera",
                date:"Issue June , 2020 - No expiration date",
                link:"https://www.coursera.org/account/accomplishments/certificate/TGWSGCSH7RNT",
        },
        {
            imgUrl : Coursera,
                title:"Fundamentals Of Graphics Design",
                organization:"Coursera",
                date:"Issue July , 2020 - No expiration date",
                link:"https://www.coursera.org/account/accomplishments/certificate/4AQ2KAANT7ML" ,
        }
    ],
};
