import "../css/Contact.css";

function Contact() {
    return (
        <section className="contact">

            <h1>Contact Us</h1>

            <p>We'd love to hear from you!</p>

            <div className="contact-info">

                <p>📧 support@freshbite.com</p>

                <p>📞 +91 9876543210</p>

                <p>📍 Dehradun, Uttarakhand</p>

                <p>🕒 Mon - Sun : 9 AM - 10 PM</p>

            </div>

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Your Name"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                />

                <textarea
                    rows="5"
                    placeholder="Your Message"
                ></textarea>

                <button>Send Message</button>

            </form>

        </section>
    );
}

export default Contact;