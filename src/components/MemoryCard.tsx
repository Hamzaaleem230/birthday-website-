"use client";

import { useState } from "react";
import { Memory } from "@/data/memories";
import { motion } from "framer-motion";
import Image from "next/image";

interface MemoryCardProps {
  memory: Memory;
}

export function MemoryCard({ memory }: MemoryCardProps) {
  const [imageError, setImageError] = useState(false);
  const shouldShowImage = memory.imagePath && !imageError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-surface p-6 flex flex-col items-center text-center group cursor-default"
    >
      <div className="w-full aspect-square bg-[#080D18] rounded-lg mb-6 flex items-center justify-center border border-[#E7C77B]/10 overflow-hidden relative">
        {shouldShowImage ? (
          <Image
            src={memory.imagePath!}
            alt={memory.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-[#E7C77B]/30 font-serif text-sm">
            {memory.category}
          </div>
        )}
      </div>
      <h3 className="font-serif text-xl text-[#F6F3EB] mb-2">{memory.title}</h3>
      <p className="text-[#94A3B8] text-sm leading-relaxed">{memory.caption}</p>
    </motion.div>
  );
}
