import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.png';
import realEstate from '/public/image/real-estate.jpg';
import hamisha from '/public/image/hamisha.png';

export const projectsData = [
    {
        id: 1,
        name: 'Farmers Eccomerce Application',
        description: "The appplication was developed with kenyan farmers in mind, the application would help them markert their products in order to attract a customer/consumer base, the applicatio is easy to navigate..",
        tools: ['Express', 'MSSQL', , 'TypeScript', 'Tailwind', 'Socket/UI', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        github:"github.com/kamau-n/final_project_client",
        image: crefin,
    },
    {
        id: 2,
        name: 'Hamisha Application',
        description: 'The application was designed to people who are moving to a new city or country.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "TypeScript", "MySQL", "Nodemailer"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: hamisha,
        github:"github.com/kamau-n/hamisha"
    },
    {
        id: 3,
        name: 'Alumni Connect',
        description: 'This was a project that was desined to help alumni reconect once they graduate, it purpose is to act as a social media where a certain college students can reconnect.',
        tools: ['React', 'Tailwind', 'Sockets IO', 'React Native', 'Express', 'TypeScript', 'MYSQL',  , 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: hamisha,
        github:"github.com/kamau-n/alumni_native",
        url:""
    },
    {
        id: 4,
        name: 'Shopping Application',
        description: "This site was designed to help people shop online, it was designed to be user friendly and easy to navigate.",
        tools: ['JS',  "Tailwind CSS", "HTML", ""],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
        github:"github.com/kamau-n/ShoppingApp",
        url:"shopping-app-seven-chi.vercel.app/"
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },