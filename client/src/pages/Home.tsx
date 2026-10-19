import { type FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Heart,
  MessageCircle,
  Moon,
  Sun,
  Sunrise,
  Sunset,
} from "lucide-react";

import SkyScenery from "@/components/portfolio/SkyScenery";
import VideoCard from "@/components/portfolio/VideoCard";
import { portfolioContent as content } from "@/lib/portfolio-content";
import { formatLocalTime, getSkyPhase } from "@/lib/portfolio-utils";

const skyCopy = {
  morning: { greeting: "พอร์ตฟอลิโอและผลงานด้านวิดีโอ", icon: Sunrise },
  day: { greeting: "ตัวอย่างผลงานและบริการสร้างสรรค์", icon: Sun },
  evening: { greeting: "แนวคิดและผลงานที่ผ่านมา", icon: Sunset },
  night: { greeting: "ผลงานวิดีโอและสื่อสร้างสรรค์", icon: Moon },
};

const WORKS_VISIBILITY_STORAGE_KEY = "dayfolio:works-visibility";

function getInitialWorksVisibility() {
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(WORKS_VISIBILITY_STORAGE_KEY) !== "hidden";
  } catch {
    return true;
  }
}

function safeContactUrl(value: string, channel: "LINE" | "Facebook") {
  try {
    const url = new URL(value);
    const hosts = channel === "LINE"
      ? ["line.me", "www.line.me", "lin.ee"]
      : ["facebook.com", "www.facebook.com", "m.facebook.com", "fb.me"];
    return url.protocol === "https:" && hosts.includes(url.hostname) && !url.username && !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.1 22v-8.8h3l.5-3.5h-3.5V7.4c0-1 .3-1.7 1.7-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.6 1.7-4.6 4.7v2.6H7.2v3.5h3.1V22h3.8Z" />
    </svg>
  );
}

