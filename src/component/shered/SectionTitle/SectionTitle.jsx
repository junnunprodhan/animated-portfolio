import React from 'react';

import { motion } from 'framer-motion';

const SectionTitle = ({ titleF, titleS, subTitle }) => {
    return (
        <motion.div 
            className='text-center to-white uppercase font-[Poppins] mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div 
                className='flex text-center justify-center font-[Poppins] text-5xl gap-3 mb-4'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.span 
                    className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {titleF}
                </motion.span>
                <motion.span 
                    className='bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent font-bold'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {titleS}
                </motion.span>
            </motion.div>
            
            {/* Enhanced Progress Bar */}
            <motion.div 
                className="flex justify-center"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="relative">
                    <motion.div 
                        className="h-1 w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        viewport={{ once: true }}
                    />
                    <motion.div 
                        className="absolute inset-0 h-1 w-24 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-sm"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 0.6 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        viewport={{ once: true }}
                    />
                </div>
            </motion.div>
            
            {subTitle && (
                <motion.p 
                    className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {subTitle}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionTitle;