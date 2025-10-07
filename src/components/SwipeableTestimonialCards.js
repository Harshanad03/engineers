import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const SwipeableTestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState([...testimonialCardData]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

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
      <div className="flex justify-center mb-4">
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
      <div className="flex flex-col items-center justify-center flex-1">
        <blockquote
          className="text-base leading-relaxed mb-6 text-center"
          style={{
            color: "#ffffff",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            lineHeight: "1.6",
          }}
        >
          "{card.testimonial}"
        </blockquote>

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
            {card.name} - {card.position} @ {card.company}
          </p>
        </div>
      </div>

      {/* Swipe Indicator */}
      {isFront && (
        <div
          className="absolute top-6 right-6 text-xs font-medium"
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
    name: "Rajesh Kumar",
    company: "Rasi Foods",
    position: "Plant Manager",
    testimonial:
      "Bharath Engineerings has been our trusted partner for over 10 years. Their cattle feed machinery has significantly improved our production efficiency and quality.",
    logo: "/images/review1.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "SPAC Starch & Derivatives",
    position: "Operations Director",
    testimonial:
      "The cement silos from Bharath Engineerings are incredibly durable and maintenance-free. Their nationwide supply network makes procurement hassle-free.",
    logo: "/images/review2.png",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Ultramarine & Pigments Ltd",
    position: "CEO",
    testimonial:
      "Outstanding quality and excellent after-sales support. Their fly ash silos have exceeded our expectations in terms of performance and longevity.",
    logo: "/images/review3.png",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    company: "RGS Feeds",
    position: "Production Head",
    testimonial:
      "The high-strength materials and corrosion-resistant coating of their machinery have reduced our maintenance costs by 40%. Highly recommended!",
    logo: "/images/review4.png",
  },
];