import { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';




//@ts-ignore
export const Cardoc = ({ title, transmitter }) => {

  

    console.log("documents", document);
 
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.2 }}
            >

            </motion.div>
        </div>
    );
}

//@ts-ignore
export const CardocPro = ({ title, transmitter }) => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.2 }}
            >
                <li className={'cursor-pointer w-[300px] h-[350px] max-[350px]: rounded bg-gradient-to-r bg-purple-900 hover:bg-purple-800 transition duration-300 text-white p-3 m-5 relative shadow-lg'}>
                    <h2 className='uppercase text-center'>{title}</h2>
                    <p className='text-xs absolute bottom-3 left-3'>{transmitter}</p>
                    <div className='flex items-center justify-center cursor-pointer m-auto mt-5 w-[80px] h-[80px]    transition-all duration-300 ' title='Ouvir le document'>
                        <Link href={"/documents/info"}>
                            <Image
                                src="/Anim.png"
                                width={60}
                                height={60}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>
                </li>
            </motion.div>
        </div>
    );
}

export const AddCard = () => {
    return (
        <div title='Ajouter un document' className='w-[300px] h-[350px] max-h-[350px] rounded bg-white bg-opacity-80 flex items-center cursor-pointer justify-center p-3 m-5 hover:bg-purple-300 transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
    );
}

export default Cardoc;