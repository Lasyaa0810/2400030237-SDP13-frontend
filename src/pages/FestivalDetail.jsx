import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

import sankranti from "../assets/festivals/sankranti.jpg";
import pongal from "../assets/festivals/pongal.jpg";
import onam from "../assets/festivals/onam.jpg";
import durga from "../assets/festivals/durga.jpg";
import diwali from "../assets/festivals/diwali.jpg";
import bihu from "../assets/festivals/bihu.jpg";
import ganesh from "../assets/festivals/ganesh.jpg";
import navratri from "../assets/festivals/navratri.jpg";
import holi from "../assets/festivals/holi.jpg";
import ugadi from "../assets/festivals/ugadi.jpg";
import lohri from "../assets/festivals/lohri.jpg";

function FestivalDetail() {

const { name } = useParams();

/* 🔥 NEW STATE FOR TOGGLE */
const [activeSection, setActiveSection] = useState(null);

const festivalData = {

Sankranti: {
  image: sankranti,
  history: [
    "Makar Sankranti is one of the oldest Indian festivals and has been celebrated for centuries...",
    "In ancient times, kings and communities celebrated Sankranti...",
    "Different regions in India celebrate Sankranti in unique ways...",
    "The festival also holds spiritual significance...",
    "Over time, Sankranti has evolved but still retains its traditional essence..."
  ],
  why: [
    "Sankranti is celebrated to honor the Sun God...",
    "The festival marks the beginning of the harvest season...",
    "Spiritually, Sankranti is believed to bring positive energy...",
    "The festival also promotes charity and kindness...",
    "Overall, Sankranti celebrates life..."
  ],
  how: [
    "People celebrate Sankranti by flying colorful kites...",
    "Traditional sweets made of sesame and jaggery...",
    "People wear new clothes and visit temples...",
    "In rural areas, cattle are decorated...",
    "Cultural programs are also part..."
  ]
},

Holi: {
  image: holi,
  history: [
    "Holi is one of the most vibrant festivals...",
    "Historically, Holi was celebrated...",
    "Different regions celebrate Holi...",
    "Holi also has agricultural significance...",
    "Over time, Holi has gained popularity..."
  ],
  why: [
    "Holi is celebrated to mark victory...",
    "It also celebrates the arrival of spring...",
    "Holi promotes unity...",
    "The festival encourages forgiveness...",
    "Overall, Holi is a celebration..."
  ],
  how: [
    "People celebrate Holi by playing with colors...",
    "Holi begins with Holika Dahan...",
    "Traditional sweets like gujiya...",
    "Music and dance are part...",
    "People visit friends..."
  ]
},
Onam: {
  image: onam,
  history: [
    "Onam is the most important festival of Kerala and is celebrated with great enthusiasm and joy. It marks the annual homecoming of the legendary King Mahabali, whose reign was considered a golden age of prosperity and equality. The festival has deep roots in mythology and cultural traditions. It reflects Kerala’s rich heritage and values. It is celebrated by people of all religions.",
    "According to legend, King Mahabali was a generous and kind ruler loved by his people. The gods became jealous of his popularity and asked Lord Vishnu for help. Vishnu took the form of Vamana and sent Mahabali to the underworld. However, he was granted permission to visit his people once every year. This visit is celebrated as Onam.",
    "Historically, Onam is also linked to the harvest season in Kerala. It marked agricultural prosperity and abundance. Farmers celebrated their successful harvests with joy. It was a time of happiness and gratitude. Communities gathered together to celebrate.",
    "Ancient traditions and texts highlight the importance of Onam in Kerala’s culture. It was celebrated with rituals, feasts, and cultural programs. It promoted unity and togetherness. It preserved traditions across generations. It reflected cultural pride.",
    "Today, Onam is celebrated globally by Malayali communities. It connects people with their roots and traditions. It promotes unity and happiness. It spreads cultural awareness. It remains a symbol of Kerala’s identity."
  ],
  why: [
    "Onam is celebrated to honor King Mahabali and his rule of equality and justice. People remember his golden period. It promotes values of fairness and kindness. It reflects respect for leadership. It inspires good governance.",
    "The festival also celebrates the harvest season. Crops are harvested during this time. Farmers express gratitude to nature. It is a time of abundance and prosperity. It brings happiness and satisfaction.",
    "Onam promotes unity and togetherness. People from different religions celebrate it together. It breaks social barriers. It strengthens community bonds. It promotes harmony.",
    "Spiritually, Onam represents humility and devotion. The story of Mahabali teaches moral values. It encourages generosity and kindness. It inspires people to help others. It builds character.",
    "Overall, Onam symbolizes prosperity, unity, and happiness. It reflects cultural richness. It connects people with traditions. It spreads positivity. It celebrates life."
  ],
  how: [
    "People create Pookalam, which are beautiful floral rangoli designs made at the entrance of homes. Flowers are arranged in colorful patterns. It decorates the house beautifully. It welcomes guests and prosperity. It is a major highlight of the festival.",
    "Onam Sadya, a grand traditional feast, is prepared during the festival. It includes multiple vegetarian dishes served on banana leaves. Families sit together and eat. It strengthens bonding. It is an important tradition.",
    "Snake boat races are organized in Kerala during Onam. These are thrilling competitions. Teams row long decorated boats. It attracts huge crowds. It creates excitement and energy.",
    "Traditional dance forms like Kathakali and Thiruvathira are performed. Cultural programs are organized everywhere. Music and art are showcased. It promotes heritage. It entertains people.",
    "People wear traditional clothes and visit relatives and friends. They exchange greetings and gifts. It strengthens relationships. It spreads happiness. It creates lasting memories."
  ]
},

Diwali: {
  image: diwali,
  history: [
    "Diwali, also known as the Festival of Lights, is one of the most important festivals in India. It commemorates the return of Lord Rama to Ayodhya after defeating Ravana. The people welcomed him by lighting lamps. This marked the victory of good over evil. It holds deep mythological significance.",
    "The festival is also associated with Goddess Lakshmi, the goddess of wealth and prosperity. People worship her during Diwali. It is believed she visits clean and decorated homes. It brings blessings and fortune. It is an important spiritual practice.",
    "Historically, Diwali has been celebrated for centuries across different regions. Kings and communities organized grand celebrations. Markets were decorated with lights. People gathered to celebrate together. It strengthened unity and happiness.",
    "Different regions of India celebrate Diwali in unique ways. In North India, it marks Rama’s return. In South India, it is linked to the defeat of Narakasura. In West India, it marks the New Year. It reflects India’s diversity.",
    "Today, Diwali is celebrated worldwide. It has become a global festival. It spreads light, joy, and positivity. It represents Indian culture. It unites people across countries."
  ],
  why: [
    "Diwali is celebrated to mark the victory of light over darkness and good over evil. It symbolizes hope and positivity. It teaches moral values. It inspires people to follow the right path. It spreads awareness.",
    "The festival is also celebrated to worship Goddess Lakshmi. People seek blessings for wealth and prosperity. It promotes devotion. It encourages hard work and success. It builds faith.",
    "Diwali promotes family bonding and togetherness. Families come together to celebrate. They share meals and happiness. It strengthens relationships. It creates joy.",
    "The festival encourages cleanliness and renewal. Homes are cleaned and decorated. It symbolizes new beginnings. It brings freshness and positivity. It removes negativity.",
    "Overall, Diwali represents happiness, prosperity, and unity. It spreads joy and love. It connects people. It reflects cultural richness. It is widely celebrated."
  ],
  how: [
    "People light diyas and candles around their homes. Houses are decorated with lights and rangoli. It creates a beautiful atmosphere. It symbolizes removing darkness. It spreads positivity.",
    "Lakshmi Puja is performed during Diwali. People pray for wealth and success. Rituals are performed with devotion. It is an important tradition. It brings blessings.",
    "Fireworks are burst during the festival. It adds excitement and energy. It creates a festive mood. It is enjoyed by many people. It brings joy.",
    "Sweets and gifts are exchanged among family and friends. People share happiness. It strengthens relationships. It promotes love and bonding. It spreads joy.",
    "People wear new clothes and visit relatives. Celebrations continue for several days. Cultural programs are organized. It creates happiness. It builds memories."
  ]
},
"Durga Puja": {
  image: durga,
  history: [
    "Durga Puja is one of the most grand and significant festivals celebrated in India, especially in West Bengal. It marks the victory of Goddess Durga over the demon Mahishasura, symbolizing the triumph of good over evil. The festival has deep roots in Hindu mythology and has been celebrated for centuries. It represents power, devotion, and righteousness. It reflects India's rich spiritual heritage.",
    "Historically, Durga Puja began as a private celebration among wealthy families. Over time, it evolved into a large community festival. Public celebrations became popular during the British period. It brought people together socially and culturally. It strengthened unity among communities.",
    "The festival is described in ancient scriptures and religious texts. It highlights the importance of divine feminine energy. Goddess Durga is worshipped as a symbol of strength and protection. It promotes respect for women. It inspires courage.",
    "Durga Puja is also a cultural festival. Art, music, dance, and creativity are showcased. Beautiful pandals are created with unique themes. It becomes a center of attraction. It reflects artistic excellence.",
    "Today, Durga Puja is celebrated worldwide. It connects people with their culture and traditions. It promotes unity and happiness. It spreads joy and devotion. It remains a major cultural event."
  ],
  why: [
    "Durga Puja is celebrated to honor Goddess Durga and her victory over evil. It teaches the importance of truth and righteousness. It inspires people to stand against injustice. It promotes moral values. It strengthens faith.",
    "The festival symbolizes the power of good over evil. It reminds people that positivity always wins. It encourages courage and determination. It builds confidence. It spreads hope.",
    "It also promotes unity and togetherness. People from different communities participate. It breaks social barriers. It strengthens relationships. It creates harmony.",
    "Spiritually, it is a time for devotion and prayer. People seek blessings for protection and prosperity. It connects them with divine energy. It brings peace. It enhances belief.",
    "Overall, Durga Puja represents strength, devotion, and unity. It reflects cultural richness. It spreads happiness. It connects people. It inspires positivity."
  ],
  how: [
    "People build large decorative pandals that resemble temples. Idols of Goddess Durga are installed. These pandals attract huge crowds. It creates a festive atmosphere. It showcases creativity.",
    "Devotees perform rituals and prayers daily. Offerings like flowers and sweets are made. It shows devotion and faith. It connects spiritually. It brings peace.",
    "Cultural events like dance, music, and drama are organized. People participate actively. It promotes art and culture. It entertains people. It spreads joy.",
    "Food plays a major role during the festival. Traditional dishes are prepared and shared. It strengthens bonding. It creates happiness. It enhances celebration.",
    "The festival ends with immersion of idols in water. This is called Visarjan. It symbolizes farewell to the goddess. It is emotional. It marks completion."
  ]
},

Bihu: {
  image: bihu,
  history: [
    "Bihu is the most important festival of Assam and is closely linked to agriculture. It celebrates different phases of farming throughout the year. There are three main Bihu festivals: Rongali, Bhogali, and Kongali. Each represents a different agricultural stage. It reflects Assamese culture.",
    "Historically, Bihu has been celebrated for centuries. It is rooted in farming traditions. It marks seasonal changes. It connects people with nature. It preserves cultural heritage.",
    "Rongali Bihu marks the Assamese New Year. It is the most popular Bihu festival. It celebrates new beginnings. It brings joy and happiness. It unites people.",
    "The festival includes traditional music and dance. Bihu dance is famous for its energy. It represents youth and vibrancy. It showcases culture. It is widely loved.",
    "Today, Bihu is celebrated globally by Assamese communities. It connects generations. It spreads cultural awareness. It promotes unity. It brings happiness."
  ],
  why: [
    "Bihu is celebrated to mark the agricultural cycle. It reflects the importance of farming. Farmers celebrate their hard work. It brings satisfaction. It shows gratitude.",
    "It also marks the Assamese New Year. It symbolizes new beginnings. It brings hope and positivity. It encourages growth. It inspires people.",
    "The festival promotes unity and togetherness. People celebrate as a community. It strengthens relationships. It builds harmony. It creates joy.",
    "Spiritually, it connects people with nature. It encourages respect for the environment. It promotes sustainability. It builds awareness. It supports traditions.",
    "Overall, Bihu celebrates life, nature, and culture. It spreads happiness. It connects people. It reflects tradition. It promotes unity."
  ],
  how: [
    "People perform Bihu dance in groups. It is energetic and lively. It attracts large crowds. It creates excitement. It spreads joy.",
    "Traditional music is played using instruments like dhol and pepa. Songs are sung. It enhances celebration. It promotes culture. It entertains.",
    "People wear traditional Assamese clothes. It reflects identity and culture. It adds beauty. It creates pride. It enhances celebration.",
    "Special foods like pitha and laru are prepared. Families share meals. It promotes bonding. It creates happiness. It strengthens relationships.",
    "Community gatherings are organized. People celebrate together. It builds unity. It creates memories. It spreads joy."
  ]
},

Navratri: {
  image: navratri,
  history: [
    "Navratri is a nine-night festival dedicated to Goddess Durga and her various forms. It has deep roots in Hindu mythology. It celebrates her victory over evil forces. It represents divine feminine power. It is widely celebrated across India.",
    "Historically, Navratri has been observed for centuries. Kings and communities celebrated it with devotion. It involved rituals and prayers. It strengthened faith. It promoted traditions.",
    "Each day of Navratri is dedicated to a different form of the goddess. Devotees worship different aspects. It reflects spiritual diversity. It enhances devotion. It builds belief.",
    "Different regions celebrate Navratri differently. In Gujarat, Garba and Dandiya are popular. In Bengal, it is celebrated as Durga Puja. It reflects diversity. It unites people.",
    "Today, Navratri is celebrated globally. It promotes cultural identity. It connects generations. It spreads joy. It preserves traditions."
  ],
  why: [
    "Navratri is celebrated to honor Goddess Durga. She represents power and protection. It promotes strength. It inspires devotion. It builds faith.",
    "It symbolizes the victory of good over evil. It teaches moral values. It encourages righteousness. It spreads positivity. It inspires people.",
    "The festival promotes spiritual growth. People fast and pray. It connects them with divinity. It builds discipline. It enhances belief.",
    "It also strengthens social bonds. People celebrate together. It promotes unity. It reduces differences. It builds harmony.",
    "Overall, Navratri celebrates devotion and strength. It reflects culture. It spreads joy. It connects people. It inspires positivity."
  ],
  how: [
    "People perform Garba and Dandiya dances. These are traditional and energetic. It creates excitement. It attracts crowds. It spreads joy.",
    "Fasting is observed by many devotees. It is part of spiritual practice. It shows discipline. It enhances devotion. It connects spiritually.",
    "Homes and temples are decorated. Idols are worshipped. Rituals are performed. It creates a sacred atmosphere. It spreads positivity.",
    "People wear traditional clothes. It reflects culture. It adds beauty. It enhances celebration. It shows identity.",
    "Community events are organized. People gather and celebrate. It promotes unity. It creates happiness. It builds memories."
  ]
},

"Ganesh Chaturthi": {
  image: ganesh,
  history: [
    "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the god of wisdom and prosperity. The festival has ancient origins and is mentioned in religious texts. It has been celebrated for centuries. It holds deep spiritual significance. It is widely observed across India.",
    "Historically, the festival was celebrated privately at homes. Later, it became a public event. Lokmanya Tilak popularized it during British rule. It united people. It promoted nationalism.",
    "Lord Ganesha is considered the remover of obstacles. He is worshipped before any new beginning. It symbolizes success and prosperity. It builds confidence. It inspires faith.",
    "The festival reflects devotion and cultural traditions. It connects people spiritually. It promotes unity. It strengthens beliefs. It preserves heritage.",
    "Today, Ganesh Chaturthi is celebrated worldwide. It spreads joy and happiness. It reflects Indian culture. It connects communities. It promotes unity."
  ],
  why: [
    "The festival is celebrated to honor Lord Ganesha. He brings wisdom and success. People seek blessings. It promotes positivity. It builds faith.",
    "It symbolizes new beginnings. People start new ventures. It inspires confidence. It promotes growth. It encourages success.",
    "The festival promotes unity and togetherness. People celebrate as a community. It builds relationships. It creates harmony. It spreads joy.",
    "It also promotes devotion. Rituals and prayers are performed. It connects people spiritually. It builds belief. It enhances peace.",
    "Overall, Ganesh Chaturthi celebrates success and prosperity. It reflects culture. It spreads happiness. It connects people. It inspires positivity."
  ],
  how: [
    "People install Ganesha idols in homes and public places. These idols are beautifully decorated. It creates a festive atmosphere. It attracts crowds. It spreads joy.",
    "Daily prayers and rituals are performed. Devotees offer sweets like modak. It shows devotion. It builds faith. It connects spiritually.",
    "Cultural programs and events are organized. Music and dance are common. It entertains people. It promotes art. It builds community spirit.",
    "People visit pandals and participate in celebrations. It promotes unity. It builds relationships. It creates happiness. It spreads joy.",
    "The festival ends with immersion of idols in water. It symbolizes farewell. It is emotional. It marks completion. It strengthens faith."
  ]
},
Pongal: {
  image: pongal,
  history: [
    "Pongal is one of the most important harvest festivals celebrated in Tamil Nadu and is deeply rooted in agricultural traditions. It has been celebrated for centuries as a way to thank nature and the Sun God for a successful harvest. The festival marks the beginning of the Tamil month Thai, which is considered highly auspicious. It reflects the rich cultural heritage of South India. It is celebrated with great enthusiasm and devotion.",
    "Historically, Pongal was celebrated by farmers after harvesting crops like rice and sugarcane. It was a time of joy and gratitude for agricultural success. Ancient Tamil literature contains references to Pongal celebrations. It was considered an important social and cultural event. It strengthened the connection between people and nature.",
    "The festival is traditionally celebrated over four days, each with its own significance. Bhogi marks the discarding of old items and welcoming new beginnings. Thai Pongal is dedicated to the Sun God. Mattu Pongal honors cattle. Kaanum Pongal is celebrated for family bonding.",
    "Pongal also highlights the importance of livestock in agriculture. Farmers worship cows and bulls for their contribution to farming activities. This reflects respect for animals and sustainable living. It shows the interdependence between humans and nature. It promotes environmental awareness.",
    "Today, Pongal is celebrated not only in India but also by Tamil communities worldwide. It preserves traditions and cultural values. It connects younger generations with their roots. It promotes unity and happiness. It continues to be a significant cultural festival."
  ],
  why: [
    "Pongal is celebrated to thank the Sun God for providing energy necessary for crop growth. The Sun plays a vital role in agriculture. Farmers depend on sunlight for their livelihood. The festival expresses gratitude to nature. It acknowledges its importance.",
    "It also marks the successful harvest of crops. Farmers celebrate their hard work and efforts. It brings happiness and satisfaction. It symbolizes prosperity and abundance. It reflects agricultural success.",
    "The festival honors cattle, which play an important role in farming. Bulls and cows help in plowing fields and transportation. Respecting them is essential. It shows gratitude towards animals. It strengthens human-animal relationships.",
    "Pongal promotes family bonding and togetherness. Families gather to celebrate the festival. They share meals and rituals. It strengthens relationships. It builds emotional connections.",
    "Overall, Pongal celebrates nature, prosperity, and unity. It reflects cultural traditions and values. It promotes gratitude and harmony. It connects people with agriculture. It spreads joy and positivity."
  ],
  how: [
    "The main ritual of Pongal is cooking the traditional Pongal dish made of rice and milk. It is prepared in a decorated clay pot. When the dish overflows, it symbolizes abundance and prosperity. It is offered to the Sun God. It is the highlight of the festival.",
    "Homes are decorated with beautiful kolam designs made using rice flour. These patterns symbolize prosperity and positivity. Women create colorful designs at the entrance. It enhances the festive atmosphere. It welcomes guests and good fortune.",
    "Cattle are decorated and worshipped during Mattu Pongal. They are adorned with flowers, bells, and colors. This shows respect and gratitude. It reflects agricultural traditions. It is a unique cultural practice.",
    "People wear traditional clothes and visit temples. Special prayers are offered to the Sun God. Rituals are performed with devotion. It strengthens spiritual connection. It brings peace and blessings.",
    "Communities organize cultural events, music, and dance programs. People gather and celebrate together. It promotes unity and happiness. It creates joyful memories. It strengthens community spirit."
  ]
},
Ugadi: {
  image: ugadi,
  history: [
    "Ugadi is the New Year festival celebrated in Andhra Pradesh, Telangana, and Karnataka. It marks the beginning of the Hindu lunar calendar. The name Ugadi comes from Sanskrit words Yuga (age) and Adi (beginning), meaning the start of a new era. It is believed that Lord Brahma created the universe on this day. The festival reflects rich cultural traditions and spiritual beliefs.",
    "Historically, Ugadi has been celebrated for centuries as a symbol of new beginnings. People considered it an auspicious day to start new ventures. Ancient texts mention its importance in marking time and seasons. It was a day of joy and renewal. It strengthened cultural and religious values.",
    "Ugadi represents the arrival of spring and the start of a new agricultural cycle. Farmers prepare for new crops and activities. It signifies hope and prosperity. It reflects harmony between nature and human life. It is deeply connected to seasonal changes.",
    "The festival also emphasizes acceptance of all aspects of life. The preparation of Ugadi Pachadi represents different emotions like happiness, sadness, anger, and surprise. It teaches people to face life with balance. It promotes emotional understanding. It highlights life’s realities.",
    "Today, Ugadi is celebrated by Telugu and Kannada communities worldwide. It preserves traditions and cultural identity. It connects younger generations with their roots. It spreads positivity and hope. It remains an important cultural festival."
  ],
  why: [
    "Ugadi is celebrated as the beginning of a new year according to the Hindu calendar. It marks a fresh start in life. People welcome new opportunities and experiences. It symbolizes hope and positivity. It reflects new beginnings.",
    "The festival is celebrated to seek blessings for prosperity and success. People pray for good health and happiness. It brings a sense of renewal. It motivates people to set new goals. It encourages positive thinking.",
    "Ugadi also celebrates nature and seasonal change. It marks the arrival of spring. It shows the importance of time and cycles in life. It connects people with nature. It reflects agricultural significance.",
    "The preparation of Ugadi Pachadi symbolizes different emotions of life. It teaches acceptance of all feelings. It helps people understand life’s ups and downs. It promotes emotional balance. It gives a meaningful message.",
    "Overall, Ugadi represents new beginnings, positivity, and cultural values. It promotes unity and happiness. It connects people spiritually. It spreads joy and hope. It strengthens traditions."
  ],
  how: [
    "People clean and decorate their homes to welcome the new year. Mango leaf torans are placed at the entrance. This symbolizes prosperity and positivity. It creates a festive atmosphere. It invites good fortune.",
    "The special dish Ugadi Pachadi is prepared using ingredients like neem, jaggery, tamarind, and mango. Each ingredient represents a different taste of life. It is the main highlight of the festival. It carries symbolic meaning. It reflects life’s experiences.",
    "Beautiful rangoli or kolam designs are drawn at the entrance of homes. These designs bring positivity and beauty. Women create colorful patterns. It enhances the festive spirit. It welcomes guests.",
    "People wear traditional clothes and visit temples. Special prayers are offered. Panchanga Shravanam (listening to the yearly horoscope) is performed. It provides guidance for the year ahead. It strengthens spiritual connection.",
    "Families gather and celebrate together. They share meals and happiness. Cultural programs and rituals are performed. It promotes unity and bonding. It creates joyful memories."
  ]
},
Lohri: {
  image: lohri,
  history: [
    "Lohri is a popular harvest festival celebrated mainly in Punjab. It marks the end of winter and the beginning of longer days. The festival is associated with the harvest of rabi crops, especially sugarcane. It reflects the vibrant culture and traditions of Punjab. It is celebrated with great enthusiasm.",
    "Historically, Lohri was celebrated by farmers after harvesting crops. It was a time of joy and gratitude for agricultural success. The festival is also linked to the legend of Dulla Bhatti, a Punjabi folk hero. He was known for helping the poor. His story is remembered during Lohri celebrations.",
    "The festival signifies seasonal change and the transition from winter to spring. It represents warmth and energy. People gather around fire to celebrate. It strengthens community bonds. It reflects cultural unity.",
    "Lohri also highlights the importance of agriculture in Punjab. Farmers celebrate their hard work and success. It shows respect for nature. It reflects dependence on natural resources. It promotes gratitude.",
    "Today, Lohri is celebrated across India and by Punjabi communities worldwide. It preserves cultural traditions. It connects people with their roots. It spreads joy and togetherness. It remains an important festival."
  ],
  why: [
    "Lohri is celebrated to mark the harvest of crops and thank nature. Farmers celebrate their success and hard work. It symbolizes prosperity and abundance. It reflects agricultural importance. It expresses gratitude.",
    "The festival marks the end of winter and the arrival of longer days. It brings warmth and positivity. People welcome seasonal change. It signifies new energy. It reflects natural cycles.",
    "Lohri is also celebrated for community bonding. Families and friends gather together. They share happiness and food. It strengthens relationships. It promotes unity.",
    "The festival holds special importance for newly married couples and newborns. It is celebrated with extra joy. It brings blessings and happiness. It marks new beginnings. It strengthens family ties.",
    "Overall, Lohri represents warmth, prosperity, and togetherness. It promotes cultural values. It spreads happiness and positivity. It connects people with traditions. It creates joyful memories."
  ],
  how: [
    "The main ritual of Lohri is lighting a bonfire in the evening. People gather around the fire. It symbolizes warmth and positivity. Offerings are made to the fire. It is the highlight of the festival.",
    "People throw sesame seeds, jaggery, peanuts, and popcorn into the fire. This is a way of offering thanks to nature. It reflects gratitude. It is a traditional practice. It adds to the celebration.",
    "Traditional songs and dances like bhangra and gidda are performed. People celebrate with music and energy. It reflects Punjabi culture. It creates a lively atmosphere. It brings joy.",
    "Families and friends come together to celebrate. They share sweets and meals. People wear traditional Punjabi attire. It enhances the festive spirit. It promotes bonding.",
    "Communities organize gatherings and celebrations. People enjoy together. It strengthens social connections. It spreads happiness. It keeps traditions alive."
  ]
}



};

const fest = festivalData[name];

if (!fest) {
  return <h1 style={{ padding: "20px" }}>Festival not found</h1>;
}

return (
  <div className="page-container">

    <button
      onClick={() => window.history.back()}
      style={{
        marginBottom: "20px",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        background: "#a97954",
        color: "white",
        cursor: "pointer"
      }}
    >
      ← Back
    </button>

    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
      {name}
    </h1>

    <div className="card">
     <img
  src={fest.image}
  alt={name}
  loading="lazy"
  style={{
    width: "100%",
    height: "auto",              // 🔥 FIX: no stretching
    maxHeight: "500px",          // control size
    objectFit: "contain",        // 🔥 keeps original clarity
    borderRadius: "15px",
    imageRendering: "auto",      // improves rendering
    filter: "contrast(1.05) saturate(1.1)", // slight enhancement
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  }}
/>
    </div>

    {/* 🔥 CLICKABLE SECTIONS */}

    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => setActiveSection(activeSection === "history" ? null : "history")}
    >
      <h2>📜 History</h2>
      {activeSection === "history" &&
        fest.history.map((p, i) => <p key={i}>{p}</p>)}
    </div>

    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => setActiveSection(activeSection === "why" ? null : "why")}
    >
      <h2>🎯 Why it is Celebrated</h2>
      {activeSection === "why" &&
        fest.why.map((p, i) => <p key={i}>{p}</p>)}
    </div>

    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => setActiveSection(activeSection === "how" ? null : "how")}
    >
      <h2>🎉 How it is Celebrated</h2>
      {activeSection === "how" &&
        fest.how.map((p, i) => <p key={i}>{p}</p>)}
    </div>

  </div>
);
}

export default FestivalDetail;