import React from "react";
import styles from '../../styles/Card.module.css';
import Image from 'next/image';

const ProfileCard = ({
  name = "",
  position = "",
  alt = "",
  profilePic = "",
  socials = {
    discord: "",
    linkedin: "",
    instagram: ""
  },
  marginFlag = true,
  theme
}) => {
  return (
    <>
      <article className={theme ? styles.card_light : styles.card} style={{ marginLeft: marginFlag ? "-2rem" : "-50px" }}>
        <div className={styles.profile}>
          <div className={styles.profile_pic}>
            <Image width="130" height="130" src={profilePic} alt={alt}></Image>
          </div>
          <header className={styles.card_header}>
            <h2 className={theme ? styles.profile_name_light : styles.profile_name}>
              <DisplayName name={name} />
            </h2>
            <div className={styles.profile_subtitle}>{position}</div>
          </header>
          <div className={styles.social_media}>

            {
              socials.discord
                ?
                <a
                  href={socials.discord}
                  target="_blank"
                  rel="noreferrer"
                  className={`fab fa-discord ${theme ? styles.social_icon_light : styles.social_icon}`}
                ></a>
                : null
            }
            {
              socials.linkedin
                ?
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`fab fa-linkedin ${theme ? styles.social_icon_light : styles.social_icon}`}
                ></a>
                : null
            }
            {
              socials.instagram
                ?
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className={`fab fa-instagram ${theme ? styles.social_icon_light : styles.social_icon}`}
                ></a>
                : null
            }
          </div>
        </div>
      </article>
    </>
  );
}

const DisplayName = ({ name }) => {
  const split = name.split(' ');

  const middleIndex = Math.floor(split.length / 2);
  const firstPart = split.slice(0, middleIndex).join(" ");
  const secondPart = split.slice(middleIndex).join(" ");

  return (
    <>
      {firstPart}<br />{secondPart}
    </>
  );
}

export default ProfileCard
