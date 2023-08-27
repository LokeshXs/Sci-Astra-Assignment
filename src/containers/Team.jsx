import Advisors from "../components/Team/advisors";
import InstitutesComponent from "../components/Team/institutes";
import MentorComponent from "../components/Team/mentor";
import styles from "./Team.module.css";
import { motion } from "framer-motion";

const TeamContainer = () => {

  return <main>
    
    <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className={styles['team-section__heading']}>Learn from Scientists and Research scholars <br /> from the top institutes in the world</motion.h1>
      <InstitutesComponent />
      <MentorComponent />
      <Advisors />
  </main>
};

export default TeamContainer;