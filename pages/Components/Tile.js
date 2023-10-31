import React from "react";
import styles from "../../styles/Tile.module.css";
function Tile({tileImage }) {
    return (
        <div className={styles.tileContent} >
            <a href="https://www.instagram.com/ssn_coding_club/"><img src={".././tiles/" + tileImage} className={styles.img}></img></a>
            {/* <h1>Title</h1>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo.</p> */}
        </div >
    );
}

export default Tile;