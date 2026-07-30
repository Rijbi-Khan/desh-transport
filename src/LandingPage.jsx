import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Truck,
  Package,
  Container,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  Lock,
  Navigation,
  ArrowRight,
  Radio,
  CheckCircle2
} from "lucide-react";

import logoImg from "./desh logo.jpeg";
import bannerImg from "./banner.jpeg";
import fleetImg from "./assets/fleet-highway.png";
import openTruckImg from "./assets/open-truck-loading.png";
import trailerImg from "./assets/trailer-rain.png";
import driverPortraitImg from "./assets/driver-portrait.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const fadeUpContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 }
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const statBadges = [
    { label: "কভার্ড ভ্যান", value: "৫০+" },
    { label: "সফল ট্রিপ", value: "১০০০+" },
    { label: "সাপোর্ট", value: "২৪/৭" }
  ];

  const trustStats = [
    { icon: Clock, value: "২০১৮", label: "থেকে সেবায়" },
    { icon: Truck, value: "৫০+", label: "গাড়ির বহর" },
    { icon: Package, value: "১০০০+", label: "সফল ডেলিভারি" },
    { icon: ShieldCheck, value: "২৪/৭", label: "সাপোর্ট টিম" }
  ];

  const valueProps = [
    {
      icon: ShieldCheck,
      title: "নিরাপদ ও যাচাইকৃত",
      desc: "প্রতিটি চালক যাচাই করা, প্রতিটি ট্রিপ ইন্স্যুরেন্স কাভারেজের আওতায়।"
    },
    {
      icon: Clock,
      title: "নির্ধারিত সময়ে ডেলিভারি",
      desc: "নির্দিষ্ট ভাড়া ও সময়সূচি — কোনো লুকানো চার্জ বা দেরি নেই।"
    },
    {
      icon: Navigation,
      title: "রিয়েল-টাইম ট্র্যাকিং",
      desc: "লাইভ ড্যাশবোর্ডে আপনার মালামাল কোথায় আছে দেখুন, যেকোনো সময়।"
    }
  ];

  const vehicles = [
    {
      icon: Package,
      name: "কভার্ড ভ্যান",
      desc: "বৃষ্টি বা রোদ থেকে মালামাল সুরক্ষিত রাখতে ৫ থেকে ১৫ টনের কভার্ড ভ্যান।",
      image: fleetImg
    },
    {
      icon: Truck,
      name: "খোলা ট্রাক",
      desc: "রড, সিমেন্ট, শিল্প পণ্য ও ভারী মালামাল পরিবহনের জন্য উপযুক্ত।",
      image: openTruckImg
    },
    {
      icon: Container,
      name: "ট্রেইলার ও লরি",
      desc: "বড় মেশিনারি ও ভারী কার্গো পরিবহনের জন্য বিশেষ গাড়ি।",
      image: trailerImg
    }
  ];

  const steps = [
    {
      number: "০১",
      title: "বুকিং করুন",
      desc: "ফোন বা WhatsApp-এ লোকেশন, গন্তব্য ও মালামালের ধরন জানান।"
    },
    {
      number: "০২",
      title: "চালক নিশ্চিত হবে",
      desc: "আপনার প্রয়োজন অনুযায়ী যাচাইকৃত চালক ও গাড়ি বরাদ্দ হবে।"
    },
    {
      number: "০৩",
      title: "লাইভ ট্র্যাক করুন",
      desc: "ড্যাশবোর্ডে গন্তব্য পর্যন্ত ট্রিপের অগ্রগতি দেখুন।"
    }
  ];

  // 3 Reviews with Large Full-Card Overlay Images
  const reviews = [
    {
      name: "মো: রফিকুল ইসলাম",
      role: "কভার্ড ভ্যান চালক",
      text: "আগে ট্রিপের জন্য অপেক্ষা করতে হতো। এখন দেশ ট্রান্সপোর্ট থেকে নিয়মিত ট্রিপ পাচ্ছি। সময়মতো ভাড়া পাওয়ায় আমি খুব সন্তুষ্ট।",
      photo: driverPortraitImg,
      rating: 5
    },
    {
      name: "আলমগীর হোসেন",
      role: "খোলা ট্রাক চালক",
      text: "ভাড়া নির্ধারিত থাকে এবং সময়মতো পেমেন্ট পাওয়া যায়। মালামালও অত্যন্ত নিরাপদে গন্তব্যে পৌঁছায়।",
      photo: openTruckImg,
      rating: 5
    },
    {
      name: "সাজ্জাদ আলী",
      role: "ট্রেইলার চালক",
      text: "বড় কোম্পানির ভালো ট্রিপ পাওয়া এখন অনেক সহজ হয়েছে। দেশ ট্রান্সপোর্টের সাপোর্ট টিম ২৪/৭ পাশে থাকে।",
      photo: trailerImg,
      rating: 5
    }
  ];

  const buttonStyle = {
    fontWeight: "700",
    fontSize: "0.95rem",
    padding: "0.9rem 1.8rem",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    transition: "all .3s ease",
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,.18)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px"
  };

  const whatsappHref =
    "https://wa.me/8801719228840?text=" +
    encodeURIComponent(
      `আসসালামু আলাইকুম।\n\nআমি দেশ ট্রান্সপোর্ট থেকে গাড়ি নিতে চাই।\n\nলোকেশন:\nগন্তব্য:\nমালামালের ধরন:\nগাড়ির ধরন:\n\nদয়া করে আমাকে সহযোগিতা করুন।`
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Hind Siliguri', 'Segoe UI', system-ui, sans-serif",
        background: "#f8fafc",
        color: "#1e293b",
        overflowX: "hidden",
        width: "100%"
      }}
    >
      {/* Embedded CSS for Animations & 100% Mobile Responsiveness */}
      <style>{`
        * { box-sizing: border-box; }
        
        button:hover, a:hover {
          transform: translateY(-3px) scale(1.02);
          filter: brightness(1.08);
        }

        .card-animate { transition: all .3s ease !important; }
        .card-animate:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 40px rgba(15,41,87,.16) !important;
        }

        .review-card-container {
          position: relative;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(15,41,87,.2);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .review-card-container:hover .review-bg-img {
          transform: scale(1.08);
        }

        .review-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .route-line {
          position: relative;
          height: 3px;
          border-radius: 2px;
          background: repeating-linear-gradient(
            90deg, #14b8a6 0px, #14b8a6 14px, transparent 14px, transparent 24px
          );
          background-size: 200% 100%;
          animation: route-travel 3.2s linear infinite;
        }

        .route-line-marker {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          color: #0f2957;
          animation: route-marker 3.2s linear infinite;
        }

        .stat-value { font-family: 'Inter', 'Hind Siliguri', sans-serif; }

        .live-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #14b8a6;
          display: inline-block;
          animation: pulse 1.6s ease-in-out infinite;
        }

        .tracking-progress-fill { animation: fill-progress 2.4s ease forwards; }

        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(20,184,166,.4); }
          50% { opacity: .6; box-shadow: 0 0 0 6px rgba(20,184,166,0); }
        }

        @keyframes route-travel {
          from { background-position: 0 0; }
          to { background-position: -200% 0; }
        }

        @keyframes route-marker {
          from { left: 0%; }
          to { left: 100%; }
        }

        @keyframes fill-progress {
          from { width: 0%; }
          to { width: 68%; }
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .tracking-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 640px) {
          .header-inner { padding: 0 14px !important; height: 62px !important; }
          .header-logo { height: 38px !important; }
          .nav-btn-text { display: none; }
          .nav-btn-compact { padding: 8px 10px !important; font-size: 13px !important; }
          .hero-section { padding: 24px 16px 45px !important; }
          .hero-title { font-size: 26px !important; }
          .hero-cta-group { flex-direction: column !important; width: 100% !important; }
          .hero-cta-group a, .hero-cta-group button { width: 100% !important; justify-content: center !important; }
          .stat-badges-strip { bottom: -18px !important; padding: 10px 12px !important; }
          .stat-badge-val { font-size: 16px !important; }
          .stat-badge-lbl { font-size: 11px !important; }
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .review-card-container { height: 340px !important; }
          .footer-flex { flex-direction: column !important; gap: 24px !important; text-align: left !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-line { animation: none; background: #14b8a6; }
          .route-line-marker { animation: none; left: 100%; }
          .live-pulse { animation: none; }
          .tracking-progress-fill { animation: none; width: 68%; }
          .review-bg-img { transition: none; }
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          height: "70px",
          background: "rgba(255,255,255,.96)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(15,41,87,.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%"
        }}
      >
        <div
          className="header-inner"
          style={{
            maxWidth: "1200px",
            height: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px"
          }}
        >
          <img
            src={logoImg}
            alt="দেশ ট্রান্সপোর্ট"
            className="header-logo"
            style={{ height: "46px", objectFit: "contain", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              onClick={() => navigate("/trips")}
              className="nav-btn-compact"
              style={{
                background: "none",
                border: "none",
                fontWeight: "700",
                color: "#0f2957",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: "8px",
                transition: "all .3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Truck size={18} />
              <span>লাইভ ট্রিপস</span>
            </button>

            <button
              onClick={() => navigate("/login")}
              className="nav-btn-compact"
              style={{
                background: "#14b8a6",
                color: "white",
                padding: "9px 16px",
                borderRadius: "999px",
                border: "none",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all .3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Truck size={16} />
              <span>লগইন</span>
            </button>

            <button
              onClick={() => navigate("/admin-login")}
              className="nav-btn-compact"
              style={{
                background: "#ef4444",
                color: "white",
                padding: "9px 16px",
                borderRadius: "999px",
                border: "none",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all .3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Lock size={15} />
              <span>এডমিন</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section
        variants={fadeUpContainer}
        initial="hidden"
        animate="show"
        className="hero-section"
        style={{
          padding: "45px 24px 60px",
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(241,245,249,0.5) 100%)",
          width: "100%"
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: "1180px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "48px",
            alignItems: "center"
          }}
        >
          {/* Left Column: Text & Call to Action */}
          <div>
            <motion.p
              variants={fadeUpItem}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#0f6e56",
                background: "#e1f5ee",
                padding: "6px 14px",
                borderRadius: "999px",
                fontWeight: "700",
                fontSize: "13px",
                margin: "0 0 18px"
              }}
            >
              <span className="live-pulse" /> লাইভ ট্রিপ ট্র্যাকিং চালু আছে
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="hero-title"
              style={{
                color: "#0f2957",
                fontSize: "clamp(26px, 4vw, 42px)",
                lineHeight: "1.25",
                fontWeight: "700",
                margin: 0
              }}
            >
              দেশ ট্রান্সপোর্ট থাকলে পরিবহন নিয়ে
              <br />
              আর কোনো দুশ্চিন্তা নেই!
            </motion.h1>

            <motion.div
              variants={fadeUpItem}
              style={{ position: "relative", width: "180px", margin: "20px 0 22px" }}
            >
              <div className="route-line" />
              <span className="route-line-marker">
                <Truck size={18} />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              style={{
                color: "#475569",
                fontSize: "16px",
                lineHeight: "1.75",
                maxWidth: "490px",
                margin: "0 0 30px"
              }}
            >
              সারাদেশে কভার্ড ভ্যান, খোলা ট্রাক ও ট্রেইলার সার্ভিস — নির্ধারিত ভাড়া,
              যাচাইকৃত চালক ও রিয়েল-টাইম ট্রিপ আপডেট সহ।
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="hero-cta-group"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <button
                onClick={() => navigate("/trips")}
                style={{ ...buttonStyle, background: "#0f2957", color: "white" }}
              >
                <Truck size={18} /> লাইভ ট্রিপস ড্যাশবোর্ড
              </button>

              <a
                href="tel:01719228840"
                style={{ ...buttonStyle, background: "#ef4444", color: "white" }}
              >
                <Phone size={18} /> সরাসরি কল করুন
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, background: "#25d366", color: "white" }}
              >
                <MessageCircle size={18} /> WhatsApp করুন
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Banner Image (`bannerImg`) & Floating Stat Badges */}
          <motion.div variants={fadeUpItem} style={{ position: "relative" }}>
            <img
              src={bannerImg}
              alt="দেশ ট্রান্সপোর্ট এজেন্সি ব্যানার"
              style={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(15,41,87,.2)",
                display: "block",
                objectFit: "cover"
              }}
            />

            {/* Floating Stat Badge Strip overlaying bottom of hero banner */}
            <div
              className="stat-badges-strip"
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-24px",
                transform: "translateX(-50%)",
                width: "calc(100% - 32px)",
                background: "rgba(255,255,255,.92)",
                backdropFilter: "blur(12px)",
                borderRadius: "18px",
                boxShadow: "0 15px 35px rgba(15,41,87,.16)",
                padding: "14px 20px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                border: "1px solid rgba(255,255,255,0.6)"
              }}
            >
              {statBadges.map((stat) => (
                <div key={stat.label} style={{ textAlign: "center", flex: 1 }}>
                  <div
                    className="stat-value stat-badge-val"
                    style={{ color: "#0f2957", fontSize: "20px", fontWeight: "700" }}
                  >
                    {stat.value}
                  </div>
                  <div className="stat-badge-lbl" style={{ color: "#64748b", fontSize: "12px", fontWeight: "500" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div style={{ height: "45px" }} />

      {/* TRUST BAR */}
      <section style={{ background: "#0f2957", padding: "32px 20px" }}>
        <div
          className="trust-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px"
          }}
        >
          {trustStats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "white"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Icon size={24} color="#14b8a6" />
                </div>
                <div>
                  <div
                    className="stat-value"
                    style={{ fontSize: "22px", fontWeight: "700", lineHeight: "1.2" }}
                  >
                    {item.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "#cbd5e1" }}>{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section style={{ padding: "60px 20px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}
        >
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="card-animate"
                style={{
                  background: "white",
                  padding: "32px 28px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(15,41,87,.08)",
                  border: "1px solid #f1f5f9"
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px"
                  }}
                >
                  <Icon size={26} color="#0f2957" />
                </div>
                <h3 style={{ margin: "0 0 10px", color: "#0f2957", fontSize: "19px" }}>
                  {prop.title}
                </h3>
                <p style={{ margin: 0, color: "#64748b", lineHeight: "1.7", fontSize: "15px" }}>
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LIVE TRACKING DEMO PREVIEW */}
      <section style={{ padding: "20px 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="card-animate"
          style={{
            background: "linear-gradient(135deg, #0f2957 0%, #1e3a8a 100%)",
            borderRadius: "24px",
            padding: "36px",
            color: "white",
            boxShadow: "0 20px 40px rgba(15,41,87,.25)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <Radio size={20} color="#14b8a6" className="live-pulse" />
            <span style={{ color: "#14b8a6", fontWeight: "700", fontSize: "14px", letterSpacing: "0.5px" }}>
              লাইভ ট্রিপ ট্র্যাকিং ডেমো
            </span>
          </div>

          <h3 style={{ margin: "0 0 8px", fontSize: "24px", color: "white" }}>
            ট্রিপ নম্বর: #DT-2026-8941
          </h3>
          <p style={{ margin: "0 0 24px", color: "#cbd5e1" }}>
            নরসিংদী (ঘোড়াশাল) ➔ ঢাকা (তেজগাঁও) — কভার্ড ভ্যান (১৫ টন)
          </p>

          {/* Simulated progress bar */}
          <div style={{ background: "rgba(255,255,255,.15)", borderRadius: "999px", height: "10px", overflow: "hidden", marginBottom: "20px" }}>
            <div
              className="tracking-progress-fill"
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #14b8a6, #2dd4bf)",
                borderRadius: "999px"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "#e2e8f0",
              flexWrap: "wrap",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <MapPin size={16} color="#14b8a6" />
              <span>বর্তমান অবস্থান: <strong>কাঁচপুর ব্রিজ সংলগ্ন</strong></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={16} color="#14b8a6" />
              <span>আনুমানিক পৌঁছানোর সময়: <strong>৪০ মিনিট</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE SERVICES */}
      <section style={{ padding: "50px 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#0f2957", fontSize: "30px", margin: "0 0 10px" }}>
          আমাদের যানবাহনের ধরণ সমূহ
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px" }}>
          আপনার মালামালের সুরক্ষায় আমাদের সুসজ্জিত ও আধুনিক যানবাহনের বহর।
        </p>

        <div
          className="cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}
        >
          {vehicles.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="card-animate"
                style={{
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 12px 35px rgba(0,0,0,.08)",
                  overflow: "hidden",
                  border: "1px solid #f1f5f9"
                }}
              >
                <img
                  src={v.image}
                  alt={v.name}
                  style={{
                    width: "100%",
                    height: "190px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div style={{ padding: "26px 24px 30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <Icon size={24} color="#0f2957" />
                    <h3 style={{ margin: 0, color: "#0f2957", fontSize: "20px" }}>{v.name}</h3>
                  </div>
                  <p style={{ margin: 0, color: "#64748b", lineHeight: "1.6", fontSize: "14px" }}>{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "white", padding: "65px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", color: "#0f2957", fontSize: "30px", margin: "0 0 45px" }}>
            কীভাবে কাজ করে
          </h2>
          <div
            className="cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "30px"
            }}
          >
            {steps.map((step) => (
              <div key={step.number} style={{ textAlign: "center", padding: "0 10px" }}>
                <div
                  style={{
                    color: "#14b8a6",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "800",
                    fontSize: "16px",
                    marginBottom: "10px"
                  }}
                >
                  {step.number}
                </div>
                <h3 style={{ color: "#0f2957", margin: "0 0 10px", fontSize: "20px" }}>{step.title}</h3>
                <p style={{ color: "#64748b", margin: 0, lineHeight: "1.7", fontSize: "14px" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVER REVIEWS - LARGE OVERLAY IMAGE CARDS */}
      <section style={{ padding: "75px 20px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h2 style={{ color: "#0f2957", fontSize: "32px", margin: "0 0 10px" }}>
            আমাদের চালকদের মতামত
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px", margin: 0 }}>
            অভিজ্ঞ চালকদের বাস্তব অভিজ্ঞতা ও দেশ ট্রান্সপোর্টের প্রতি তাদের আস্থা
          </p>
        </div>

        <div
          className="cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="review-card-container">
              {/* Full Card Background Image */}
              <img src={r.photo} alt={r.name} className="review-bg-img" />

              {/* Dark Gradient Overlay for Text Readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15,30,66,0.96) 0%, rgba(15,30,66,0.65) 55%, rgba(15,30,66,0.15) 100%)"
                }}
              />

              {/* Content Overlay directly ON TOP of the Image */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px 22px",
                  zIndex: 2,
                  color: "white"
                }}
              >
                {/* 5-Star Rating */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                {/* Review Text Quote on top of image */}
                <p
                  style={{
                    margin: "0 0 16px",
                    color: "#f8fafc",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                    fontStyle: "italic",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Driver Name & Role Pill Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    paddingTop: "12px"
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "17px",
                      color: "white",
                      fontWeight: "700"
                    }}
                  >
                    👨‍✈️ {r.name}
                  </h3>

                  <span
                    style={{
                      background: "rgba(20, 184, 166, 0.3)",
                      backdropFilter: "blur(4px)",
                      color: "#2dd4bf",
                      border: "1px solid rgba(20, 184, 166, 0.5)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: "600",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {r.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "0 20px 70px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #0f2957 0%, #1e3a8a 100%)",
            borderRadius: "24px",
            padding: "45px 35px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            boxShadow: "0 20px 45px rgba(15,41,87,.22)"
          }}
        >
          <div>
            <h2 style={{ color: "white", margin: "0 0 8px", fontSize: "26px" }}>
              আজই আপনার গাড়ি বুক করুন
            </h2>
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: "15px" }}>
              হটলাইনে কল করুন অথবা WhatsApp-এ মেসেজ পাঠান — কয়েক মিনিটেই নিশ্চিত হবে।
            </p>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="tel:01719228840"
              style={{ ...buttonStyle, background: "#ef4444", color: "white" }}
            >
              <Phone size={18} /> 01719-228840
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, background: "#25d366", color: "white" }}
            >
              <MessageCircle size={18} /> WhatsApp মেসেজ
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0f2957",
          color: "#cbd5e1",
          padding: "55px 25px 25px"
        }}
      >
        <div
          className="footer-flex"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <h2 style={{ color: "white", margin: "0 0 12px", fontSize: "20px" }}>
              মেসার্স দেশ ট্রান্সপোর্ট এজেন্সি
            </h2>
            <p style={{ lineHeight: "1.7", fontSize: "14px" }}>
              নিরাপদ পরিবহন, আপনার বিশ্বাসের সঙ্গী। আমরা আধুনিক প্রযুক্তির মাধ্যমে সারাদেশে ট্রাক ও পিকআপ সার্ভিস দিয়ে থাকি।
            </p>
          </div>

          <div style={{ flex: "1 1 220px" }}>
            <h3 style={{ color: "white", margin: "0 0 12px", fontSize: "16px" }}>প্রধান কার্যালয়</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
              প্রাণ-আর.এফ.এল. গ্রুপ ৪নং গেইট সংলগ্ন,<br />
              বাগপাড়া, ঘোড়াশাল,<br />
              পলাশ, নরসিংদী।
            </p>
          </div>

          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "white", margin: "0 0 12px", fontSize: "16px" }}>হটলাইন হেল্পলাইন</h3>
            <h3 style={{ color: "#14b8a6", margin: "0 0 6px", fontSize: "20px" }}>01719-228840</h3>
            <h3 style={{ color: "#14b8a6", margin: 0, fontSize: "20px" }}>01933-503060</h3>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center"
          }}
        >
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>
            © {new Date().getFullYear()} দেশ ট্রান্সপোর্ট এজেন্সি. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p style={{ fontSize: "14px", margin: "0 0 14px" }}>
            Developed by <span style={{ color: "#14b8a6", fontWeight: "700" }}>Engr: Rijbi Khan</span>
          </p>

          <a
            href={
              "https://wa.me/8801309847638?text=" +
              encodeURIComponent(
                `আসসালামু আলাইকুম।\n\nআমি দেশ ট্রান্সপোর্ট ওয়েবসাইট সম্পর্কে যোগাযোগ করছি।`
              )
            }
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#14b8a6",
              color: "#0f2957",
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "13px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "all .3s ease"
            }}
          >
            <Phone size={14} /> Contact Developer
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
