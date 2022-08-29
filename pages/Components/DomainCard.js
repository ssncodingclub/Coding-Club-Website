import Image from 'next/image';
import React from "react";
import styles from '../../styles/Card.module.css';


const DomainCard = ({ title = "", discord = "", tags = [], style = "", theme, isOffice, members = [], overflow = "" }) => {
  return (
    <>
      {isOffice ?
        <>
          <article className={`${overflow ? styles.expand : null} ${theme ? styles.card_light : styles.card} `} style={{ ...style, minWidth: "300px", maxWidth: "300px" }}>
            <header className={styles.card_header}>
              <h2 style={{ fontSize: "20px" }} className={styles.office_h2}>
                {
                  title.split('\n').map((word, i) => {
                    return (<>
                      {word}<br key={i} />
                    </>);
                  })
                }
              </h2>
            </header>
            <div className={styles.office_div}>
              {members.map((mem, i) => {
                return (
                  <>
                    <h6 className={styles.office_names} key={i}>{mem.name}</h6>
                    <h6 className={styles.office_posi}>{mem.position}</h6>
                    <div className={styles.office_profile}>
                      <Image src={mem.profilePic} height="45" width="45" className={styles.office_profile_img}></Image>
                    </div>
                  </>
                )
              })}
            </div>
          </article>
        </> :
        <article className={`${theme ? styles.card_light : styles.card}`} style={{ ...style, minWidth: "300px" }}>
          <header className={styles.card_header}>
            <p>-------</p>
            <h2 style={{ fontSize: "30px" }}>
              {
                title.split('\n').map((word, i) => {
                  return (<>
                    {word}<br key={i} />
                  </>);
                })
              }
            </h2>
          </header>

          <div className={styles.card_author}>
            <div className={styles.author_name}>
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
        </article >
      }
    </>
  )

}

export default DomainCard
