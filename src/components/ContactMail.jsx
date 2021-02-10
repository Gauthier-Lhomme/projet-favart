import contact from "../assets/Contact/Contact.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Back,
  Background,
  Formulaire,
  Label,
  Input,
  Textarea,
  Button,
} from "../styled-components/ContactMail.jsx";

import Footer from "./Footer";

import emailjs from "emailjs-com";
toast.configure();

export default function ContactUs() {
  const notify = () => toast("Votre message a bien été envoyé !");
  function sendEmail(e) {
    e.preventDefault();

    const service_key = process.env.REACT_APP_SERVICE;
    const template_key = process.env.REACT_APP_TEMPLATE;
    const user_key = process.env.REACT_APP_USER;

    emailjs.sendForm(service_key, template_key, e.target, user_key);
    e.target.reset();
  }

  return (
    <>
      <Back>
        <Background src={contact} />
        <Formulaire className="contact-form" onSubmit={sendEmail}>
          <Label>Email</Label>
          <Input type="email" name="user_email" required />
          <Label>Message</Label>
          <Textarea name="message" required />
          <Button type="submit" value="Send" onClick={notify}>
            Envoyer
          </Button>
        </Formulaire>
      </Back>
      <Footer />
    </>
  );
}
