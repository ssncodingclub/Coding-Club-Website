import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/about.module.css"
import DomainCard from "./DomainCard"

export default function OffBearSec({ theme, year, file = [] }) {
    return (
        <div className={styles.container} style={{ paddingLeft: "2rem" }}>
            <h3 className={theme ? styles.batch_light : styles.batch}>Academic Year {year}</h3>
            <section className={theme ? styles.newcontainer_light : styles.newcontainer} >
                {file.map((team, i) => {
                    return <DomainCard
                        key={i}
                        isOffice={true}
                        title={team.title}
                        theme={theme}
                        members={team.members}
                        height={team.height}
                        overflow={team.overflow}
                    >
                    </DomainCard>
                })}
            </section>
        </div>
    )
}