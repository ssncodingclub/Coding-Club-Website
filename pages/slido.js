import React, { useEffect, useState } from "react";
import styles from "../styles/questions.module.css";
import Pusher from "pusher-js";

const Slido = () => {
  useEffect(() => {
    let pusher = new Pusher("3b85ab9e932dd828c31f", {
      cluster: "ap2",
    });

    let channel = pusher.subscribe("questions");
    channel.bind("new-question", (data) => {
      console.log(data);
    });
    return () => channel.unbind();
  }, []);

  return <div className={styles.main_container}>Questions</div>;
};

export default Slido;
