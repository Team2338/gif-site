import './contact.scss';
import Intro from "./Details/Intro.jsx";
import ContactForm from "./Details/ContactForm.jsx";

function Contact(props) {
    return (
        <React.Fragment>
        <div className="contact">
            <Intro/>
            <div className="content">
                <ContactForm/>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;