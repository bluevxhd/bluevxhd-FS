import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  MessageCircle, 
  Users, 
  Video, 
  ExternalLink,
  TreeDeciduous
} from 'lucide-react';
import { cn } from './lib/utils';

const SocialLink = ({ href, icon: Icon, label, color }: { href: string, icon: any, label: string, color: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02, x: 5 }}
    whileTap={{ scale: 0.98 }}
    className={cn(
      "flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group w-full max-w-md",
      color
    )}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-blue-500/20 transition-colors">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <span className="font-bold tracking-wide text-white/90">{label}</span>
    </div>
    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
  </motion.a>
);

export default function App() {
  const [isColored, setIsColored] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    {
      label: "Discord Server",
      href: "https://discord.gg/9kGa8zD26S",
      icon: MessageSquare,
      color: "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
    },
    {
      label: "Saluran WhatsApp",
      href: "https://whatsapp.com/channel/0029VafgQ9TKwqSbu9xg6z0h",
      icon: MessageCircle,
      color: "hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
    },
    {
      label: "Grup WhatsApp",
      href: "https://chat.whatsapp.com/FLVmpnqFy5uLVb5u32ryDN?mode=gi_t",
      icon: Users,
      color: "hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
    },
    {
      label: "TikTok Profile",
      href: "https://www.tiktok.com/@bluevxhdminecraft?_r=1&_t=ZS-93MpQWdXriZ",
      icon: Video,
      color: "hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative z-10"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.h1 
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1, 0.98]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-5xl md:text-7xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              BlueVxHd
            </motion.h1>
            <div className="w-12 h-1 bg-blue-600/30 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full bg-blue-500"
              />
            </div>
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[80px] rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 relative"
      >
        <div 
          onClick={() => setIsColored(!isColored)}
          className={cn(
            "w-32 h-32 rounded-3xl flex items-center justify-center border-4 relative overflow-hidden group cursor-pointer transition-all duration-500",
            isColored ? "bg-green-500/20 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]" : "bg-blue-500/20 border-blue-500/30"
          )}
        >
          <div className="relative z-10 flex flex-col items-center">
            <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(
              "transition-all duration-500",
              isColored ? "drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            )}>
              <rect x="6" y="2" width="4" height="2" fill={isColored ? "#4ADE80" : "#60A5FA"} />
              <rect x="4" y="4" width="8" height="2" fill={isColored ? "#22C55E" : "#3B82F6"} />
              <rect x="2" y="6" width="12" height="2" fill={isColored ? "#16A34A" : "#2563EB"} />
              <rect x="4" y="8" width="8" height="2" fill={isColored ? "#15803D" : "#1D4ED8"} />
              <rect x="7" y="10" width="2" height="4" fill={isColored ? "#78350F" : "#1E3A8A"} />
            </svg>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
        
        <div className={cn(
          "absolute -bottom-2 -right-2 p-2 rounded-xl border-2 border-[#050505] shadow-lg transition-colors duration-500",
          isColored ? "bg-green-600" : "bg-blue-600"
        )}>
          <TreeDeciduous className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-black tracking-tighter mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          BlueVxHd
        </h1>
        <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
          Minecraft Content Creator
        </p>
      </motion.div>

      <div className="flex flex-col gap-3 w-full items-center">
        {links.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="w-full flex justify-center"
          >
            <SocialLink {...link} />
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold"
      >
        © 2026 BlueVxHd • All Rights Reserved
      </motion.p>
    </div>
  );
}
