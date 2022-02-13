import React from "react";
import styles from "../../styles/Department.module.css";
import { Col } from "react-bootstrap";

const Department = ({
  department = {
    name: "",
    discord: "",
    description: "",
    id: "",
    icon: "",
    alt: "",
  }, theme
}) => {
  return (  
    <Col md="6" lg="4" sm="6">
      <div className={styles.main}>
        <div className={styles.service}>
          <div className={styles.service_logo}>
            {/* <Image src={department.icon} alt={department.alt}  /> */}
            <img src={department.icon} alt={department.alt} />
          </div>
          <h4>{department.name}</h4>
          <p>{department.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Department;
