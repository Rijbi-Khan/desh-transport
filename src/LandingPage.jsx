import React from "react";
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
  Radio
} from "lucide-react";
import logoImg from "./desh logo.jpeg";
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
      text: "ভাড়া নির্ধারিত থাকে এবং সময়মতো পেমেন্ট পাওয়া যায়।"
    },
    {
      name: "সাজ্জাদ আলী",
      role: "ট্রেইলার চালক",
      text: "বড় কোম্পানির ভালো ট্রিপ পাওয়া সহজ হয়েছে।"
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

        @media (max-width: 860px) {
          .hero-grid, .tracking-grid { grid-template-columns: 1fr !important; }
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
          style={{ height: "48px", objectFit: "contain" }}
        />

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
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
      </header>

      {/* HERO */}
      <motion.section
        variants={fadeUpContainer}
        initial="hidden"
        animate="show"
        style={{
          padding: "50px 35px 65px",
          display: "flex",
          justifyContent: "center",
          background: "transparent"
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
              style={{
                color: "#0f2957",
                fontSize: "clamp(28px, 4vw, 42px)",
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
                color: "#475569",
                fontSize: "16px",
                lineHeight: "1.8",
                maxWidth: "480px",
                margin: "0 0 32px"
              }}
            >
              সারাদেশে কভার্ড ভ্যান, খোলা ট্রাক ও ট্রেইলার সার্ভিস — নির্ধারিত ভাড়া,
              যাচাইকৃত চালক ও রিয়েল-টাইম ট্রিপ আপডেট সহ।
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
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

          <motion.div variants={fadeUpItem} style={{ position: "relative" }}>
            <img
              src={fleetImg}
              alt="দেশ ট্রান্সপোর্টের কভার্ড ভ্যান বহর নরসিংদীর একটি গ্রামীণ সড়কে"
              style={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(15,41,87,.18)",
                display: "block"
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-26px",
                transform: "translateX(-50%)",
                width: "calc(100% - 32px)",
                background: "rgba(255,255,255,.85)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 15px 35px rgba(15,41,87,.16)",
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px"
              }}
            >
              {statBadges.map((stat) => (
                <div key={stat.label} style={{ textAlign: "center", flex: 1 }}>
                  <div
                    className="stat-value"
                    style={{ color: "#0f2957", fontSize: "20px", fontWeight: "600" }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#334155", fontSize: "12px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div style={{ height: "40px" }} />

      {/* TRUST BAR */}
      <section style={{ background: "rgba(15,41,87,.9)", padding: "30px 20px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "20px"
          }}
        >
          {trustStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Icon size={26} color="#14b8a6" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "12px" }}>{stat.label}</div>
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

      {/* LIVE TRACKING PREVIEW */}
      <section style={{ background: "transparent", padding: "70px 20px" }}>
        <div
          className="tracking-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center"
          }}
        >
          <div>
            <h2 style={{ color: "#0f2957", fontSize: "28px", margin: "0 0 16px" }}>
              আপনার মালামাল কোথায় আছে, সবসময় জানুন
            </h2>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "28px" }}>
              প্রতিটি ট্রিপ লাইভ ড্যাশবোর্ডে দেখা যায় — গাড়ি, চালক ও গন্তব্যের বর্তমান
              অবস্থাসহ। কোনো ফোন কল ছাড়াই আপডেট পান।
            </p>
            <button
              onClick={() => navigate("/trips")}
              style={{ ...buttonStyle, background: "#0f2957", color: "white" }}
            >
              ড্যাশবোর্ড দেখুন <ArrowRight size={18} />
            </button>
          </div>

          <div
            style={{
              background: "#f1f5f9",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 15px 35px rgba(15,41,87,.1)"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px"
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0f6e56",
                  fontWeight: "700",
                  fontSize: "13px"
                }}
              >
                <Radio size={14} /> ট্রিপ #DT-2291 চলমান
              </span>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>ইটিএ ৪৫ মিনিট</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#0f2957",
                fontWeight: "600",
                marginBottom: "8px"
              }}
            >
              <span>ঘোড়াশাল, নরসিংদী</span>
              <span>ঢাকা</span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#e2e8f0",
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "20px"
              }}
            >
              <div
                className="tracking-progress-fill"
                style={{ height: "100%", background: "#14b8a6", borderRadius: "4px" }}
              />
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <Truck size={20} color="#0f2957" />
                <div>
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>গাড়ি</div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#0f2957" }}>
                    কভার্ড ভ্যান
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <MapPin size={20} color="#0f2957" />
                <div>
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>চালক</div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#0f2957" }}>
                    রফিকুল ইসলাম
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE / SERVICES */}
      <section style={{ padding: "70px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#0f2957", fontSize: "30px" }}>
          আমাদের যানবাহনের ধরণ সমূহ
        </h2>
        <p style={{ textAlign: "center", color: "#334155", marginBottom: "45px" }}>
          Your cargo's safety is our priority with our modern fleet.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px"
          }}
        >
          {vehicles.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="card-animate"
                style={{
                  background: "transparent",
                  borderRadius: "18px",
                  boxShadow: "none",
                  transition: "all .3s ease",
                  cursor: "pointer",
                  overflow: "hidden"
                }}
              >
                <img
                  src={v.image}
                  alt={v.name}
                  style={{
                    width: "100%",
                    height: "170px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div style={{ padding: "28px 35px 35px" }}>
                  <Icon size={36} color="#0f2957" style={{ marginBottom: "10px" }} />
                  <h3 style={{ margin: "0 0 8px", color: "#0f2957" }}>{v.name}</h3>
                  <p style={{ margin: 0, color: "#334155" }}>{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "transparent", padding: "70px 20px" }}>
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

      {/* DRIVER REVIEWS */}
      <section style={{ padding: "70px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#0f2957" }}>আমাদের চালকদের মতামত</h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px"
          }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="card-animate" style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#0f2957",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    overflow: "hidden",
                    flexShrink: 0
                  }}
                >
                  {r.photo ? (
                    <img
                      src={r.photo}
                      alt={r.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    r.name.charAt(0)
                  )}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "15px" }}>{r.name}</h3>
                  <p style={{ margin: 0, color: "#14b8a6", fontSize: "13px" }}>{r.role}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              <p style={{ margin: 0, color: "#475569" }}>&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          background: "rgba(15,41,87,.9)",
          padding: "50px 20px",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px"
          }}
        >
          <div>
            <h2 style={{ color: "white", margin: "0 0 8px", fontSize: "24px" }}>
              আজই আপনার গাড়ি বুক করুন
            </h2>
            <p style={{ color: "#94a3b8", margin: 0 }}>
              হটলাইনে কল করুন অথবা WhatsApp-এ মেসেজ পাঠান — কয়েক মিনিটেই নিশ্চিত হবে।
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:01719228840" style={{ ...buttonStyle, background: "#ef4444", color: "white" }}>
              <Phone size={18} /> কল করুন
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, background: "#25d366", color: "white" }}
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(15,41,87,.92)", color: "#cbd5e1", padding: "60px 25px 25px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <h2 style={{ color: "white" }}>মেসার্স দেশ ট্রান্সপোর্ট এজেন্সি</h2>
            <p style={{ maxWidth: "350px", lineHeight: "1.7" }}>
              নিরাপদ পরিবহন, আপনার বিশ্বাসের সঙ্গী। আমরা আধুনিক প্রযুক্তির মাধ্যমে
              সারাদেশে ট্রাক ও পিকআপ সার্ভিস দিয়ে থাকি।
            </p>
          </div>

          <div>
            <h3 style={{ color: "white" }}>প্রধান কার্যালয়</h3>
            <p>
              প্রাণ-আর.এফ.এল. গ্রুপ ৪নং গেইট সংলগ্ন,
              <br />
              বাগপাড়া, ঘোড়াশাল,
              <br />
              পলাশ, নরসিংদী।
            </p>
          </div>

          <div>
            <h3 style={{ color: "white" }}>হটলাইন</h3>
            <h2 style={{ color: "#14b8a6", display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={20} /> 01719-228840
            </h2>
            <h2 style={{ color: "#14b8a6", display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={20} /> 01933-503060
            </h2>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1e3a8a",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center"
          }}
        >
          <p>© {new Date().getFullYear()} দেশ ট্রান্সপোর্ট এজেন্সি. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>
            Developed by{" "}
            <span style={{ color: "#14b8a6", fontWeight: "bold" }}> Engr: Rijbi Khan</span>
          </p>

          <a
            href={
              "https://wa.me/8801309847638?text=" +
              encodeURIComponent(
                `আসসালামু আলাইকুম।\n\nআমি দেশ ট্রান্সপোর্ট ওয়েবসাইট সম্পর্কে যোগাযোগ করছি।\n\nআমার একটি প্রশ্ন / সমস্যা আছে।\nদয়া করে সহযোগিতা করবেন।`
              )
            }
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#14b8a6",
              color: "#0f2957",
              padding: "8px 15px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
              transition: "all .3s ease"
            }}
          >
            Contact Developer
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
