import styles from '../styles/landing/Main.module.scss';

// Components
import Services from './subComponents/landing/main/Services';
import About from './subComponents/landing/main/About';
import Maps from './subComponents/landing/main/Maps';
import Builds from './subComponents/landing/main/Builds';

const Main = () => {
  return (
    <div className="text-white font-bold">

      <div className={styles.main__service__container}>
        <Services />
        <br /><br /><br /><br /><br /><br />
      </div>

      <iframe
        src='https://my.spline.design/ranchpc-77e02d48f65b852d0188bbfc202f0173/'
        frameborder='0'
        width='100%'
        height='250px'
      />

      <About />

      <Maps />

      <Builds />

    </div>
  )
}

export default Main