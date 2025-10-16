import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // Show loader for 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
             className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-full blur-3xl"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center">
           {/* Logo container with animations */}
           <motion.div
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{
               type: "spring",
               stiffness: 260,
               damping: 20,
               duration: 1,
             }}
             className="relative mb-4 sm:mb-6 md:mb-8"
           >
             {/* Rotating ring around logo */}
             <div className="absolute inset-0 -m-4 flex items-center justify-center">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   ease: "linear",
                 }}
                 className="loader-rotating-ring loader-smooth-rotate w-full h-full"
                 style={{
                   transformOrigin: 'center center'
                 }}
               >
                 <div className="w-full h-full border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full" />
               </motion.div>
             </div>

             {/* Pulsing glow effect */}
             <motion.div
               animate={{
                 scale: [1, 1.1, 1],
                 opacity: [0.5, 0.8, 0.5],
               }}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
               className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50"
             />

             {/* Logo */}
             <motion.div
               animate={{
                 y: [0, -10, 0],
               }}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
               className="relative bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5 md:p-6 rounded-full shadow-2xl border-2 sm:border-3 md:border-4 border-blue-100"
             >
               <img
                 src="/images/logo.png"
                 alt="Bharath Engineers Logo"
                 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
               />
             </motion.div>
          </motion.div>

          {/* Company name with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-4 sm:mb-6 md:mb-8 px-4"
          >
            <div className="loader-company-name flex items-center justify-center space-x-1 sm:space-x-2 mb-2 flex-nowrap overflow-hidden">
              {'BHARATH ENGINEERINGS'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.05,
                    duration: 0.5,
                  }}
                  className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-900 tracking-wider whitespace-nowrap"
                  style={{
                    textShadow: '0 0 20px rgba(30, 58, 138, 0.3)',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
               className="text-yellow-600 text-sm sm:text-base md:text-lg tracking-widest font-medium"
            >
              Design, Build, Deliver
            </motion.p>
          </motion.div>

        </div>

        {/* Corner decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-t-2 sm:border-t-3 md:border-t-4 border-l-2 sm:border-l-3 md:border-l-4 border-blue-900/30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-b-2 sm:border-b-3 md:border-b-4 border-r-2 sm:border-r-3 md:border-r-4 border-blue-900/30"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;

