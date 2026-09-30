# 🚚 দেশ ট্রান্সপোর্ট এজেন্সি — Frontend

লাইভ: https://desh-transport.vercel.app · ব্যাকএন্ড: [desh-transport-backend](https://github.com/Rijbi-Khan/desh-transport-backend)

React 19 + Vite + framer-motion (3D অ্যানিমেশন) + lucide-react আইকন।

## পেজসমূহ

| পথ | কাজ |
|---|---|
| `/` | ল্যান্ডিং পেজ — 3D হিরো, গাড়ির বহর, আসল লাইভ ট্রিপ, চালকদের মতামত, 3D বাংলাদেশ ম্যাপ ব্যাকগ্রাউন্ড |
| `/trips` | সবার জন্য লাইভ ট্রিপ তালিকা (সার্চ/ফিল্টার), লগইন থাকলে সরাসরি আবেদন |
| `/login` | ড্রাইভার লগইন ও রেজিস্ট্রেশন (`/login?mode=signup`) |
| `/driver` | ড্রাইভার ড্যাশবোর্ড — নতুন ট্রিপ, আমার আবেদন (স্ট্যাটাস), সম্পন্ন ট্রিপ, লোকেশন আপডেট |
| `/admin-login` | এডমিন লগইন |
| `/admin` | এডমিন প্যানেল — ওভারভিউ, ট্রিপ যোগ/মুছা, আবেদন দেখে কনফার্ম, সফল ট্রিপ, ড্রাইভার তালিকা |

`/driver` ও `/admin` লগইন ছাড়া খোলে না। টোকেন শেষ হলে নিজে থেকেই লগইন পেজে পাঠায়।

## লোকালি চালানো

```bash
npm install
npm run dev
```

ব্যাকএন্ডের ঠিকানা বদলাতে `.env` ফাইলে: `VITE_API_URL=http://localhost:5000`
(না দিলে Render এর ঠিকানা ব্যবহার হবে)। সব API কল `src/config.js` থেকে যায়।

## ফোল্ডার

- `src/config.js` — API ঠিকানা, টোকেনসহ axios (`adminApi`, `driverApi`, `publicApi`)
- `src/theme.css` — রং, বাটন, কার্ড, ফর্ম (ডিজাইন সিস্টেম)
- `src/components/` — `Tilt3D` (3D কার্ড), `Toast` (নোটিফিকেশন), `TripCard`, `AuthShell`, `Logo`, `Counter`, `AppHeader`
- `src/MapWatermark.jsx` + `src/mapData.js` — 3D অ্যানিমেটেড বাংলাদেশ ম্যাপ
- `vercel.json` — রিফ্রেশ দিলে 404 না আসার জন্য SPA rewrite
