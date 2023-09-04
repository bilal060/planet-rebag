import React from "react";
import Accordion from "react-bootstrap/Accordion";
import withAccountSettingLayout from "../../layout/AccountSettingLayout";

const faqs = [
  {
    id: "heading1",
    collapse: "collapse1",
    show: true,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading2",
    collapse: "collapse2",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading3",
    collapse: "collapse3",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading4",
    collapse: "collapse4",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading5",
    collapse: "collapse5",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading6",
    collapse: "collapse6",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading7",
    collapse: "collapse7",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
  {
    id: "heading8",
    collapse: "collapse8",
    show: false,
    heading: "Lorem ipsum dolor sit amet consr.?",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.",
  },
];
const AccountFaqs = () => {
  return (
    <div>
      <h3 className="font-24 font-weight-800 mb-4 pb-3">
        Frequently Asked Question
      </h3>
      <Accordion defaultActiveKey="0">
        {faqs.map((data, index) => {
          return (
            <Accordion.Item eventKey={data.id} key={index}>
              <Accordion.Header>{data.heading}</Accordion.Header>
              <Accordion.Body className="px-0">{data.detail}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default withAccountSettingLayout(AccountFaqs);
