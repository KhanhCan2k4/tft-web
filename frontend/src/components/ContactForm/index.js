import { Button, Form } from "react-bootstrap";
import "./styles.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const contentRef = useRef();
  const submitRef = useRef();

  const handleSendContact = () => {
    submitRef.current.textContent = "Đang tải...";
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
    console.log(contentRef.current.value);
    emailjs
      .send(
        "service_miw9zp4", 
        "template_bjyfjbd",
        {
            from_name: "TDC - Cao đẳng Công nghệ Thủ Đức",
            to_name: nameRef.current.value ?? emailRef.current.value,
            message: "Cảm ơn bạn đã quan tâm đến TDC. TDC sẽ phản hồi lại sớm nhất có thể <3",
            reply_to: emailRef.current.value,
        },
        "nbxhmGhQt4JpgZSUa",
    )
      .then(() => {
        console.log("Sent contact successfully");
      })
      .catch((err) => {
        console.log("Send contact failed: ", err);
      })
      .finally(() => {
        submitRef.current.textContent = "Gửi liên hệ";
      });
  };

  return (
    <div className="contact-form">
      <div className="row">
        <div className="col-md-4">
          <img
            style={{ width: "100%", height: "100%", borderRadius: "30px" }}
            src="./src/contacts/contact.jpg"
            alt="Gửi thông tin liên hệ"
          />
        </div>
        <div className="col-md-8">
          <Form>
            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                ref={nameRef}
                placeholder="Tên..."
                type="text"
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                ref={emailRef}
                placeholder="Email..."
                type="email"
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                ref={phoneRef}
                placeholder="Số điện thoại..."
                type="tel"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                ref={contentRef}
                placeholder="Nội dung liên hệ..."
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <button
              onClick={handleSendContact}
              ref={submitRef}
              className="btn-contact btn-view"
            >
              Gửi liên hệ
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
