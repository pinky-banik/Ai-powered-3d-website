import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import state from '../store';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, slideAnimation } from '../config/config/motion';
import { CustomButton } from '../components';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {
                snap.intro && (
                    <motion.section className='home' {...slideAnimation('left')}>
                        <motion.header {...slideAnimation("down")}>
                            <img 
                            src="./three.js.png" 
                            alt="logo" 
                            className='w-8 h-8 object-contain'
                            />
                        </motion.header>
                        <motion.div className='home-contact' {...headContainerAnimation}>
                            <h1 className='head-text'>
                                LET'S <br  className='xl:block hidden'/> DO IT
                            </h1>
                        </motion.div>
                        <motion.div>
                            <p className='max-w-md font-normal text-gray-600'>
                                Create your unique and exclusive shirt with our brand-new 3D cusmozition tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                            </p>
                            <CustomButton
                            type="filled"
                            title = "Customize It"
                            handleClick={()=>state.intro= false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.section>
                )
            }
        </AnimatePresence>
    );
};

export default Home;