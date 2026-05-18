"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  Download,
  ArrowRightLeft,
  FileText,
  Mail,
  Star,
  Briefcase,
  Maximize2,
  Minimize2,
  Linkedin,
  Facebook,
  Instagram,
  Globe,
  Check,
  CircleCheck,
  ChevronDown,
  Smartphone,
  Apple,
  X,
} from "lucide-react";

// cloudinary op
function clImg(url: string, transforms: string) {
  return url.replace("/upload/", `/upload/${transforms}/`);
}

const profile = {
  name: "Bedoff Mensah Bonsu",
  qualifications:
    "FCIMG | FNIMN | FCILG | FCIET | FIoD, MPhil | PGDip | CM | ProM",
  role: "Governance & Transformational Leadership Expert",
  location: "Accra, Ghana",
  bio: "Michael Abbiw is a governance and transformational leadership expert with over 20 years of experience driving institutional excellence across Ghana's public and private sectors. He specializes in governance, strategy, risk management, and organizational transformation. He is the President of the Chartered Institute of Marketing, Ghana, and Chairman of its Governing Council, providing strategic leadership to advance professional standards and ethical practice. Michael also serves on several boards, including Built Financial Technologies Ltd., the e-Crime Bureau, and the Ghana Association of Savings and Loans Companies, and has previously served on the boards of Telecel Ghana and the Ghana Cylinder Manufacturing Company. A respected thought leader, trainer, and public speaker, Michael holds an MPhil in Entrepreneurship & Corporate Strategy and an MBA from KNUST, and is a Fellow of multiple professional institutions in leadership, governance, marketing, and education.",
  image: clImg(
    "https://res.cloudinary.com/dshe5kflb/image/upload/v1778761358/368A9454-scaled-e1757589945396-1462x2048_vur7qk_svc5j0.webp",
    "f_auto,q_auto,w_800",
  ),
  email: "m.abbiw@mgaconsultingltd.com",
  phone: "0243784721",
  social: {
    linkedin: "https://www.linkedin.com/in/michaelabbiw",
    website: "https://michaelabbiw.com/",
    facebook: "https://www.facebook.com/share/1J9zVPFAXz/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/michael_abbiw?igsh=dWwybGJqMG0yM2ps",
  },
};

// website links

export const links = [
  {
    title: "Beemeg Company Limited",
    description:
      "Governance, strategy, risk management, and organizational transformation.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/7da8de98-fa8f-40a6-8c61-8623209756f8_pgwkxa.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://mgaconsultingltd.com/",
  },
  {
    title: "STIB Ghana",
    description:
      "Advancing professional standards and institutional excellence.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694567/3431a504-0e73-4455-a6ed-a85dcc13985f_exzfyj.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://stibghana.com/",
  },
  {
    title: "Innosol Limited",
    description: "Innovative business and technology solutions.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/4a481e1d-7394-4d62-9ed9-bff007f4b9dd_rrilfx.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://innosollimited.com/",
  },
  {
    title: "MGA Prime Properties",
    description:
      "Premium real estate development and property management solutions.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/75bdfdc3-caf2-48d2-b52a-79592570deb2_ntfild.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://mgaprimeproperties.com/",
  },
  {
    title: "MGA Nigeria",
    description:
      "Advancing professional standards and institutional excellence.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694567/e135cefe-8357-456a-97f9-2bb5a77314e9_vdnkg8.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://mgaconsultingltd.com/mga-consultinigeria/",
  },
  {
    title: "CorEvents Solutions Ltd",
    description: "Corporate event planning and management solutions.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/6d3da7a3-f04d-49c4-953a-799fda233052_ma5elj.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://coreventssolutionsltd.com/",
  },
  {
    title: "JKA Logistics Limited",
    description: "End-to-End Logistics & Supply Chain Solutions.",
    image: clImg(
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694567/920666c9-2d1e-4c13-acb0-78506cc8aaaf_qwhtjs.png",
      "f_auto,q_auto,w_400",
    ),
    url: "https://jkalogisticsltd.com/",
  },
];

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="
          flex h-7 w-7 shrink-0 items-center justify-center
          rounded-full bg-black
          text-xs font-bold text-white
        "
      >
        {number}
      </div>
      <p className="pt-0.5 text-sm text-neutral-700">{text}</p>
    </div>
  );
}

