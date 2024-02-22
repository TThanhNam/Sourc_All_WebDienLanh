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
         <div id="wrapper" style={{ margin: '50px' }}>
            <div id="header">
               <h3 style={styles.h3Style}>Dịch vụ Bảo Trì Máy Lạnh Số 1 Tp.Hồ Chí Minh</h3>
               <h4 style={styles.h4Style}>NHANH CHÓNG – CHÍNH XÁC – CHẤT LƯỢNG</h4>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>BẢO HÀNH DÀI HẠN</h4>
               <h4 style={styles.h4Style}>CAM KẾT CÔNG KHAI, MINH BẠCH VỀ CHI PHÍ</h4>
            </div>
            {/* end header */}
            <div id="main" style={styles.main}>
               <img id="imgRACM" style={styles.imgRACM} src="https://maylanhgiasi.net/data/upload/khi-nao-bao-tri-ve-sinh-may-lanh.JPG" alt="Ảnh bảo trì máy lạnh định kỳ" title="Ảnh bảo trì máy lạnh định kỳ"></img>
            </div>
            <div>
               <b style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>Tiết kiệm điện năng và kéo dài tuổi thọ cho hệ thống máy lạnh doanh nghiệp với dịch vụ bảo trì máy lạnh định kỳ của Hanara</b> <p></p>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li><b>Giúp máy lạnh cải thiện được độ bền.</b></li>
                  <li><b>Tiết kiệm điện năng sử dụng. </b></li>
                  <li><b>Tối ưu hiệu suất của thiết bị, linh kiện trong máy lạnh.</b></li>
                  <li><b>Máy lạnh hoạt động an toàn hơn.</b></li>
                  <li><b>Giúp máy lạnh hoạt động ổn định.</b></li>
                  <li><b>Giúp bảo vệ sức khỏe cho những người xung quanh.</b></li>
                  <li><b>Máy lạnh hoạt động tốt sẽ giúp không khí trong lành và trong sạch, không lo sợ vi khuẩn hay bụi bẩn.</b></li>
               </ul>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>GỌI NGAY: SDT</h4>
            </div>
            <div className="content" style={styles.content}>
               <h4><b>1. Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ.</b></h4>
               <div className="main" style={styles.main}>
                  <img id="imgRACM" style={styles.imgRACM} src="https://dienlanhsapa.com/media/da4jhkvi/dau-hieu-may-lanh-bi-hu-2.jpg?width=640&height=368" alt="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ" title="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ"></img>
               </div>
               Thời gian sử dụng trung bình của một hệ thống máy lạnh là khoản từ 10 đến 15 năm.
               Tuy nhiên trong thực tế, sau khi bắt đầu đưa vào hoạt động, rất nhiều hệ thống máy
               lạnh bắt đầu  xuất hiệu dấu hiệu “lão hóa” từ những năm thứ 3, thứ 4. Điều này,
               không hoàn toàn đến từ chất lượng, thương hiệu của đơn vị sản xuất. Mà phần lớn đến
               từ môi trường, kỹ thuật vận hành.<p></p>
               Chính vì thế công tác bảo trì máy lạnh định kỳ được ví như hoạt động chăm sóc sức khỏe định
               kỳ với mục đích chính là kiểm tra, vệ sinh, phát hiện và khắc phục các sự cố khi mới xuất hiện
               các dấu hiệu hiệu xuống, tiềm ẩn. Hoạt động này sẽ mang lại cho doanh nghiệp những lợi ích như sau: <p></p>
               <h4><b>Đảm bảo an toàn trong hoạt động sản xuất và kinh doanh.</b></h4><p></p>
               Mỗi doanh nghiệp có nhu cầu sử dụng hệ thống máy lạnh khác nhau.
               Tuy nhiên cho dù phục vụ ở lĩnh vực nào đi nữa, thì hệ thống máy lạnh đều vô cùng cần
               thiết trong việc đảm bảo chất lượng không khí, duy trì nhiệt độ và độ ẩm thích hợp.
               Điều đặc biệt thể hiện rõ ở các doanh nghiệp đang kinh doanh trong lĩnh vực nhà hàng, khách sạn,
               công ty sản xuất, kho lạnh, hệ thống siêu thị, khu vui chơi – giải trí…<p></p>
               <h4><b>Nâng cao hiệu suất làm việc.</b></h4><p></p>
               Các số liệu thống kê đã chứng minh rằng, các hệ thống máy lạnh giúp điều hòa không khí,
               góp phần làm giảm căng thẳng mệt mỏi, tăng cường sự tập trung giúp nhân viên làm việc hiệu quả hơn.<p></p>
               <h4><b>Tiết kiệm điện năng tiêu thụ.</b></h4><p></p>
               Bụi bẩn, sự oxy hóa đã làm gia tăng áp lực hoạt động cho phụ tùng và linh kiện cho toàn bộ hệ thống máy.
               Đây là nguyên nhân phổ biến, khiến cho các hệ thống lạnh cũ luôn có tỷ suất tiêu
               thụ điện lớn các hệ thống máy lạnh mới. Vì thế công tác bảo trì máy lạnh sẽ giúp các
               linh kiện của hệ thống máy lạnh luôn được sạch sẽ và bôi trơn, đảm bảo tối hóa lượng điện tiêu thụ.<p></p>
               <h4><b>Tăng bộ bền và kéo dài tuổi thọ cho máy.</b></h4><p></p>
               Công tác bảo trì máy lạnh giúp cho hệ thống lạnh luôn hoạt động trong môi trường tiêu chuẩn,
               hạn chế tối đa các yếu tố làm hao mòn và lão hóa linh kiện do vận hành.
               Từ đó giúp kéo dài tuổi thọ và nâng cao độ bền cho toàn bộ hệ thống.<p></p>
               <h4><b>Hạn chế chi phí sửa chữa.</b></h4><p></p>
               Một trong những nhiệm vụ chủ yếu của công tác bảo trì là kiểm tra,
               phát hiện các dấu hiệu hư hỏng. Bởi 1 lỗi nhỏ nếu không được phát hiện và xử lý kịp thời,
               đều có thể trở thành mồi lửa cho cả đám cháy. Vì thế, không thể lơ là công tác bảo trì,
               đặc biệt đối với các hệ thống máy lạnh lớn.<p></p>
               {/* end 1 */}
               <h4><b>2. Hanara đơn vị hàng đầu chuyên cung cấp dịch vụ bảo trì máy lạnh.</b></h4>
               Là một đơn vị có nhiều kinh nghiệm trong lĩnh vực lắp đặt, sửa chữa điện lạnh. Hanara hiểu rõ vai
               trò của công tác bảo trì đối với “sức khỏe”, “tuổi thọ” của hệ thống máy lạnh.
               Vì thế Trung tâm điện lạnh của Hanara đã thiết kế các gói dịch vụ bảo trì máy lạnh định kỳ
               phù hợp với quy mô hệ và thù của từng đơn vị. Nhằm mục đích hỗ trợ doanh nghiệp tối ưu các khoản mục chi phí,
               gia tăng hiệu suất làm việc và thời hạn sử dụng cho hệ thống lạnh. Gói dịch vụ này sở hữu quy trình bảo trì
               chuẩn quốc tế, nhiều tiện ích nổi bật và ưu đãi đặc biệt như sau.<p></p>
               <div className="main" style={styles.main}>
                  <img id="imgRACM" style={styles.imgRACM} src="https://cdn.tgdd.vn/Files/2022/06/10/1438595/camket-2.jpg" alt="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ" title="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ"></img>
               </div>
               <p></p>
               Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trình độ chuyên môn cao, Hanara cam kết cung cấp dịch vụ bảo trì
               máy lạnh tối ưu cho khách hàng của mình. Chúng tôi không chỉ giúp giữ cho máy lạnh hoạt động hiệu quả mà còn
               tăng cường tuổi thọ của máy, giảm thiểu sự cố và sửa chữa. <p></p>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li>Kỹ thuật viên hỗ trợ đến tận nhà ngay trong vòng 30 phút kể từ khi tiếp nhận yêu cầu dịch vụ bảo trì máy lạnh.</li>
                  <li>Đội ngũ nhân viên tư vấn, kỹ thuật viên nhiều năm kinh nghiệm được đào tạo bài bản sẽ hỗ trợ quý khách tận tình.</li>
                  <li>Trang thiết bị, linh kiện để bảo trì máy lạnh đều tiên tiến và hiện đại nhằm giúp khách hàng tối ưu được thời gian và chi phí.</li>
                  <li>Hanara cung cấp nhiều dịch vụ điện lạnh đa dạng như: Sửa chữa, vệ sinh, bảo trì, tháo lắp, bơm ga máy lạnh và các dịch vụ sửa chữa, vệ sinh máy giặt,…</li>
                  <li>Mọi linh kiện được thay thế cho máy lạnh của Công ty sửa chữa điện lạnh Limosa đều là chính hãng 100%.</li>
                  <li>Công ty sửa chữa điện lạnh Hanara hỗ trợ bảo trì điều hoà của hầu hết các thương hiệu máy lạnh được sử dụng phổ biến hiện nay như: Máy lạnh Panasonic, Toshiba, Daikin, Hitachi, Midea, Samsung, Gree, Electrolux, Nagakawa…</li>
                  <li>Bảng giá dịch vụ bảo trì máy lạnh được Hanara công khai, minh bạch và sẽ không xảy ra tình trạng nhân viên báo giá sai.</li>
                  <li>Chính sách bảo hành dài hạn lên đến 6 tháng.</li>
                  <li>Hoàn tiền 100% trong trường hợp bảo hành máy lạnh nhiều lần mà lỗi vẫn còn phát sinh, chưa thể xử lý dứt điểm.</li>
                  <li>Ưu đãi giá khi khách hàng yêu cầu bảo trì từ 3 máy lạnh trở lên.</li>
               </ul>
               <p></p>
               {/* end 2 */}
               <h4><b>3. Chính sách bảo hành của Hanara.</b></h4>
               Hanara cam kết bảo hành tất cả các lỗi phát sinh sau khi sửa chữa, bảo trì hoặc khi thay mới các linh kiện máy lạnh, điều hòa. <p></p>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li>Hỗ trợ bảo hành máy lạnh, điều hòa tất cả các hãng và loại trên thị trường hiện nay trong thời gian từ <b>3-6 tháng</b> khi khách hàng sử dụng dịch vụ sửa chữa, bảo trì máy lạnh của Hanara.</li>
                  <li>Khi cần yêu cầu bảo hành dịch vụ, khách hàng chỉ cần liên hệ với chúng tôi qua <b>HOTLINE 077 2424 888</b> và cung cấp thông tin, đội ngũ kỹ thuật của Hanara sẽ có mặt để bảo hành sau 30 phút.</li>
                  <li>Hanara chỉ nhận bảo hành máy lạnh đối với các trường hợp được quy định trong chính sách bảo hành, các trường hợp hư hỏng do va đập hay sử dụng sai cách, chúng tôi từ chối bảo hành thiết bị.</li>
               </ul>
               {/* end 3 */}
               <h4><b>4. Quy trình bảo trì máy lạnh định kỳ toàn diện và chuyên nghiệp.</b></h4>
               Hanara tự hào đảm bảo quy trình <b>bảo trì máy lạnh</b> đạt chuẩn và hiệu quả nhất. Dưới đây là quy trình bảo trì đầy đủ từ khi nhận yêu cầu đến khi hoàn thành dịch vụ, giúp khách hàng tại TPHCM có được một trải nghiệm tốt nhất:<p></p>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li><b>Bước 1: Tiếp nhận yêu cầu:</b> Đội ngũ kỹ thuật viên của chúng tôi sẽ tiếp nhận mọi yêu cầu bảo trì máy lạnh từ khách hàng tại TPHCM. Chúng tôi luôn sẵn sàng lắng nghe và đáp ứng mọi nhu cầu của bạn.</li>
                  <li><b>Bước 2: Khảo sát và điều phối kỹ thuật viên:</b> Sau khi tiếp nhận yêu cầu, chúng tôi sẽ điều phối kỹ thuật viên có kinh nghiệm đến tận nơi để khảo sát, sửa chữa và bảo dưỡng máy lạnh của bạn. Điều này giúp đảm bảo chúng tôi hiểu rõ tình trạng máy lạnh và có phương án tốt nhất cho việc bảo trì.</li>
                  <li><b>Bước 3: Đánh giá và khảo sát chi tiết:</b> Kỹ thuật viên của chúng tôi sẽ tiến hành khảo sát chi tiết hệ thống máy lạnh, bao gồm cả khu vực bảo trì. Điều này giúp chúng tôi đánh giá xem liệu có cần sử dụng dàn giáo hoặc thang dây bảo hộ trong quá trình bảo trì hay không, đảm bảo an toàn và chất lượng công việc.</li>
                  <li><b>Bước 4: Báo giá:</b> Dựa trên tình hình khảo sát, kỹ thuật viên sẽ gửi báo giá chi tiết về dịch vụ bảo trì máy lạnh cho bạn. Chúng tôi luôn cam kết đưa ra bảng giá bảo trì máy lạnh minh bạch để đảm bảo sự hài lòng của khách hàng.</li>
                  <li><b>Bước 5: Ký hợp đồng:</b> Sau khi thống nhất mức giá bảo trì máy lạnh và điều khoản dịch vụ, chúng tôi sẽ tiến hành ký hợp đồng bảo trì máy lạnh với bạn. Điều này đảm bảo mọi giao dịch được thực hiện theo quy định và đảm bảo quyền lợi cho cả hai bên.</li>
                  <li><b>Bước 6: Bảo trì máy lạnh:</b> Kỹ thuật viên của chúng tôi sẽ tiến hành bảo trì máy lạnh của bạn với tinh thần chuyên nghiệp và tận tâm. Họ sẽ thực hiện các công việc kiểm tra, làm sạch và điều chỉnh các thành phần cần thiết để đảm bảo máy lạnh hoạt động tốt nhất.</li>
                  <li><b>Bước 7: Vận hành thử và kiểm tra:</b> Sau khi hoàn thành quá trình bảo trì, chúng tôi sẽ thử nghiệm và kiểm tra lại máy lạnh để đảm bảo rằng nó hoạt động tốt và đáp ứng các tiêu chuẩn chất lượng cao nhất.</li>
                  <li><b>Bước 8: Nghiệm thu và hoàn thành dịch vụ:</b> Cuối cùng, chúng tôi sẽ tiến hành nghiệm thu và lập bảng nghiệm thu hoặc xuất hóa đơn thanh toán. Điều này đảm bảo rằng mọi khía cạnh của dịch vụ đã được hoàn thành một cách tin cậy và chuyên nghiệp</li>
               </ul>
               Với quy trình bảo trì điều hòa đạt chuẩn của chúng tôi, Hanara cam kết mang đến cho bạn sự hài lòng và an tâm về việc bảo trì máy lạnh của mình.
               <div className="main" style={styles.main}>
                  <img id="imgRACM" style={styles.imgRACM} src="https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/11184139/image-10-dich-vu-bao-tri-may-lanh-uy-tin-nhat-hien-nay-164965209940769.jpg" alt="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ" title="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ"></img>
               </div>
               <h4><b>5. Các câu hỏi thường gặp.</b></h4>
               <b>Tôi có thể biết trước chi phí bảo trì máy lạnh không?</b><p></p>
               Khách hàng sẽ nhận được bảng báo giá chi tiết cho tất cả các dịch vụ sử dụng.<p></p>
               <b>Có cần phải tắt máy lạnh trước khi kỹ thuật viên đến để kiểm tra và bảo trì không?</b><p></p>
               Tùy vào hệ thống mà đội ngũ kỹ thuật viên sẽ có hướng dẫn chi tiết để khách hàng có sự chuẩn bị tốt nhất.<p></p>
               <b>Cần bảo trì máy lạnh bao nhiêu lần trong 1 năm?</b><p></p>
               Số lần bảo trì tùy thuộc vào độ tuổi, môi trường vận hàng và rất nhiều yếu tố khác. Mỗi hệ thống Hanara sẽ có tư vấn phù hợp, tối ưu và tiết kiệm chi phí nhất.
               <div className="main" style={styles.main}>
                  <img id="imgRACM" style={styles.imgRACM} src="https://glints.com/vn/blog/wp-content/uploads/2022/10/ky%CC%83-na%CC%86ng-cha%CC%86m-so%CC%81c-kha%CC%81ch-ha%CC%80ng-1024x684.jpg" alt="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ" title="Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ"></img>
               </div>
            </div>
            {/* end main */}
            <div id="footer" style={styles.content}>
               TRUNG TÂM ĐIỆN LẠNH HANARA <p></p>

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