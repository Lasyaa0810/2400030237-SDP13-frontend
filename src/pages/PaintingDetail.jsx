import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function PaintingDetail() {
  const { paintingName } = useParams();
  const navigate = useNavigate();

  const paintingDetails = {

    "Madhubani Painting": `
Madhubani painting originated in the Mithila region of Bihar and is one of the oldest Indian folk art traditions. It was traditionally created by women on the walls of homes during weddings and festivals. The art is characterized by intricate patterns, double outlines, and vibrant natural colors. Artists use twigs, fingers, and handmade brushes to create detailed motifs. Common themes include Hindu deities, nature, and marriage rituals. Every space is filled with decorative designs, leaving no empty background.

Madhubani became internationally recognized in the 1960s when it was promoted as a commercial art form. The bold color combinations and fine detailing attracted global art collectors. Different styles such as Bharni, Kachni, and Tantrik developed within the tradition. Each style has distinct techniques and symbolic elements. The art empowers rural women by providing livelihood opportunities. Today, it is displayed in galleries and museums worldwide.

Historically, this art form is believed to date back to the Ramayana period. It was passed down orally and visually through generations. Over time, paintings shifted from mud walls to paper and canvas. Despite modernization, traditional themes remain preserved. The paintings symbolize fertility, devotion, and harmony with nature. Madhubani painting represents Bihar’s rich cultural identity.
`,

    "Warli Painting": `
Warli painting is a tribal art form from Maharashtra created by the Warli community. It uses white pigment on mud walls to depict everyday village life. Simple geometric shapes like circles, triangles, and lines form human and animal figures. Common scenes include farming, dancing, and harvest celebrations. The art has a minimalist yet expressive appearance. It reflects the tribe’s close connection with nature.

Warli gained popularity for its simplicity and symbolic storytelling. Traditionally, it was painted during weddings and rituals. The circular motif often represents the cycle of life. Modern designers incorporate Warli motifs into fashion and décor. This has helped preserve and popularize the art globally. It emphasizes harmony between humans and the environment.

Historically, Warli art dates back thousands of years. It was transmitted orally without written documentation. The paintings symbolize fertility and prosperity. Even today, artists maintain traditional methods. The art remains connected to tribal ceremonies. Warli painting represents indigenous heritage.
`,

    "Tanjore Painting": `
Tanjore painting originated in Tamil Nadu and is famous for its gold foil embellishments. The paintings mainly depict Hindu gods and goddesses. Bright colors and decorative jewels enhance the divine appearance. Artists use wooden panels as the base. The gold embossing creates a three-dimensional royal effect. The style reflects devotion and grandeur.

Tanjore painting became popular during the Maratha rule in South India. The use of precious stones and gold leaf made it luxurious. The themes are predominantly religious and spiritual. These paintings were traditionally placed in temples and homes. Over time, they gained international admiration. Today, they are valued as premium artworks.

Historically, Tanjore art flourished under royal patronage. Kings encouraged artists to preserve religious stories visually. Traditional techniques are still followed carefully. The art maintains classical symmetry and elegance. It represents divine beauty and prosperity. Tanjore painting symbolizes spiritual richness.
`,

    "Pattachitra": `
Pattachitra is a traditional scroll painting from Odisha known for mythological storytelling. It is painted on specially prepared cloth using natural dyes. The themes mainly revolve around Lord Jagannath and Krishna. Fine detailing and bold outlines define the style. Artists maintain symmetry in every composition. The art reflects Odisha’s temple traditions.

Pattachitra gained fame due to its association with the Jagannath Temple in Puri. The paintings are sold during temple festivals. Natural colors extracted from minerals and plants are used. The craft is passed down within artisan families. The storytelling nature attracts art lovers worldwide. It is a strong cultural symbol of Odisha.

Historically, Pattachitra dates back several centuries. It developed as a ritual art linked to temple worship. Artists known as Chitrakars follow strict rules. Techniques have remained largely unchanged. The art continues to thrive today. Pattachitra represents Odisha’s spiritual heritage.
`,

    "Kalamkari": `
Kalamkari is a hand-painted textile art from Andhra Pradesh created using natural dyes. The word means “pen work,” referring to the bamboo pen used for drawing. Themes include stories from the Ramayana and Mahabharata. The fabric undergoes multiple stages of dyeing and washing. The designs are detailed and expressive. It reflects India’s rich textile tradition.

Kalamkari became famous for its eco-friendly dyeing techniques. Natural colors from plants give the fabric unique texture. Two major styles are Srikalahasti and Machilipatnam. The art gained recognition through international trade. Designers incorporate Kalamkari into modern fashion. It blends tradition with innovation.

Historically, Kalamkari flourished under Mughal patronage. Temple culture influenced its motifs. Artisans preserved traditional methods carefully. The craft adapted to changing markets. Authenticity remains intact even today. Kalamkari symbolizes sustainable craftsmanship.
`,

    "Phad Painting": `
Phad painting originated in Rajasthan and is known for its long narrative scrolls. It depicts heroic tales of folk deities and legends. The artwork uses bright colors and natural pigments. The scroll format allows detailed storytelling. Performers traditionally used Phad during village gatherings. The art connects visual and oral traditions.

Phad became famous for narrating epic stories of local heroes. The paintings are accompanied by folk songs. Strict stylistic rules govern its creation. The art gained recognition as a heritage craft. It attracts art enthusiasts worldwide. It remains culturally significant.

Historically, Phad art dates back over seven centuries. It was patronized by royal families. The scroll functioned as a portable temple. Techniques were passed down within families. Traditional methods are still preserved. Phad painting represents Rajasthan’s folk heritage.
`,

    "Gond Painting": `
Gond painting is a tribal art from Madhya Pradesh inspired by nature. It uses dots and lines to create intricate patterns. Animals, birds, and trees are common subjects. Bright colors enhance its visual appeal. The art reflects tribal myths and beliefs. It emphasizes harmony with nature.

Gond painting gained popularity for its vibrant style. Artists experiment with both traditional and modern themes. The textured patterns give a distinctive look. The art has gained international recognition. Many tribal artists showcase their work globally. It empowers indigenous communities.

Historically, Gond paintings were created on house walls. They were part of rituals and celebrations. Modern artists shifted to canvas. The themes remain deeply rooted in culture. The art continues to evolve creatively. Gond painting symbolizes tribal imagination.
`,

    "Pichwai Painting": `
Pichwai painting originated in Rajasthan and is associated with Lord Krishna. The paintings depict scenes from Krishna’s life and festivals. Bright colors and intricate patterns define the artwork. They are usually displayed behind temple idols. Cows and lotus motifs are common. The art expresses devotion and spirituality.

Pichwai gained fame through the temple traditions of Nathdwara. Artists carefully portray festival celebrations. The paintings require precision and patience. They gained popularity among collectors. The artwork symbolizes religious dedication. It continues to be cherished.

Historically, Pichwai dates back over four centuries. It flourished under royal patronage. The art was linked to temple rituals. Traditional techniques are preserved carefully. It inspires devotional art even today. Pichwai painting reflects divine storytelling.
`,

    "Miniature Painting": `
Miniature painting developed in Indian royal courts and is known for fine detailing. Artists used delicate brushes to create precise images. Themes include court scenes and mythology. Soft colors enhance elegance. The paintings reflect royal lifestyles. It represents refined skill.

Miniature painting gained prominence during Mughal rule. Persian influences shaped its style. Rajput and Pahari styles evolved later. The paintings vividly capture emotions. European collectors admired this art. It remains globally respected.

Historically, miniature paintings flourished under imperial patronage. Artists worked in royal workshops. Techniques were closely guarded. The art influenced later Indian styles. It preserved historical narratives. Miniature painting symbolizes royal sophistication.
`,

    "Mysore Painting": `
Mysore painting originated in Karnataka and focuses on Hindu deities. The art uses soft colors and gold leaf embellishments. The detailing is subtle and graceful. Artists paint on paper or wooden boards. The themes are devotional and spiritual. It reflects simplicity and elegance.

Mysore painting became popular during the Wodeyar dynasty. The art emphasizes serenity and divine expression. It gained recognition for refined finish. Traditional techniques are preserved. The artwork is valued for devotion. It remains culturally important.

Historically, Mysore art evolved alongside Tanjore painting. Royal support encouraged development. Artists maintained classical proportions. The art continues to be practiced. It symbolizes Karnataka’s heritage. Mysore painting reflects devotional artistry.
`,

    "Cheriyal Scroll Painting": `
Cheriyal scroll painting originated in Telangana and narrates local folklore. The art uses bold red backgrounds and bright colors. The scroll format allows storytelling. Natural pigments are traditionally used. The artwork reflects rural traditions. It connects with community storytelling.

Cheriyal became famous for supporting oral traditions. Performers used scrolls during village gatherings. The art gained recognition as heritage craft. It preserves ancient narratives visually. The vibrant style attracts audiences. It remains culturally valuable.

Historically, Cheriyal art was passed through artisan families. It was linked to festivals and rituals. Techniques remain traditional today. The art adapted to contemporary formats. It preserves Telangana’s identity. Cheriyal painting represents folk heritage.
`,

    "Saura Painting": `
Saura painting is a tribal art from Odisha created by the Saura community. It uses symbolic human and animal figures in simple forms. The artwork is usually monochromatic with white on red or ochre backgrounds. It depicts rituals, agricultural activities, and spiritual beliefs. The designs are highly symbolic and geometric. The art reflects harmony between humans and nature.

Saura painting became known for its ritualistic importance in tribal households. It is traditionally created during religious ceremonies and harvest festivals. The figures often represent ancestral spirits and deities. The art has gained national recognition through exhibitions. Despite modernization, tribal artists maintain traditional methods. It remains deeply connected to community identity.

Historically, Saura art dates back several centuries. It was originally painted on house walls as sacred decoration. The tradition has been preserved through oral teaching. The motifs carry symbolic meanings related to prosperity and protection. Even today, it continues as a living tradition. Saura painting represents Odisha’s indigenous faith and culture.
`,

    "Kangra Painting": `
Kangra painting originated in Himachal Pradesh and is known for its delicate beauty. It flourished under the patronage of Rajput rulers. The paintings often depict scenes from love stories and mythology. Soft colors and fine brushwork enhance its elegance. Natural landscapes are beautifully portrayed in the background. The art reflects romance and devotion.

Kangra painting became famous during the Pahari period in the 18th century. The Radha-Krishna theme is particularly common in this style. Artists focused on capturing emotions and expressions realistically. The paintings gained admiration from art historians worldwide. The graceful depiction of nature sets it apart. It symbolizes poetic charm and refinement.

Historically, Kangra art evolved from the earlier Basohli style. It flourished in royal courts of Himachal Pradesh. Artists carefully maintained stylistic purity. The art preserved romantic and devotional narratives. Even today, it is studied as a classical style. Kangra painting represents artistic elegance and sensitivity.
`,

    "Kalighat Painting": `
Kalighat painting originated in Kolkata during the 19th century. It was developed by patua artists near the Kalighat temple. The art uses bold lines and bright colors. Themes include mythology, social satire, and daily urban life. The paintings were made on paper for easy sale. It reflects changing urban society.

Kalighat painting became popular for its simplicity and expressive style. The artists often criticized social issues humorously. The paintings were affordable and widely sold. British collectors showed interest in this art form. It influenced the development of modern Indian art. The style remains historically significant.

Historically, Kalighat art developed during colonial rule. Artists adapted traditional themes to urban demands. The paintings evolved rapidly in subject matter. It reflected both devotion and social awareness. The art declined with printed images but remains valued today. Kalighat painting symbolizes Bengal’s artistic innovation.
`,

    "Aipan Art": `
Aipan art originated in Uttarakhand and is a ritualistic floor decoration. It is created using rice paste on a red clay background. The designs are geometric and highly symbolic. It is made during festivals, weddings, and religious ceremonies. The art reflects spirituality and devotion. It symbolizes prosperity and good fortune.

Aipan became famous for its decorative beauty and cultural importance. Women traditionally create these designs at home. Each motif carries specific religious significance. The art marks auspicious occasions and celebrations. It has gained recognition in contemporary décor. The patterns are symmetrical and elegant.

Historically, Aipan has been practiced for centuries in Kumaon region. It was passed down from mother to daughter. The art form remains integral to household rituals. Modern artists promote it through exhibitions. Despite urbanization, it survives strongly. Aipan art reflects Uttarakhand’s cultural identity.
`
  };

  const content = paintingDetails[paintingName];

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

      <h1 style={{ marginBottom: "20px" }}>{paintingName}</h1>

      <p style={{ lineHeight: "1.9", whiteSpace: "pre-line", fontSize: "16px" }}>
        {content}
      </p>
    </div>
  );
}

export default PaintingDetail;