// Dinamik ravishda <base> tegini yaratish
const createOrUpdateBaseTag = (newHref) => {
    let baseElement = document.querySelector('base');
  
    if (!baseElement) {
      // Agar <base> elementi mavjud bo'lmasa, yangi <base> elementi yaratamiz
      baseElement = document.createElement('base');
      document.head.appendChild(baseElement);
    }
  
    // Yangi href qiymatini o'rnatamiz
    baseElement.href = newHref;
  };
  
  // Misol uchun, <base> tegini yangilash
  createOrUpdateBaseTag('http://127.0.0.1:5500/index.html');
  // https://alphabet-uz.netlify.app/
  // http://127.0.0.1:5500/index.html