export default function Home() {
  const [now, setNow] = useState(() => new Date());
  const [worksVisible, setWorksVisible] = useState(getInitialWorksVisibility);
  const [toggleFormOpen, setToggleFormOpen] = useState(false);
  const [togglePassword, setTogglePassword] = useState("");
  const [toggleError, setToggleError] = useState("");

  useEffect(() => {
    const refresh = () => setNow(new Date());
    const timer = window.setInterval(refresh, 15000);
    const onVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const phase = getSkyPhase(now.getHours());
  const phaseCopy = skyCopy[phase];
  const TimeIcon = phaseCopy.icon;
  const lineUrl = safeContactUrl(content.lineUrl, "LINE");
  const facebookUrl = safeContactUrl(content.facebookUrl, "Facebook");

  function handleWorksVisibilitySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!content.worksTogglePassword || togglePassword !== content.worksTogglePassword) {
      setToggleError("รหัสผ่านไม่ถูกต้อง");
      return;
    }

    const nextVisibility = !worksVisible;
    setWorksVisible(nextVisibility);
    try {
      window.localStorage.setItem(WORKS_VISIBILITY_STORAGE_KEY, nextVisibility ? "visible" : "hidden");
    } catch {
      // The toggle still works for this page view when browser storage is unavailable.
    }
    setTogglePassword("");
    setToggleError("");
    setToggleFormOpen(false);
  }

  return (
    <div className={`portfolio-page theme-${phase}`}>
      <a className="skip-link" href="#portfolio-main">ข้ามไปยังเนื้อหา</a>
      <SkyScenery phase={phase} />
      <div className="page-content">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="กลับไปด้านบน">
            <img src="/favicon.svg" alt="" />
            <span>{content.englishName}</span>
          </a>
          <nav className="main-nav" aria-label="เมนูหลัก">
            <a href="#top">โปรไฟล์</a>
            <a href="#works">ผลงาน</a>
            <a href="#contact">ติดต่อ</a>
          </nav>
          <div className="time-control">
            <div className="clock-label">
              <TimeIcon size={16} aria-hidden="true" />
              <span>{formatLocalTime(now)}</span>
              <span className="local-time-label">เวลาท้องถิ่น</span>
            </div>
          </div>
        </header>

        <main id="portfolio-main" className="main-column">
          <section id="top" className="profile-section" aria-labelledby="profile-name">
            <div className="sky-greeting">
              <span className="greeting-line" />
              <p>{phaseCopy.greeting}</p>
              <span className="greeting-line" />
            </div>
            <div className="profile-card">
              <div className="profile-identity">
                <div className="avatar-frame">
                  <img src={content.avatarUrl} alt="ภาพโปรไฟล์" />
                </div>
                <div className="identity-copy">
                  <span className="small-eyebrow">VIDEO CREATOR</span>
                  <h1 id="profile-name">{content.name}</h1>
                  <p>{content.role}</p>
                </div>
              </div>
              <div className="profile-hours">
                <span className="profile-label"><Clock3 size={14} aria-hidden="true" />สถานะการรับงาน</span>
                <strong>{content.availability}</strong>
                <p>{content.workDays}</p>
              </div>
              <div className="profile-about">
                <span className="profile-label">ABOUT</span>
                <p>{content.about}</p>
                <div className="about-tags"><span>VIDEO</span><span>EDITING</span><span>STORYTELLING</span></div>
              </div>
            </div>
            <div className="little-intro">
              <p>งานวิดีโอที่ออกแบบมาเพื่อสื่อสารเรื่องราวอย่างชัดเจน</p>
              <a href="#works">ดูผลงาน <ArrowDown size={13} aria-hidden="true" /></a>
            </div>
          </section>

          <section id="works" className="works-section" aria-labelledby="works-title">
            <div className="section-heading">
              <span className="small-eyebrow">PORTFOLIO / SELECTED WORK</span>
              <h2 id="works-title">ผลงานที่ผ่านมา</h2>
              <p>ตัวอย่างงานวิดีโอและสื่อสร้างสรรค์</p>
              <div className="section-rule"><span /><b>05 PROJECTS</b><span /></div>
            </div>
            <div className="works-visibility-control">
              <button
                className="works-visibility-trigger"
                type="button"
                aria-expanded={toggleFormOpen}
                onClick={() => {
                  setToggleFormOpen((open) => !open);
                  setTogglePassword("");
                  setToggleError("");
                }}
              >
                {worksVisible ? "ซ่อนผลงาน" : "แสดงผลงาน"}
              </button>
              {toggleFormOpen && (
                <form id="works-visibility-form" className="works-password-form" onSubmit={handleWorksVisibilitySubmit}>
                  <label className="sr-only" htmlFor="works-toggle-password">รหัสผ่านสำหรับเปิดหรือซ่อนผลงาน</label>
                  <input
                    id="works-toggle-password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="รหัสผ่าน"
                    value={togglePassword}
                    onChange={(event) => setTogglePassword(event.target.value)}
                  />
                  <button type="submit">ยืนยัน</button>
                  <p className="works-password-note">รหัสผ่านอยู่ในโค้ดหน้าเว็บ จึงอ่านหรือเลี่ยงได้; ฟังก์ชันนี้ซ่อนเฉพาะเบราว์เซอร์นี้ ไม่ป้องกัน URL หรือไฟล์ผลงาน</p>
                  {toggleError && <p className="works-password-error" role="alert">{toggleError}</p>}
                </form>
              )}
            </div>
            {worksVisible ? (
              <div className="video-list">
                {content.videos.map((video, index) => (
                  <VideoCard key={video.id} video={video} index={index} />
                ))}
              </div>
            ) : (
              <div className="works-hidden-note" role="status">ตัวอย่างผลงานถูกซ่อนในเบราว์เซอร์นี้</div>
            )}
          </section>

          <section id="contact" className="contact-section" aria-labelledby="contact-title">
            <span className="small-eyebrow">CONTACT</span>
            <h2 id="contact-title">พูดคุยรายละเอียดโปรเจกต์</h2>
            <p>ติดต่อเพื่อหารือขอบเขตงาน กำหนดเวลา และแนวทางการทำงาน</p>
            <div className="contact-buttons">
              {lineUrl ? (
                <a className="contact-button line-button" href={lineUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={19} aria-hidden="true" /><span>LINE</span><ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : (
                <span className="contact-button line-button contact-button-inactive" aria-disabled="true">
                  <MessageCircle size={19} aria-hidden="true" /><span>LINE</span><ArrowUpRight size={14} aria-hidden="true" />
                </span>
              )}
              {facebookUrl ? (
                <a className="contact-button facebook-button" href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <FacebookMark /><span>Facebook</span><ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : (
                <span className="contact-button facebook-button contact-button-inactive" aria-disabled="true">
                  <FacebookMark /><span>Facebook</span><ArrowUpRight size={14} aria-hidden="true" />
                </span>
              )}
            </div>
            {!lineUrl && !facebookUrl && <p className="contact-pending">กำหนด URL ช่องทางติดต่อในข้อมูลโค้ดเพื่อเปิดใช้งาน</p>}
          </section>

          <section className="thank-you-section" aria-label="ข้อความขอบคุณ">
            <div className="thank-you-heart" aria-hidden="true"><span /><Heart size={14} /><span /></div>
            <h2>{content.thankYou}</h2>
            <p>{content.thankYouDetail}</p>
            <span className="handwritten-signoff">PORTFOLIO</span>
          </section>
        </main>

        <footer className="meadow-footer">
          <div className="meadow-art">
            <img src={content.meadowUrl} alt="ตัวละครจากภาพอ้างอิงนอนเล่นกับสุนัขบนพื้นหญ้า" loading="lazy" />
          </div>
          <div className="footer-caption">
            <span>© {now.getFullYear()} {content.englishName}</span>
            <span>Selected work · Creative portfolio</span>
            <a href="#top">กลับด้านบน <ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
