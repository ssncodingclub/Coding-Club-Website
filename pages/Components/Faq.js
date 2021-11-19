import React from "react";
import styles from "../../styles/Department.module.css";
import { Accordion } from 'react-bootstrap';

const Faq = ({ questionnaire = {
    question: "",
    answer: "",
    key: "0"
  }}) => {
      console.log({questionnaire});
    return (
        <Accordion.Item eventKey={questionnaire.key} flush>
            <Accordion.Header>{questionnaire.question}</Accordion.Header>
            <Accordion.Body>{questionnaire.answer}</Accordion.Body>
        </Accordion.Item>
    );
}

export default Faq