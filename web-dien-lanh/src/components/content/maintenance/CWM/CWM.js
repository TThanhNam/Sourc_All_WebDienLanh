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
         <div id='wrapper' style={{ margin: '50px' }}>
            <div id='header'>
               <h3 style={styles.h3Style}>DỊCH VỤ VỆ SINH MÁY GIẶT HANARA CHUYÊN NGHIỆP – Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả</h3>
            </div>
            {/* end header */}
            <div className="content" style={styles.content}>
               <i>Quần áo khi giặt vẫn bị ám mùi khó chịu dù đã dùng nước xả vải? Máy giặt ngày càng hoạt động càng kém? Bạn có đang gặp những tình trạng tương tự? Vậy đây chính là dấu hiệu cho thấy máy giặt của bạn cần được vệ sinh ngay lập tức. Hãy cùng tìm hiểu về dịch vụ vệ sinh máy giặt của Hanara và những lợi ích mà bạn sẽ nhận được khi sử dụng dịch vụ tuyệt vời này!</i><br />
               <p>&nbsp;</p>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/ve-sinh-may-giat-hanara.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <h2 style={styles.h3Style}>Nguy hiểm tiềm ẩn từ chiếc máy giặt không được vệ sinh</h2><br />
               <u>Rất nhiều gia đình thường bỏ qua việc vệ sinh máy giặt theo chu kỳ vì nghĩ nó không quan trọng. Trên thực tế đây lại là lý do gây lên rất nhiều tác hại vô cùng nguy hiểm:</u><br />
               <ul>
                  <li>Nguồn sinh sản nhiều vi khuẩn gây bệnh: Máy giặt không được vệ sinh thường xuyên sẽ là môi trường lý tưởng để vi khuẩn phát triển, gây nguy cơ lây nhiễm và các bệnh tật như tiêu chảy, viêm đường hô hấp, và dị ứng da. nếu không được làm sach thường xuyên, máy giặt sẽ trở thành nguồn lây lan vi khuẩn và vi rút từ quần áo bẩn sang quần áo sạch và ảnh hưởng trực tiếp đến sức khỏe của gia đình.</li>
                  <li>Làm giảm tuổi thọ thiết vị, gây tốn năng lượng: Không thường xuyên vệ sinh khiến máy giặt xuất hiện cặn bẩn và mảng bám dày đặn làm giảm hiệu quả hơn và tuổi thọ của máy. Đây cũng là nguyên nhân khiến cho tiền điện máy giặt mỗi thắng tăng lên chóng mặt.</li>
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
               <h4><b>5 cái nhất của Hanara – không đối thủ nào có được?</b></h4>
               <i>Trong suốt thời gian hoạt động, Hanara luôn tự hào là đối tác tin cậy của hàng trăm hộ gia đình trên khắp địa bàn TP. HCM. Khi sử dụng dịch vụ vệ sinh máy giặt của chúng tôi, bạn sẽ được cảm nhận 5 ưu điểm vượt trội sau:</i><br />
               <h5><b>Dịch vụ vệ sinh – bảo dưỡng máy giặt chất lượng cao</b></h5><br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/z3751278336409_34aefdbaba680f903015d99084514a9b-1152x1536.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Kỹ thuật viên sửa chữa – bảo dưỡng máy giặt hơn 10+ năm kinh nghiệm</b></h5>
               Hanara sở hữu đội ngũ kỹ thuật viên giàu kinh nghiệm, với hơn 10 năm hoạt động trong lĩnh vực vệ sinh máy giặt. Họ không chỉ là những chuyên gia đáng tin cậy mà còn có nguồn kiến thức sâu về cách vận hành và bảo dưỡng máy giặt từ các thương hiệu nổi tiếng.<br />
               Họ đã gặp và xử lý rất nhiều vấn đề khác nhau, từ những vấn đề nhỏ nhất đến những sự cố phức tạp. Do đó, bạn có thể hoàn toàn yên tâm rằng máy giặt của bạn sẽ được chăm sóc và xử lý một cách chuyên nghiệp và hiệu quả nhất.<br />
               Không chỉ giỏi về kỹ thuật, đội ngũ kỹ thuật viên của chúng tôi còn mang trong mình tinh thần phục vụ tận tâm và chu đáo. Họ luôn lắng nghe và tư vấn khách hàng một cách cẩn thận, đồng thời giải đáp mọi thắc mắc một cách nhanh chóng và chính xác. Đội ngũ kỹ thuật viên của Hanara.vn cam kết mang đến sự hài lòng tuyệt đối cho khách hàng thông qua chất lượng dịch vụ và kỹ năng chuyên môn vượt trội.<br />
               <br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/z4002810867561_009ebb27459a0321b894ade873f9fc69.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <br />
               <h5><b>Bảo vệ máy giặt và kéo dài tuổi thọ</b></h5>
               Việc thường xuyên vệ sinh và bảo dưỡng máy giặt không chỉ giúp cho máy hoạt động hiệu quả mà còn giúp kéo dài tuổi thọ của nó. Khi sử dụng dịch vụ vệ sinh máy giặt của Hanara, bạn sẽ giảm thiểu nguy cơ hỏng hóc và sự cố về kỹ thuật, từ đó giữ cho máy luôn trong tình trạng tốt nhất. Với quy trình vệ sinh sâu và sử dụng các chất tẩy rửa và khử mùi chuyên nghiệp, máy giặt của bạn sẽ không chỉ trở nên sạch sẽ mà còn giúp khử mùi hiệu quả.<br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/bao-tri-bao-duong-ve-sinh-may-giat.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <br />
               <h5><b>Giá cả vệ sinh máy giặt siêu hời trên khắp thị trường</b></h5>
               Hanara cam kết mang đến cho khách hàng những trải nghiệm tốt nhất với mức giá phải chăng. Với mong muốn xây dựng mối quan hệ lâu dài và bền vững với khách hàng, Hanara luôn đặt lợi ích của khách hàng lên hàng đầu và đảm bảo cung cấp dịch vụ vệ sinh máy giặt với chất lượng và mức giá hợp lý nhất.<br />
               Ngoài việc giữ cho giá cả cạnh tranh, chúng tôi cũng đảm bảo tất cả quy trình thanh toán luôn được thực hiện minh bạch. Cam kết 100% không có phí ẩn hay chi phí không cần thiết. Khách hàng hoàn toàn yên tâm với việc sử dụng dịch vụ vệ sinh máy giặt với sự công khai và trung thực. Với Hanara, mỗi đồng tiền bạn chi ra đều được đáp trả bằng sự hài lòng xứng đáng.<br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/gia-ve-sinh-may-giat.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Bảo hành an toàn sau vệ sinh</b></h5>
               Hanara có chính sách bảo hành từ 3 đến 6 tháng cho tất cả các dịch vụ vệ sinh máy giặt. Nếu có bất kỳ sự cố hoặc vấn đề nào xảy ra với máy giặt của bạn sau khi sử dụng dịch vụ của chúng tôi, chúng tôi sẽ đáp ứng và giải quyết nhanh nhất.<br />
               <h5><b>Quy trình vệ sinh máy giặt tại Hanara</b></h5>
               Quy trình làm sạch máy giặt tại Hanara được các kỹ thuật viên tuân thủ nghiêm ngặt theo các bước dưới đây:<br />
               <p>&nbsp;</p>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/quy-trinh-ve-sinh-may-giat-tai-hanara.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <h5><b>Bước 1: Đánh giá tình trạng máy giặt.</b></h5>
               Sau khi nhận được yêu cầu từ khách hàng, chuyên viên của Hanara sẽ lên lịch hẹn và đến nhà để khảo sát và đánh giá tình trạng của máy giặt. Sau đó sẽ đưa ra đề xuất về phương pháp xử lý và báo giá chi tiết.<br />
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/buoc-1-kiem-tra-may-giat.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Bước 2: Thực hiện vệ sinh máy giặt.</b></h5>
               Sau khi khách hàng đồng ý với các đề xuất trên. Đội ngũ kỹ thuật viên của Hanara sẽ tiến hành thực hiện vệ sinh máy giặt theo các bước như sau:<br/><p/>
               <h5><b>Vệ sinh bên ngoài máy giặt.</b></h5>
               Phần thân vỏ, nắp máy, bảng điều khiển và tùy chọn sẽ được vệ sinh sạch sẽ, trả loại vẻ sáng bóng như mới và tính thẩm mỹ vốn có cho chiếc máy.<br/><p/>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/ve-sinh-ben-ngoai-may-giat.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Vệ sinh bên trong máy giặt.</b></h5>
               Để vệ sinh bên trong, các chuyên viên sẽ sử dụng các công cụ chuyên dụng tháo rời lồng giặt và mâm giặt như sau:<br/>
               <ul>
                  <li>Lòng giặt, được tháo rời ra khỏi máy giặt. Chúng được làm sạch với sự hỗ trợ của vòi phun nước áp suất cao và các loại hóa chất tẩy rửa, diệt khuẩn chuyên dụng. Sau khi hoàn tất quá trình vệ sinh, mâm giặt sẽ được phơi khô ở nơi khô ráo thoáng mát.</li>
                  <li>Mâm giặt bên trong cũng được vệ sinh sạch sẽ bụi bẩn bằng các loại bàn chải và hóa chất tẩy rửa.</li>
                  <li>Tháo lưới lọc bên trên thân lòng giặt, loại bỏ cặn vải, bụi bẩn và đem hong khô.</li>
               </ul>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/ve-sinh-ben-trong-may-giat.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Vệ sinh bên trong máy giặt.</b></h5>
               Vệ sinh máy giặt tại Hanara là một quá trình làm sạch toàn diện đến những chi tiết nhỏ nhất. Ngoài các bộ phận chính, thì các thiết bị dù nhỏ nhất cũng được chúng tôi làm sạch:<br/>
               <ul>
                  <li>Khay đựng nước xả vải và nước giặt</li>
                  <li>Miếng gioăng cao su thành máy giặt được khử trùng bằng giấm, baking soda hoặc các loại hóa chất chuyên dụng nếu có quá nhiều vết bẩn cứng đầu.</li>
                  <li>Ống xả và bộ phận lọc nước cũng sẽ được vệ sinh hoặc thay mới toàn bộ.</li>
                  <li>Ron cao su và ốc vít rỉ sét sẽ được thay mới nếu cần</li>
               </ul>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/tien-hanh-ve-sinh-may-giat-ty-my.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h5><b>Bước 3: Kiểm tra lại hoạt động của máy giặt sau khi vệ sinh.</b></h5>
               Khi đã hoàn tất quá quá trình vệ sinh, các bộ phận đã được phơi khô và khử trùng. Sau đó, các chuyên viên của Hanara sẽ thực hiện việc lắp ráp máy giặt trở lại nguyên hiện trạng như ban đàu. Sau khi lắp đặt hoàn tất, máy giặt sẽ được khởi động và kiểm tra lại tất cả công năng.<br/>
               <p/>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/sau-khi-ve-sinh-may-giat.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h3><b>Trung Tâm Điện Lạnh Havara cam kết hoàn trả 100% chi phí nếu khách hàng không hài lòng</b></h3>
               Khách hàng sẽ kiểm tra, nghiệm thu và tiến hành thanh toán. Trong suốt quá trình nghiệm thu và kiểm tra, nếu phát hiện bất kỳ sai sót hoặc máy giặt không hoạt động hiệu quả, Hanara sẽ không nhận bất kỳ khoản thanh toàn nào hoặc hoàn trả 100% chi phí mà đã thanh toàn trước đó.<br/>
               <p/>
               <div id="main" style={styles.main}>
                  <img style={{ width: '700px', height: '500px' }} src="https://hanara.vn/wp-content/uploads/2023/04/cam-ket-hoan-tra.jpg" alt="Ảnh vệ sinh máy lạnh" title="Ảnh vệ sinh máy lạnh"></img>
               </div>
               <p>&nbsp;</p>
               <h4><b>Thông tin liên hệ</b></h4>
               Liên hệ ngay với Hanara để đặt lịch hẹn và trải nghiệm dịch vụ vệ sinh máy giặt chất lượng cao của chúng tôi ngay hôm nay!<br/>
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
