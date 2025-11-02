import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import HeroBanner from './HeroBanner';
const Hero = () => {
  return (
    <div className="pt-14 w-screen h-screen grid grid-cols-1 md:grid-cols-12 place-items-center">
      <div className="col-span-1 md:col-span-5 px-4 md:px-12 h-full w-full relative">
        <div className="absolute top-40 flex flex-col items-center md:items-start">
          <h2 className="font-poppins text-5xl text-gray-900 text-center md:text-start">
            Healthy food to live a healthier life in the future
          </h2>
          <p className="text-md text-gray-900/60 font-poppins mt-2">
            Healthy meets delicious with fresh ingredients and bold flavors crafted to fuel your best life.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-3 bg-gradient-to-br from-green-800 to-green-500 hover:from-green-700 transition-colors duration-300 text-gray-50 rounded-xl">
              Place an Order
            </button>
            <button className="px-4 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-green-50 transition-all duration-150">
              Request an Event
            </button>
          </div>
        </div>
      </div>
      {/* Banner */}
      {/* <div
        className="size-96 hidden md:block col-span-1 md:col-span-6"
        style={plate_bg}
      /> */}
      <div id="canvas" className="w-full">
        {/* <Canvas>
          <HeroBanner />
        </Canvas> */}
        <Canvas
          className="text-amber-300"
          style={{height: '80vh', width: '40vw', marginLeft: '6rem'}}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color={0xff0000} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <HeroBanner />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
