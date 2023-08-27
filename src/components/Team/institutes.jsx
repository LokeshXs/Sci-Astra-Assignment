import styles from "./institutes.module.css";
const InstitutesComponent = () => {

  const instituteLogos = [
    {
      image: require('../../assets/harvard.png'),
    },
    {
      image: require('../../assets/california.png'),
    },
    {
      image: require('../../assets/cambridge.jpg'),
    },
    {
      image: require('../../assets/edinburgh.png'),
    },
    {
      image: require('../../assets/eth.jpg'),
    },
    {
      image: require('../../assets/hopkins.jpg'),
    },
    {
      image: require('../../assets/illinois.png'),
    },
    {
      image: require('../../assets/planck.png'),
    },
  ]

  return <div className={styles.instituteSectionContainer}>
    <section className={styles.section}>
      <div>
        {instituteLogos.map((item, index) => {
          return <img key={index} src={item.image} alt='logo' className={styles.logoImg} />
        })}
      </div>

    </section>
  </div>
};

export default InstitutesComponent;
