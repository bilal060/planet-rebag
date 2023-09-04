import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Whatsapp1 from "../../assets/images/icons/whatsapp";
import Insta from "../../assets/images/icons/rishtagram";
import Website from "../../assets/images/icons/website";
import withAccountSettingLayout from "../../layout/AccountSettingLayout";
import withMainLayout from "../../layout/MainLayout";

const ContactUs = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const whatsAppRef = useRef(null);
  const EmailRef = useRef(null);
  const InstaRef = useRef(null);

  function copyToClipboard(e, ref, copiedText) {
    ref.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess(copiedText);
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  }
  return (
    <div>
      <h3 className="font-24 font-weight-700 mb-5">Contact Us</h3>
      <div className="text-light-black">
        <form>
          <Row className="align-items-start gap-sm-0">
            <Col xl="6" className="mb-2 col-sm-12 p-0 ps-0 pe-xl-4 mb-4">
              <div
                className="contactus-copy-url cr-p"
                onClick={(e) => copyToClipboard(e, whatsAppRef, "whatsapp")}
              >
                <Whatsapp1 />
                <input
                  className="border-0 bg-transparent cr-p"
                  ref={whatsAppRef}
                  value="https://wa.me/03167422717?text="
                  readOnly
                />
              </div>
              <p className="px-3 mt-2">
                {copySuccess === "whatsapp" && "Copied!"}
              </p>
            </Col>
            <Col xl="6" className="p-0 mb-4">
              <div
                className="contactus-copy-url cr-p"
                onClick={(e) => copyToClipboard(e, InstaRef, "insta")}
              >
                <Insta />
                <input
                  className="border-0 bg-transparent cr-p"
                  ref={InstaRef}
                  value="https://msng.link/o?plant rebag=ig"
                  readOnly
                />
              </div>
              <p className="px-3 mt-2">
                {copySuccess === "insta" && "Copied!"}
              </p>
            </Col>
            <Col xl="6" className="ps-0 pe-xl-4 p-0 m-0">
              <div
                className="contactus-copy-url cr-p"
                onClick={(e) => copyToClipboard(e, EmailRef, "email")}
              >
                <Website />
                <input
                  className="border-0 bg-transparent cr-p"
                  ref={EmailRef}
                  value="Info@planetrebag.com"
                  readOnly
                />
              </div>
              <p className="px-3 mt-2">
                {copySuccess === "email" && "Copied!"}
              </p>
            </Col>
          </Row>
        </form>

        {/* <Row className="justify-content-end mt-4 gap-sm-0 gap-3">
              
              <Col md="3" sm="4">
                <Button type="submit" className="btn-green w-100 py-75">
                  Save Change
                </Button>
              </Col>
            </Row> */}
      </div>
    </div>
  );
};

export default withMainLayout(withAccountSettingLayout(ContactUs));
