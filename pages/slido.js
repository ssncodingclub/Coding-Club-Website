import React, { useEffect, useState } from "react";
import styles from "../styles/questions.module.css";
import Pusher from "pusher-js";

const questionBox = () =>  {
  const [isOpen, setIsOpen] = useState(false);
  return (    
    <div className={styles.qBox}>
      <form>
        <div className={styles.qInputRow}>
          <img src="./BlogPage/profilepic.png" className={styles.anon_image} />
          <input id={styles.questionInput} type="text" placeholder="Type your question" onFocus={() => setIsOpen(true)} autoComplete="off"></input>
        </div>
        {isOpen &&
          (<div className={styles.qBoxFooter}>
          <input className={styles.nameInput} type="text" placeholder="Enter your name (optional)" onFocus={() => setIsOpen(true)}></input>
          <input className="submitButton" type="submit" style={{"background-color": "#009c1f", "border-radius": "5px", "width": "fit-content"}}></input>
        </div>)}
      </form>
    </div>
  );
}

const questionItem = () => {
  return (
    <div className={styles.questionItem}>
      <div className={styles.asker}>
        <img src="./BlogPage/profilepic.png" className={styles.anon_image} style={{"position": "relative", "margin-right": "10px"}} />
          <div className={styles.askerInfo}>
            <p style={{"color": "white"}}>Anonymous</p>
            <p style={{"color": "#696969"}}>23 minutes ago</p>
          </div>
      </div>
      <div className={styles.questionContent} >
        What is Web Development?
      </div>
    </div>
  );
}

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

  return (
  <div className={styles.main_container}>
    {questionBox()}
    <div className={styles.questions}>
      <p className={styles.questionCount}><span style={{"color": "white", "font-weight": "bold", "font-size": "large"}}>7</span> questions</p>
      {questionItem()}
      {questionItem()}
      {questionItem()}
      {questionItem()}
      {questionItem()}
      {questionItem()}
      {questionItem()}
    </div>
  </div>
  );
};

export default Slido;
