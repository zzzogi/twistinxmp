// import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  // FaEnvelope,
} from "react-icons/fa";
import "./SaveTheDate.css";

const SaveTheDate = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   guests: "1",
  //   attending: "yes",
  //   message: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("RSVP submitted:", formData);
  //   alert("Cảm ơn bạn đã xác nhận tham dự!");
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <section className="savethedate section" id="savethedate">
      <div className="savethedate-overlay"></div>
      <div className="container">
        <h2 className="section-title">Save The Date</h2>
        <p className="section-subtitle">Hãy Đến Và Chúc Phúc Cho Chúng Tôi</p>

        <div className="wedding-info-grid">
          <div className="info-card">
            <div className="info-icon">
              <FaCalendarAlt />
            </div>
            <h3>Ngày Cưới</h3>
            <p className="info-detail">30 Tháng 11, 2025</p>
            <p className="info-sub">Chủ Nhật</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaClock />
            </div>
            <h3>Thời Gian</h3>
            <p className="info-detail">18:00 - 21:00</p>
            <p className="info-sub">Tiệc tối</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Địa Điểm</h3>
            <p className="info-detail">Trung Tâm Tiệc Cưới The One</p>
            <p className="info-sub">
              2 P. Chương Dương Độ, Chương Dương Độ, Hoàn Kiếm, Hà Nội
            </p>
          </div>
        </div>

        <div className="wedding-details">
          <div className="detail-section">
            <h3>Chương Trình</h3>
            <ul className="timeline-list">
              <li>
                <span className="time">18:00</span>
                <span className="event">Đón khách</span>
              </li>
              <li>
                <span className="time">18:30</span>
                <span className="event">Lễ vu quy</span>
              </li>
              <li>
                <span className="time">19:00</span>
                <span className="event">Tiệc cưới</span>
              </li>
              <li>
                <span className="time">20:00</span>
                <span className="event">Gala dinner & Party</span>
              </li>
              <li>
                <span className="time">21:00</span>
                <span className="event">Kết thúc</span>
              </li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Dress Code</h3>
            <p className="dress-code">
              <strong>Semi-formal / Cocktail</strong>
              <br />
              Quý khách vui lòng tránh mặc áo dài trắng và váy trắng
            </p>

            <h3 style={{ marginTop: "30px" }}>Lưu Ý</h3>
            <ul className="notes-list">
              <li>Có bãi đỗ xe miễn phí</li>
              <li>Thang máy cho người già và người khuyết tật</li>
              <li>Khu vực chụp ảnh sẽ được bố trí</li>
            </ul>
          </div>
        </div>

        <div className="map-section">
          <h3>Bản Đồ</h3>
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8383118853544!2d105.8589688!3d21.028529600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0dfc6aa027%3A0xfaddf9cc7059a801!2sThe%20One%20Hanoi%20Wedding%20and%20Convention%20Centre!5e1!3m2!1svi!2s!4v1762531536860!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản Đồ Địa Điểm Cưới"
              ></iframe>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/The+One+Hanoi+Wedding+and+Convention+Centre/@21.0285296,105.8589688,813m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135ab0dfc6aa027:0xfaddf9cc7059a801!8m2!3d21.0285296!4d105.8589688!16s%2Fg%2F11t7f674r0?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Chỉ Đường
          </a>
        </div>

        {/* <div className="rsvp-section">
          <h3>
            <FaEnvelope /> Xác Nhận Tham Dự
          </h3>
          <p>Vui lòng xác nhận tham dự trước ngày 15/11/2025</p>

          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="name">Họ và Tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">Số Người Tham Dự *</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                  <option value="5">5+ người</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="attending">Tham Dự *</label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                >
                  <option value="yes">Có, tôi sẽ đến</option>
                  <option value="no">Rất tiếc, tôi không thể đến</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Lời Nhắn</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Gửi lời chúc tốt đẹp đến cặp đôi..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Xác Nhận Tham Dự
            </button>
          </form>

          <div className="add-to-calendar">
            <p>Thêm vào lịch của bạn:</p>
            <div className="calendar-buttons">
              <button className="calendar-btn google">Google Calendar</button>
              <button className="calendar-btn apple">Apple Calendar</button>
              <button className="calendar-btn outlook">Outlook</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SaveTheDate;
