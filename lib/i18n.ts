export type Language = "en" | "ta";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      patient: "Patient Info",
      reviews: "Reviews",
      contact: "Contact",
      book: "Book Your Appointment Now",
      call: "Call Now",
    },
    hero: {
      badge: "Trusted by 50+ Patients in Chennai",
      title: "Pain-Free Dental Care in Chennai",
      titleHighlight: "You Can Trust",
      subtitle:
        "Providing advanced, affordable, and comfortable dental treatments for families in Chennai. Your smile and comfort are our priority.",
      bookCta: "Book Your Appointment Now",
      callCta: "Call Now",
      stat1: "50+",
      stat1Label: "Happy Patients",
      stat2: "8+",
      stat2Label: "Years Experience",
      stat3: "4.9",
      stat3Label: "Patient Rating",
    },
    services: {
      label: "Our Treatments",
      title: "Everything Your Smile Needs",
      subtitle:
        "Comprehensive dental care backed by the latest technology and a gentle, patient-first approach.",
    },
    doctor: {
      label: "Meet Your Doctor",
      title: "In Trusted Hands",
      subtitle:
        "Board-certified, experienced, and genuinely passionate about your dental health.",
    },
    patient: {
      label: "Patient Information",
      title: "What to Expect",
      subtitle:
        "We believe an informed patient is a confident patient. Here's everything you need to know before, during, and after your visit.",
    },
    testimonials: {
      label: "Patient Stories",
      title: "Real Reviews from Real Patients",
      subtitle:
        "Don't take our word for it — hear from the patients we've had the privilege to treat.",
    },
    appointment: {
      label: "Book Appointment",
      title: "Schedule Your Visit",
      subtitle:
        "Takes less than 2 minutes. We'll confirm your slot within the hour.",
    },
    contact: {
      label: "Find Us",
      title: "Get in Touch",
      subtitle: "We're here for you. Visit us, call us, or send a message.",
    },
    footer: {
      tagline: "Painless & Advanced Dental Care You Can Trust.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      services: "சேவைகள்",
      about: "பற்றி",
      patient: "நோயாளி தகவல்",
      reviews: "மதிப்புரைகள்",
      contact: "தொடர்பு",
      book: "இப்போது இடம் பதிவு செய்",
      call: "இப்போது அழை",
    },
    hero: {
      badge: "சென்னையில் 50+ நோயாளிகளின் நம்பகம்",
      title: "சென்னையில் வலியற்ற பல் சிகிச்சை",
      titleHighlight: "நம்பகமான கவனிப்பு",
      subtitle:
        "சென்னை குடும்பங்களுக்கு மேம்பட்ட, மலிவான மற்றும் வசதியான பல் சிகிச்சை வழங்குகிறோம். உங்கள் புன்னகையும் வசதியும் எங்கள் முன்னுரிமை.",
      bookCta: "இப்போது இடம் பதிவு செய்",
      callCta: "இப்போது அழை",
      stat1: "50+",
      stat1Label: "மகிழ்ச்சியான நோயாளிகள்",
      stat2: "8+",
      stat2Label: "வருட அனுபவம்",
      stat3: "4.9",
      stat3Label: "நோயாளி மதிப்பீடு",
    },
    services: {
      label: "எங்கள் சிகிச்சைகள்",
      title: "உங்கள் புன்னகைக்கு தேவையான அனைத்தும்",
      subtitle:
        "நவீன தொழில்நுட்பம் மற்றும் நோயாளி-முதல் அணுகுமுறையுடன் விரிவான பல் சிகிச்சை.",
    },
    doctor: {
      label: "உங்கள் மருத்துவரை சந்திக்கவும்",
      title: "நம்பகமான கைகளில்",
      subtitle:
        "சான்றிதழ் பெற்ற, அனுபவமிக்க மற்றும் உங்கள் பல் ஆரோக்கியத்தில் அக்கறை கொண்டவர்.",
    },
    patient: {
      label: "நோயாளி தகவல்",
      title: "என்ன எதிர்பார்க்கலாம்",
      subtitle:
        "ஒரு தகவலறிந்த நோயாளி ஒரு நம்பிக்கையான நோயாளி. உங்கள் வருகைக்கு முன், போது மற்றும் பின் தெரிந்துகொள்ள வேண்டியவை.",
    },
    testimonials: {
      label: "நோயாளி கதைகள்",
      title: "உண்மையான நோயாளிகளின் மதிப்புரைகள்",
      subtitle: "நாங்கள் சிகிச்சை அளித்த நோயாளிகளிடமிருந்து கேளுங்கள்.",
    },
    appointment: {
      label: "நேர்காணல் பதிவு",
      title: "உங்கள் வருகையை திட்டமிடுங்கள்",
      subtitle: "2 நிமிடங்களுக்கும் குறைவாகும். ஒரு மணி நேரத்தில் உறுதிப்படுத்துவோம்.",
    },
    contact: {
      label: "எங்களை கண்டுபிடியுங்கள்",
      title: "தொடர்பு கொள்ளுங்கள்",
      subtitle: "நாங்கள் உங்களுக்காக இருக்கிறோம். வாருங்கள், அழையுங்கள், அல்லது செய்தி அனுப்புங்கள்.",
    },
    footer: {
      tagline: "வலியற்ற & மேம்பட்ட பல் சிகிச்சை.",
      quickLinks: "விரைவு இணைப்புகள்",
      services: "சேவைகள்",
      contact: "தொடர்பு",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  },
};

export type TranslationKeys = typeof translations.en;
