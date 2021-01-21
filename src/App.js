import React from 'react';
import './styles/styles.css';
import Content from './content/content';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            profileInfo: {},
            aboutMe: {},
            projects: [],
            contact: {}
        };
    };

    componentDidMount() {
        this.setState({
            profileInfo: Content.profileInfo,
            aboutMe: Content.aboutMe,
            projects: Content.projects,
            contact: Content.contact
        });
    };

    render() {
        return (
            <div className="container grid">
                <Header profileInfo={this.state.profileInfo}/>

                <main className="main">
                    <AboutMe aboutMe={this.state.aboutMe}/>
                    <Projects projects={this.state.projects}/>
                    <Contact contact={this.state.contact}/>
                </main>
               
               <Footer />
            </div>
        );
    };
};

export default App;
