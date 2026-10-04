import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// 🎬 ছবির পর্দা-সরানো রিভিল: নিচ থেকে পর্দা উঠে যায়, ছবি বড় থেকে স্বাভাবিক হয়
export const CurtainImage = ({ src, alt, className, style, delay = 0, imgStyle }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden", ...style }}
      initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease, delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...imgStyle }}
        initial={reduce ? false : { scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.6, ease, delay }}
      />
    </motion.div>
  );
};

// ✍️ শব্দে শব্দে মাস্ক রিভিল (শিরোনামের জন্য)
// (দৃশ্যমানতা মাপা হয় পুরো শিরোনামে — শব্দগুলো মাস্কের বাইরে থাকায় আলাদা করে মাপলে কখনো দেখা যেত না)
const wordParent = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const wordChild = {
  hidden: { y: "110%", rotateX: -40 },
  show: { y: 0, rotateX: 0, transition: { duration: 0.75, ease } }
};

export const WordReveal = ({ text, as = "span", delay = 0, className, style }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.span;
  const words = String(text).split(" ");
  return (
    <Tag
      className={className}
      style={style}
      aria-label={text}
      variants={wordParent}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.1em" }}>
          <motion.span style={{ display: "inline-block" }} variants={wordChild}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

// 🃏 3D ফ্লিপ-ইন কার্ড (পাশ থেকে ঘুরে আসে)
export const FlipIn = ({ children, from = "left", delay = 0, style, className }) => {
  const reduce = useReducedMotion();
  const dir = from === "left" ? -1 : 1;
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1200, height: "100%", ...style }}
      initial={reduce ? false : { opacity: 0, rotateY: 35 * dir, x: 60 * dir, scale: 0.92 }}
      whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.95, ease, delay }}
    >
      {children}
    </motion.div>
  );
};
