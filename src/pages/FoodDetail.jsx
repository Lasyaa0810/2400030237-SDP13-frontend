import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FoodDetail() {
  const { stateName } = useParams();
  const navigate = useNavigate();

  const foodDetails = {

    Punjab: `
Punjab is widely known for its rich and flavorful cuisine that reflects the agricultural prosperity of the region. Makki di Roti and Sarson da Saag are iconic winter dishes prepared using maize flour and mustard greens. Amritsari Kulcha, stuffed with spicy fillings, is baked in traditional tandoors and served with chole. Punjabi cuisine uses generous amounts of butter, ghee, and cream, giving dishes a rich and satisfying taste. The bold spices and smoky flavors make it extremely popular across India. Punjabi food beautifully represents warmth, celebration, and hospitality.

Punjabi cuisine became famous due to its strong flavors and hearty portions. The tandoor cooking method originated in Punjab and later spread globally. Dishes like Butter Chicken and Paneer Tikka have achieved international recognition. Festivals and weddings in Punjab are incomplete without elaborate meals. The food culture emphasizes togetherness and grand feasting traditions. Its popularity continues to grow worldwide.

Historically, Punjab’s fertile land influenced its wheat-based diet and dairy-rich recipes. Farming traditions shaped staple foods like roti and paratha. Mughal influence enriched Punjabi gravies with cream and aromatic spices. Migration helped spread Punjabi cuisine across countries. Over centuries, it maintained authenticity while adapting globally. Today, Punjabi food stands as a symbol of abundance and festivity.
`,

    "Tamil Nadu": `
Tamil Nadu cuisine is known for its balanced nutrition and traditional flavors. Dosa, Idli, and Pongal are staple dishes made from fermented rice and lentils. Coconut, curry leaves, mustard seeds, and tamarind are widely used ingredients. Meals are often served on banana leaves to preserve cultural heritage. The cuisine emphasizes simplicity and health benefits. It reflects centuries-old culinary traditions.

Tamil food is famous for being both healthy and delicious. Fermented dishes improve digestion and provide essential nutrients. Sambar and Rasam are staple accompaniments enriched with spices. South Indian filter coffee is globally loved. Vegetarian options dominate the cuisine. The flavors are comforting and aromatic.

Historically, temple traditions influenced Tamil cooking methods. Rice cultivation shaped dietary habits significantly. Temple offerings like Pongal hold religious importance. Trade introduced various spices to the region. Over time, Tamil cuisine gained worldwide recognition. It remains one of India’s healthiest regional cuisines.
`,

    "West Bengal": `
West Bengal cuisine is famous for sweets and fish-based dishes. Rasgulla and Sandesh are iconic Bengali desserts loved across India. Fish curry prepared with mustard paste is a staple meal. The cuisine balances sweetness and spice beautifully. Rice is the primary staple served with lentils and curries. Bengali food reflects creativity and elegance.

The cuisine gained fame for its refined cooking style and dessert craftsmanship. Mustard oil and panch phoron give distinct flavors. Festivals like Durga Puja include elaborate feasts. Sweet-making traditions achieved global popularity. The dishes are emotionally connected to celebrations. Bengali food expresses cultural pride.

Historically, Bengal’s rivers encouraged fish-based diets. Mughal and British influences shaped its culinary identity. Traditional sweets evolved during colonial times. Recipes were passed through generations carefully. The cuisine preserved authenticity over centuries. Today, it remains one of India’s most celebrated food cultures.
`,

    Rajasthan: `
Rajasthan cuisine developed in a desert climate with limited water resources. Dal Baati Churma is a signature dish combining lentils, baked wheat balls, and sweet churma. Gatte ki Sabzi is made from gram flour dumplings cooked in spicy gravy. Ker Sangri is a traditional desert vegetable dish. The cuisine uses minimal water and relies on dried ingredients. It reflects survival and innovation.

Rajasthani food is famous for its spicy flavors and long shelf life. The dishes were designed to last in extreme temperatures. Royal kitchens introduced rich gravies and sweets. Festivals showcase elaborate thali meals. The cuisine highlights regional identity strongly. Its flavors are bold and satisfying.

Historically, Rajput warriors influenced hearty recipes. Scarcity shaped preservation techniques. Royal patronage refined traditional dishes. Trade routes introduced new spices. Over centuries, recipes evolved yet retained authenticity. Rajasthan’s cuisine symbolizes resilience and heritage.
`,

    Gujarat: `
Gujarat cuisine is primarily vegetarian and known for sweet and savory balance. Dhokla, Thepla, and Undhiyu are famous dishes enjoyed statewide. The cuisine uses gram flour, yogurt, and seasonal vegetables. A typical Gujarati thali includes multiple small portions. The flavors are light yet flavorful. It reflects community dining traditions.

Gujarati food became popular due to its unique taste combination. Slight sweetness is added to many dishes. Snacks like Fafda and Khandvi are widely loved. Festivals feature elaborate vegetarian spreads. The cuisine promotes simplicity and nutrition. It is widely available across India.

Historically, Jain and Vaishnav traditions influenced vegetarian cooking. Trade encouraged variety in spices and ingredients. Preservation techniques were developed for travel. Recipes were passed across generations. Gujarati cuisine evolved regionally. Today, it remains one of India's most distinctive vegetarian cuisines.
`,

    Kerala: `
Kerala cuisine is known for coconut-based dishes and seafood specialties. Appam, Puttu, and Kerala Sadya are traditional meals. Coconut oil and curry leaves add unique flavor. Sadya is a grand vegetarian feast served on banana leaves. Seafood is widely consumed due to coastal geography. The cuisine reflects tropical abundance.

Kerala food is famous for its use of fresh spices and coconut. Ayurvedic principles influence balanced cooking. Onam festival showcases elaborate Sadya meals. Fish curries are prepared with tamarind and coconut milk. The cuisine balances spice and aroma. It is globally appreciated.

Historically, spice trade influenced Kerala cuisine. Arab and European traders introduced new ingredients. Rice and coconut became staple components. Temple traditions preserved vegetarian dishes. Recipes evolved over centuries. Kerala cuisine symbolizes diversity and heritage.
`,

    "Andhra Pradesh": `
Andhra cuisine is known for its spicy and tangy flavors. Pulihora, Gongura Pachadi, and Pesarattu are famous dishes. Red chilies are widely used in cooking. Rice is the staple food served with curries. The cuisine emphasizes strong flavors. It reflects bold culinary traditions.

Andhra food became famous for its fiery spice levels. Pickles and chutneys are essential accompaniments. Festivals feature traditional rice-based dishes. Coastal areas prefer seafood specialties. The cuisine highlights regional diversity. It is loved by spice enthusiasts.

Historically, agricultural abundance influenced recipes. Chili cultivation increased spice usage. Temple traditions shaped festive dishes. Trade routes expanded culinary variety. Recipes passed across generations. Andhra cuisine represents vibrant flavor culture.
`,

    Karnataka: `
Karnataka cuisine blends simplicity and royal richness. Bisi Bele Bath and Ragi Mudde are staple dishes. Mysore Pak is a famous sweet. Coconut and lentils are common ingredients. Meals vary across regions. The cuisine reflects diversity.

Karnataka food is famous for Udupi vegetarian dishes. Temple traditions influenced cooking. Festivals include elaborate spreads. Coastal cuisine features seafood. Sweet dishes gained national recognition. It balances taste and nutrition.

Historically, Vijayanagara Empire influenced royal dishes. Agriculture shaped staple ingredients. Trade expanded spice variety. Recipes preserved regional identity. The cuisine evolved gradually. Karnataka food symbolizes cultural richness.
`,

    Maharashtra: `
Maharashtra cuisine combines coastal and inland flavors. Vada Pav, Misal Pav, and Puran Poli are iconic dishes. The cuisine ranges from spicy to mildly sweet. Rice and wheat are staple grains. Coastal areas favor seafood. It reflects urban and rural diversity.

Maharashtrian food is famous for street snacks. Mumbai popularized Vada Pav globally. Festive dishes are deeply cultural. Spice levels vary by region. The cuisine adapts easily. It remains widely loved.

Historically, Maratha rulers influenced recipes. Trade introduced spices and ingredients. Preservation methods supported travel. Recipes evolved regionally. Culinary traditions remained strong. Maharashtra cuisine reflects resilience.
`,

    "Uttar Pradesh": `
Uttar Pradesh cuisine is known for Awadhi delicacies. Tunday Kebab and Bedai are popular dishes. Petha from Agra is famous sweet. Mughal influence shaped rich gravies. Slow cooking enhances flavor. The cuisine reflects royal heritage.

UP food became famous for kebabs and biryanis. Nawabi culture refined recipes. Festivals include sweet delicacies. Wheat-based breads are staple. The flavors are aromatic. It showcases North Indian richness.

Historically, Mughal rulers influenced Awadhi cooking. Royal kitchens perfected kebabs. Trade added spice diversity. Recipes passed through generations. Street food gained popularity. UP cuisine symbolizes tradition.
`,

    Odisha: `
Odisha cuisine is simple and nutritious. Pakhala Bhata and Dalma are staple dishes. Chhena Poda is a famous dessert. Rice is primary staple. Temple food influences recipes. It reflects coastal simplicity.

Odisha food is famous for Jagannath temple Mahaprasad. Mild spices are used. Seafood is common in coastal areas. Festivals include special dishes. The cuisine emphasizes health. It preserves tradition.

Historically, temple culture shaped cooking. Agriculture influenced rice dominance. Recipes evolved regionally. Sweets gained popularity. Coastal geography added seafood. Odisha cuisine symbolizes devotion.
`,

    Assam: `
Assam cuisine is known for simple and earthy flavors. Khar and Masor Tenga are popular dishes. Rice is staple grain. Minimal spices are used. Fresh herbs add aroma. The cuisine reflects nature.

Assamese food is famous for its healthy style. Fermented bamboo shoot is used. Fish is common protein source. Festivals include traditional sweets. The cuisine values simplicity. It promotes balance.

Historically, tribal communities influenced recipes. Agriculture shaped food habits. River systems supported fish dishes. Recipes were passed orally. Regional variations exist. Assam cuisine reflects tradition.
`,

    "Madhya Pradesh": `
Madhya Pradesh cuisine blends North and Central flavors. Poha and Dal Bafla are famous dishes. Bhutte Ka Kees is unique preparation. Wheat and maize are staple grains. Street food culture is vibrant. It reflects central India heritage.

MP food is famous for breakfast Poha. Indore popularized street snacks. Festivals include sweet dishes. Spice levels are moderate. It combines regional styles. The cuisine is diverse.

Historically, central location influenced fusion cooking. Trade expanded ingredient variety. Rural traditions shaped staples. Recipes evolved gradually. Cultural exchange enhanced flavors. MP cuisine symbolizes unity.
`,

    Bihar: `
Bihar cuisine is simple yet flavorful. Litti Chokha is iconic dish. Thekua and Khaja are traditional sweets. Wheat and gram flour are common ingredients. Mustard oil adds aroma. The cuisine reflects rural traditions.

Bihari food became famous for its earthy taste. Festivals include traditional sweets. Roasted preparations are common. The cuisine emphasizes simplicity. Migration spread its popularity. It remains authentic.

Historically, agriculture influenced staple foods. Rural lifestyle shaped recipes. Trade introduced spices. Recipes passed through generations. Culinary traditions remain strong. Bihar cuisine symbolizes heritage.
`,

    Telangana: `
Telangana cuisine is known for spicy and aromatic dishes. Hyderabadi Biryani is world famous. Sarva Pindi and Sakinalu are traditional snacks. Rice and millet are staples. Red chilies add heat. The cuisine reflects Deccan culture.

Telangana food became famous due to Nizam influence. Dum cooking enhances flavors. Festivals include special sweets. The cuisine blends Mughal and Telugu styles. It is bold and flavorful. It gained global recognition.

Historically, Nizam rule shaped culinary richness. Trade introduced exotic spices. Rural traditions influenced millet usage. Recipes evolved over centuries. Cultural diversity enhanced dishes. Telangana cuisine symbolizes royal heritage.
`
  };

  const content = foodDetails[stateName];

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

      <h1 style={{ marginBottom: "20px" }}>
        {stateName} Famous Food
      </h1>

      <p style={{ lineHeight: "1.9", whiteSpace: "pre-line", fontSize: "16px" }}>
        {content}
      </p>
    </div>
  );
}

export default FoodDetail;