import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          {/* Polaroid Image bên trái */}
          <div className="about-left">
            <div className="polaroid">
              <img
                src="/images/couple-photo.jpg"
                alt="Chung Bảo & Minh Phương"
                className="polaroid-image"
              />
              <div className="polaroid-caption">Chung Bảo & Minh Phương</div>
            </div>
          </div>

          {/* Description bên phải */}
          <div className="about-right">
            <h2 className="about-title">Về Chúng Mình</h2>
            <div className="about-subtitle">
              <span className="subtitle-name">Chung Bảo</span>
              <span className="subtitle-separator">&</span>
              <span className="subtitle-name">Minh Phương</span>
            </div>

            <div className="about-description">
              <p className="about-intro">
                Câu chuyện tình yêu của chúng mình bắt đầu từ những ngày còn
                ngồi trên ghế nhà trường THPT Trần Phú - Hoàn Kiếm. Hai con
                người trẻ tuổi, với đam mê nghệ thuật, đã tìm thấy nhau và cùng
                nhau viết nên câu chuyện tình yêu đẹp nhất.
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-icon">🎵</div>
                  <div className="detail-content">
                    <h3>Chung Bảo - Music Producer</h3>
                    <p>
                      Người đàn ông tài năng với đam mê âm nhạc bất tận. Bảo tin
                      rằng âm nhạc là ngôn ngữ của trái tim, và em chính là giai
                      điệu đẹp nhất trong cuộc đời anh.
                    </p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">💄</div>
                  <div className="detail-content">
                    <h3>Minh Phương - Makeup Artist</h3>
                    <p>
                      Người phụ nữ tài năng với đôi tay ma thuật. Phương biết
                      rằng vẻ đẹp không chỉ là những gì ta nhìn thấy, mà là
                      những gì ta cảm nhận - và anh làm em cảm thấy mình đẹp
                      nhất.
                    </p>
                  </div>
                </div>
              </div>

              <p className="about-conclusion">
                Cả hai đều làm về <strong>nghệ thuật</strong>, làm về{" "}
                <strong>cái đẹp</strong> - như được dành cho nhau từ ngày đầu
                tiên. Producer và makeup artist, âm nhạc và sắc màu, hai linh
                hồn nghệ sĩ đã tìm thấy nhau và tạo nên bản hòa âm tuyệt vời
                nhất của cuộc đời.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Năm bên nhau</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Tình yêu vô tận</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Tình yêu duy nhất</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
