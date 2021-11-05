import { useState } from "react";
import { Button } from "@mui/material";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">
          Name
          <input
            id="name"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label htmlFor="phone">
          Phone
          <input
            id="phone"
            value={phone}
            placeholder="(###)###-####"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </label>
        <label htmlFor="address">
          Address
          <input
            id="address"
            value={address}
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </label>
        <label htmlFor="subject">
          Subject
          <input
            id="Subject"
            value={subject}
            placeholder="subject"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </label>
        <label htmlFor="message">
          Message
          <input
            id="Message"
            value={message}
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </label>
        <Button color="secondary" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
