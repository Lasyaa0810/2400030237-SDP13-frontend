import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function VirtualTours() {

  const navigate = useNavigate();

  /* Scroll Reveal */
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div>

      <h1 style={{ marginBottom: "10px" }}>Virtual Tours</h1>

      <p style={{ marginBottom: "30px" }}>
        Experience India's heritage through interactive, step-by-step virtual guided tours.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "35px"
        }}
      >

        {[
          { id: "taj", title: "Taj Mahal Virtual Tour", desc: "Explore the symbol of eternal love in 360° experience." },
          { id: "qutub", title: "Qutub Minar Virtual Tour", desc: "Walk through Delhi’s iconic victory tower." },
          { id: "hampi", title: "Hampi Virtual Tour", desc: "Walk through the ruins of Vijayanagara Empire." },
          { id: "konark", title: "Konark Sun Temple Tour", desc: "Discover the architectural marvel of the Sun God Temple." },
          { id: "indiagate", title: "India Gate Virtual Tour", desc: "Explore the historic war memorial in Delhi." },
          { id: "nationalwar", title: "National War Memorial Tour", desc: "Honor the brave soldiers of independent India." },
          { id: "meenakshi", title: "Meenakshi Temple Virtual Tour", desc: "Experience the colorful gopurams of Madurai." },
          { id: "brihadeeswara", title: "Brihadeeswara Temple Tour", desc: "Explore the grand Chola architectural masterpiece." },
          { id: "victoria", title: "Victoria Memorial Virtual Tour", desc: "Discover the British-era marble monument." }
        ].map((tour) => (
          <div className="card" key={tour.id}>
            <h2>{tour.title}</h2>
            <p>{tour.desc}</p>

            <button
              className="btn-primary"
              onClick={() => navigate(`/tour/${tour.id}`)}
              style={{ marginTop: "15px" }}
            >
              Start Tour
            </button>
          </div>
        ))}

      </div>

      <div style={{ marginTop: "60px", fontSize: "16px" }}>
        Explore India's monuments through immersive digital storytelling
        and guided virtual experiences.
      </div>

    </div>
  );
}

export default VirtualTours;