import React from 'react';

class Contact extends React.Component {
    render() {
        const contact = this.props.contact;

        return (
            <article className="page-contact" id="contact">
                <h3>Contact</h3>

                <section>
                    <p>
                        Email: <code id="email">{contact.email}</code> <br/>
                        Phone: <code id="phone">{contact.phone}</code> <br/> <br/>
                    </p>
                    <a href="files/tvdveldt_cv.pdf" target="_blank">
                        <p>
                            <button className="bShadow-33">CV</button> <br/>
                            (Dutch)
                        </p>
                    </a>
                </section>
            </article>
        );
    };
};

export default Contact;