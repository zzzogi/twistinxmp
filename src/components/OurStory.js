import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import "./OurStory.css";

const OurStory = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [confettiFired, setConfettiFired] = useState(false);
  const timelineRef = useRef(null);
  const proposalRef = useRef(null);

  const milestones = [
    {
      year: "2018",
      title: "Năm Đầu Tiên - Khởi Đầu Tình Yêu",
      date: "05/10/2018",
      description:
        "Gặp nhau lần đầu dưới mái trường THPT Trần Phú - Hoàn Kiếm. Hai trái tim trẻ tuổi bắt đầu thổn thức bên nhau.",
      image: "/images/first-year.jpg",
      side: "left",
    },
    {
      year: "2019",
      title: "Năm Thứ Hai - Khám Phá Nhau",
      date: "2019",
      description:
        "Những chuyến đi đầu tiên, những cuộc hẹn hò ngọt ngào. Chúng mình học cách yêu thương và thấu hiểu nhau hơn mỗi ngày.",
      image: "/images/second-year.jpg",
      side: "right",
    },
    {
      year: "2020",
      title: "Năm Thứ Ba - Vượt Qua Thử Thách",
      date: "2020",
      description:
        "COVID-19 đến, khoảng cách địa lý thử thách tình yêu. Nhưng chúng mình vẫn bên nhau, xa mà gần, yêu thương không thay đổi.",
      image: "/images/third-year.jpg",
      side: "left",
    },
    {
      year: "2021",
      title: "Năm Thứ Tư - Trưởng Thành Cùng Nhau",
      date: "2021",
      description:
        "Bắt đầu sự nghiệp, theo đuổi đam mê. Bảo với âm nhạc, Phương với makeup. Ủng hộ nhau trong từng bước đi.",
      image: "/images/fourth-year.jpg",
      side: "right",
    },
    {
      year: "2022",
      title: "Năm Thứ Năm - Xây Dựng Ước Mơ",
      date: "2022",
      description:
        "Sự nghiệp phát triển, tình yêu thêm vững bền. Chúng mình bắt đầu nghĩ về tương lai, về một mái ấm chung.",
      image: "/images/fifth-year.jpg",
      side: "left",
    },
    {
      year: "2023",
      title: "Năm Thứ Sáu - Những Dấu Ấn Đáng Nhớ",
      date: "2023",
      description:
        "Những kỷ niệm ngọt ngào nhất, những chuyến du lịch đáng nhớ. Tình yêu của chúng mình đã trở thành một phần không thể thiếu của cuộc sống.",
      image: "/images/sixth-year.jpg",
      side: "right",
    },
  ];

  const fireConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50;

      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#c6a582", "#e5dac9", "#d4b896", "#f5f0e8", "#9d755c"],
      });

      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#c6a582", "#e5dac9", "#d4b896", "#f5f0e8", "#9d755c"],
      });
    }, 250);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleItems((prev) => [...new Set([...prev, parseInt(index)])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-milestone");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !confettiFired) {
            setConfettiFired(true);
            fireConfetti();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (proposalRef.current) {
      observer.observe(proposalRef.current);
    }

    return () => observer.disconnect();
  }, [confettiFired]);

  return (
    <section className="story section" id="story">
      <div className="container">
        <h2 className="section-title">Câu Chuyện Của Chúng Tôi</h2>
        <p className="section-subtitle">7 Năm - 7 Kỷ Niệm Đáng Nhớ</p>

        <div className="timeline-container" ref={timelineRef}>
          <svg
            className="timeline-path"
            viewBox="0 0 100 1600"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 0 
                 Q 30 100, 50 200
                 Q 70 300, 50 400
                 Q 30 500, 50 600
                 Q 70 700, 50 800
                 Q 30 900, 50 1000
                 Q 70 1100, 50 1200
                 L 50 1600"
              stroke="var(--color-primary)"
              strokeWidth="3"
              strokeDasharray="10, 10"
              fill="none"
              className="path-line"
            />
          </svg>

          <div className="timeline-milestones">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-milestone ${milestone.side} ${
                  visibleItems.includes(index) ? "visible" : ""
                }`}
                data-index={index}
              >
                <div className="milestone-dot">
                  <span className="dot-inner">{milestone.year}</span>
                </div>

                <div className="milestone-content">
                  <div className="milestone-image">
                    <img src={milestone.image} alt={milestone.title} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="milestone-text">
                    <span className="milestone-date">{milestone.date}</span>
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <p className="milestone-description">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROPOSAL - Elegant Design */}
        <div className="proposal-section" ref={proposalRef}>
          <div className="proposal-wrapper">
            <div className="proposal-ring-deco">💍</div>
            <div className="proposal-year">2024-2025</div>

            <div className="proposal-content-wrapper">
              {/* Image - Polaroid style */}
              <div className="proposal-image-box">
                <div className="proposal-polaroid">
                  <div className="proposal-image-frame">
                    <img
                      src="/images/seventh-year.jpg"
                      alt="The Proposal Moment"
                    />
                  </div>
                  <div className="proposal-polaroid-text">
                    05.10.2025 - She said YES!
                  </div>
                </div>
                <div className="proposal-heart-stamp">❤️</div>
              </div>

              {/* Text content */}
              <div className="proposal-text-content">
                <div className="proposal-badge">
                  <span className="badge-icon">💕</span>
                  <span className="badge-text">The Proposal</span>
                </div>

                <div>
                  <h3 className="proposal-title">
                    Năm Thứ Bảy - She Said Yes!
                  </h3>
                  <div className="proposal-date">05/10/2025</div>
                </div>

                <p className="proposal-description">
                  Đúng vào ngày kỷ niệm 7 năm bên nhau, Bảo đã quỳ gối và hỏi
                  Phương câu hỏi quan trọng nhất:{" "}
                  <strong>"Em có muốn trở thành vợ anh không?"</strong>
                </p>

                <div className="proposal-quote">
                  <span className="quote-icon-left">"</span>
                  <p className="quote-text">
                    Sau 7 năm yêu thương, chúng mình đã sẵn sàng cho hành trình
                    mới - từ người yêu thành vợ chồng, từ hai con người trở
                    thành một gia đình.
                  </p>
                </div>
                {/* 
                <div className="proposal-stats">
                  <div className="proposal-stat-item">
                    <span className="stat-emoji">📍</span>
                    <span>THPT Trần Phú</span>
                  </div>
                  <div className="proposal-stat-item">
                    <span className="stat-emoji">🎵</span>
                    <span>Perfect - Ed Sheeran</span>
                  </div>
                  <div className="proposal-stat-item">
                    <span className="stat-emoji">💝</span>
                    <span>Forever & Always</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
