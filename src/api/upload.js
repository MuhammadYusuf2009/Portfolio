// api/upload.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { imageData, location } = req.body;
  
        // Rasmni va joylashuvni qabul qilish
        // Mana bu yerda biz rasmni saqlash yoki boshqa server tomonida ishlov berishimiz mumkin
  
        // Misol uchun, rasmni saqlash yoki yuborish
        console.log('Rasm:', imageData);
        console.log('Joylashuv:', location);
  
        // Rasmni saqlash kodini yozishingiz mumkin, masalan Google Cloud Storage, AWS S3, yoki boshqa xotira xizmatiga
        // Bu yerda faqat joylashuv va tasvirni qaytarish (admin panelga yuborish uchun)
        return res.status(200).json({ message: 'Rasm va joylashuv muvaffaqiyatli yuborildi' });
      } catch (error) {
        console.error('Xatolik:', error);
        return res.status(500).json({ error: 'Xatolik yuz berdi' });
      }
    } else {
      return res.status(405).json({ error: 'Noto‘g‘ri metod' });
    }
  }
  