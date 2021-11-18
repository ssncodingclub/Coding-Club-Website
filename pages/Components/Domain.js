import React from "react";
import styles from '../../styles/Card.module.css';
import DomainCard from "./DomainCard";
import ProfileCard from "./ProfileCard";

const Domain = ({ domain }) => {

  return (
    <div className={styles.container} style={{paddingLeft: "2rem"}}>
      <section className={styles.card_list}>
        <DomainCard 
          title={domain.title}
          tags={domain.tags}
          discord={domain.discord}
          style={domain.bgColorStyle}
        />
        {
          domain.members.map(({name, position, alt, profilePic, socials}, i) => {
            return (<>
              <ProfileCard 
                name={name}
                position={position}
                alt={alt}
                profilePic={profilePic}
                socials={socials}
                marginFlag={i===0}
                key={i}
              />
            </>)
          })
        }
      </section>
    </div>
  )
}

export default Domain
