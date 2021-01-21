const content = {
    profileInfo: {
        name: "Thom van der Veldt",
        title: "Full-Stack Web Developer"
    },

    aboutMe: {
        text: `Aspiring Full-Stack Web-Developer, looking for a job! Currently following a program at Winc Academy.
    I started programming at the tail end of 2019. First in PHP, later on in Laravel, HTML, CSS,
    Javascript
    and React.JS. The full package, so to speak. As a side note, I've got 14 years of experience in the
    hospitality industry, the last 5 years as a manager.`
    },

    projects: [
        {
            id: 1,
            name: 'Tweety',
            text: `Tweety! A Twitter clone made in the PHP framework Laravel, styled with TailwindCSS.
            You're able to register a profile, tweet, make connections with other users and see
            a timeline of your friends activities. Clone the project and run in a local server
            to play around with it.`,
            image: `images/tweety2.png`,
            link: `https://www.github.com/Thom711/tweety`
        },
        {
            id: 2,
            name: 'RoboFriends',
            text: `RoboFriends. A small sample project in React.JS. Pulls a list of robots from an external API.
            You can search
            over them using the searchbox. Part of the Zero To Mastery Web Development course.`,
            image: `images/robofriends.png`,
            link: `https://www.github.com/Thom711/robofriends`
        },
        {
            id: 3,
            name: 'ToDoList',
            text: `Who hasn't made one? This (useable!) to do list uses the external API JSONBox to store the
            data. So feel free to add some stuff. Don't add sensitive information though. This project was
            made with vanilla JS, but uses asynchronous coding to interact with the API.`,
            image: `images/filler.jpg`, 
            link: `https://github.com/Thom711/thom-vanderveldt---todolist`
        },
    ],

    contact: {
        email: `tvdveldt@hotmail.com`,
        phone: `+31618071202`
    }
};

export default content;
