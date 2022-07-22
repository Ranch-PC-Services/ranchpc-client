// Icons
import { GoDeviceDesktop } from 'react-icons/go';
import { ImWrench } from 'react-icons/im'
import { CgDropOpacity } from 'react-icons/cg';

const Services = () => {
  return (
    <div className="services-container flex items-center justify-between w-full max-w-[110rem] mx:max-w-[110rem] 2xl:max-w-[90rem] xl:max-w-[70rem] xl:gap-14 lg:max-w-[50rem]">

      <div className="services-container__left">
        <div className="mt-40 flex flex-col gap-10">
          <p className="text-5xl">Our Services</p>
          <div className="flex flex-col gap-10 text-[1.1rem] max:text-[1.1rem] 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.9rem] leading-loose 2xl:leading-loose xl:leading-snug lg:leading-snug opacity-75">
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

      <div className="services-container__right flex gap-10 mt-32 2xl:mt-32 xl:mt-[15rem]">
        <button type="button" className="button-glow hover:animate-pulse flex flex-col items-center justify-center gap-5 tracking-widest">
          <GoDeviceDesktop color="#637cbb" fontSize={50} />
          <span className="opacity-75">Labor</span>
        </button>
        <button type="button" className="button-glow hover:animate-pulse flex flex-col items-center justify-center gap-5 tracking-wider">
          <ImWrench color="#637cbb" fontSize={50} />
          <span className="opacity-75">Troubleshooting</span>
        </button>
        <button type="button" className="button-glow hover:animate-pulse flex flex-col items-center justify-center gap-5 tracking-widest">
          <CgDropOpacity color="#637cbb" fontSize={50} />
          <span className="opacity-75">Cleaning</span>
        </button>
      </div>

    </div>
  )
}

export default Services