// แก้รายละเอียดและวางลิงก์แชร์ Google Drive ใน driveUrl ของแต่ละชิ้นงานในไฟล์นี้เท่านั้น
// ตัวอย่างรูปแบบ URL: https://drive.google.com/file/d/FILE_ID/view
// ตั้งสิทธิ์ไฟล์เป็น "ทุกคนที่มีลิงก์ — ผู้ดู" แล้วบันทึก/Build เวอร์ชันใหม่ เพื่อให้ผู้ชมเห็นข้อมูลเดียวกัน
export const portfolioContent = {
  name: "Modem",
  englishName: "PORTFOLIO",
  role: "ปัณณพร สุทธิศักดิ์",
  availability: "19.40 - 00.00 น.",
  workDays: "ไม่รับงานด่วน บรีฟหลัง 12.00 เริ่มงานวันถัดไป",
  about: "รับตัดคลิป ไม่ว่าจะเป็น\nเน้นการสื่อสารที่ชัดเจนและการทำงานที่เป็นระบบ",
  avatarUrl: "/assets/profile-avatar.webp",
  meadowUrl: "/assets/footer-character.png",
  // วาง URL ติดต่อจริงในโค้ดนี้ ปุ่มจะเปิดเมื่อมี URL ที่ถูกต้อง
  lineUrl: "",
  facebookUrl: "",
  // เปลี่ยนรหัสนี้ใน source code; เป็นเพียงตัวควบคุมการแสดงผล ไม่ใช่ระบบรักษาความปลอดภัย
  worksTogglePassword: "2326",
  thankYou: "ขอบคุณที่พิจารณาผลงาน",
  thankYouDetail: "หากสนใจร่วมงาน ติดต่อเพื่อหารือรายละเอียดได้ทางช่องทางด้านล่าง",
  videos: [
    {
      id: "work-01",
      title: "งานขายเครื่องประดับ",
      description: "พูดถึงสินค้า และข้อมูลต่าง ๆ เกี่ยวกับสินค้านั้น",
      category: "VIDEO / 01",
      driveUrl: "",
      accent: "rose" as const,
    },
    {
      id: "work-02",
      title: "คอนเทนต์ (คลินิก)",
      description: "สื่อให้เห็นถึงการเปลี่ยนแปลงหลังจากทำหัตถการไป 3 สัปดาห์",
      category: "VIDEO / 02",
      driveUrl: "",
      accent: "sage" as const,
    },
    {
      id: "work-03",
      title: "คอนเทนต์วิดีโอ",
      description: "เป็นการเปิดการ์ด แบบสุ่ม เพื่อความบันเทิง พร้อมความรู้",
      category: "VIDEO / 03",
      driveUrl: "",
      accent: "lavender" as const,
    },
    {
      id: "work-04",
      title: "งานพากย์ (คลินิก)",
      description: "พากย์เสียง ให้ข้อมูลและโปรโมชั่น",
      category: "VIDEO / 04",
      driveUrl: "",
      accent: "peach" as const,
    },
    {
      id: "work-05",
      title: "สตอรี่ mood ๆ",
      description: "เป็นการตกแต่งสตอรี่น่ารัก ตามอารมณ์",
      category: "VIDEO / 05",
      driveUrl: "",
      accent: "sky" as const,
    },
  ],
};
