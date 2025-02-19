
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Card = ({ children, highlight, delay, isCenter, isUltimate }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 300, scale: isCenter ? 1.2 : 1 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        transition: { duration: 0.2, ease: "easeOut" },
        boxShadow: "0px 15px 50px rgba(168, 85, 247, 0.4), 0px 6px 18px rgba(168, 85, 247, 0.3)", 
        borderWidth: "2px",
        borderColor: "rgb(172, 126, 255)",
      }}
      className={`p-8 lg:w-[260px] lg:h-[400px] rounded-2xl shadow-xl transition-all border border-white/30 backdrop-blur-lg flex flex-col items-center justify-center 
        ${isUltimate ? " bg-yellow-500 bg-opacity-20 text-white" : "bg-white/20 text-white"}`}
    >
      {children}
    </motion.div>
  );
};

const Button = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.95 }}
    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all shadow-md"
  >
    {children}
  </motion.button>
);

const subscriptions = [
  {
    title: "Basic",
    price: "Free",
    features: ["Create private rooms", "Join public rooms", "Standard quality"],
  },
  {
    title: "Ultimate",
    price: "₹249/mo",
    features: ["Everything in Premium", "4K streaming", "Multiple devices" , "Parallel Streaming"],
    highlight: true,
    isUltimate: true, // Apply golden background to Ultimate
  },
  {
    title: "Premium",
    price: "₹159/mo",
    features: ["Everything in Basic", "HD streaming", "Priority support"],
  },
];

export default function Subscription() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="min-h-[90vh] relative flex flex-col items-center p-10 w-full text-white bg-gradient-to-bl from-purple-950 via-black to-black"
    >
      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isSectionInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, type: "all" }}
        className="p-10 rounded-2xl shadow-lg text-center"
      >
        <h1 className="text-4xl font-bold mb-6">Watch Movies Together, Anytime!</h1>
        <p className="text-lg text-gray-300 mb-10 ">
          Join a room, watch your favorite movies, and video chat with friends.
        </p>
      </motion.div>

      {/* Subscription Cards */}
      <div className="relative flex flex-col md:flex-row gap-10 m-10 items-center justify-center">
        {subscriptions.map((sub, index) => (
          <Card
            key={index}
            highlight={sub.highlight}
            delay={index * 0.2}
            isCenter={sub.title === "Ultimate"}
            isUltimate={sub.isUltimate} // Apply golden background to Ultimate
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl lg:text-3xl font-bold">{sub.title}</h2>
              <p
                className={`text-md lg:text-xl font-semibold my-2  text-purple-300
                  `}
              >
                {sub.price}
              </p>
              <ul className={`mb-6 space-y-2 text-gray-200`}>
                {sub.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm lg:text-base">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <Button className="text-sm lg:text-base">Subscribe</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
