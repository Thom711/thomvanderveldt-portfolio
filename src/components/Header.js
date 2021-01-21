import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if(!this.state.clicked) {
            event.target.style.transitionDuration = "2s";
            event.target.style.transform = "skew(180deg)";
        } else {
            event.target.style.transitionDuration = "2s";
            event.target.style.transform = "skew(-180deg)";
        };

        this.setState({clicked: !this.state.clicked});
    };

    render() {
        const profileInfo = this.props.profileInfo;

        return (
            <header className="page-header">
                <figure>
                    <img src="/images/profile.jpg"
                        width="125" 
                        className="page-header__image bShadow-33"
                        alt="Profile"
                        onClick={this.handleClick}
                    />
                </figure>
                <div>
                    <div className="page-header__profile">
                        <p className="page-header__profile--name">{profileInfo.name}</p>
                        <div className="center">
                            <p className="page-header__profile--title">{profileInfo.title}</p>
                        </div>
                    </div>
                    <nav>
                        <a href="https://www.github.com/Thom711" target="_blank" rel="noreferrer">
                            <p className="github link">
                                <FontAwesomeIcon icon={faGithub}/>
                                Github
                            </p>
                        </a>

                        <a href="https://www.linkedin.com/in/thomvanderveldt" target="_blank" rel="noreferrer">
                            <p className="linkedin link" >
                                <FontAwesomeIcon icon={faLinkedin}/>
                                LinkedIn
                            </p>
                        </a>
                    </nav>
                </div>
            </header>
        );
    };
};

export default Header;