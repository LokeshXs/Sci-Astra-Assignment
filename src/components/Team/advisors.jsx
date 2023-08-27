import styles from "./advisors.module.css";

const Advisors = () => {

  const advisorsInfo = [
   
    {
      name: 'Vivek Dwivedi',
      designation: 'Founder SciAstra, Mentor',
      img: 'https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg',
      education: "Qualified NEST, JEE advanced, Mains, Master's Student at NISER",
    },
    {
      name: 'Akhil Tripathi',
      designation: 'Cofounder SciAstra',
      img: 'https://www.sciastra.com/teams/akhil_tripathi_niser.jpg',
      education: "Mentor, Qualified NEST, Master's Student at NISER",
    },
    {
      name: 'Dr. Omnkar',
      designation: 'Mentor & Advisor',
      img: 'https://www.sciastra.com/teams/dr_omkar.jpg',
      education: 'Principal Project Scientist at Indian Institute of Technology, Madras',
    },
  ]

  return <section className={styles.section}>
    <h2>Advisors</h2>
    <p className={styles.advisorSectionContent}>This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
    <div className={styles.advisors}>
      {advisorsInfo.map((item, index) => {
        return <div key={item.name} className={styles.advisorsInfoContainer}>
          <div className={styles.advisorsInfoCard}>
            <img src={item.img} alt="profile" />
            <div>
              <p className={styles.advisorName}>{item.name}</p>
              <p className={styles.advisorDesignation}>{item.designation}</p>
              <p className={styles.education}>{item.education}</p>

            </div>
          </div>
          {index !== 2 && <button>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Connect</span>
          </button>}
        </div>
      })}
    </div>
  </section>
};

export default Advisors;