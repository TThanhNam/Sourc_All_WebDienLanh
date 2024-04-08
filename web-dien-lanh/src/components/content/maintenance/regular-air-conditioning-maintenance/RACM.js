import React from "react";
import './RACM.scss'
import baotrimaylanh from '../../../../images/baotrimaylanh.jpg'
import suamaylanh from '../../../../images/suamaylanh.jpg'
import visao from '../../../../images/visaobaotrimaylanh.jpg'
// RACM = Regular Air Conditioning Maintenance = Bảo trì máy lạnh định kỳ
const RACM = () => {
   return (
      <div className="regular-air-conditioning-maintenance-container col-lg-12 wrapper-content">
         <br />
         <br />
         <div className='title'>DỊCH VỤ VỆ SINH MÁY GIẶT HỢP NHẤT CHUYÊN NGHIỆP – Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả</div>
         <div className='content' style={{ padding: '0' }}>Sửa máy lạnh khu vực TP.Hồ Chí Minh- hotline: 0365443972</div >
         <hr />
         <center>
            <div className="title">
               NHANH CHÓNG – CHÍNH XÁC – CHẤT LƯỢNG
            </div>
            <div className="title" style={{ color: 'red' }}>
               BẢO HÀNH DÀI HẠN
            </div>
            <div className="title">
               CAM KẾT CÔNG KHAI, MINH BẠCH VỀ CHI PHÍ
            </div>
            <br />

            <div>
               <img src={baotrimaylanh} style={{ width: '100%' }} />
            </div>
         </center>
         <div className="regular-air-conditioning-maintenance-content-02">
            <p className="title">Nếu bạn không bảo trì, vệ sinh máy lạnh thường xuyên sẽ dẫn đến:</p>
            <ul className="list-content">
               <li>Tăng nguy cơ hỏng thiết bị: Bụi bẩn và mảng vi khuẩn có thể tích tụ trong máy lạnh từ đó làm giảm hiệu suất hoạt động của máy và tăng nguy cơ hỏng hóc hệ thống.</li>
               <li>Giảm hiệu suất làm lạnh: Khi máy lạnh bị bít kín bởi bụi bẩn, cặn và các tạp chất khác, hiệu suất làm lạnh sẽ giảm</li>
               <li>Tăng chi phí điện năng: Khi máy quá lâu không được vệ sinh và bị bịt kín bởi bụi bẩn làm thiết bị phải tăng năng suất hoạt động từ đó dẫn đến lượng điện tiêu thụ nhiều hơn.</li>
               <li>Gây hại cho sức khỏe: Máy lạnh không được vệ sinh định kỳ trở thành nơi phát triển của vi khuẩn, nấm mốc và các chất độc hại khác, gây ra các vấn đề về sức khỏe như dị ứng, viêm phổi, hoặc các vấn đề hô hấp khác.</li>
            </ul>
         </div>
         <div>
            <img src={suamaylanh} style={{ width: '100%' }} />
         </div>
         <div className="regular-air-conditioning-maintenance-content-03">
            <p className="title"><b>Sau đây là những dấu hiệu bạn cần phải vệ sinh máy lạnh của mình:</b></p>
            <ul className="list-content">
               <li>Không làm lạnh hiệu quả</li>
               <li>Tiếng ồn lớn</li>
               <li>Mùi khó chịu</li>
               <li>Dòng khí không mạnh</li>
               <li>Tăng tiêu thụ điện năng</li>
               <li>Ngưng hoạt động đột ngột</li>
            </ul>
         </div>
         <div>
            <img src={visao} style={{ width: '100%' }} />
         </div>
         <p className="content">
            <i>Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trình độ chuyên môn cao, Hanara cam kết cung cấp dịch vụ bảo trì
               máy lạnh tối ưu cho khách hàng của mình. Chúng tôi không chỉ giúp giữ cho máy lạnh hoạt động hiệu quả mà còn
               tăng cường tuổi thọ của máy, giảm thiểu sự cố và sửa chữa.</i>
         </p>
         <p className="title">
            Cần bảo trì máy lạnh thì liên hệ ngay Hợp Nhất
         </p>
         <p className="content">
            Với nhiều năm kinh nghiệm trong lĩnh vực điện lạnh, sở hữu đội kĩ thuật viên có trình độ cao, chuyên nghiệp, Hợp Nhất là lựa chọn không thể bỏ qua nếu bạn cần dịch vụ vệ sinh, bảo trì máy lạnh, chúng tôi cam kết:
         </p>
         <ul className="list-content">
            <li>Chất lượng dịch vụ hàng đầu</li>
            <li>Kỹ thuật viên chuyên nghiệp và đáng tin cậy</li>
            <li>Sử dụng sản phẩm an toàn và hiệu quả</li>
            <li>Dịch vụ linh hoạt</li>
            <li>Cung cấp tư vấn và hỗ trợ cho bạn về cách duy trì và bảo quản máy giặt của mình sau khi dịch vụ được hoàn thành.</li>
            <li>Giá cả hợp lý và minh bạch</li>
         </ul>
         <p className='content'><b>Thông tin liên hệ</b></p>
         <p className='content'>Liên hệ ngay với Hanara để đặt lịch hẹn và trải nghiệm dịch vụ vệ sinh máy giặt chất lượng cao của chúng tôi ngay hôm nay!</p>
         <ul className='list-content'>
            <li>Địa chỉ: 419/15 Tô Ngọc Vân Tam phú Thủ Đức</li>
            <li>Hotline: 0365443972</li>
            <li>Zalo: 0365443972 (kỹ thuật trưởng)</li>
            <li>Email: info@hopnhat.com</li>
            <li>Thứ 2 – chủ nhật: 6h-22h</li>
            <li>Facebook: <a href="https://www.facebook.com/hop.dang.96930?mibextid=ibOpuV">Hợp Nhất</a></li>
         </ul>
      </div>
   );
};
export default RACM;