import { motion } from "framer-motion";

export default function RotatingABadge() {
  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-red-50">
      {/*Glow detras*/}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-3xl blur-3xl" />

      {/* Marco cuadrado rotando*/}
      <div className=" relative flex items-center justify-center">
        {/*Cuadrado*/}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute  inset-0 border-2 border-accent rounded-3xl bg-transparent"
          style={{ width: "300px", height: "300px" }}
        />
        {/*Circulo*/}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-accent rounded-full"
          style={{ width: "300px", height: "300px" }}
        />
        {/*Letra A*/}
        <div className="relative z-10 font-bold h-64 bg-gradient-to-br">
          <span className="text-8xl font-bold text-accent">A</span>
        </div>
      </div>
    </div>
  );
}
