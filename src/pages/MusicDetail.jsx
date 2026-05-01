import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MusicDetail() {
  const { musicName } = useParams();
  const navigate = useNavigate();

  const musicDetails = {

    "Carnatic Music": `
Carnatic music is the classical music tradition of South India and is deeply rooted in devotional expression. It emphasizes intricate ragas, structured compositions, and complex rhythmic cycles known as talas. The compositions are primarily written in Sanskrit, Telugu, Tamil, and Kannada languages. Performances usually include varnams, kritis, and elaborate improvisational sections. The music demands years of disciplined training under a guru. It reflects both technical mastery and spiritual depth.

Carnatic music flourished during the 17th and 18th centuries through the works of saint-composers. The Trinity of Carnatic music—Tyagaraja, Muthuswami Dikshitar, and Syama Sastri—shaped its structure and repertoire. Instruments such as violin, mridangam, veena, and flute accompany vocal performances. The raga system defines melodic identity while tala governs rhythm. Concerts follow a traditional structure that audiences recognize. Today, Carnatic music is performed in prestigious festivals worldwide.

Historically, Carnatic music evolved in temples and royal courts of South India. It was considered a sacred offering to deities. Many compositions contain philosophical and devotional messages. The guru-shishya tradition preserved its authenticity over centuries. Even in modern times, its classical structure remains intact. Carnatic music represents South India's rich cultural heritage.
`,

    "Hindustani Classical": `
Hindustani classical music is the North Indian classical tradition known for its improvisational depth. It revolves around ragas for melody and talas for rhythm. Vocal forms include khayal, dhrupad, and thumri. Instruments such as sitar, tabla, sarod, and bansuri are widely used. Performances begin with a slow alap to introduce the raga gradually. The music expresses emotion through melodic exploration.

Hindustani music evolved under Mughal influence, blending Persian and Indian elements. Legendary musicians like Tansen played a major role in shaping its growth. Different gharanas emerged as stylistic schools preserving unique traditions. Each gharana maintains distinct approaches to ragas and techniques. The art requires intense dedication and practice. It gained global recognition through maestros like Ravi Shankar.

Historically, Hindustani music flourished in royal courts of North India. The tradition was passed down orally from teacher to disciple. Themes of devotion, romance, and philosophy dominate compositions. It reflects both spirituality and artistic freedom. The classical system remains highly respected today. Hindustani classical music symbolizes India's musical sophistication.
`,

    "Bhangra Music": `
Bhangra music originated in Punjab as part of harvest celebrations. It is energetic, rhythmic, and full of lively beats. The dhol drum forms the backbone of its musical structure. It is especially performed during Vaisakhi festival. The music celebrates joy, prosperity, and community spirit. Its vibrant rhythm makes it highly engaging.

Bhangra gained international popularity through Punjabi diaspora communities. It influenced modern pop and fusion genres. Artists blend traditional Punjabi beats with electronic sounds. The music is widely played at weddings and celebrations worldwide. It reflects Punjabi pride and enthusiasm. Its infectious energy appeals to global audiences.

Historically, Bhangra was performed in rural farming communities. It marked successful harvest seasons and festive occasions. Over time, it moved from village fields to international stages. The traditional spirit of celebration remains strong. Modern Bhangra continues evolving creatively. It symbolizes cultural pride and joy.
`,

    "Lavani Music": `
Lavani music is a traditional Maharashtrian musical form known for strong rhythm and expressive performance. It is usually accompanied by energetic dance movements. The dholki drum provides the primary beat in performances. Lyrics often address romantic, social, or political themes. Lavani performances are dramatic and captivating. The music quickly grabs audience attention.

Lavani gained prominence during the Maratha period. It was performed in royal courts and public gatherings. The blend of poetry, rhythm, and expressive gestures makes it unique. Lavani often highlights social issues creatively. It remains popular in Maharashtra’s cultural programs. The music preserves regional identity.

Historically, Lavani evolved in rural Maharashtra. It entertained soldiers and villagers alike. The form later adapted to theatre and cinema. Traditional rhythm patterns remain intact. It continues to be celebrated today. Lavani music represents regional artistic vibrancy.
`,

    "Baul Songs": `
Baul songs are part of a mystical folk tradition from West Bengal. They are performed by wandering minstrels known as Bauls. The music focuses on spiritual exploration and devotion. Instruments like the ektara accompany performances. The lyrics emphasize inner truth and universal love. The music has a soulful and reflective tone.

Baul music gained recognition for its philosophical depth. It blends Hindu and Sufi spiritual influences harmoniously. Performers often live simple lives detached from materialism. The art form is transmitted orally across generations. Cultural festivals helped popularize it internationally. It symbolizes spiritual unity.

Historically, the Baul tradition dates back several centuries. It emerged in rural Bengal as a devotional movement. The songs challenge rigid social norms. Even today, Baul singers preserve ancient compositions. The tradition remains alive and respected. Baul songs reflect mystical devotion.
`,

    "Ghazal": `
Ghazal is a poetic form of music known for its romantic and philosophical themes. It originated from Persian poetry and developed in India. The lyrics focus on love, separation, and longing. The music is soft, expressive, and emotional. Harmonium and tabla often accompany performances. Ghazal creates an intimate atmosphere.

Ghazal gained popularity during the Mughal era. Poets like Mirza Ghalib shaped its literary foundation. Renowned singers such as Jagjit Singh brought it to modern audiences. The genre blends poetry and melody beautifully. It remains popular in concerts and recordings. Ghazal music appeals to refined listeners.

Historically, Ghazal flourished in royal courts. It evolved as both literary and musical art. The tradition spread across North India. It continues to inspire modern artists. The genre remains culturally significant. Ghazal symbolizes poetic elegance.
`,

    "Qawwali": `
Qawwali is a Sufi devotional music form performed in groups. It features powerful vocals and rhythmic clapping. Harmonium and tabla accompany the singers. The lyrics are deeply spiritual and poetic. Performances gradually build emotional intensity. The music creates a deeply moving atmosphere.

Qawwali gained fame through Sufi shrines across India. It was used to spread spiritual teachings. Legendary performers popularized it globally. Audience participation enhances the experience. The genre influenced film music. It remains widely appreciated today.

Historically, Qawwali developed in medieval India. It blended Persian and Indian musical traditions. The art was preserved through generations. It continues thriving in modern times. The music promotes unity and devotion. Qawwali symbolizes passionate spirituality.
`,

    "Yakshagana Music": `
Yakshagana music is part of a traditional theatre form from Karnataka. It combines music, dance, and drama. The performances narrate mythological stories. Percussion instruments like chande are central. The music is loud and energetic. It supports dramatic storytelling.

Yakshagana gained popularity in coastal Karnataka. It is performed during temple festivals. The singers narrate epics like Ramayana and Mahabharata. The art form is highly theatrical. It attracts large rural audiences. It preserves mythological heritage.

Historically, Yakshagana dates back several centuries. It evolved as temple entertainment. The music style remains distinct. Traditional costumes enhance performances. The art continues today. Yakshagana music represents Karnataka’s folk theatre culture.
`,

    "Sufi Music": `
Sufi music is devotional music inspired by Islamic mysticism. It aims to create spiritual connection with the divine. The lyrics express love, surrender, and unity. Harmonium and tabla are common instruments. Performances often create a trance-like effect. The music emphasizes emotional intensity.

Sufi music became prominent in medieval India. It was associated with Sufi saints and shrines. The poetry is deeply philosophical. It influenced modern devotional music. Many Sufi artists gained international fame. The genre continues to inspire listeners.

Historically, Sufi music spread through spiritual movements. It promoted unity across communities. The art bridged religious differences. Traditional performers preserved its authenticity. It remains vibrant today. Sufi music symbolizes divine love.
`,

    "Rajasthani Folk": `
Rajasthani folk music reflects the vibrant culture of Rajasthan. It includes ballads, devotional songs, and festival music. Instruments like sarangi and dholak are widely used. The music often narrates heroic tales. It reflects desert life and traditions. Performances are colorful and expressive.

Rajasthani folk gained recognition through cultural festivals. Manganiyar and Langas are famous traditional musicians. The songs celebrate bravery and romance. It attracts tourists globally. The music preserves regional stories. It remains lively and rhythmic.

Historically, Rajasthani folk evolved in royal courts and villages. It was passed through generations. The art form continues strongly. It reflects resilience of desert communities. Modern adaptations exist. It symbolizes Rajasthan’s heritage.
`,

    "Bihu Music": `
Bihu music originates from Assam and is associated with harvest festivals. It is lively and energetic. Traditional instruments like dhol and pepa are used. The songs celebrate youth and prosperity. Bihu performances include dance. The rhythm is fast-paced.

Bihu gained popularity across Northeast India. It is performed during Rongali Bihu festival. The music reflects agricultural life. It unites communities. The art is joyful and vibrant. It remains culturally significant.

Historically, Bihu dates back centuries. It evolved alongside farming traditions. The songs celebrate seasonal cycles. It continues today. The music preserves Assamese identity. Bihu symbolizes celebration.
`,

    "Chakri Music": `
Chakri music is a traditional folk form from Jammu and Kashmir. It is performed during social gatherings. The music uses instruments like rabab and harmonium. The songs focus on love and folklore. It has a melodious tone. It reflects regional traditions.

Chakri gained popularity in rural Kashmir. It is often performed at weddings. The lyrics are poetic and emotional. It preserves Kashmiri language. The music is soothing and expressive. It remains part of cultural celebrations.

Historically, Chakri developed in village communities. It was transmitted orally. The form continues today. It reflects cultural identity. Modern artists adapt it. Chakri music symbolizes Kashmiri heritage.
`,

    "Thumri": `
Thumri is a semi-classical vocal form from Uttar Pradesh. It focuses on romantic and devotional themes. The style allows expressive improvisation. Tabla and harmonium accompany performances. The music emphasizes emotional expression. It is soft and melodious.

Thumri gained popularity in Lucknow and Banaras courts. It is closely linked to dance traditions. The lyrics often describe Radha-Krishna love stories. The genre influenced Bollywood music. It remains respected in classical circles. It bridges classical and light music.

Historically, Thumri evolved in royal courts. It developed as expressive alternative to khayal. The tradition continues today. Artists preserve its grace. It symbolizes romantic expression. Thumri remains culturally valuable.
`,

    "Nadaswaram": `
Nadaswaram is a traditional wind instrument from Tamil Nadu. It is commonly played in temples and weddings. The instrument produces a powerful and auspicious sound. It is accompanied by the thavil drum. The music is devotional in nature. It creates festive atmosphere.

Nadaswaram gained importance in South Indian temple rituals. It is considered sacred and auspicious. Skilled musicians perform complex ragas. The instrument requires strong breath control. It remains integral to ceremonies. It is respected widely.

Historically, Nadaswaram dates back centuries. It evolved in temple traditions. The music accompanies religious processions. It continues in cultural events. The tradition remains strong. Nadaswaram symbolizes spiritual celebration.
`
  };

  const content = musicDetails[musicName];

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

      <h1 style={{ marginBottom: "20px" }}>{musicName}</h1>

      <p style={{ lineHeight: "1.9", whiteSpace: "pre-line", fontSize: "16px" }}>
        {content}
      </p>
    </div>
  );
}

export default MusicDetail;