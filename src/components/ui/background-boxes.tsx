"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(75).fill(1);
  const cols = new Array(50).fill(1);
  let colors = [
    "#3b82f6", // blue-500
    "#60a5fa", // blue-400
    "#93c5fd", // blue-300
    "#bfdbfe", // blue-200
    "#dbeafe", // blue-100
    "#eff6ff", // blue-50
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        willChange: "transform, opacity",
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-12 w-24 border-l border-blue-500/40"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                opacity: 0.9,
                transition: { duration: 0 },
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0.0)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0.0)"
                ],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: (i + j) * 0.1 },
              }}
              key={`col` + j}
              className="relative h-12 w-24 border-t border-r border-blue-500/40 hover:bg-blue-500/10"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-blue-500/40"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore); 