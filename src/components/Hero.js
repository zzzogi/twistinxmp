import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [, setDaysTogether] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2025-11-21T00:00:00");
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const calculateDaysTogether = () => {
      const startDate = new Date("2018-10-05");
      const now = new Date();
      const difference = now - startDate;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDaysTogether(days);
    };

    calculateTimeLeft();
    calculateDaysTogether();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero section" id="hero">
      {/* Background Images - Absolute Position */}
      <div className="hero-background-images">
        <img
          src="/images/chungbao.png"
          alt="Chung Bảo"
          className="person-image-bg left"
        />
        <img
          src="/images/mp.png"
          alt="Minh Phương"
          className="person-image-bg right"
        />
      </div>

      {/* Main Content - On Top */}
      <div className="hero-content">
        <div className="hero-center">
          <div className="hero-text animate-fade-in">
            <h1 className="hero-title">Our Story Begins Here</h1>

            <p className="hero-tagline">
              Nơi lưu giữ những kỷ niệm, những cảm xúc và những dấu mốc quan
              trọng của chúng tôi.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Cuộn xuống</p>
      </div>
    </section>
  );
};

export default Hero;
