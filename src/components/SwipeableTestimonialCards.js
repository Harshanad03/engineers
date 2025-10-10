import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const SwipeableTestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState([...testimonialCardData]);

  const nextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, [cards.length, nextCard]);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
      {cards.map((card, index) => {
        const relativeIndex = (index - currentIndex + cards.length) % cards.length;
        const isFront = relativeIndex === 0;
        const stackIndex = relativeIndex;

        return (
          <TestimonialCard
            key={`${card.id}-${currentIndex}`}
            card={card}
            isFront={isFront}
            stackIndex={stackIndex}
            nextCard={nextCard}
          />
        );
      })}
    </div>
  );
};

const TestimonialCard = ({ card, isFront, stackIndex, nextCard }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-30, 30]);
  const opacity = useTransform(x, [-300, -150, 0, 150, 300], [0, 0.3, 1, 0.3, 0]);
  const [imgError, setImgError] = useState(false);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > 150 || Math.abs(velocity) > 300) {
      const direction = offset > 0 ? 1 : -1;
      animate(x, direction * 600, { duration: 0.4 }).then(() => {
        nextCard();
        animate(x, 0, { duration: 0.2 });
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  return (
    <motion.div
      className="absolute h-96 w-80 rounded-3xl border p-8 cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        backgroundColor: "#0a1a3f",
        border: "1px solid rgba(250, 204, 21, 0.3)",
        boxShadow: isFront
          ? "0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(250, 204, 21, 0.1)"
          : "0 10px 25px rgba(0,0,0,0.08), 0 5px 10px rgba(0,0,0,0.04), 0 0 0 1px rgba(250, 204, 21, 0.05)",
        zIndex: 100 - stackIndex,
      }}
      animate={{
        scale: isFront ? 1 : 1 - stackIndex * 0.02,
        y: isFront ? 0 : stackIndex * 8,
        rotate: isFront ? 0 : stackIndex % 2 === 0 ? 2 : -2,
        opacity: isFront ? 1 : 1 - stackIndex * 0.1,
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      whileDrag={{
        scale: 1.05,
        zIndex: 999,
        boxShadow:
          "0 25px 50px rgba(0,0,0,0.15), 0 15px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(250, 204, 21, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
    >
      {/* Company Logo or Fallback */}
      <div className="flex justify-center mb-4 mt-8">
        <div className="w-20 h-20 bg-white rounded-lg p-3 flex items-center justify-center shadow-md border border-gray-200 overflow-hidden">
          {!imgError ? (
            <img
              src={process.env.PUBLIC_URL + card.logo}
              alt={`${card.company} logo`}
              className="max-w-full max-h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-[#0a1a3f]">
              {card.company.charAt(0)}
            </div>
          )}
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <blockquote
          className="text-base leading-relaxed mb-4 text-center"
          style={{
            color: "#ffffff",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            lineHeight: "1.6",
          }}
        >
          "{card.testimonial}"
        </blockquote>

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#facc15" }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Client Info */}
        <div className="text-center">
          <p
            className="font-semibold text-sm"
            style={{
              color: "#facc15",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            {card.name}  {card.position}  {card.company}
          </p>
        </div>
      </div>

      {/* Swipe Indicator */}
      {isFront && (
        <div
          className="absolute top-3 right-6 text-xs font-medium"
          style={{
            color: "rgba(250, 204, 21, 0.8)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          ← Swipe or wait →
        </div>
      )}
    </motion.div>
  );
};

export default SwipeableTestimonialCards;

const testimonialCardData = [
  {
    id: 1,
    
    company: "Rasi Foods",
   
    testimonial:"Reliable and efficient products from Bharath Engineering.Team support and quality are truly commendable.",
    logo: "/images/review1.png",
  },
  {
    id: 2,
   
    company: "SPAC Starch & Derivatives",
   
    testimonial:
      "Bharath Engineering provides durable equipment with great precision.Very satisfied with their service response.",
    logo: "/images/review2.png",
  },
  {
  
    company: "Ultramarine & Pigments Ltd",
   
    testimonial:
      "High-quality products with excellent finishing.Bharath Engineering’s timely service truly makes a difference",
    logo: "/images/review3.png",
  },
  {
    id: 4,
    
    company: "RGS Feeds",
    
    testimonial:
      "Bharath Engineering delivers strong and high-quality machines.Service and support are quick and reliable.",
    logo: "/images/review4.png",
  },
];