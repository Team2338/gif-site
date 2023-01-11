import './contact.scss';
import Intro from "./Intro";
import ContactForm from "./ContactForm/ContactForm";

function Contact(props) {
    return (
        <>
            <Intro/>
            <div className="content">
                <ContactForm/>
            </div>
        </>
    );
}

export default Contact;