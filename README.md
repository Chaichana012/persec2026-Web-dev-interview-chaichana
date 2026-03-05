# Persec Web Developer Pre-Interview Test

Repository นี้จัดทำขึ้นเพื่อส่งแบบทดสอบ Pre-Interview สำหรับตำแหน่ง Web Developer ของบริษัท Persec โค้ดต้นฉบับทั้งหมดเขียนด้วย **TypeScript** ตามที่โจทย์กำหนด และได้ทำการ Compile เป็น **JavaScript** ไว้เรียบร้อยแล้ว

## 📁 โครงสร้างโปรเจกต์ (Project Structure)
โปรเจกต์ถูกแบ่งออกเป็น 2 โฟลเดอร์หลัก:
- `src/`: เก็บ Source Code ไฟล์ TypeScript (`.ts`) แยกตามโจทย์แต่ละข้อ (Test_1 ถึง Test_6)
- `dist/`: เก็บไฟล์ JavaScript (`.js`) ที่ผ่านการ Compile แล้ว พร้อมสำหรับรันทดสอบทันที

## 🚀 วิธีการรันทดสอบ (How to Run)
สามารถทดสอบผลลัพธ์ของโจทย์แต่ละข้อได้โดยใช้ **Node.js** รันไฟล์ในโฟลเดอร์ `dist` ตัวอย่างเช่น:
- `cd dist/Test_1` และรัน `node Test_1.js`

สำหรับข้ออื่นๆ สามารถทำได้ในรูปแบบเดียวกัน
