import React, { useState, useRef, useEffect } from "react";
import MapWatermark from "./MapWatermark";
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
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import logoImg from "./desh logo.jpeg";
import fleetImg from "./assets/fleet-highway.jpg";
import openTruckImg from "./assets/open-truck-loading.jpg";
import trailerImg from "./assets/trailer-rain.jpg";
import driverPortraitImg from "./assets/driver-portrait.jpg";
import review1Img from "./assets/review-1.jpg";
import review2Img from "./assets/review-2.jpg";
import bannerImg from "./assets/banner.jpeg";
import routeVideo from "./assets/Same_shot_as_above_but_framed.mp4";

const LandingPage = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef(null);
  const vehicleScrollRef = useRef(null);
  const reviewScrollRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (reduceMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [reduceMotion]);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

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
    { label: "কভার্ড ভ্যান", value: "৫০০+" },
    { label: "সফল ট্রিপ", value: "১০০০+" },
    { label: "সাপোর্ট", value: "২৪/৭" }
  ];

  const trustStats = [
    { icon: Clock, value: "২০১৮", label: "থেকে সেবায়" },
    { icon: Truck, value: "৫০০+", label: "গাড়ির বহর" },
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

  const reviews = [
    {
      name: "মো: রফিকুল ইসলাম",
      role: "কভার্ড ভ্যান চালক",
      text: "আগে ট্রিপের জন্য অপেক্ষা করতে হতো। এখন দেশ ট্রান্সপোর্ট থেকে নিয়মিত ট্রিপ পাচ্ছি।",
      photo: driverPortraitImg
    },
    {
      name: "আলমগীর হোসেন",
      role: "খোলা ট্রাক চালক",
      text: "ভাড়া নির্ধারিত থাকে এবং সময়মতো পেমেন্ট পাওয়া যায়।",
      photo: review1Img
    },
    {
      name: "সাজ্জাদ আলী",
      role: "ট্রেইলার চালক",
      text: "বড় কোম্পানির ভালো ট্রিপ পাওয়া সহজ হয়েছে।",
      photo: review2Img
    }
  ];

  const buttonStyle = {
    fontWeight: "700",
    fontSize: "1rem",
    padding: "1rem 2.2rem",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    transition: "all .3s ease",
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,.18)",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px"
  };

  const cardStyle = {
    background: "transparent",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "none",
    transition: "all .3s ease",
    cursor: "pointer"
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
        fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif",
        background: "transparent",
        position: "relative",
        zIndex: 0,
        overflowX: "hidden"
      }}
    >
      <MapWatermark />
      {/* Global CSS Style Block */}
      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate { animation: fade .8s ease; }

        button:hover, a:hover {
          transform: translateY(-4px) scale(1.03);
          filter: brightness(1.08);
        }

        .card-animate { transition: all .3s ease !important; }

        .card-animate:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255,255,255,.9) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,.15) !important;
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

        .tracking-progress-fill {
          animation: fill-progress 2.4s ease forwards;
        }

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

        .horizontal-slider {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 20px;
          padding: 8px 4px 20px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .horizontal-slider::-webkit-scrollbar {
          display: none;
        }
        .slider-item-vehicle {
          flex: 0 0 320px;
          scroll-snap-align: start;
        }
        .slider-item-review {
          flex: 0 0 320px;
          scroll-snap-align: start;
        }

        .banner-container-wrapper {
          padding: 30px 20px 10px;
          max-width: 900px;
          margin: 0 auto;
          perspective: 1000px;
        }
        .banner-3d-card {
          width: 100%;
          max-height: 380px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          box-shadow: 0 20px 45px rgba(15, 41, 87, 0.22), 0 0 25px rgba(20, 184, 166, 0.18);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease;
          animation: float3d 5s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        .banner-3d-card:hover {
          transform: perspective(1000px) rotateX(3deg) rotateY(-2deg) scale(1.025);
          box-shadow: 0 30px 60px rgba(15, 41, 87, 0.32), 0 0 35px rgba(20, 184, 166, 0.35);
        }
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-8px) rotateX(1.5deg); }
        }

        @media (max-width: 768px) {
          .hero-section-wrapper {
            min-height: 380px !important;
            margin: 12px 12px 0 !important;
            border-radius: 20px !important;
          }
          .hero-inner-padding {
            padding: 40px 16px 50px !important;
          }
          .banner-container-wrapper {
            padding: 16px 14px 6px !important;
            max-width: 100% !important;
          }
          .banner-3d-card {
            max-height: 240px !important;
            border-radius: 14px !important;
            animation: none !important;
          }
          .section-mobile-compact {
            padding: 30px 16px !important;
          }
          .mobile-footer-compact {
            padding: 35px 16px 20px !important;
          }
          .mobile-footer-compact > div:first-child {
            gap: 20px !important;
          }
          .desktop-nav-buttons { display: none !important; }
          .hamburger-btn { display: flex !important; align-items: center; }
          .slider-item-vehicle { flex: 0 0 85%; }
          .slider-item-review { flex: 0 0 85%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-line { animation: none; background: #14b8a6; }
          .route-line-marker { animation: none; left: 100%; }
          .live-pulse { animation: none; }
          .tracking-progress-fill { animation: none; width: 68%; }
          .animate { animation: none; }
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 25px",
          background: "rgba(255,255,255,.95)",
          boxShadow: "0 5px 25px rgba(0,0,0,.06)",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}
      >
        <img
          src={logoImg}
          alt="দেশ ট্রান্সপোর্ট"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #e2e8f0"
          }}
        />

        <div className="desktop-nav-buttons" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            onClick={() => navigate("/trips")}
            style={{
              background: "none",
              border: "none",
              fontWeight: "700",
              color: "#0f2957",
              cursor: "pointer",
              transition: "all .3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Truck size={18} /> লাইভ ট্রিপস
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "#14b8a6",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all .3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Truck size={16} /> ড্রাইভার লগইন
          </button>
          <button
            onClick={() => navigate("/admin-login")}
            style={{
              background: "#ef4444",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all .3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Lock size={16} /> এডমিন
          </button>
        </div>

        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="মেনু খুলুন"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#0f2957",
            cursor: "pointer",
            padding: "6px"
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-panel"
          style={{
            position: "sticky",
            top: "70px",
            zIndex: 99,
            background: "rgba(255,255,255,.98)",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <button
            onClick={() => {
              navigate("/trips");
              setMobileMenuOpen(false);
            }}
            style={{
              background: "none",
              border: "none",
              fontWeight: "700",
              color: "#0f2957",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0"
            }}
          >
            <Truck size={18} /> লাইভ ট্রিপস
          </button>
          <button
            onClick={() => {
              navigate("/login");
              setMobileMenuOpen(false);
            }}
            style={{
              background: "#14b8a6",
              color: "white",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Truck size={16} /> ড্রাইভার লগইন
          </button>
          <button
            onClick={() => {
              navigate("/admin-login");
              setMobileMenuOpen(false);
            }}
            style={{
              background: "#ef4444",
              color: "white",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Lock size={16} /> এডমিন
          </button>
        </div>
      )}

      {/* HERO — full-width video banner with the headline overlaid on top */}
      <motion.section
        className="hero-section-wrapper"
        variants={fadeUpContainer}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          margin: "20px 20px 0",
          borderRadius: "28px"
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={fleetImg}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        >
          <source src={routeVideo} type="video/mp4" />
        </video>

        {/* dark scrim so the white headline stays readable over the footage */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,41,87,.55) 0%, rgba(15,41,87,.72) 60%, rgba(15,41,87,.88) 100%)"
          }}
        />

        <div
          className="hero-inner-padding"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "760px",
            width: "100%",
            padding: "60px 24px 60px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <motion.p
            variants={fadeUpItem}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#5eead4",
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.25)",
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
            style={{
              color: "white",
              fontSize: "clamp(26px, 4.5vw, 46px)",
              lineHeight: "1.25",
              fontWeight: "700",
              margin: 0,
              textShadow: "0 2px 20px rgba(0,0,0,.35)"
            }}
          >
            দেশ ট্রান্সপোর্ট থাকলে পরিবহন নিয়ে
            <br />
            আর কোনো দুশ্চিন্তা নেই!
          </motion.h1>

          <motion.div
            variants={fadeUpItem}
            style={{ position: "relative", width: "180px", margin: "22px 0 24px" }}
          >
            <div className="route-line" />
            <span className="route-line-marker">
              <Truck size={18} />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            style={{
              color: "rgba(255,255,255,.85)",
              fontSize: "16px",
              lineHeight: "1.8",
              maxWidth: "520px",
              margin: "0 0 32px"
            }}
          >
            সারাদেশে কভার্ড ভ্যান, খোলা ট্রাক ও ট্রেইলার সার্ভিস — নির্ধারিত ভাড়া,
            যাচাইকৃত চালক ও রিয়েল-টাইম ট্রিপ আপডেট সহ।
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <button
              onClick={() => navigate("/trips")}
              style={{ ...buttonStyle, background: "#14b8a6", color: "white" }}
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
      </motion.section>

      {/* PROMOTIONAL BANNER - DYNAMIC CONTINUOUS SCROLL ANIMATION (UP & DOWN) */}
      <motion.section
        className="banner-container-wrapper"
        initial={{ opacity: 0, x: 90, rotateY: 15, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.12 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={bannerImg}
          alt="দেশ ট্রান্সপোর্ট ব্যানার"
          className="banner-3d-card"
        />
      </motion.section>

      <div style={{ height: "40px" }} />

      {/* TRUST BAR - COMPACT FLOATING GLASS CARD */}
      <section style={{ padding: "16px 12px 10px", maxWidth: "1180px", margin: "0 auto" }}>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "20px 24px",
            boxShadow: "0 12px 35px rgba(15, 41, 87, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "18px",
            alignItems: "center"
          }}
        >
          {trustStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#e1f5ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Icon size={20} color="#0f6e56" />
                </div>
                <div>
                  <div style={{ color: "#0f2957", fontSize: "18px", fontWeight: "700" }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "12px", fontWeight: "500" }}>{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{ padding: "70px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#0f2957", fontSize: "30px", margin: "0 0 45px" }}>
          কেন দেশ ট্রান্সপোর্ট বেছে নেবেন
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px"
          }}
        >
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-animate" style={cardStyle}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "#e1f5ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px"
                  }}
                >
                  <Icon size={28} color="#0f6e56" />
                </div>
                <h3 style={{ color: "#0f2957", margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ color: "#334155", margin: 0, lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>



      {/* VEHICLE / SERVICES - SWIPE CAROUSEL */}
      <section style={{ padding: "50px 20px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "20px", flexWrap: "wrap", gap: "14px" }}>
          <div>
            <h2 style={{ color: "#0f2957", fontSize: "28px", margin: "0 0 6px" }}>
              আমাদের যানবাহনের ধরণ সমূহ
            </h2>
            <p style={{ color: "#64748b", margin: 0, fontSize: "14.5px" }}>
              আপনার মালামালের সুরক্ষায় আমাদের সুসজ্জিত ও আধুনিক যানবাহনের বহর (পাশে সোয়াইপ করুন ➔)
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => scrollLeft(vehicleScrollRef)}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid #cbd5e1",
                background: "white",
                color: "#0f2957",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease"
              }}
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollRight(vehicleScrollRef)}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "none",
                background: "#0f2957",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(15,41,87,0.2)",
                transition: "all 0.3s ease"
              }}
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={vehicleScrollRef}
          className="horizontal-slider"
        >
          {vehicles.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="card-animate slider-item-vehicle"
                style={{
                  background: "rgba(255, 255, 255, 0.88)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  boxShadow: "0 12px 35px rgba(0,0,0,.08)",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.9)"
                }}
              >
                <img
                  src={v.image}
                  alt={v.name}
                  style={{
                    width: "100%",
                    height: "185px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div style={{ padding: "24px 22px 28px" }}>
                  <Icon size={32} color="#0f2957" style={{ marginBottom: "10px" }} />
                  <h3 style={{ margin: "0 0 8px", color: "#0f2957", fontSize: "18px" }}>{v.name}</h3>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "14px", lineHeight: "1.6" }}>{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "transparent", padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#0f2957", fontSize: "30px", margin: "0 0 45px" }}>
          কীভাবে কাজ করে
        </h2>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px"
          }}
        >
          {steps.map((step) => (
            <div key={step.number} style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#14b8a6",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "10px"
                }}
              >
                {step.number}
              </div>
              <h3 style={{ color: "#0f2957", margin: "0 0 8px" }}>{step.title}</h3>
              <p style={{ color: "#334155", margin: 0, lineHeight: "1.7" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DRIVER REVIEWS - SWIPE CAROUSEL */}
      <section style={{ padding: "50px 20px 60px", maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px", flexWrap: "wrap", gap: "14px" }}>
          <div>
            <h2 style={{ color: "#0f2957", fontSize: "28px", margin: "0 0 6px" }}>
              আমাদের চালকদের মতামত
            </h2>
            <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
              অভিজ্ঞ চালকদের বাস্তব অভিজ্ঞতা ও দেশ ট্রান্সপোর্টের প্রতি তাদের আস্থা (পাশে সোয়াইপ করুন ➔)
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => scrollLeft(reviewScrollRef)}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid #cbd5e1",
                background: "white",
                color: "#0f2957",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease"
              }}
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollRight(reviewScrollRef)}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "none",
                background: "#0f2957",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(15,41,87,0.2)",
                transition: "all 0.3s ease"
              }}
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={reviewScrollRef}
          className="horizontal-slider"
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="card-animate slider-item-review"
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                minHeight: "330px",
                display: "flex",
                alignItems: "flex-end",
                cursor: "pointer",
                boxShadow: "0 12px 35px rgba(15,41,87,.18)"
              }}
            >
              <img
                src={r.photo}
                alt={r.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15,41,87,0) 35%, rgba(15,41,87,.92) 100%)"
                }}
              />
              <div style={{ position: "relative", padding: "24px", color: "white", width: "100%" }}>
                <h3 style={{ margin: "0 0 2px", fontSize: "17px" }}>{r.name}</h3>
                <p style={{ margin: "0 0 8px", color: "#5eead4", fontSize: "13px" }}>{r.role}</p>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>
                <p style={{ margin: 0, color: "rgba(255,255,255,.9)", fontSize: "14px" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER - EXECUTIVE GLASS ACTION CARD */}
      <section style={{ padding: "20px 10px 15px", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #0f2957 0%, #1e3a8a 50%, #0d9488 100%)",
            borderRadius: "20px",
            padding: "26px 22px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 18px 40px rgba(15,41,87,0.28)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.15)", padding: "4px 12px", borderRadius: "20px", color: "#5eead4", fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>
              <ShieldCheck size={14} /> দ্রুততম ট্রাক বুকিং সার্ভিস
            </div>
            <h2 style={{ color: "white", margin: "0 0 6px", fontSize: "22px", fontWeight: "700" }}>
              আজই আপনার প্রয়োজনীয় গাড়ি বুক করুন
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: "13.5px", lineHeight: "1.5" }}>
              সরাসরি কল করুন অথবা WhatsApp-এ মেসেজ পাঠান — কয়েক মিনিটেই নিশ্চিত হবে আপনার ট্রিপ।
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="tel:01719228840" style={{ ...buttonStyle, background: "#ef4444", color: "white", padding: "10px 18px", fontSize: "14px", borderRadius: "12px" }}>
              <Phone size={16} /> সরাসরি কল করুন
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, background: "#25d366", color: "white", padding: "10px 18px", fontSize: "14px", borderRadius: "12px" }}
            >
              <MessageCircle size={16} /> WhatsApp বুকিং
            </a>
          </div>
        </div>
      </section>

      {/* EXECUTIVE PROFESSIONAL FOOTER */}
      <footer
        style={{
          background: "linear-gradient(180deg, #0b192e 0%, #060e1a 100%)",
          color: "#cbd5e1",
          borderTop: "1px solid rgba(20,184,166,0.25)",
          padding: "45px 12px 25px",
          marginTop: "20px"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Main 4-Column Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
              marginBottom: "32px"
            }}
          >
            {/* Col 1: Brand Info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <img
                  src={logoImg}
                  alt="দেশ ট্রান্সপোর্ট"
                  style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "2px solid #14b8a6" }}
                />
                <div>
                  <h3 style={{ color: "white", margin: 0, fontSize: "17px", fontWeight: "700" }}>মেসার্স দেশ ট্রান্সপোর্ট এজেন্সি</h3>
                  <p style={{ margin: 0, color: "#14b8a6", fontSize: "12px", fontWeight: "600" }}>নিরাপদ পরিবহন, আপনার বিশ্বাসের সঙ্গী</p>
                </div>
              </div>
              <p style={{ margin: "0 0 14px", fontSize: "13px", lineHeight: "1.65", color: "#94a3b8" }}>
                আমরা আধুনিক প্রযুক্তি ও দেশের শীর্ষ যাচাইকৃত চালকদের মাধ্যমে সারাদেশে বিশ্বস্ত ট্রাক, পিকআপ ও ট্রেইলার লজিস্টিক সার্ভিস প্রদান করে আসছি।
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(20,184,166,0.12)", color: "#2dd4bf", border: "1px solid rgba(20,184,166,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600" }}>
                <ShieldCheck size={14} /> নিবন্ধিত ও অনুমোদিত এজেন্সি
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 style={{ color: "white", margin: "0 0 14px", fontSize: "16px", fontWeight: "700", borderLeft: "3px solid #14b8a6", paddingLeft: "10px" }}>
                প্রধান সেবাসমূহ
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13.5px", display: "flex", flexDirection: "column", gap: "9px", color: "#94a3b8" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><Truck size={15} color="#14b8a6" /> কভার্ড ভ্যান (৭ - ২৩ ফিট)</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><Truck size={15} color="#14b8a6" /> খোলা ট্রাক ও পিকআপ সার্ভিস</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><Truck size={15} color="#14b8a6" /> হেভি ডিউটি ট্রেইলার ও লরি</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={15} color="#14b8a6" /> রিয়েল-টাইম জিপিএস ট্র্যাকিং</li>
              </ul>
            </div>

            {/* Col 3: Head Office */}
            <div>
              <h4 style={{ color: "white", margin: "0 0 14px", fontSize: "16px", fontWeight: "700", borderLeft: "3px solid #14b8a6", paddingLeft: "10px" }}>
                প্রধান কার্যালয়
              </h4>
              <p style={{ margin: "0 0 12px", fontSize: "13.5px", lineHeight: "1.65", color: "#94a3b8", display: "flex", gap: "8px" }}>
                <MapPin size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  প্রাণ-আর.এফ.এল. গ্রুপ ৪নং গেইট সংলগ্ন,<br />
                  বাগপাড়া, ঘোড়াশাল, পলাশ, নরসিংদী।
                </span>
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: "8px", color: "#e2e8f0", fontSize: "12.5px" }}>
                <Clock size={14} color="#14b8a6" /> ২৪ ঘণ্টা সার্ভিস খোলা
              </div>
            </div>

            {/* Col 4: Hotline Cards */}
            <div>
              <h4 style={{ color: "white", margin: "0 0 14px", fontSize: "16px", fontWeight: "700", borderLeft: "3px solid #14b8a6", paddingLeft: "10px" }}>
                জরুরি হটলাইন
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="tel:01719228840"
                  style={{
                    background: "rgba(20,184,166,0.1)",
                    border: "1px solid rgba(20,184,166,0.25)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#2dd4bf",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all .3s ease"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Phone size={16} /> 01719-228840
                  </span>
                  <span style={{ fontSize: "11px", background: "#14b8a6", color: "#0f2957", padding: "2px 8px", borderRadius: "4px", fontWeight: "700" }}>কল করুন</span>
                </a>
                <a
                  href="tel:01933503060"
                  style={{
                    background: "rgba(20,184,166,0.1)",
                    border: "1px solid rgba(20,184,166,0.25)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#2dd4bf",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all .3s ease"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Phone size={16} /> 01933-503060
                  </span>
                  <span style={{ fontSize: "11px", background: "#14b8a6", color: "#0f2957", padding: "2px 8px", borderRadius: "4px", fontWeight: "700" }}>কল করুন</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Credit Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "18px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              fontSize: "12.5px"
            }}
          >
            <p style={{ margin: 0, color: "#64748b" }}>
              © {new Date().getFullYear()} মেসার্স দেশ ট্রান্সপোর্ট এজেন্সি. সর্বস্বত্ব সংরক্ষিত।
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: "#94a3b8" }}>
                Developed by <span style={{ color: "#2dd4bf", fontWeight: "700" }}>Engr: Rijbi Khan</span>
              </span>
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
                  background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
                  color: "#ffffff",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "11.5px",
                  boxShadow: "0 4px 12px rgba(20,184,166,0.2)"
                }}
              >
                Contact Developer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
