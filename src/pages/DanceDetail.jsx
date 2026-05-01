import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function DanceDetail() {
  const { danceName } = useParams();
  const navigate = useNavigate();

  const danceDetails = {

    "Bharatanatyam": `
Bharatanatyam is one of the oldest classical dance forms of India, originating from Tamil Nadu. It was traditionally performed in temples as a form of devotional expression. The dance is known for its fixed upper torso, bent legs, and intricate footwork. Facial expressions and hand gestures called mudras play a vital role in storytelling. The performance combines rhythm, expression, and spirituality. It reflects deep connection with Hindu mythology.

Bharatanatyam was revived in the 20th century after facing decline during colonial rule. It was restructured for stage performances while maintaining traditional roots. The dance follows a structured format known as margam. Carnatic music usually accompanies the performance. Dancers undergo rigorous training for years. The art form is admired globally today.

Historically, Bharatanatyam was performed by temple dancers known as Devadasis. It evolved as a sacred art dedicated to deities. The technique requires precision and discipline. Even today, classical themes dominate performances. It continues to inspire young artists. Bharatanatyam symbolizes grace and devotion.
`,

    "Kathak": `
Kathak originated in Uttar Pradesh and is one of the eight classical dance forms of India. The word Kathak comes from “katha,” meaning story. It is known for fast footwork and intricate spins. The dance blends Hindu and Mughal influences. Expressive storytelling is central to the performance. It combines rhythm and grace beautifully.

Kathak flourished in royal courts during the Mughal era. It incorporated Persian costumes and musical elements. The dance form developed different gharanas or schools. Each gharana has unique techniques and styles. Tabla and harmonium accompany performances. Kathak is popular worldwide.

Historically, Kathak evolved from temple storytelling traditions. It adapted to courtly entertainment. The dance emphasizes rhythmic footwork and expressive gestures. It remains a respected classical form. Artists preserve traditional compositions. Kathak represents elegance and storytelling.
`,

    "Kathakali": `
Kathakali is a classical dance-drama from Kerala known for its elaborate costumes and makeup. It narrates stories from epics like Ramayana and Mahabharata. The performers wear colorful face paint and heavy headgear. Facial expressions and eye movements are highly expressive. The dance involves dramatic storytelling. It is visually grand.

Kathakali developed in temples and royal courts of Kerala. The performances usually take place at night. The music includes traditional percussion instruments. Actors undergo intense training for years. The makeup colors symbolize character traits. It is one of the most theatrical dance forms.

Historically, Kathakali evolved from earlier temple arts. It became popular in rural Kerala. The dance emphasizes discipline and stamina. It continues to be performed today. Cultural festivals showcase this art. Kathakali represents Kerala’s artistic richness.
`,

    "Kuchipudi": `
Kuchipudi originated in Andhra Pradesh and combines dance with drama. It was traditionally performed by male Brahmin dancers. The dance includes graceful movements and expressive gestures. It narrates mythological stories. The performance includes dialogue and music. It is vibrant and engaging.

Kuchipudi gained recognition as a classical dance form in modern times. Female dancers later became prominent performers. The dance is accompanied by Carnatic music. Costumes are elegant and colorful. It requires flexibility and expression. The art is performed globally.

Historically, Kuchipudi developed in a village of the same name. It evolved from Yakshagana traditions. The dance maintains classical structure. It continues to thrive today. Cultural academies teach the form. Kuchipudi symbolizes grace and storytelling.
`,

    "Odissi": `
Odissi originated in Odisha and is known for its lyrical grace. It was performed in temples by Maharis. The dance features tribhangi posture and fluid movements. Expressions are soft and devotional. It narrates stories of Lord Krishna. It is spiritually uplifting.

Odissi was revived in the 20th century. Scholars reconstructed its technique from temple sculptures. The dance uses classical music from Odisha. It gained recognition as a classical form. Artists perform it globally. It remains elegant and expressive.

Historically, Odissi flourished in temple rituals. It reflects Odisha’s cultural heritage. The dance demands balance and control. It preserves devotional themes. It continues to evolve artistically. Odissi symbolizes divine love.
`,

    "Manipuri": `
Manipuri dance originated in Manipur and is deeply devotional. It mainly depicts stories of Radha and Krishna. The movements are soft and flowing. Costumes are elaborate and colorful. The dance avoids strong facial expressions. It emphasizes grace and spirituality.

Manipuri gained prominence through temple rituals. The Ras Leela is a famous performance style. Traditional instruments accompany the dance. The art form reflects Vaishnavism. It is gentle and lyrical. It remains culturally significant.

Historically, Manipuri evolved in temple traditions. It preserved devotional themes. The dance continues today. It is admired for elegance. Cultural institutions promote it. Manipuri symbolizes serenity.
`,

    "Mohiniyattam": `
Mohiniyattam is a classical dance from Kerala performed by women. The name means “dance of the enchantress.” It is characterized by gentle movements and graceful expressions. The costume is white and gold. The dance focuses on feminine charm. It is devotional in nature.

Mohiniyattam gained recognition during the 20th century revival. It uses Carnatic music. The performance is slow and expressive. The dance demands control and balance. It is performed at cultural events. It remains refined and elegant.

Historically, Mohiniyattam developed in temple settings. It declined during colonial rule. Revival efforts restored it. The art continues today. It preserves Kerala’s traditions. Mohiniyattam symbolizes grace.
`,

    "Sattriya": `
Sattriya originated in Assam as part of Vaishnavite monasteries. It was introduced by saint Srimanta Sankardev. The dance is devotional and narrative. It depicts mythological stories. Costumes are traditional and colorful. It combines dance and drama.

Sattriya gained classical status in 2000. It was once performed only by monks. Female performers later adopted it. The music is devotional. It remains spiritually significant. It represents Assam’s heritage.

Historically, Sattriya flourished in monasteries. It preserved religious teachings. The dance continues today. It maintains traditional structure. Artists promote it globally. Sattriya symbolizes devotion.
`,

    "Chhau": `
Chhau is a semi-classical dance from Jharkhand. It is known for martial movements and masks. The dance depicts mythological themes. It combines dance and combat techniques. Performers display athletic skills. It is energetic.

Chhau gained popularity during festivals. It is performed in open grounds. The masks are colorful. Traditional instruments accompany performances. It reflects tribal culture. It is powerful.

Historically, Chhau evolved from martial traditions. It became festival entertainment. The art continues today. It preserves regional identity. It remains vibrant. Chhau symbolizes strength.
`,

    "Ghoomar": `
Ghoomar is a traditional folk dance of Rajasthan. It is performed by women during festivals. The dancers twirl gracefully in colorful attire. The movements are circular and rhythmic. The dance celebrates joy. It reflects Rajasthani culture.

Ghoomar gained popularity in royal courts. It is performed at weddings. Traditional songs accompany it. The costumes are vibrant. It remains festive. It is lively.

Historically, Ghoomar evolved in desert communities. It symbolizes womanhood. The dance continues today. It preserves tradition. It attracts tourists. Ghoomar represents celebration.
`,

    "Bhangra": `
Bhangra is a lively folk dance from Punjab. It originated as a harvest celebration. The dance features energetic jumps and movements. The dhol drum accompanies performances. It reflects joy and community spirit. It is vibrant.

Bhangra gained global popularity. It influenced modern dance styles. It is performed at weddings. The music is rhythmic. It remains energetic. It unites communities.

Historically, Bhangra evolved in rural Punjab. It marked successful harvests. It spread worldwide. It continues strongly. It symbolizes pride. Bhangra represents celebration.
`,

    "Lavani": `
Lavani is a folk dance from Maharashtra. It is known for rhythmic movements. It is performed to dholki beats. The dance is expressive. It often highlights social themes. It is dramatic.

Lavani gained fame in Maratha courts. It combines music and dance. It is popular in theatre. Costumes are colorful. It remains lively. It entertains audiences.

Historically, Lavani evolved in rural Maharashtra. It entertained soldiers. It adapted to cinema. It continues today. It preserves culture. Lavani symbolizes vibrancy.
`,

    "Yakshagana": `
Yakshagana is a traditional dance-drama from Karnataka. It combines dance, music, and dialogue. The performances depict mythological stories. Costumes are elaborate. The music is loud and energetic. It is theatrical.

Yakshagana is performed during temple festivals. Artists wear dramatic makeup. The performance lasts hours. It attracts rural audiences. It remains popular. It preserves epics.

Historically, Yakshagana evolved centuries ago. It developed in coastal Karnataka. It blends folk and classical elements. It continues strongly. It reflects cultural heritage. Yakshagana symbolizes storytelling.
`,

    "Garba": `
Garba is a folk dance from Gujarat. It is performed during Navratri festival. Dancers move in circular patterns. The dance celebrates Goddess Durga. It is colorful and energetic. The rhythm is fast.

Garba gained popularity nationwide. It is performed in large groups. Traditional songs accompany it. The dance unites communities. It is joyful. It remains festive.

Historically, Garba evolved in rural Gujarat. It symbolizes devotion. It continues today. It attracts youth. It preserves tradition. Garba represents unity.
`,

    "Cheraw": `
Cheraw is a traditional bamboo dance from Mizoram. It is also known as the bamboo dance. Dancers step between bamboo poles rhythmically. The performance requires coordination. It is graceful and rhythmic. It reflects tribal culture.

Cheraw is performed during festivals. The bamboo poles create rhythmic sounds. It symbolizes harmony. It gained recognition nationally. It remains cultural pride. It is vibrant.

Historically, Cheraw evolved in tribal communities. It was linked to rituals. The dance continues today. It preserves Mizo heritage. It promotes unity. Cheraw represents tradition.
`
  };

  const content = danceDetails[danceName];

  if (!content) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Details Not Available</h2>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#a97954",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ⬅ Back
      </button>

      <h1 style={{ marginBottom: "20px" }}>{danceName}</h1>

      <p style={{ lineHeight: "1.9", whiteSpace: "pre-line", fontSize: "16px" }}>
        {content}
      </p>
    </div>
  );
}

export default DanceDetail;