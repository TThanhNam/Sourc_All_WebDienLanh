import React from "react";
import './RACM.scss'

const styles = {
   h3Style: {
      display: 'inline-block',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
   },
   h4Style: {
      display: 'flex',
      margin: '20px',
      justifyContent: 'center',
      alignItems: 'center'
   },
   imgRACM: {
      width: '800px', //rộng
      height: '400px', // cao
   },
   main: {
      display: 'flex',
      justifyContent: 'center'
   },
   content: {
      fontFamily: 'Time-New-Roman',
      fontSize: '18px'
   }
}
// RACM = Regular Air Conditioning Maintenance = Bảo trì máy lạnh định kỳ
const RACM = () => {
   return (
      <div>
         <div id="wrapper" style={{ margin: '50px' }} className="wrapper-content">
            <div id="header">
               <h3 style={styles.h3Style}>Dịch vụ Bảo Trì Máy Lạnh Số 1 Tp.Hồ Chí Minh</h3>
               <h5>
                  Sửa máy lạnh khu vực TP.Hồ Chí Minh- hotline: 0365443972
               </h5>
               <hr />
               <h4 style={styles.h4Style}>NHANH CHÓNG – CHÍNH XÁC – CHẤT LƯỢNG</h4>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>BẢO HÀNH DÀI HẠN</h4>
               <h4 style={styles.h4Style}>CAM KẾT CÔNG KHAI, MINH BẠCH VỀ CHI PHÍ</h4>
            </div>
            {/* end header */}
            <div id="main" style={styles.main}>
               <img id="imgRACM" style={styles.imgRACM} src="https://maylanhgiasi.net/data/upload/khi-nao-bao-tri-ve-sinh-may-lanh.JPG" alt="Ảnh bảo trì máy lạnh định kỳ" title="Ảnh bảo trì máy lạnh định kỳ"></img>
            </div>
            <div>
               <b style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>Nếu bạn không bảo trì, vệ sinh máy lạnh thường xuyên sẽ dẫn đến:</b> <p></p>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li>Tăng nguy cơ hỏng thiết bị: Bụi bẩn và mảng vi khuẩn có thể tích tụ trong máy lạnh từ đó làm giảm hiệu suất hoạt động của máy và tăng nguy cơ hỏng hóc hệ thống.</li>
                  <li>Giảm hiệu suất làm lạnh: Khi máy lạnh bị bít kín bởi bụi bẩn, cặn và các tạp chất khác, hiệu suất làm lạnh sẽ giảm</li>
                  <li>Tăng chi phí điện năng: Khi máy quá lâu không được vệ sinh và bị bịt kín bởi bụi bẩn làm thiết bị phải tăng năng suất hoạt động từ đó dẫn đến lượng điện tiêu thụ nhiều hơn.</li>
                  <li>Gây hại cho sức khỏe: Máy lạnh không được vệ sinh định kỳ trở thành nơi phát triển của vi khuẩn, nấm mốc và các chất độc hại khác, gây ra các vấn đề về sức khỏe như dị ứng, viêm phổi, hoặc các vấn đề hô hấp khác.</li>
               </ul>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>GỌI NGAY: 0365443972</h4>
            </div>
            <div className="content" style={styles.content}>
               <div className="main" style={styles.main}>
                  <img id="imgRACM" style={styles.imgRACM} src="https://dienlanhsapa.com/media/da4jhkvi/dau-hieu-may-lanh-bi-hu-2.jpg?width=640&height=368" alt="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ" title="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ"></img>
               </div>
               <h5><b>Sau đây là những dấu hiệu bạn cần phải vệ sinh máy lạnh của mình:</b></h5>
              <ul>
               <li>Không làm lạnh hiệu quả</li>
               <li>Tiếng ồn lớn</li>
               <li>Mùi khó chịu</li>
               <li>Dòng khí không mạnh</li>
               <li>Tăng tiêu thụ điện năng</li>
               <li>Ngưng hoạt động đột ngột</li>
              </ul>
               <div className="main" style={styles.main}>
                  <img id="imgRACM" style={styles.imgRACM} src="https://cdn.tgdd.vn/Files/2022/06/10/1438595/camket-2.jpg" alt="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ" title="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ"></img>
               </div>
               <p></p>
               <i>Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trình độ chuyên môn cao, Hanara cam kết cung cấp dịch vụ bảo trì
               máy lạnh tối ưu cho khách hàng của mình. Chúng tôi không chỉ giúp giữ cho máy lạnh hoạt động hiệu quả mà còn
               tăng cường tuổi thọ của máy, giảm thiểu sự cố và sửa chữa.</i> <p></p>
               <br/>
               <h5><b>Cần bảo trì máy lạnh thì liên hệ ngay Hợp Nhất</b></h5>
               Với nhiều năm kinh nghiệm trong lĩnh vực điện lạnh, sở hữu đội kĩ thuật viên có trình độ cao, chuyên nghiệp, Hợp Nhất là lựa chọn không thể bỏ qua nếu bạn cần dịch vụ vệ sinh, bảo trì máy lạnh, chúng tôi cam kết: <br/>
               <ul>
                  <li>Chất lượng dịch vụ hàng đầu</li>
                  <li>Kỹ thuật viên chuyên nghiệp và đáng tin cậy</li>
                  <li>Sử dụng sản phẩm an toàn và hiệu quả</li>
                  <li>Dịch vụ linh hoạt</li>
                  <li>Cung cấp tư vấn và hỗ trợ cho bạn về cách duy trì và bảo quản máy giặt của mình sau khi dịch vụ được hoàn thành.</li>
                  <li>Giá cả hợp lý và minh bạch</li>
               </ul>
            </div>
            {/* end main */}
            <div id="footer" style={styles.content}>
               <b>TRUNG TÂM ĐIỆN LẠNH HOPNHAT</b> <p></p>

               Số 34/3 Đường số 7, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí Minh <p></p>

               Hotline: 077 2424 888 <p></p>

               Email: duongmenykv100193@gmail.com <p></p>

               Website:  www.hanara.vn <p></p>
            </div>
            {/* end footer */}
         </div>
      </div>
   );
};
export default RACM;