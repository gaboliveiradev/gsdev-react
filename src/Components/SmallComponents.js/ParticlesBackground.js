import Particles from "react-tsparticles";
import particlesConfig from "../../config/particlesConfig";

const ParticlesBackground = ({ children }) => {
    return (
        <Particles params={particlesConfig}>
            {children}
        </Particles>
    );
}

export default ParticlesBackground;