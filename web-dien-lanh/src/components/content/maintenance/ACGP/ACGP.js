import React from 'react'
import './ACGP.scss'
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
const ACGP = () => {
   return (
      <div>
         <div id="wrapper" style={{ margin: '50px' }}>
            <div id="header">
               <h3 style={styles.h3Style}>Dịch Vụ Nạp Ga Máy Lạnh Uy Tín Số 1 Tp.Hồ Chí Minh</h3>
               <h4 style={styles.h4Style}>NHANH CHÓNG – CHÍNH XÁC – CHẤT LƯỢNG</h4>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>BẢO HÀNH DÀI HẠN</h4>
               <h4 style={styles.h4Style}>CAM KẾT CÔNG KHAI, MINH BẠCH VỀ CHI PHÍ</h4>
            </div>
            {/* end header */}
            <div id="main" style={styles.main}>
               <img id="imgRACM" style={styles.imgRACM} src="https://hanara.vn/wp-content/uploads/2022/10/Bom-gas-may-lanh.png" alt="Ảnh bảo trì máy lạnh định kỳ" title="Ảnh bảo trì máy lạnh định kỳ"></img>
            </div>
            <p>&nbsp;</p>
            <div>
               <b style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>DỊCH VỤ CỦA HANARA:</b> <p></p>
               <ul style={{ fontFamily: 'Time-New-Roman', fontSize: '18px' }}>
                  <li><b>Dịch vụ bơm ga điều hòa thông thường.</b></li>
                  <li><b>Bơm gas điều hòa daikin chống thấm trần nhà.</b></li>
                  <li><b>Bơm ga điều hoa panasonic chống thấm trần nhà.</b></li>
                  <li><b>Bơm ga máy lạnh panasonic âm trần.</b></li>
                  <li><b>Bơm ga máy lạnh r410a, nạp gas r22, bơm gas máy lạnh r32 và hầu hết các dòng máy lạnh SamSung, LG.</b></li>
                  <li><b>Bơm gas điều hòa 12000 btu chống thấm trần nhà.</b></li>
                  <li><b>Cùng nhiều dịch vụ bơm gas điều hòa khác…</b></li>
               </ul>
               <h4 style={{ color: 'red', display: 'flex', margin: '20px', justifyContent: 'center', alignItems: 'center' }}>Hotline 24/7: SDT</h4>
            </div>

            <div className="content" style={styles.content}>
               <h4><b>1. Sự cần thiết của việc thực hiện bảo trì máy lạnh định kỳ.</b></h4>
               Nếu muốn máy lạnh hoạt động hiệu quả nhất thì việc cung cấp đầy đủ lượng gas cần thiết cho máy là một việc làm cực kỳ quan trọng. Vậy khi nào thì nên bơm gas cho máy lạnh. Dưới đây là 1 số trường hợp mà bạn nhất định phải bơm gas máy lạnh:<br />
               1. <b>Chuyển máy lạnh từ nơi này sang nơi khác:</b> Khi tháo lắp, di dời máy lạnh sẽ khiến thiết bị mất mát một lượng khá lớn gas. Vì vậy, bạn cần tiến hành kiểm tra và bơm thêm gas để đảm bảo máy chạy tốt sau khi lắp đặt lại.<br />
               2. <b>Máy lạnh không làm lạnh hoặc làm lạnh yếu:</b> Nếu máy lạnh hoạt động không hiệu quả  hoặc chỉ tạo ra các luồng không khí lạnh yếu, có thể là do lượng gas trong hệ thống không đủ. Bạn cần gọi kỹ thuật viên kiểm tra và bơm thêm gas để khắc phục tình trạng này. <br />
               3. <b>Máy lạnh không hoạt động, nháy đèn báo lỗi: </b> Khi bật máy lạnh mà máy không hoạt động, đèn trên máy nháy hoặc hiển thị báo lỗi. Nguyên nhân có thể là do lượng gas trong hệ thống không ổn định. Bạn cần liên hệ kỹ thuật viên để kiểm tra và bơm gas lại.<br />
               4. <b>Máy lạnh hoạt động liên tục không ngắt hoặc tự động tắt mở:</b> Nếu máy lạnh không ngừng hoạt động mà không tự động ngắt hoặc tắt mở, có thể do thiếu gas. Bạn cần gọi kỹ thuật viên để kiểm tra và điều chỉnh lượng gas trong hệ thống.<br />
               5. <b>Máy lạnh bám tuyết trên ống đồng:</b> Nếu thấy tuyết bám lên ống đồng của máy lạnh, cần kiểm tra ngay vị trí ống đồng bắt vào cục nóng. Nếu có hiện tượng rò rỉ gas, hãy gọi ngay kỹ thuật viên để xử lý và bơm gas mới vào hệ thống.<br />
               6. <b>Máy lạnh chảy nước ở dàn lạnh hoặc dàn nóng mà không có hiện tượng hơi nóng thổi ra:</b> Khi máy lạnh chảy nước mà không có hơi nóng thổi ra, có thể là do lượng gas trong hệ thống không đủ. Cần kiểm tra và bơm thêm gas để máy lạnh hoạt động đúng cách.<br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/9E11B2A2-3410-4339-A264-384089DA8C3B.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <br />
               <h4><b>Vì Sao Nên Sử Dụng Dich Vụ Bơm Ga Máy Lạnh Tại Hanara?</b></h4>
               Harana là trung tâm sửa chữa điện lạnh uy tín với 10 năm hoạt động trong lĩnh vực điện lạnh. Chúng tôi có đội ngũ tay nghề cao & giàu kinh nghiệm, hứa hẹn sẽ mang đến những trải nghiệm dịch vụ tuyệt vời cho quý khách hàng. <br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/z3773533503199_3a3e85e6c76a0fc994af15e3bfc0e30c.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Cam kết đảm bảo chất lượng công việc thực hiện</b></h5><p></p>
               Hanara cam kết đem đến dịch vụ bơm gas máy lạnh với chất lượng hàng đầu, chuyên nghiệp và đáng tin cậy. Đội ngũ kỹ thuật viên của chúng tôi được đào tạo chuyên sâu, có kinh nghiệm và kiến thức vững chắc về hệ thống máy lạnh và gas. Chúng tôi sử dụng các công nghệ tiên tiến và thiết bị hiện đại để đảm bảo quá trình bơm gas được thực hiện một cách an toàn và hiệu quả.<br />
               <h5><b>Bảo hành sản phẩm và dịch vụ sau khi bơm gas máy lạnh</b></h5><p></p>
               Hanara có chính sách bảo hành từ 3 đến 6 thắng cho tất cả sản phẩm và dịch vụ sau khi bơm gas máy lạnh để đảm bảo sự hài lòng của khách hàng. Trong trường hợp có bất kỳ sự cố hay vấn đề nào liên quan đến quá trình bơm gas, chúng tôi sẽ đáp ứng và giải quyết một cách nhanh chóng và hiệu quả. Với chính sách bảo hành của chúng tôi, khách hàng có thể hoàn toàn yên tâm  sử dụng máy lạnh mà không phải lo lắng về các vấn đề liên quan đến gas.<p></p>
               <h5><b>Hỗ trợ khách hàng nhanh chóng trong trường hợp có vấn đề sau dịch vụ</b></h5><p></p>
               Chúng tôi luôn tận tâm và chu đáo trong việc hỗ trợ khách hàng sau khi thực hiện dịch vụ bơm gas máy lạnh. Nếu khách hàng gặp bất kỳ vấn đề nào sau khi sử dụng máy lạnh, chúng tôi sẵn sàng tiếp nhận thông tin phản hồi và yêu cầu hỗ trợ. Đội ngũ chuyên nghiệp của chúng tôi sẽ nhanh chóng đáp ứng và giúp khách hàng giải quyết mọi vấn đề liên quan đến gas máy lạnh.<p></p>
               <h5><b>Bảng báo giá chi tiết công khai, minh bạch</b></h5><p></p>
               Mức giá bảo dưỡng, bơm ga điều hòa phụ thuộc vào mực độ hao hụt của gas và công suất của từng loại máy. Dưới đây là bảng giá Harana cung cấp đến quý khách hàng tham khảo để lựa chọn dịch vụ phù hợp.<p></p>
               <table className='your-table-class'>
                  <tr>
                     <th>Dịch vụ</th>
                     <th>Giá tham khảo</th>
                  </tr>
                  <tr>
                     <td>Máy lạnh thông thường</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Khử trùng máy lạnh trước khi bơm gas</td>
                     <td>100.000 đ</td>
                  </tr>
                  <tr>
                     <td>Bơm Gas R22 cho máy lạnh</td>
                     <td>250.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm Gas R410 cho máy lạnh</td>
                     <td>450.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm Gas R32 cho máy lạnh</td>
                     <td>450.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm gas bổ sung khi gas đã hao hụt 1 nửa</td>
                     <td>Từ 500.000đ</td>
                  </tr>
                  <tr>
                     <td>Giá bơm gas máy lạnh treo tường</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Châm gas bổ sung R22</td>
                     <td>250.000 – 350.000đ</td>
                  </tr>
                  <tr>
                     <td>Châm gas bổ sung R32, R410a</td>
                     <td>300.000 – 400.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm gas hoàn toàn R22</td>
                     <td>650.000 – 1.050.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm gas hoàn toàn R32, R410a</td>
                     <td>850.000 – 1.350.000đ</td>
                  </tr>
                  <tr>
                     <td>Giá bơm gas máy lạnh âm trần – áp trần – tủ đứng</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Châm gas bổ sung R22</td>
                     <td>400.000 – 550.000đ</td>
                  </tr>
                  <tr>
                     <td>Châm gas bổ sung R32, R410a</td>
                     <td>450.000 – 600.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm gas hoàn toàn R22</td>
                     <td>1.050.000 – 1.550.000đ</td>
                  </tr>
                  <tr>
                     <td>Bơm gas hoàn toàn R32, R410a</td>
                     <td>1.350.000 – 1.750.000đ</td>
                  </tr>
               </table>
               <p>&nbsp;</p>
               <h4><b>Quy Trình Bơm Gas Chuyên Nghiệp Tại Harana</b></h4>
               Để nạp gas máy lạnh, các kỹ thuật viên của Harana cần thực hiện các bước sau và chuẩn bị các dụng cụ sau đây:
               <br />
               Dụng cụ cần thiết:
               <ol start={1}>
                  <li>Đồng hồ đo gas</li>
                  <li>Bình gas phù hợp với loại gas máy lạnh đang sử dụng.</li>
                  <li>Đầu nối gas.</li>
                  <li>Đồng hồ kẹp dòng.</li>
                  <li>Mỏ lết.</li>
                  <li>Tua-vít.   </li>
                  <li>Máy hút chân không (nếu cần).</li>
               </ol>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/z3773533412679_0191a75fad61432bf16e7ecce8b4e822-1.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Bước 1: Kiểm tra lượng gas trong máy lạnh và xử lý rò rỉ (nếu có). </b></h5>
               <ul>
                  <li>Sử dụng đồng hồ đo gas để kiểm tra lượng gas còn trong máy lạnh.</li>
                  <li>Nếu phát hiện rò rỉ gas trên ống đồng, xử lý triệt để trước khi nạp gas.</li>
               </ul>
               <h5><b>Bước 2: Hút chân không trong hệ thống máy lạnh.</b></h5>
               <ul>
                  <li>Sử dụng máy hút chân không để loại bỏ toàn bộ không khí trong ống dẫn.</li>
                  <li>Khóa van và tắt máy hút chân không khoảng 30-60 phút, khi đồng hồ đã hạ áp về độ âm.</li>
                  <li>Khi đồng hồ đạt vạch số 0, tức là đã hút hết tạp khí.</li>
               </ul>
               <h5><b>Bước 3: Nạp gas vào máy lạnh. </b></h5>
               <ul>
                  <li>Mở van khóa gas ở đồng hồ và bình gas.</li>
                  <li>Chỉ mở van gas trên đồng hồ từ 15-20 giây và sau đó khóa lại cho đến khi máy báo dòng ở đồng hồ bằng với thông số yêu cầu trên máy lạnh.</li>
               </ul>
               <h5><b>Bước 4: Kiểm tra và hoàn thiện quá trình nạp gas.</b></h5>
               <ul>
                  <li>Lắp lại các bộ phận đã tháo trước đó.</li>
                  <li>Kiểm tra kỹ lưỡng xem hệ thống máy lạnh đã hoạt động chưa và có hiện tượng rò rỉ gas nào không.</li>
               </ul>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/z3773533273587_067557ec18aee91f26b140c96a334c9f.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <h4><b>Hanara Cung Cấp Các Loại Gas Máy Lạnh Nào?</b></h4>
               Hanara cung cấp cho các bạn 3 loại gas máy lạnh phổ biến nhất, giúp đáp ứng đúng nhu cầu và mong muốn của bất kỳ khách hàng nào:<br />
               <h4><b>Gas R22</b></h4>
               Đây là loại gas được chế xuất đơn giản, có giá thành thấp nhất trên thị trường. Loại gas R22 có một số ưu điểm như dễ bảo trì khi bơm thêm gas vào máy lạnh, không độc hại, và không gây cháy nổ. Hơn nữa, loại gas này có giá tương đối rẻ nên được ưa chuộng.<br />
               Tuy nhiên, loại gas này có khả năng gây hại tới tầng ozon, vì vậy theo lộ trình phát triển, chỉ được sử dụng đến năm 2040. Mặc dù không độc, nhưng khi nồng độ gas trong không khí quá cao, nó có thể gây ngạt thở.<br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/dung-cu-can-de-nap-gas-r22-cho-may-lanh.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h4><b>Gas R32</b></h4>
               Sau khi phát minh ra loại gas R32, đây là loại gas mới nhất hiện nay và được ứng dụng sử dụng rộng rãi tại Nhật Bản. Loại gas R32 được phát triển để thay thế cho cả R22 và R410A. Có những ưu điểm vượt trội như sau:<br />
               <ul>
                  <li>An toàn: Gas R32 có tiêu chuẩn khí thải GWP (Global Warming Potential) thấp hơn nhiều lần so với R410A, giúp giảm lượng khí thải đến 75%, hỗ trợ bảo vệ môi trường và giảm hiệu ứng nhà kính.</li>
                  <li>Tiết kiệm điện: Hiệu suất làm lạnh của gas R32 cao hơn R410A và R22, giúp máy lạnh tiết kiệm năng lượng hơn, với thời gian làm lạnh nhanh và mạnh mẽ.</li>
                  <li>Dễ thích ứng: Gas R32 có áp suất tương đương với gas R410A, giúp dễ dàng sử dụng chung với các thiết bị lắp đặt, chỉ cần thay đồng hồ sạc gas và dây nạp gas.</li>
               </ul>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/Dau-hieu-nhan-biet-may-lanh-het-gas-2.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h4><b>Gas R410A</b></h4>
               Gas R410A cũng được phát triển nhằm thay thế cho R22, với mục tiêu giảm thiểu hiệu ứng nhà kính và bảo vệ môi trường. Tuy nhiên, nó có độ bay hơi cao hơn R22, và khi môi trường ở tầm thấp, có thể gây thiếu oxi và nguy hiểm nếu có rò rỉ khí gas. Một số ưu điểm của gas R410A bao gồm:<br />
               <ul>
                  <li>Làm lạnh và năng suất cao hơn R22 1.6 lần.</li>
                  <li>Máy lạnh sử dụng gas R410A có khả năng làm lạnh sâu hơn và tiết kiệm điện hơn so với R22.</li>
                  <li>Không gây thủng tầng ozon, góp phần bảo vệ môi trường.</li>
               </ul>
               Trong quá trình sử dụng và bơm gas máy lạnh, cần chọn loại gas phù hợp để đảm bảo hiệu quả hoạt động và bảo vệ môi trường.
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2022/10/dich-vu-bom-gas-may-lanh-2.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Liên hệ ngay Trung tâm điện lạnh Hanara để được tư vấn dịch vụ 24/7</b></h5>
               <ul>
                  <li>Địa chỉ: 34/3 đường số 7, Phường 3, Quận Gò Vấp, TP. Hồ Chí Minh</li>
                  <li>Hotline: 077 2424 888 </li>
                  <li>Email: dienlanhhanara@gmail.com</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ACGP