function SaveContactButton() {
  const [showSheet, setShowSheet] = useState(false);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("contactTutorialSeen");
    setHasSeenTutorial(!!seen);
  }, []);

  const platform = useMemo(() => {
    if (typeof navigator === "undefined") return "other";
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return "ios";
    if (/Android/.test(ua)) return "android";
    return "other";
  }, []);

  const openVCF = () => {
    setIsOpening(true);

    const link = document.createElement("a");
    link.href = "/BedoffBonsu.vcf";
    link.setAttribute("download", "BedoffBonsu.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsOpening(false);
    }, 2000);
  };

  const handleSaveContact = () => {
    if (!hasSeenTutorial) {
      setShowSheet(true);
      return;
    }
    openVCF();
  };

  const handleContinue = () => {
    sessionStorage.setItem("contactTutorialSeen", "true");
    setHasSeenTutorial(true);
    setShowSheet(false);

    setTimeout(() => {
      openVCF();
    }, 150);
  };

  return (
    <>
      <button
        onClick={handleSaveContact}
        aria-label="Save contact"
        className="
          relative flex-1 h-[52px] rounded-2xl
          bg-black text-white font-bold text-sm
          flex items-center justify-center gap-2.5
          shadow-lg shadow-black/20
          transition-all duration-300
          hover:bg-neutral-800
          active:scale-[0.98]
          save-btn-breathe
        "
      >
        {isOpening ? (
          <>
            <Check size={18} strokeWidth={3} aria-hidden="true" />
            Opening Contact...
          </>
        ) : (
          <>
            <Download size={18} strokeWidth={2.5} aria-hidden="true" />
            Save contact
          </>
        )}
      </button>

      <div
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-all duration-300
          ${showSheet ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setShowSheet(false)}
      />

      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50
          rounded-t-[32px]
          bg-white
          px-6 pt-4 pb-8
          shadow-2xl
          transition-all duration-300
          ${showSheet ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}
      >
        <div className="flex justify-center mb-5">
          <div className="h-1.5 w-14 rounded-full bg-neutral-300" />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Save Contact</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Quick steps before your contact card opens.
            </p>
          </div>

          <button
            onClick={() => setShowSheet(false)}
            aria-label="Close"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full bg-neutral-100
              text-neutral-600
              transition hover:bg-neutral-200
            "
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
              {platform === "ios" ? (
                <Apple size={20} aria-hidden="true" />
              ) : (
                <Smartphone size={20} aria-hidden="true" />
              )}
            </div>

            <div>
              <p className="font-semibold text-neutral-900">
                {platform === "ios"
                  ? "iPhone Instructions"
                  : platform === "android"
                    ? "Android Instructions"
                    : "Device Instructions"}
              </p>
              <p className="text-sm text-neutral-500">
                Follow these steps to save the contact.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {platform === "ios" && (
              <>
                <Step number="1" text="The contact preview will open" />
                <Step
                  number="2"
                  text='Scroll down and tap "Create New Contact"'
                />
                <Step number="3" text='Tap "Done" to finish saving' />
              </>
            )}
            {platform === "android" && (
              <>
                <Step number="1" text="The contact file will open" />
                <Step number="2" text='Tap "Import" or "Save"' />
                <Step number="3" text="Choose where to save the contact" />
              </>
            )}
            {platform === "other" && (
              <>
                <Step number="1" text="The contact card will open" />
                <Step
                  number="2"
                  text="Use your device options to save the contact"
                />
              </>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-neutral-500">
            <ChevronDown
              className="animate-bounce"
              size={18}
              aria-hidden="true"
            />
            Scroll down after opening
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="
            mt-6 flex h-[54px] w-full items-center justify-center
            rounded-2xl bg-black
            font-semibold text-white
            transition hover:bg-neutral-800
            active:scale-[0.99]
          "
        >
          Continue
        </button>

        <p className="mt-3 text-center text-xs text-neutral-400">
          This tutorial only appears once per session.
        </p>
      </div>
    </>
  );
}

const SocialBtn = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-14 h-14 shrink-0 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all active:scale-90 shadow-sm"
  >
    {icon}
  </a>
);

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const itemWidth = 216;
      setActiveSlide(Math.round(scrollLeft / itemWidth));
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: index * 216, behavior: "smooth" });
      setActiveSlide(index);
    }
  };

  const handleCompanyProfile = () => {
    window.open(
      "https://drive.google.com/file/d/1JZXBMh6K1rXC6JPEXCOYaz9BH1Cx28ey/view?usp=sharing",
      "_blank",
    );
  };

  const handleEmail = () => {
    window.location.href = `mailto:${profile.email}?subject=Inquiry from Digital Card`;
  };

  const handleExchange = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect`;
  };

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
          }
          50% {
            transform: scale(1.025);
            box-shadow: 0 8px 36px rgba(0, 0, 0, 0.3);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-120%) skewX(-12deg);
          }
          100% {
            transform: translateX(220%) skewX(-12deg);
          }
        }

        .save-btn-breathe {
          animation: breathe 2.8s ease-in-out infinite;
        }

        .save-btn-breathe::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.18) 45%,
            rgba(255, 255, 255, 0.32) 50%,
            rgba(255, 255, 255, 0.18) 55%,
            transparent 100%
          );
          animation: shimmer 3.2s ease-in-out infinite;
          animation-delay: 1.4s;
          pointer-events: none;
        }
      `}</style>

      <div className="min-h-screen w-full bg-white md:bg-neutral-100 flex items-start md:items-center justify-center md:p-8">
        <div className="w-full md:max-w-[400px] bg-white md:rounded-[36px] md:shadow-2xl overflow-hidden relative min-h-screen md:min-h-0 ring-1 ring-black/5">
          {/* hero  */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              relative w-full group cursor-pointer
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
              ${isExpanded ? "h-[85vh] md:h-[600px]" : "h-[45vh] md:h-[400px]"}
            `}
          >
            <img
              src={profile.image}
              alt={`Portrait of ${profile.name}`}
              width={800}
              height={1120}
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-top"
            />

            <div
              className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700 ${
                isExpanded ? "opacity-0" : "opacity-80"
              }`}
            />

            <div
              className={`absolute bottom-10 left-6 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm border border-white/20 transition-all duration-500 ${
                isExpanded ? "opacity-0 translate-y-4" : "opacity-100"
              }`}
            >
              <Star size={10} className="fill-white" aria-hidden="true" /> CEO
            </div>

            <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-md p-2 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isExpanded ? (
                <Minimize2 size={20} aria-hidden="true" />
              ) : (
                <Maximize2 size={20} aria-hidden="true" />
              )}
            </div>
          </div>

          {/* below c */}
          <div className="relative -mt-8 bg-white rounded-t-[36px] px-6 pt-10 pb-12 z-10 transition-transform duration-700">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-200 rounded-full md:hidden" />

            {/* the name, role, email, location */}
            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-black flex items-center gap-2 tracking-tight leading-none">
                {profile.name}
                <CircleCheck color="#1c73d6" aria-hidden="true" />
              </h1>
              <p className="text-xs font-semibold text-neutral-600 mt-2 mb-1">
                {profile.qualifications}
              </p>
              <p className="text-neutral-500 text-sm mt-1 leading-snug font-medium">
                {profile.role} <br /> {profile.location}
              </p>
            </div>

            <div className="flex gap-3 mb-10">
              <SaveContactButton />

              <button
                onClick={handleExchange}
                className="flex-1 bg-white border border-neutral-200 text-black h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-transform hover:bg-neutral-50 hover:scale-95"
              >
                <ArrowRightLeft
                  size={18}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                Connect
              </button>
            </div>

            {/* ab section */}
            <div className="mb-10">
              <h2 className="font-bold text-black text-lg mb-3">About</h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* q-a  */}
            <div className="mb-10">
              <h2 className="font-bold text-black text-lg mb-3">
                Quick Actions
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={handleCompanyProfile}
                  className="cursor-pointer flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100"
                >
                  <FileText size={18} aria-hidden="true" />
                  Profile
                </button>
                <button
                  onClick={handleEmail}
                  className="cursor-pointer flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100"
                >
                  <Mail size={18} aria-hidden="true" />
                  Email Me
                </button>
              </div>
            </div>

            {/* sslinks */}
            <div className="mb-10">
              <h2 className="font-bold text-black text-lg mb-3">
                Connect with Me
              </h2>
              <div className="flex gap-4">
                <SocialBtn
                  icon={<Linkedin size={22} aria-hidden="true" />}
                  href={profile.social.linkedin}
                  label="LinkedIn profile"
                />
                <SocialBtn
                  icon={<Globe size={22} aria-hidden="true" />}
                  href={profile.social.website}
                  label="Personal website"
                />
                <SocialBtn
                  icon={<Facebook size={22} aria-hidden="true" />}
                  href={profile.social.facebook}
                  label="Facebook profile"
                />
                <SocialBtn
                  icon={<Instagram size={22} aria-hidden="true" />}
                  href={profile.social.instagram}
                  label="Instagram profile"
                />
              </div>
            </div>

            <div className="relative">
              <h2 className="font-bold text-black text-lg">Companies</h2>

              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-4 pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
              >
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    className="shrink-0 w-[200px] snap-start bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 duration-200 group"
                  >
                    <div className="h-32 w-full bg-neutral-100 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element for public_images */}
                      <img
                        src={link.image}
                        alt={link.title}
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={128}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur rounded-md p-1.5 shadow-sm">
                        <Briefcase
                          size={14}
                          className="text-black"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[14px] font-bold text-black leading-tight mb-1">
                        {link.title}
                      </p>
                      <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-[-15px]">
                {links.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Go to company ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === i
                        ? "w-6 bg-black"
                        : "w-1.5 bg-neutral-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
