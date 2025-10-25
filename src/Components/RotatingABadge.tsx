import { motion } from "framer-motion";

export default function RotatingABadge() {
  return (
    <div className="relative w-[360px] h-[360px] mb-[140px]">
      {/* Glow detrás */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/50 via-primary/10 to-transparent rounded-3xl blur-3xl" />

      {/* Cuadrado*/}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-8 top-7 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-accent/50 rounded-3xl bg-transparent"
      />

      {/* Círculo*/}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-8 top-7  -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-accent/50 rounded-full bg-transparent"
      />

      {/* A */}
      <div className=" left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 relative z-30 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl border border-accent/50 flex items-center justify-center backdrop-blur-xlg">
        <span className="text-8xl font-bold text-accent">A</span>
      </div>
    </div>
  );
}
