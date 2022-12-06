import React from "react";
import styles from "../../styles/Card.module.css";
import DomainCard from "./DomainCard";
import ProfileCard from "./ProfileCard";

const Domain = ({
  domain = {
    title: "",
    discord: "",
    tags: [],
    bgColorStyle: {
      background:
        "linear-gradient(135deg, #1f005c, #35005e, #5f0060, #8f0860, #bc365d, #dd635c, #f28c5f, #fcaa67, #ffb56b)",
    },
    members: [],
  },
  theme,
}) => {
  return (
    <div className={styles.container} style={{ paddingLeft: "2rem" }}>
      <section className={theme ? styles.card_list_light : styles.card_list}>
        <DomainCard
          title={domain.title}
          tags={domain.tags}
          discord={domain.discord}
          style={domain.bgColorStyle}
          theme={theme}
        />
        {domain.members.map(
          ({ name, position, alt, profilePic, socials }, i) => {
            return (
              <>
                <ProfileCard
                  name={name}
                  position={position}
                  alt={alt}
                  profilePic={profilePic}
                  socials={socials}
                  marginFlag={i === 0}
                  key={i}
                  theme={theme}
                />
              </>
            );
          }
        )}
      </section>
    </div>
  );
};

export default Domain;
