import React from "react";
import { ParticlesConfig } from "../ParticlesConfig/ParticlesConfig";
import Particles from "@tsparticles/react";

const ParticlesBg = () => {
  return (
    <div>
      <Particles options={ParticlesConfig}></Particles>
    </div>
  );
};

export default ParticlesBg;
