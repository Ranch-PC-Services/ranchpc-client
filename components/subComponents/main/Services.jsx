// Icons
import { GoDeviceDesktop } from 'react-icons/go';
import { ImWrench } from 'react-icons/im'
import { CgDropOpacity } from 'react-icons/cg';

const Services = () => {
  return (
    <div className="services-container flex flex-row items-center justify-between w-full 
      max-w-[110rem] mx:max-w-[110rem] 2xl:max-w-[90rem] xl:max-w-[70rem] xl:gap-14 lg:max-w-[50rem] custom:max-w-[30rem] xl:flex-row sm:flex-col custom:flex-col"
    >

      <div className="services-container__left">
        <div className="mt-40 flex flex-col gap-10 mx:mt-40 2xl:mt-40 xl:mt-20 md:mt-10 custom:mt-20">
          <p className="text-5xl ml-0 md:ml-10 custom:text-4xl custom:text-center">Our Services</p>
          <div className="services__subtitle flex flex-col gap-10 w-full ml-0
            text-[1.1rem] mx:text-[1.1rem] mx:w-full 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.85rem] md:w-3/4 md:ml-10 custom:text-[0.85rem] custom:text-center custom:w-3/4 leading-loose 2xl:leading-loose xl:leading-snug lg:leading-snug opacity-75"
          >
            <span>
              From its inception, Ranch PC Services has done multiple PC services for PC lovers out there. <br />
              From quoting from us, asking help for what PC should they use for their needs or wants. <br />
              We are gladly to help people out there who wants to know more about PC.
            </span>
            <span>
              To help cope with the effects of the spread of Covid-19, schools, offices, shutdown. It may sounds <br />
              cool for a lot but where to from now? Online services is a solution to those problems. <br />
              Working online and learning online sounds a dream come true, so here we are reaching our services, <br />
              Ranch PC to help you build your PC that satisfies you with us in continuing your journey, <br />
              it maybe working or learning or others.
            </span>
          </div>
        </div>
      </div>

      <div className="services-container__right flex flex-row gap-10 mt-32 mr-0
        mx:flex-row mx:gap-10 2xl:flex-row 2xl:mt-32 xl:mt-[12rem] xl:gap-8 xl:flex-row xl:flex-wrap xl:justify-center lg:flex-col md:flex-col md:gap-4 md:mt-[7rem] md:mr-10 sm:flex-col custom:flex-col custom:mt-10"
      >
        <button type="button" className="button-glow hover:animate-pulse flex flex-col items-center justify-center gap-5 tracking-widest 
          custom:flex-row custom:justify-start"
        >
          <GoDeviceDesktop
            className="ml-0 custom:ml-10"
            color="#637cbb"
            fontSize={50}
          />
          <span className="opacity-75">Labor</span>
        </button>
        <button type="button" className="button-glow hover:animate-pulse flex flex-col items-center justify-center gap-5 tracking-wider 
          custom:flex-row custom:justify-start"
        >
          <ImWrench
            className="ml-0 custom:ml-10"
            color="#637cbb"
            fontSize={50}
          />
          <span className="opacity-75">Troubleshooting</span>
        </button>
        <button type="button" className="button-glow hover:animate-pulse flex flex-col items-center justify-center gap-5 tracking-widest 
          custom:flex-row custom:justify-start"
        >
          <CgDropOpacity
            className="ml-0 custom:ml-10"
            color="#637cbb"
            fontSize={50}
          />
          <span className="opacity-75">Cleaning</span>
        </button>
      </div>

    </div>
  )
}

export default Services;