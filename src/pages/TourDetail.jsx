import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function TourDetail() {

  const { id } = useParams();

  const tours = {

    taj: {
      title: "Taj Mahal Virtual Tour",
      video: "https://www.youtube.com/embed/49HTIoCccDY",
      description:
        "Experience the timeless beauty of the Taj Mahal through a 360° walkthrough covering its grand entrance, marble dome, reflection pools, and Mughal gardens."
    },

    qutub: {
      title: "Qutub Minar Virtual Tour",
      video: "https://www.youtube.com/embed/2UoK9hJxDjk",
      description:
        "Explore the historic Qutub Minar complex and learn about its Indo-Islamic architecture and Delhi Sultanate history."
    },

    hampi: {
      title: "Hampi Virtual Tour",
      video: "https://www.youtube.com/embed/yBct3iLn5w8",
      description:
        "Walk through the ancient ruins of Hampi including the Virupaksha Temple and royal enclosures."
    },

    konark: {
      title: "Konark Sun Temple Tour",
      video: "https://www.youtube.com/embed/209P2YndRzM",
      description:
        "Discover the magnificent Konark Sun Temple shaped like a celestial chariot."
    },

    indiagate: {
      title: "India Gate Virtual Tour",
      video: "https://www.youtube.com/embed/cWzuEhwT46k",
      description:
        "Explore India Gate honoring soldiers of World War I."
    },

    nationalwar: {
      title: "National War Memorial Tour",
      video: "https://www.youtube.com/embed/EZcGpAa6ETc",
      description:
        "Take a virtual tour of the National War Memorial."
    },

    meenakshi: {
      title: "Meenakshi Temple Virtual Tour",
      video: "https://www.youtube.com/embed/UAWnsNcf_F4",
      description:
        "Experience the colorful Dravidian architecture of Meenakshi Temple."
    },

    brihadeeswara: {
      title: "Brihadeeswara Temple Tour",
      video: "https://www.youtube.com/embed/KC3GAmjn1mg",
      description:
        "Explore the Chola architectural masterpiece Brihadeeswara Temple."
    },

    victoria: {
      title: "Victoria Memorial Virtual Tour",
      video: "https://www.youtube.com/embed/4UryGmr2djI",
      description:
        "Discover the majestic Victoria Memorial in Kolkata."
    }
  };

  const tour = tours[id];

  if (!tour) {
    return (
      <div className="page-container">
        <h2>Tour Not Found</h2>
      </div>
    );
  }

  return (
    <div>

      <h1 style={{ marginBottom: "25px" }}>{tour.title}</h1>

      {/* Responsive Video Wrapper */}
      <div style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 15px 50px rgba(0,0,0,0.4)"
      }}>
        <iframe
          src={tour.video}
          title="Virtual Tour"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "20px"
          }}
        ></iframe>
      </div>

      <h3 style={{ marginTop: "40px" }}>About This Tour</h3>

      <p style={{
        marginTop: "15px",
        maxWidth: "900px",
        lineHeight: "1.7"
      }}>
        {tour.description}
      </p>

    </div>
  );
}

export default TourDetail;