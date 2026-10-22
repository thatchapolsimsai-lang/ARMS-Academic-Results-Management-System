// ==========================================================
// SYSTEM CONFIGURATION: ACADEMIC ASSESSMENT SYSTEM
// ==========================================================

const APP_CONFIG = {
  // --------------------------------------------------------
  // 1. PRODUCTION BACKEND URL (URL หลักสำหรับผู้ใช้ทุกคน)
  // เมื่อ Developer มีการสร้าง New Deployment ใน Apps Script 
  // ให้อัปเดตลิงก์ใหม่ตรงนี้ที่เดียว แล้ว Commit ขึ้น GitHub
  // --------------------------------------------------------
  API_URL: "https://script.google.com/macros/s/AKfycbyKnVtzvqryE1MqryldyyM5HPdBfO4t24DSVI1bDRmDwMX1I1J5plEGUIWMrhqA2hDFvQ/exec",

  // ข้อมูลเวอร์ชันระบบ
  APP_NAME: "Academic Assessment System",
  APP_VERSION: "2.6.0",
  ENVIRONMENT: "production", // 'production' | 'development'

  // --------------------------------------------------------
  // 2. RESOLVER: ดึง URL ที่พร้อมทำงาน
  // (รองรับกรณี Developer ทดสอบ URL พิเศษเฉพาะเครื่องตนเองผ่าน LocalStorage)
  // --------------------------------------------------------
  getApiUrl: function() {
    const localOverride = localStorage.getItem('DEV_API_URL_OVERRIDE');
    if (localOverride && localOverride.trim().startsWith('https://script.google.com/')) {
      return localOverride.trim();
    }
    return this.API_URL;
  },

  // ฟังก์ชันบันทึก URL เฉพาะเครื่อง (สำหรับ Dev ใช้ทดสอบ)
  setLocalOverride: function(newUrl) {
    if (newUrl && newUrl.trim().startsWith('https://script.google.com/')) {
      localStorage.setItem('DEV_API_URL_OVERRIDE', newUrl.trim());
    } else {
      localStorage.removeItem('DEV_API_URL_OVERRIDE');
    }
  },

  // รีเซ็ตกลับไปใช้ค่า Default ของระบบ
  resetToDefault: function() {
    localStorage.removeItem('DEV_API_URL_OVERRIDE');
  }
};

// ผูกเข้ากับ window scope เพื่อให้ index.html เรียกใช้ได้ทั่วถึง
window.APP_CONFIG = APP_CONFIG;
