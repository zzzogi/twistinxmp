import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import "./Testimonial.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      relationship: "Bạn thân Chung Bảo",
      message:
        "Được chứng kiến tình yêu của hai bạn suốt 7 năm qua, tôi tin rằng đây là tình yêu đích thực. Chúc hai bạn hạnh phúc mãi mãi!",
      avatar: "A",
    },
    {
      name: "Trần Thị B",
      relationship: "Bạn thân Minh Phương",
      message:
        "Phương à, chị rất vui vì em đã tìm được người đàn ông xứng đáng. Bảo rất yêu thương và trân trọng em. Chúc hai em trăm năm hạnh phúc!",
      avatar: "B",
    },
    {
      name: "Lê Văn C",
      relationship: "Đồng nghiệp",
      message:
        "Làm việc cùng Bảo nhiều năm, tôi thấy anh ấy là người đàn ông có trách nhiệm. Chúc hai bạn hạnh phúc và thành công!",
      avatar: "C",
    },
    {
      name: "Phạm Thị D",
      relationship: "Khách hàng của Minh Phương",
      message:
        "Phương là người makeup artist tài năng và tốt bụng. Chúc hai bạn có một đám cưới thật đẹp và cuộc sống hôn nhân tràn ngập yêu thương!",
      avatar: "D",
    },
    {
      name: "Hoàng Văn E",
      relationship: "Bạn học cũ",
      message:
        "Từ thời THPT đến giờ, tình yêu của hai bạn vẫn vẹn nguyên. Đó là điều hiếm có. Chúc mừng hai bạn!",
      avatar: "E",
    },
    {
      name: "Ngô Thị F",
      relationship: "Gia đình",
      message:
        "Hai đứa rất hợp nhau. Chúc con gái và con rể của chúng tôi luôn hạnh phúc, yêu thương nhau mãi mãi!",
      avatar: "F",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <section className="testimonial section" id="testimonial">
      <div className="container">
        <h2 className="section-title">Lời Chúc</h2>
        <p className="section-subtitle">Từ Những Người Thân Yêu</p>

        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-grid">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder">{testimonial.avatar}</div>
                </div>
                <p className="testimonial-message">{testimonial.message}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.relationship}</p>
                </div>
                <FaHeart className="heart-icon" />
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
            (_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            )
          )}
        </div>

        {/* <div className="guestbook-cta">
          <h3>Gửi Lời Chúc Của Bạn</h3>
          <p>Hãy để lại lời chúc tốt đẹp cho chúng tôi!</p>
          <button className="cta-button">Viết Lời Chúc</button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
