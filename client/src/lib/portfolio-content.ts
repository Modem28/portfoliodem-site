// แก้รายละเอียดและวางลิงก์แชร์ Google Drive ใน driveUrl ของแต่ละชิ้นงานในไฟล์นี้เท่านั้น
// ตัวอย่างรูปแบบ URL: https://drive.google.com/file/d/FILE_ID/view
// ตั้งสิทธิ์ไฟล์เป็น "ทุกคนที่มีลิงก์ — ผู้ดู" แล้วบันทึก/Build เวอร์ชันใหม่ เพื่อให้ผู้ชมเห็นข้อมูลเดียวกัน
export const portfolioContent = {
  name: "ชื่อของคุณ",
  englishName: "PORTFOLIO",
  role: "ผู้สร้างสรรค์งานวิดีโอ",
  availability: "เปิดรับงานตามคิว",
  workDays: "นัดหมายล่วงหน้าเพื่อประเมินรายละเอียด",
  about: "รับผลิตและตัดต่อวิดีโอสำหรับแบรนด์และโปรเจกต์ส่วนตัว\nเน้นการสื่อสารที่ชัดเจนและการทำงานที่เป็นระบบ",
  avatarUrl: "/assets/profile-avatar.webp",
  meadowUrl: "/assets/footer-character.png",
  // วาง URL ติดต่อจริงในโค้ดนี้ ปุ่มจะเปิดเมื่อมี URL ที่ถูกต้อง
  lineUrl: "",
  facebookUrl: "",
  // เปลี่ยนรหัสนี้ใน source code; เป็นเพียงตัวควบคุมการแสดงผล ไม่ใช่ระบบรักษาความปลอดภัย
  worksTogglePassword: "change-this-password",
  thankYou: "ขอบคุณที่พิจารณาผลงาน",
  thankYouDetail: "หากสนใจร่วมงาน ติดต่อเพื่อหารือรายละเอียดได้ทางช่องทางด้านล่าง",
  videos: [
    {
      id: "work-01",
      title: "วิดีโอแนะนำแบรนด์",
      description: "ตัวอย่างการเล่าเรื่องและสื่อสารอัตลักษณ์ของแบรนด์",
      category: "VIDEO / 01",
      driveUrl: "",
      accent: "rose" as const,
    },
    {
      id: "work-02",
      title: "วิดีโอแคมเปญ",
      description: "ตัวอย่างการนำเสนอแนวคิดให้กระชับและจดจำได้",
      category: "VIDEO / 02",
      driveUrl: "",
      accent: "sage" as const,
    },
    {
      id: "work-03",
      title: "คอนเทนต์วิดีโอ",
      description: "งานภาพและเสียงที่ออกแบบให้เหมาะกับช่องทางออนไลน์",
      category: "VIDEO / 03",
      driveUrl: "",
      accent: "lavender" as const,
    },
    {
      id: "work-04",
      title: "วิดีโอเล่าเรื่อง",
      description: "ตัวอย่างการวางจังหวะและเรียบเรียงเรื่องราว",
      category: "VIDEO / 04",
      driveUrl: "",
      accent: "peach" as const,
    },
    {
      id: "work-05",
      title: "ผลงานพิเศษ",
      description: "โปรเจกต์ที่สะท้อนแนวทางการทำงานและความคิดสร้างสรรค์",
      category: "VIDEO / 05",
      driveUrl: "",
      accent: "sky" as const,
    },
  ],
};
