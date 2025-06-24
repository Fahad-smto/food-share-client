
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-6 px-4 md:px-8">
            <div className="relative w-full max-w-6xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden mx-auto">
             
                <img
                    src="/bg1.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Delicious food banner"
                />

             
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

              
                <div className="relative flex items-center justify-center h-full text-center text-white px-4 sm:px-6">
                    <div className="space-y-6 sm:space-y-8">

                      
                        <Zoom cascade triggerOnce>
                            <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight">
                                <span className="text-yellow-400">Share food, </span> spread kindness.
                            </h1>
                            <p className="text-sm sm:text-base text-gray-200">

                            </p>
                        </Zoom>

                        
                        <Fade direction="up" triggerOnce>
                            <p className="max-w-3xl mx-auto text-xs sm:text-sm text-white/90">
                                Share food, spread kindness.
                                Turn your surplus into someone’s smile.
                                Together, we can fight hunger and reduce waste.
                                Join a caring community of givers and helpers.
                                Every meal shared brings hope to a table.
                            </p>
                        </Fade>

                        
                        <div className='flex justify-center'>
                            <Slide direction="up" triggerOnce>
                                <button className="btn bg-orange-400 text-white text-base sm:text-lg px-6 py-3 flex items-center gap-2">
                                    Browse Food <CiSearch className="text-xl" />
                                </button>
                            </Slide>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
