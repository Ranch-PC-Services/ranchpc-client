// Components
import About from './subComponents/main/About';
import Services from './subComponents/main/Services';

const Main = () => {
  return (
    <div className="text-white font-bold">

      <div className="bg-[#110F14]">
        <Services />
        <br /><br /><br /><br /><br /><br />
      </div>

      <iframe src='https://my.spline.design/ranchpc-77e02d48f65b852d0188bbfc202f0173/' frameborder='0' width='100%' height='250px'></iframe>

      <About />

    </div>
  )
}

export default Main