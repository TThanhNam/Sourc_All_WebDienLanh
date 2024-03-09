import React from 'react'
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
   }
}
const CWM = () => {
   return (
      <div>
         <div id='wrapper' style={{ margin: '50px' }} className='wrapper-content'>
            <div id='header'>
               <h3 style={styles.h3Style}>DỊCH VỤ VỆ SINH MÁY GIẶT HOPNHAT CHUYÊN NGHIỆP – Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả</h3>
            </div>
            <h5>
               Sửa máy lạnh khu vực TP.Hồ Chí Minh- hotline: 0365443972
            </h5>
            <hr />
            <center>
               <h2>
                  Niềm tin của bạn
               </h2>
               <h2>
                  Trách nhiệm của chúng tôi
               </h2>
            </center>
            {/* end header */}
            <div className="content" style={styles.content}>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/ve-sinh-may-giat-hanara.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <h2 style={styles.h3Style}>Các mối nguy hiểm nếu bạn không bảo trì, vệ sinh máy giặt thường xuyên: </h2><br />
               <u>Rất nhiều gia đình thường bỏ qua việc vệ sinh máy giặt theo chu kỳ vì nghĩ nó không quan trọng. Trên thực tế đây lại là lý do gây lên rất nhiều tác hại vô cùng nguy hiểm:</u><br />
               <ul>
                  <li><b>Tăng nguy cơ nhiễm khuẩn và vi khuẩn:</b> Nếu không được vệ sinh định kỳ, các vi khuẩn và nấm mốc có thể phát triển trong máy giặt, gây ra mùi hôi khó chịu và tăng nguy cơ nhiễm khuẩn cho quần áo của bạn.
                  </li>
                  <li><b>Hỏng hóc và giảm tuổi thọ của máy giặt:</b> Cặn bẩn tích tụ trong máy giặt có thể làm tắc nghẽn các bộ phận cơ khí và ống dẫn nước. Điều này có thể gây ra các vấn đề về hoạt động của máy giặt và giảm tuổi thọ của nó, đồng thời tăng chi phí sửa chữa hoặc thay thế.</li>
                  <li><b>Mất hiệu suất giặt:</b> Máy giặt bị ô nhiễm có thể không hoạt động hiệu quả như mong đợi. Nước giặt có thể không được phân phối đều, hoặc quá trình giặt có thể không diễn ra đúng cách, dẫn đến việc quần áo của bạn sẽ không được vệ sinh kỹ lưỡng.</li>
                  <li><b>Tác động đến sức khỏe:</b> Mùi hôi và vi khuẩn có thể gây ra các vấn đề về sức khỏe như dị ứng và kích ứng da, đặc biệt đối với những người có da nhạy cảm.
                  </li>
                  <li>Ngoài ra máy móc sẽ có tuổi thọ nhất định nếu bạn không bảo trì, vệ sinh thường xuyên sẽ dẫn đến thiết bị làm việc quá tải có thể gây ra tình trạng hỏng hóc, chập điện hay cháy nổ
                  </li>
               </ul>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/dich-vu-ve-sinh-may-giat-quan-2-2.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h3><b>Bảng giá vệ sinh máy giặt tại nhà</b></h3>
               <b>Giá vệ sinh máy giặt cửa trên:</b>
               <table className='your-table-class'>
                  <tr>
                     <th>Số KG</th>
                     <th>Đơn Giá</th>
                  </tr>
                  <tr>
                     <td>5kg – 7kg</td>
                     <td>350.000 đ</td>
                  </tr>
                  <tr>
                     <td>8kg – 9 kg</td>
                     <td>450.000 đ</td>
                  </tr>
                  <tr>
                     <td>10kg – 12 kg</td>
                     <td>550.000 đ</td>
                  </tr>
                  <tr>
                     <td>13kg – 15kg</td>
                     <td>650.000 đ</td>
                  </tr>
               </table>
               <p>&nbsp;</p>
               <b>Giá vệ sinh máy giặt cửa trước:</b>
               <table className='your-table-class'>
                  <tr>
                     <th>LOẠI MÁY</th>
                     <th>ĐƠN GIÁ</th>
                  </tr>
                  <tr>
                     <td>6kg – 8kg</td>
                     <td>550.000 đ</td>
                  </tr>
                  <tr>
                     <td>9kg – 11 kg</td>
                     <td>650.000 đ</td>
                  </tr>
                  <tr>
                     <td>12kg – 15kg</td>
                     <td>750.000  đ</td>
                  </tr>
                  <tr>
                     <td>Máy giặt lồng ngang có chức năng sấy</td>
                     <td>850.000 đ</td>
                  </tr>
                  <tr>
                     <td>Máy giặt 2 lồng giặt</td>
                     <td>1.650.000 đ</td>
                  </tr>
               </table>
               <div>&nbsp;</div>
               <b>Giá vệ sinh máy sấy:</b>
               <table className='your-table-class'>
                  <tr>
                     <th>LOẠI MÁY</th>
                     <th>ĐƠN GIÁ</th>
                  </tr>
                  <tr>
                     <td>Máy sấy Electrolux</td>
                     <td>350.000 đ</td>
                  </tr>
               </table>
               <p>&nbsp;</p>
               * Đơn giá chưa bao gồm VAT * <br />
               Không áp dụng cho hàng NỘI ĐỊA<br />
               <p />
               <h4><b>Dấu hiệu cần vệ sinh, bảo trì định kì thiết bị?</b></h4>
               <ul>
                  <li>Mùi hôi khó chịu</li>
                  <li>Nước dơ hoặc cặn bẩn trong máy</li>
                  <li>Tiếng ồn hoặc rung lắc không bình thường</li>
                  <li>Nước dư thừa sau mỗi lần giặt</li>
                  <li>Hiệu suất giặt giảm đi đáng kể</li>
               </ul>
               <h5><b>Cần bảo trì máy giặt thì liên hệ ngay Hợp Nhất</b></h5>
               Với nhiều năm kinh nghiệm trong lĩnh vực điện lạnh, sở hữu đội kĩ thuật viên có trình độ cao, chuyên nghiệp, Hợp Nhất là lựa chọn không thể bỏ qua nếu bạn cần dịch vụ vệ sinh, bảo trì máy giặt, chúng tôi cam kết:<br/>
               <ul>
                  <li>Chất lượng dịch vụ hàng đầu</li>
                  <li>Kỹ thuật viên chuyên nghiệp và đáng tin cậy</li>
                  <li>Sử dụng sản phẩm an toàn và hiệu quả</li>
                  <li>Dịch vụ linh hoạt</li>
                  <li>Cung cấp tư vấn và hỗ trợ cho bạn về cách duy trì và bảo quản máy giặt của mình sau khi dịch vụ được hoàn thành.</li>
                  <li>Giá cả hợp lý và minh bạch</li>
               </ul>
               <h4><b>Thông tin liên hệ</b></h4>
               Liên hệ ngay với Hanara để đặt lịch hẹn và trải nghiệm dịch vụ vệ sinh máy giặt chất lượng cao của chúng tôi ngay hôm nay!<br />
               <ul>
                  <li>Trung tâm điện lạnh Hanara – Số 34/3 Đường số 7, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí Minh</li>
                  <li>Mã số thuế : 0317240547</li>
                  <li>Hotline: 077 2424 888</li>
                  <li>Website: www.hanara.vn</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default CWM
