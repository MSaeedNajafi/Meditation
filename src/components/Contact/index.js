import React, { useState } from "react";
import {
  Container,
  Form,
  FormButton,
  FormCotent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  Text,
  FormP,
  FormInputTextArea,
  TextArea,
} from "./ContactElements";
import { send } from "emailjs-com";

const ContactUs = () => {
  const [toSend, setToSend] = useState({
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_wjkyie2", "arcticstake", toSend, "user_NXy5GXQ6TAHi06abFf5Ck")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({ email: "", subject: "", message: "" });
        setSubmitted(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Meditation Fauzia</Icon>
          <FormCotent>
            <Form action="#" onSubmit={onSubmit}>
              <FormH1>Contact Me</FormH1>
              <TextArea>
                <Text>E-mail: fsucces30@hotmail.com</Text>
                <Text>Tele: 06 11 07 84 03</Text>
              </TextArea>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={toSend.email}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputTextArea
                type="text"
                name="message"
                htmlFor="for"
                value={toSend.subject}
                onChange={handleChange}
                required
              />
              <FormButton type="submit">
                {submitted ? "Message has been sent" : "Send"}
              </FormButton>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactUs;
