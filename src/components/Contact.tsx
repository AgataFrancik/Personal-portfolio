import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface FormDetails {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    message: string,
  };

  interface Status {
    success?: boolean,
    message?: string
  }

export const Contact = () => {

    const formInitialDetails: FormDetails = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>("Send");
  const [status, setStatus] = useState<Status>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                'Content-Type': "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = await response.json() as { code: number };
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: "Email send"})
        } else {
            setStatus({success: false, message: "Something went wrong"})
        }
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img />
          </Col>
          <Col md={6}>
            <h2> Contact me </h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstname", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastname}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastname", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                    status.message &&
                    <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
