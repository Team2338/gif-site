import '../contact.scss';
import '../../../globals.scss';
import {
    LocationOnSharp,
    Mail
} from '@mui/icons-material';

function ContactForm() {
    return (
        <section className="contact-form">
            <div className="left">
                <div className="email details">
                    <i className="icon"><Mail/></i>
                    <h3 className="title">Email</h3>
                    <p className="detail">2338FRC@SD308.ORG</p>
                </div>
                <div className="location details">
                    <i className="icon"><LocationOnSharp/></i>
                    <h3 className="title">Location</h3>
                    <p className="detail">Oswego, IL</p>
                </div>
            </div>

            {/* don't touch this section */}
            <div className="right">
                <form className="form">
                    <div className="form-div">
                        <label className="form-label">Name: </label>
                        <input className="form-controller name"/>
                    </div>
                    <div className="form-div">
                        <label className="form-label">Email: </label>
                        <input className="form-controller"/>
                    </div>
                    <label className="form-label">Message: </label>
                    <div className="form-div">
                        <textarea className="form-controller message"/>
                    </div>
                    <div className="form-div">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
