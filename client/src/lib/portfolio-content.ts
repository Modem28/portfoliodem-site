// แก้รายละเอียดและวางลิงก์แชร์ Google Drive ใน driveUrl ของแต่ละชิ้นงานในไฟล์นี้เท่านั้น
// ตัวอย่างรูปแบบ URL: https://drive.google.com/file/d/FILE_ID/view
// ตั้งสิทธิ์ไฟล์เป็น "ทุกคนที่มีลิงก์ — ผู้ดู" แล้วบันทึก/Build เวอร์ชันใหม่ เพื่อให้ผู้ชมเห็นข้อมูลเดียวกัน
export const portfolioContent = {
  name: "Modem",
  englishName: "Modem.Studio",
  role: "ปัณณพร สุทธิศักดิ์",
  availability: "19.40 - 00.00 น.",
  workDays: "ไม่รับงานด่วน บรีฟหลัง 12.00 เริ่มงานวันถัดไปค่ะ",
  about: "รับตัดคลิปสั้น ลง Platform ต่าง ๆ ไม่ว่าจะเป็น Tiktok, IG, Facebook และ Youtube ปัจจุบัน เป็น Video Creator ที่คลินิกแหน่งหนึ่งในพิษณุโลกคับ",
  avatarUrl: "/assets/ModemStuLOGO.png",
  meadowUrl: "/assets/footer-character.png",
  // วาง URL ติดต่อจริงในโค้ดนี้ ปุ่มจะเปิดเมื่อมี URL ที่ถูกต้อง
  lineUrl: "https://lin.ee/zQfG6WU",
  facebookUrl: "https://www.facebook.com/pannaphorn.sutthisak",
  // เปลี่ยนรหัสนี้ใน source code; เป็นเพียงตัวควบคุมการแสดงผล ไม่ใช่ระบบรักษาความปลอดภัย
  worksTogglePassword: "",
  thankYou: "ขอบคุณที่รับชมผลงาคับป๋ม",
  thankYouDetail: "",
  videos: [
    {
      id: "work-01",
      title: "งานขายเครื่องประดับ",
      description: "กระชับคลิป, ซับ(texe), ซาวด์, Insertข้อมูล",
      category: "VIDEO / 01",
      driveUrl: "https://drive.google.com/file/d/1kp68faKFk3WmlNu3eYirqusCMPuhpBH3/view?usp=drive_link",
      accent: "rose" as const,
    },
    {
      id: "work-02",
      title: "คอนเทนต์ (คลินิก)",
      description: "กระชับคลิป, ซับ(texe), ซาวด์, Insertข้อมูล",
      category: "VIDEO / 02",
      driveUrl: "https://drive.google.com/file/d/17Qj80gSjstiLyB5eN9bCoySASDQ9hOmD/view?usp=drive_link",
      accent: "sage" as const,
    },
    {
      id: "work-03",
      title: "โปรโมชั่นคลินิก (พากย์) ",
      description: "กระชับคลิป, ซับ(texe), ซาวด์, Insertข้อมูล, พากย์",
      category: "VIDEO / 03",
      driveUrl: "https://drive.google.com/file/d/1ocIaO0behXemt6_-3dEfbdbDFFsK6HLK/view?usp=drive_link",
      accent: "lavender" as const,
    },
    {
      id: "work-04",
      title: "ปักตะกร้า",
      description: "กระชับคลิป, ซับ(texe), ซาวด์",
      category: "VIDEO / 04",
      driveUrl: "https://drive.google.com/file/d/1sIY5ViVKhtkwTC8ThMBLTCDnxffz4v_4/view?usp=drive_link",
      accent: "peach" as const,
    },
    {
      id: "work-05",
      title: "สตอรี่ mood ๆ",
      description: "Insert",
      category: "VIDEO / 05",
      driveUrl: "https://drive.google.com/file/d/1dHLrhA71ZBoFUV_73muGx7a-r-rqdl9o/view?usp=drive_link",
      accent: "sky" as const,
    },
  ],
};
