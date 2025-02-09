export const projectsData = [
    {
        id: 1,
        name: 'Natours API',
        description: "Built a RESTful API for tour booking applications following MVC architecture. Implemented user authentication with JWT, password reset via email, secure credit card payments using Paystack, and PDF receipt generation. Integrated geospatial queries for tour locations, advanced error handling, and rate limiting for security. Developed robust CRUD operations with MongoDB aggregation pipelines for complex data analysis.",
        tools: [
            'Express.js',
            'MongoDB',
            'Mongoose',
            'JWT',
            'Paystack API',
            'SendGrid',
            'Pug Templates',
            'Postman',
            'Joi Validation',
            'Redis',
            'Express Rate Limit',
            'Helmet',
            'Nodemailer',
            'Jest',
            'Render'
        ],
        role: 'Software Developer',
        code: '<h2> Stref </h2>',
        demo: '',
    },
    {
        id: 2,
        name: 'MGT GraphQL',
        description: 'This is a simple GraphQL API built with NestJS and Prisma, for client management system.',
        tools: ['Tailwind CSS', "NestJS", "TypeScript", "Postgres", "Prisma"],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
];

export const freeLunchApi = {
    name: "Free lunch API",
    description: 'Me and my team at HNGX built a comprehensive meal credit management system enabling organizations to distribute, track, and redeem lunch benefits. The API facilitates seamless integration of meal perks into company HR systems with robust financial controls.',
    tags: [ "Food", "Lunch", "Credit", "Meal"],
    code: "https://github.com/Vestertech/Commanders-food-backend",
    demo: "https://commanders-food-backend-production.up.railway.app/api/docs/",
    image: "/image/free-lunch.jpg"
};

export const natoursApi = {
    name: "Free lunch API",
    description: "Built a RESTful API for tour booking applications following MVC architecture. Implemented user authentication with JWT, password reset via email, secure credit card payments using Paystack, and PDF receipt generation. Integrated geospatial queries for tour locations, advanced error handling, and rate limiting for security. Developed robust CRUD operations with MongoDB aggregation pipelines for complex data analysis.",    
    tags: ["API", "Tour", "World", ],
    code: "https://github.com/Vestertech/natoursApp",
    demo: "https://documenter.getpostman.com/view/23083428/2s8ZDeUK62",
    image: "/image/natours.jpeg"
};
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
// },