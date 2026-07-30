import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import logoImg from "./desh logo.jpeg";
import bannerImg from "./banner.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const heroContainerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 }
    }
  };

  const heroItemVariants = {
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

  // Updated buttonStyle
  const buttonStyle = {
    fontWeight: "700",
    fontSize: "1rem",
    padding: "1rem 2.2rem",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    transition: "all .3s ease",
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,.18)"
  };

  // Updated cardStyle base
  const cardStyle = {
    background: "white",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 12px 35px rgba(0,0,0,.12)",
    transition: "all .3s ease",
    cursor: "pointer"
  };

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif",
      background: "#f1f5f9",
      overflowX: "hidden"
    }}>

      {/* Global CSS Style Block */}
      <style>{`
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate {
          animation: fade .8s ease;
        }

        /* Button Hover Effect */
        button:hover,
        a:hover {
          transform: translateY(-4px) scale(1.03);
          filter: brightness(1.08);
        }

        /* Vehicle & Review Card Hover Effect */
        .card-animate {
          transition: all .3s ease !important;
        }
        
        .card-animate:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,.15) !important;
        }

        /* Signature element: an animated route line under the hero headline,
           evoking a highway route with a truck travelling along it */
        .route-line {
          position: relative;
          height: 3px;
          border-radius: 2px;
          background: repeating-linear-gradient(
            90deg,
            #14b8a6 0px,
            #14b8a6 14px,
            transparent 14px,
            transparent 24px
          );
          background-size: 200% 100%;
          animation: route-travel 3.2s linear infinite;
        }

        .route-line-marker {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          font-size: 18px;
          animation: route-marker 3.2s linear infinite;
        }

        .stat-value {
          font-family: 'Inter', 'Hind Siliguri', sans-serif;
        }

        @keyframes route-travel {
          from { background-position: 0 0; }
          to { background-position: -200% 0; }
        }

        @keyframes route-marker {
          from { left: 0%; }
          to { left: 100%; }
        }

        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-line {
            animation: none;
            background: #14b8a6;
          }
          .route-line-marker {
            animation: none;
            left: 100%;
          }
          .animate {
            animation: none;
          }
        }
      `}</style>

      {/* HEADER */}
      <header style={{
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
      }}>
        <div>
          <img
            src={logoImg}
            alt="দেশ ট্রান্সপোর্ট"
            style={{
              height: "48px",
              objectFit: "contain"
            }}
          />
        </div>

        <div style={{
          display: "flex",
          gap: "15px",
          alignItems: "center"
        }}>
          <button
            onClick={() => navigate("/trips")}
            style={{
              background: "none",
              border: "none",
              fontWeight: "700",
              color: "#0f2957",
              cursor: "pointer",
              transition: "all .3s ease"
            }}
          >
            🚚 লাইভ ট্রিপস
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
              transition: "all .3s ease"
            }}
          >
            🚛 ড্রাইভার লগইন
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
              transition: "all .3s ease"
            }}
          >
            🔐 এডমিন
          </button>
        </div>
      </header>

      {/* HERO SECTION - headline, live stats and banner image in one composed unit */}
      <motion.section
        variants={heroContainerVariants}
        initial="hidden"
        animate="show"
        style={{
          padding: "50px 35px 65px",
          display: "flex",
          justifyContent: "center",
          background: "rgba(255,255,255,.3)"
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
          {/* Left column: eyebrow, headline, route-line signature, CTAs */}
          <div>
            <motion.p
              variants={heroItemVariants}
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
              🟢 লাইভ ট্রিপ ট্র্যাকিং চালু আছে
            </motion.p>

            <motion.h1
              variants={heroItemVariants}
              style={{
                color: "#0f2957",
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: "1.25",
                fontWeight: "700",
                margin: "0"
              }}
            >
              দেশ ট্রান্সপোর্ট থাকলে পরিবহন নিয়ে
              <br />
              আর কোনো দুশ্চিন্তা নেই!
            </motion.h1>

            {/* Signature element: dashed route line with a travelling truck marker */}
            <motion.div
              variants={heroItemVariants}
              style={{
                position: "relative",
                width: "180px",
                margin: "22px 0 24px"
              }}
            >
              <div className="route-line" />
              <span className="route-line-marker">🚚</span>
            </motion.div>

            <motion.p
              variants={heroItemVariants}
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
              variants={heroItemVariants}
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap"
              }}
            >
              <button
                onClick={() => navigate("/trips")}
                style={{
                  ...buttonStyle,
                  background: "#0f2957",
                  color: "white"
                }}
              >
                🚚 লাইভ ট্রিপস ড্যাশবোর্ড
              </button>
              <a
                href="tel:01719228840"
                style={{
                  ...buttonStyle,
                  background: "#ef4444",
                  color: "white"
                }}
              >
                📞 সরাসরি কল করুন
              </a>

              <a
                href={
                  "https://wa.me/8801719228840?text=" +
                  encodeURIComponent(
                    `আসসালামু আলাইকুম।\n\nআমি দেশ ট্রান্সপোর্ট থেকে গাড়ি নিতে চাই।\n\nলোকেশন:\nগন্তব্য:\nমালামালের ধরন:\nগাড়ির ধরন:\n\nদয়া করে আমাকে সহযোগিতা করুন।`
                  )
                }
                target="_blank"
                rel="noreferrer"
                style={{
                  ...buttonStyle,
                  background: "#25d366",
                  color: "white"
                }}
              >
                💬 WhatsApp করুন
              </a>
            </motion.div>
          </div>

          {/* Right column: banner image framed with floating live-stat badges */}
          <motion.div
            variants={heroItemVariants}
            style={{ position: "relative" }}
          >
            <img
              src={bannerImg}
              alt="দেশ ট্রান্সপোর্টের কভার্ড ভ্যান বহর"
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
                    style={{
                      color: "#0f2957",
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "12px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* spacer to account for the overlapping stat badge strip above */}
      <div style={{ height: "40px" }} />

      {/* VEHICLE SECTION - Cards now have hover animation */}
      <section 
        style={{
          padding: "70px 20px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0f2957", fontSize: "30px" }}>
          আমাদের যানবাহনের ধরণ সমূহ
        </h2>
        <p style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "45px"
        }}>
          Your cargo's safety is our priority with our modern fleet.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px"
        }}>
          <div className="card-animate" style={cardStyle}>
            <div style={{ fontSize: "55px" }}>📦</div>
            <h3>কভার্ড ভ্যান</h3>
            <p>বৃষ্টি বা রোদ থেকে মালামাল সুরক্ষিত রাখতে ৫ থেকে ১৫ টনের কভার্ড ভ্যান।</p>
          </div>

          <div className="card-animate" style={cardStyle}>
            <div style={{ fontSize: "55px" }}>🚛</div>
            <h3>খোলা ট্রাক</h3>
            <p>রড, সিমেন্ট, শিল্প পণ্য ও ভারী মালামাল পরিবহনের জন্য উপযুক্ত।</p>
          </div>

          <div className="card-animate" style={cardStyle}>
            <div style={{ fontSize: "55px" }}>🚜</div>
            <h3>ট্রেইলার ও লড়ী</h3>
            <p>বড় মেশিনারি ও ভারী কার্গো পরিবহনের জন্য বিশেষ গাড়ি।</p>
          </div>
        </div>
      </section>

      {/* DRIVER REVIEW SECTION - Cards now have hover animation */}
      <section 
        style={{ background: "white", padding: "70px 20px" }}
      >
        <h2 style={{ textAlign: "center", color: "#0f2957" }}>
          আমাদের চালকদের মতামত
        </h2>

        <div style={{
          maxWidth: "1100px",
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px"
        }}>
          <div className="card-animate" style={cardStyle}>
            <h3>👨‍✈️ মো: রফিকুল ইসলাম</h3>
            <p style={{ color: "#14b8a6" }}>কভার্ড ভ্যান চালক ⭐⭐⭐⭐⭐</p>
            <p>"আগে ট্রিপের জন্য অপেক্ষা করতে হতো। এখন দেশ ট্রান্সপোর্ট থেকে নিয়মিত ট্রিপ পাচ্ছি।"</p>
          </div>

          <div className="card-animate" style={cardStyle}>
            <h3>🧔 আলমগীর হোসেন</h3>
            <p style={{ color: "#14b8a6" }}>খোলা ট্রাক চালক ⭐⭐⭐⭐⭐</p>
            <p>"ভাড়া নির্ধারিত থাকে এবং সময়মতো পেমেন্ট পাওয়া যায়।"</p>
          </div>

          <div className="card-animate" style={cardStyle}>
            <h3>👨 সাজ্জাদ আলী</h3>
            <p style={{ color: "#14b8a6" }}>ট্রেইলার চালক ⭐⭐⭐⭐⭐</p>
            <p>"বড় কোম্পানির ভালো ট্রিপ পাওয়া সহজ হয়েছে।"</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0f2957",
        color: "#cbd5e1",
        padding: "60px 25px 25px"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <div>
            <h2 style={{ color: "white" }}>মেসার্স দেশ ট্রান্সপোর্ট এজেন্সি</h2>
            <p style={{ maxWidth: "350px", lineHeight: "1.7" }}>
              নিরাপদ পরিবহন, আপনার বিশ্বাসের সঙ্গী। আমরা আধুনিক প্রযুক্তির মাধ্যমে সারাদেশে ট্রাক ও পিকআপ সার্ভিস দিয়ে থাকি।
            </p>
          </div>

          <div>
            <h3 style={{ color: "white" }}>প্রধান কার্যালয়</h3>
            <p>প্রাণ-আর.এফ.এল. গ্রুপ ৪নং গেইট সংলগ্ন,<br />বাগপাড়া, ঘোড়াশাল,<br />পলাশ, নরসিংদী।</p>
          </div>

          <div>
            <h3 style={{ color: "white" }}>হটলাইন</h3>
            <h2 style={{ color: "#14b8a6" }}>01719-228840</h2>
            <h2 style={{ color: "#14b8a6" }}>01933-503060</h2>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1e3a8a",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center"
        }}>
          <p>© {new Date().getFullYear()} দেশ ট্রান্সপোর্ট এজেন্সি. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>Developed by <span style={{ color: "#14b8a6", fontWeight: "bold" }}> Engr: Rijbi Khan</span></p>
          
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
            📞 Contact Developer
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;