import './contact.scss';
import Intro from "./Intro.jsx";
import ContactForm from "./Details/ContactForm.jsx";

function Contact(props) {
    return (
        <>
        <div className="contact">
            <Intro/>
            <div className="content">
                <ContactForm/>
            </div>
            </div>
        </>
    );
}

export default Contact;