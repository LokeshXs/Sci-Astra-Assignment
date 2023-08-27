import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from "./mentor.module.css";
import { useEffect, useState } from "react";


const MentorComponent = () => {

  const [sliderType, setSliderType] = useState('');

  const mentorDetails = [
    {
      name: 'Abhay Gupta',
      college: 'IIT Bombay',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Abhay_Gupta_physics.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg',
    },
    {
      name: 'Sehasree Mohanta',
      college: 'IACS',
      imgUrl: 'http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg',
    },

  ]

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 524) {
      setSliderType('mb');
    }
    else if (windowWidth < 944) {
      setSliderType('tb');
    }
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 524) {
        setSliderType('mb');
      }
      else if (windowWidth < 944) {
        setSliderType('tb');
      }

    }
    window.addEventListener('resize', handleResize);
  }, []);


  return <section className={styles.section}>
    <h2>Meet your mentors</h2>
    <div className={styles.mentors}>
      <Swiper
        slidesPerView={sliderType === 'tb' ? 3 : sliderType === 'mb' ? 1 : 4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation, Autoplay]}
        wrapperClass={styles.mySwiper}
        grabCursor
        autoplay={true}
        loop
      >
        {mentorDetails.map(item => {
          return <SwiperSlide key={item.imgName} className="swiper-slide" tag="div">
            <div className={styles['mentor-info__container']}>
              <img src={item.imgUrl} alt="" />
              <p className={styles.mentorName}>{item.name}</p>
              <p className={styles.mentorCollege}>{item.college}</p>
            </div>
          </SwiperSlide>
        })}
      </Swiper>

    </div>
  </section>

};

export default MentorComponent;