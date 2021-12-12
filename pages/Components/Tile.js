import React from "react";
import styles from "../../styles/Tile.module.css";

function Tile({tileColor}) {
    return (
        <div className={styles.tileContent} style={{backgroundColor: tileColor}}>
            <h1>Title</h1>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo.</p>
        </div>
    );
}

export default Tile;