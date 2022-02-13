import React from "react";
import styles from '../../styles/Card.module.css';

const DomainCard = ({title="", discord="", tags=[], style="",theme}) => {

  return (
    <>
      <article className={`${theme? styles.card_light:styles.card}`} style={{...style, minWidth: "300px"}}>
        <header className={styles.card_header}>
          <p>-------</p>
          <h2 style={{fontSize: "30px"}}>
            {
              title.split('\n').map((word, i) => {
                return (<>
                  {word}<br key={i}/>
                </>);
              })
            }
          </h2>
        </header>

        <div className={styles.card_author}>
          <div className={styles.author_name}>
              <div className={styles.author_name_prefix}>Discord</div>
              {discord}<br />
          </div>
        </div>
        <div className={styles.tags}>
          {
            tags.map((tag, i) => {
              return (
                <>
                  <a className={styles.link} key={i} href="#">{tag}</a>
                </>
              );
            })
          }
        </div>
      </article>
    </>
  )
}

export default DomainCard
