import React from 'react'
import './ACC.scss'
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
   imgACC: {
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
   },
   // table,th,td: {
   //   border: '1px solid black'
   // } 
}
const ACC = () => {
   return (
      <div>
         <div id='wrapper' style={{ margin: '50px' }} className='wrapper-content'>
            <div id='header'>
               <h3 style={styles.h3Style}>Dịch Vụ Vệ Sinh Máy Lạnh – Bảo Trì Định Kỳ Uy Tín Số 1 Tp.Hồ Chí Minh</h3>
               <h4 style={styles.h4Style}>NHANH CHÓNG – TIN CẬY – BẢO HÀNH DÀI LÂU</h4>
               <h4 style={styles.h4Style}>CÓ MẶT SAU 30 PHÚT TỪ KHI TIẾP NHẬN CUỘC GỌI</h4>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}><em>CAM KẾT CHI PHÍ THẤP NHẤT THỊ TRƯỜNG</em></h4>
            </div>
            {/* end header */}
            <div id="main" style={styles.main}>
               <img id="imgACC" style={styles.imgRACM} src="https://hanara.vn/wp-content/uploads/2022/10/Banner-ve-sinh-may-lanh.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
            </div>
            <div>
               <p></p>
               <b style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>Bảo Trì, Vệ Sinh Máy Lạnh Trọn Gói Từ A – Z:</b>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li><b>Kiểm tra lượng gas hiện tại trong máy lạnh</b></li>
                  <li><b>Kiểm tra các thiết bị, linh kiện bên trong</b></li>
                  <li><b>Vệ sinh dàn lạnh</b></li>
                  <li><b>Vệ sinh cánh quạt</b></li>
                  <li><b>Vệ sinh dàn nóng</b></li>
                  <li><b>Vệ sinh lưới lọc khí cùng vỏ máy</b></li>
                  <li><b>Kiểm tra lại nguồn điện, dây điện</b></li>
               </ul>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>Hotline Phục Vụ 24/7: SDT</h4>
            </div>
            <div className='content' style={styles.content}>
               <h4><b>Ba mối nguy khi không bảo trì, vệ sinh máy lạnh thường xuyên</b></h4>
               Máy lạnh là thiết bị thiết yếu và không thể thiếu đối với mỗi gia đình hiện đại.
               Nhất là với môi trường có nền nhiệt cao, nóng nực thường xuyên tại Sài Gòn như hiện nay.
               Tuy nhiên, việc sử dụng liên tục trong một thời gian dài cũng dẫn tới tình trạng hao mòn thiết bị
               diễn ra nhanh hơn. Do đó, nếu không được vệ sinh, bảo trì thường xuyên, máy lạnh dễ gây ra các mối
               nguy hại tiềm ẩn, như:<p></p>
               <h5><b>Hao phí điện năng, giảm độ bền</b></h5>
               Nếu nghĩ rằng chỉ khi máy lạnh làm lạnh kém, khởi động chậm hay là kêu to thì mới cần đến việc vệ sinh máy lạnh và bảo dưỡng. Bạn đã nhầm. Nếu chờ đến lúc máy cần phải hoạt động nhiều mới đem đi vệ sinh,
               bảo dưỡng. Bạn càng nhầm. Thực tế cho thấy rằng, nếu như thiết bị của bạn có những dấu hiệu ở trên thì bên trong máy đã gặp phải những trục trặc nghiêm trọng.
               Điều này dễ dẫn đến việc sửa chữa sẽ tốn nhiều thời gian và còn phát sinh thêm nhiều chi phí vì phải thay các linh phụ kiện cho máy. <p></p>
               Nếu để máy lạnh trong một thời gian dài không bảo dưỡng, vệ sinh gì thì bụi bẩn sẽ bị bám vào máy, làm nóng dàn máy. Chính vì thế sẽ khiến quá trình tản nhiệt chậm đi, hao tốn điện năng hơn. Để kéo dài tình trạng này sẽ khiến máy quá tải, thậm chí hỏng luôn máy.
               <h5><b>Nuôi dưỡng mầm bệnh</b></h5>
               Máy điều hòa không chỉ có chức năng làm mát căn phòng của bạn mà còn có tác dụng thanh lọc bầu không khí và loại bỏ những siêu vi khuẩn, nấm mốc siêu nhỏ… Sử dụng trong khoảng thời gian dài, các vi khuẩn, bụi bẩn này sẽ bị tích tụ, cư trú trong các bộ phận của máy.
               Kim loại trên bề mặt của một số dòng máy cũ có thể bị ăn mòn do hơi ẩm và những tác nhân từ bên ngoài.<p></p>
               Chính vì vậy, nếu không vệ sinh máy lạnh đúng cách và thường xuyên, những mảng bám bẩn đó sẽ gây ảnh hưởng đến chất lượng của thiết bị. Bụi bẩn có thể làm quá trình trao đổi nhiệt của dàn nóng và lạnh giảm, khả năng diệt khuẩn của máy lạnh cũng vì thế mà giảm.
               Đặc biệt, ở những dòng máy cũ không có chức năng diệt khuẩn riêng biệt hoặc khả năng diệt khuẩn kém sẽ làm xuất hiện nấm mốc. Đây chính là nguyên nhân khiến người dùng mắc phải các bệnh đường về hô hấp và dị ứng.<p></p>
               <h5><b>Nguy cơ cháy nổ, nguy hiểm tính mạng</b></h5>
               Máy lạnh cũng như các thiết bị khác sử dụng điện trong gia đình như bóng điện, quạt máy, bình tắm nóng lạnh,… đều có tuổi thọ nhất định. Nếu dùng liên tục trong một thời gian dài mà không được bảo trì, vệ sinh thường xuyên và đúng cách thì dễ bị quá tải hệ thống,
               dẫn tới nguy cơ hỏng hóc, chập điện, thậm chí sẽ gây ra cháy nổ khi đang sử dụng.<p></p>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/280405042_124591540227132_7524447282002284683_n-1.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <h4><b>Khi nào nên Vệ sinh máy lạnh, Bảo trì định kỳ?</b></h4>
               Trong quá trình sử dụng, máy lạnh chịu sự tác động của nhiều yếu tố khách quan và chủ quan như bụi bẩn trong không khí, vi khuẩn siêu vi, các loại côn trùng,… dẫn tới thiết bị hao mòn, bám bẩn khá nhiều.<p></p>
               Khi nhận thấy các dấu hiệu bất thường từ máy lạnh gia đình hay công ty như:
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li>Khả năng làm lạnh bị suy giảm</li>
                  <li>Phát ra tiếng kêu to ở cả dàn nóng và dàn lạnh.</li>
                  <li>Dàn lạnh chảy nước và bám tuyết.</li>
                  <li>Tiêu hao nhiều điện năng hơn bình thường.</li>
                  <li>Máy lạnh thường xuyên bị dừng đột ngột khi đang hoạt động.</li>
               </ul>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>Hotline Phục Vụ 24/7: SDT</h4>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/hanara.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <h3><b>Tại sao nên sử dụng dịch vụ bảo trì, vệ sinh máy lạnh Tại <span style={{ color: 'blue' }}>HANARA</span>?</b></h3>
               Với 10 năm kinh nghiệm hoạt động trong lĩnh vực điện lạnh. Sở hữu đội ngũ thợ chuyên nghiệp, lành nghề, có trình độ cao, Hanara luôn là sự chọn hàng đầu của quý khách hàng mỗi khi cần tới <span style={{ color: 'red' }}><b>dịch vụ bảo trì, vệ sinh máy lạnh chuyên nghiệp</b></span> tại Tp.Hồ Chí Minh. Chúng tôi cam kết cung cấp tới quý khách hàng: <p></p>
               <h5><b>Dịch vụ nhanh chóng và linh hoạt.</b></h5>
               Hanara cam kết đến nhà hoặc cơ quan để phục vụ khách hàng <span style={{ color: 'red' }}>chỉ trong 30 phút</span> sau khi xác nhận lịch hẹn.<p></p>
               <h5><b>Tác phong làm việc chuyên nghiệp</b></h5>
               Đội ngũ chuyên viên và kỹ thuật viên của Hanara không chỉ giỏi về chuyên môn và kỹ thuật, mà còn được đào tạo và cập nhật liên tục về các kỹ năng giao tiếp mềm. Chúng tôi luôn đảm bảo làm việc một cách chuyên nghiệp, tôn trọng và lắng nghe mọi ý kiến đóng góp từ khách hàng.<p></p>
               <h5><b>Dọn dẹp sạch sẽ sau khi hoàn tất dịch vụ</b></h5>
               Sau khi vệ sinh máy lạnh và kiểm tra vận hành trơn tru, nhân viên của Hanara cam kết dọn dẹp vệ sinh sạch sẽ nền nhà, tường và các khu vực xung quanh. Chúng tôi chỉ bàn giao công trình sau khi đã hoàn thiện một cách gọn gàng và sạch sẽ nhất.<p></p>
               <h5><b>Tác phong làm việc chuyên nghiệp</b></h5>
               Đội ngũ chuyên viên và kỹ thuật viên của Hanara không chỉ giỏi về chuyên môn và kỹ thuật, mà còn được đào tạo và cập nhật liên tục về các kỹ năng giao tiếp mềm. Chúng tôi luôn đảm bảo làm việc một cách chuyên nghiệp, tôn trọng và lắng nghe mọi ý kiến đóng góp từ khách hàng.<p></p>
               <h5><b>Làm việc sạch sẽ sau khi hoàn tất nhiệm vụ</b></h5>
               Sau khi vệ sinh máy lạnh và kiểm tra vận hành trơn tru, nhân viên của Hanara cam kết dọn dẹp vệ sinh sạch sẽ nền nhà, tường và các khu vực xung quanh. Chúng tôi chỉ bàn giao công trình sau khi đã hoàn thiện một cách gọn gàng và sạch sẽ nhất.<p></p>
               <h5><b>Làm việc sạch sẽ sau khi hoàn tất nhiệm vụ</b></h5>
               Sau khi vệ sinh máy lạnh và kiểm tra vận hành trơn tru, nhân viên của Hanara cam kết dọn dẹp vệ sinh sạch sẽ nền nhà, tường và các khu vực xung quanh. Chúng tôi chỉ bàn giao công trình sau khi đã hoàn thiện một cách gọn gàng và sạch sẽ nhất.<p></p>
               <h5><b>Hỗ trợ khách hàng 24/7</b></h5>
               Hanara có hệ thống hotline hoạt động 24/7 để nhận thông tin và hỗ trợ khách hàng, phục vụ cả trong những ngày lễ, tết và cuối tuần. Dù bạn ở đâu và bất cứ khi nào bạn cần chúng tôi đều có mặt nhanh chóng.<p></p>
               <h5><b>Bảng báo giá được niêm yết minh bạch. Cam kết không phát sinh</b></h5>
               Khách hàng luôn được thông báo về bảng giá chính thức cho từng gói dịch vụ cố định của Hanara. Điều này giúp khách hàng biết chính xác số tiền phải thanh toán. Chúng tôi cam kết <span style={{ color: 'red' }}>nói không với tình trạng chặt chém</span>, giá cả không minh bạch gây thiệt hại cho khách hàng.<p></p>
               <table className='your-table-class'>
                  <thead>
                     <tr>
                        <th>Diễn giải</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td rowSpan={4}><p>Máy lạnh treo tường (1HP-2.5HP)</p></td>
                        <td>Vệ sinh máy lạnh</td>
                        <td>150.000đ</td>
                     </tr>
                     <tr>
                        <td>Xử lý chảy nước</td>
                        <td>350.000đ</td>
                     </tr>
                     <tr>
                        <td>Châm gas bổ sung R22</td>
                        <td>200.000-250.000đ</td>
                     </tr>
                     <tr>
                        <td>Châm gas bổ sung R32,R410a</td>
                        <td>250.000-300.000đ</td>
                     </tr>
                     <tr >
                        <td rowSpan={4} ><p>Máy lạnh âm trần – áp trần – tủ đứng(2.5HP – 5HP)</p></td>
                        <td>Vệ sinh máy lạnh</td>
                        <td>150.000đ</td>
                     </tr>
                     <tr>
                        <td>Xử lý chảy nước</td>
                        <td>350.000đ</td>
                     </tr>
                     <tr>
                        <td>Châm gas bổ sung R22</td>
                        <td>200.000-250.000đ</td>
                     </tr>
                     <tr>
                        <td>Châm gas bổ sung R32,R410a</td>
                        <td>250.000-300.000đ</td>
                     </tr>
                  </tbody>
               </table>
               *Lưu ý: <br />
               – Phí áp dụng 200.000đ/ bộ đối với khách hàng vệ sinh 01 bộ  máy lạnh treo tường . <br />

               –  Quý đối tác là công ty, khách sạn, phòng tập, văn phòng ,… cần bảo trì, bảo dưỡng định kì số lượng nhiều vui lòng liên hệ trực tiếp để báo giá ưu đãi.<br />
               <br />
               <h3><span style={{ color: 'blue' }}><b>Hanara</b></span> Nhận Vệ Sinh, Bảo Trì Tất Cả Các Loại Máy Lạnh.</h3>
               Hanara tự hào là đơn vị chuyên nhận vệ sinh tất cả các loại máy lạnh hiện có trên thị trường. Đội ngũ kỹ thuật viên và chuyên viên của chúng tôi được đào tạo chuyên sâu, có khả năng vệ sinh đầy đủ các dòng máy lạnh với chất lượng và hiệu quả cao.<br/>
               1. <b>Vệ sinh máy lạnh treo tường</b> Hanara cung cấp dịch vụ vệ sinh máy điều hòa treo tường cho gia đình, văn phòng công ty, quán café và các dòng máy có công suất từ 1 đến 2.5hp. Chúng tôi cam kết làm sạch và bảo dưỡng máy lạnh của bạn để nó hoạt động hiệu quả như mới.<br/>
               2. <b>Vệ sinh máy lạnh âm trần</b> Hanara đảm nhận việc vệ sinh tất cả các loại máy lạnh âm trần. Chúng tôi sẽ đưa ra mức giá linh hoạt dựa vào độ cao và độ phức tạp của từng trường hợp cụ thể.
               3. <b>Vệ sinh máy lạnh áp trần:</b> Dành cho các máy lạnh áp trần được sử dụng phổ biến trong biệt thự, văn phòng công ty và khách sạn. Chúng tôi sẽ cung cấp bảng báo giá chi tiết, xem xét các yếu tố như vị trí và thiết bị hỗ trợ (thang dây, dàn giáo) để thực hiện dịch vụ một cách chính xác.<br/>
               4. <b>Vệ sinh máy lạnh tủ đứng:</b> Hanara đảm bảo vệ sinh mọi dòng máy lạnh tủ đứng có công suất từ 3hp đến 5hp. Đội ngũ kỹ thuật viên kinh nghiệm của chúng tôi sẽ làm sạch tận gốc để máy lạnh hoạt động mạnh mẽ và tiết kiệm điện năng.<br/>
               5. <b>Vệ sinh máy lạnh công nghiệp:</b> Ngoài việc nhận vệ sinh máy lạnh cá nhân, Hanara còn chuyên vệ sinh hệ thống máy lạnh công nghiệp có công suất lớn tại các khu công nghiệp, khu chế xuất trên toàn quốc. Chúng tôi đánh giá và báo giá chi tiết tùy thuộc vào quy mô và công suất của hệ thống.<br/>
               <br/>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/bao-tri-may-lanh-1.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <br/>
               Đội ngũ nhân viên của Hanara được đào tạo chuyên nghiệp, có nhiều kinh nghiệm trong lĩnh vực lắp đặt, sửa chữa và bảo trì máy lạnh. Vì vậy, chúng tôi có khả năng vệ sinh tất cả các dòng máy lạnh từ mọi thương hiệu đang có trên thị trường như Panasonic, Electrolux, Daikin, Sanyo, Media, Gree, Reetech, Samsung, Mitsubishi và nhiều hãng máy lạnh khác. Với Hanara, bạn có thể an tâm và tin tưởng vào chất lượng dịch vụ vệ sinh máy lạnh tuyệt vời.<br/>
               <h3><b>Quy trình vệ sinh máy lạnh, bảo trì máy lạnh tại nhà của <span style={{color:'blue'}}>Hanara</span>.</b></h3>
               Sau đây là quy trình vệ sinh máy lạnh đã được chuẩn hóa đến từng giai đoạn. Để khách hàng có thể hình dung khối lượng công việc được thực hiện cụ thể như sau: <br/>
               <li>Bước 1 – Tiếp nhận thông tin và các yêu cầu vệ sinh máy lạnh từ khách hàng.</li>
               <li>Bước 2 – Chuyên viên sẽ đến trực tiếp công trình để kiểm tra, đánh giá tổng quát và đưa ra đề xuất, giải pháp vệ sinh phù hợp.</li>
               <li>Bước 3 – Báo giá trực tiếp với khách hàng.</li>
               <li>Bước 4 – Thợ vệ sinh máy lạnh thực hiện vệ sinh các cục nóng và cục lạnh.</li>
               <li>Bước 5 – Sau khi vệ sinh xong, khởi động máy lạnh để kiểm tra hoạt động của máy.</li>
               <li>Bước 6 – Tư vấn và hướng dẫn khách hàng sử dụng và bảo dưỡng máy lạnh hiệu quả.</li>
               <li>Bước 7 – Viết phiếu bảo hành cho dịch vụ vệ sinh máy lạnh vừa hoàn thành.</li>
               <li>Bước 8 – Sau khi sử dụng dịch vụ tại Hanara. Nếu có bất kỳ vấn đề cần tư vấn hay giải quyết . Công ty sẽ giải quyết cho khách hàng trong 24h.</li>
               <p>&nbsp;</p>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/287610149_138891695463783_6624460123969762579_n.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h3><b>Vệ Sinh Máy Lạnh, Bảo Trì Định Kỳ Bao Lâu Là Tốt Nhất?</b></h3>
               Tùy thuộc vào môi trường và mức độ sử dụng của từng cá nhân, tổ chức, thời gian vệ sinh máy lạnh phù hợp có thể được xác định như sau:<br/>
               <li>Các nhân và các hộ gia đình: Vệ sinh máy lạnh định kỳ khoảng từ 3 đến 4 tháng (nếu máy lạnh hoạt động liên tục); định kỳ từ 6 tháng (nếu máy lạnh chỉ hoạt động từ 6 đến 8 giờ/ngày).</li>
               <li>Nhà hàng, khách sạn, công ty: Vệ sinh máy lạnh định kỳ khoảng 3 tháng/lần.</li>
               <li>Xí nghiệp, khu chế xuất: Vệ sinh máy lạnh định kỳ 1 tháng/lần (nếu máy lạnh hoạt động 24/24).</li>
               Với việc vệ sinh máy lạnh định kỳ, bạn sẽ hưởng lợi từ không khí trong lành, máy lạnh hoạt động hiệu quả và an toàn, đồng thời tiết kiệm chi phí sử dụng máy và bảo vệ sức khỏe cho mọi người.
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/z3773531313491_4e6372481a0df718788742228c7c94e8.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h3><b>Giải Đáp Một Số Vấn Đề Khi Vệ Sinh, Bảo Trì Máy Lạnh.</b></h3><p></p>
               Dưới đây là một số câu hỏi thường gặp khi vệ sinh máy lạnh cùng với câu trả lời từ Hanara:<br/>
               <h4><b>1. Vệ sinh máy lạnh, bảo trì định kì giá bao nhiêu?</b></h4>
               Bảng giá vệ sinh máy lạnh được Hanara niêm yết chi tiết cho từng hạng mục cụ thể. Quý khách hàng cần vệ sinh số lượng nhiều hoặc cần bảo dưỡng định kỳ, vui lòng liên hệ để nhận báo giá ưu đãi nhất.
               <h4><b>2. Phạm vi phục vụ của Hanara?</b></h4>
               Hanara cung cấp dịch vụ vệ sinh máy lạnh, lắp đặt, sửa chữa và bảo trì ở tất cả 24 quận huyện trên toàn Tp. Hồ Chí Minh.
               <h4><b>3. Hanara có xuất hóa đơn VAT hay không?</b></h4>
               Đúng, Hanara là công ty có tư cách pháp nhân, do đó, tất cả các dịch vụ do Hanara cung cấp đều có thể xuất hóa đơn VAT theo yêu cầu của khách hàng.
               <h4><b>4. Đặt dịch vụ vệ sinh, bảo trì máy lạnh thì sau bao lâu nhân viên sẽ tới?</b></h4>
               Sau khi nhận được yêu cầu từ quý khách, các chuyên viên của Hanara sẽ có mặt tại công trình sớm nhất có thể. Thông thường, thời gian phản hồi và xuất phát từ 20 đến 40 phút tùy vào khu vực quận huyện.
               <h4><b>5. Sau khi vệ sinh máy lạnh, bảo trì định kì nếu phát sinh sự cố thì thế nào?</b></h4>
               Mọi sự cố phát sinh sau khi vệ sinh máy lạnh sẽ được Hanara khắc phục trong vòng 24 giờ. Chúng tôi cam kết hỗ trợ khách hàng nhanh chóng và hiệu quả để đảm bảo máy lạnh hoạt động tốt nhất.
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/284646615_134755779210708_8264660842810229417_n-1.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
            </div>
            <div id="footer" style={styles.content}>
               TRUNG TÂM ĐIỆN LẠNH HANARA <p></p>

               Số 34/3 Đường số 7, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí Minh <p></p>

               Hotline: 077 2424 888 <p></p>

               Email: duongmenykv100193@gmail.com <p></p>

               Website:  www.hanara.vn <p></p>
            </div>
         </div>
      </div>
   )
}

export default ACC
