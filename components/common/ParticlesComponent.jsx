import Particles from 'react-tsparticles';
import darkConfig from '../../config/particles/particlesjs-config.json';

const ParticlesComponent = (props) => {
  return (
    <div className="particles-container">
      <Particles
        params={props.theme === 'dark' ? darkConfig : null}
      />
    </div>
  )
}

export default ParticlesComponent;