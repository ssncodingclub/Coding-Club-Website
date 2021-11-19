import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import styles from '../styles/about.module.css';
import Navbar from './Components/Navbar';
import Domain from './Components/Domain';
import Department from './Components/Department';
import Faq from './Components/Faq';
import domains from '../data/domains.json';
import questions from '../data/faq.json';
import departments from '../data/departments.json';
import { Container, Row, Accordion } from 'react-bootstrap';

export default function About() {

  return (
    <div className={styles.container}>
      <Head>
        <title>SSN Coding Club</title>
        <meta name="description" content="Official SSN Coding Club Website" />
        <link rel="icon" href="/favicon.ico" />
        {/* for fontawesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Navbar />

      <main>
        <div className={styles.Header}>
          <h1>About Us!</h1>
        </div>
        <div>
          <h2 className={styles.Subheader}>What we do ? </h2>
          <Container className="mt-10" className={styles.departmentContainer}>
            <Row>
              {
                departments.map((department, index) => {
                  return <Department key={index} department={department} />
                })
              }
            </Row>
          </Container>
        </div>
        <div>
          <h2 className={styles.Subheader}>What are we ? </h2>
          {
            domains.map((domain, i) => {
              return <Domain domain={domain} key={i} />
            })
          }
        </div>
        {/* <div>
          <h2 className={styles.Subheader}>Wanna join us ? </h2>
          { FORM LINK HERE IG, SOME FORM OF FORM }
        </div> */}
        <div>
        <h2 className={styles.Subheader}>Frequently asked Questions</h2>
            
          <Container>
            <Accordion defaultActiveKey='0' flush>
            {
              questions.map((question, i) => {
                const key_val = {
                  key: "" + i
                };
                return <Faq questionnaire={{...key_val , ...question}} key={i} />
              })
            }
            </Accordion>
          </Container>
        </div>
      </main>
    </div>
  )
}
