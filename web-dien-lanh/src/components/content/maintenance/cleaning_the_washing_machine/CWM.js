import React from 'react'
import cwm_banner from '../../../../images/cwm_banner.jpg'
import './CWM.scss'
import {INFO} from "../../../../share/constance";
const CWM = () => {
   return (
      <div className='cleaning-the-washing-machine-container col-lg-12 wrapper-content'>
         <br />
         <br />
         <div className='title'>DỊCH VỤ VỆ SINH MÁY GIẶT HỢP NHẤT CHUYÊN NGHIỆP – Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả</div>
         <div className='content' style={{ padding: '0' }}>Sửa máy lạnh khu vực TP.Hồ Chí Minh- hotline: {INFO.PHONE_NUMBER}</div >
         <hr />
         <center>
            <div className='title'>
               Niềm tin của bạn
            </div>
            <div className='title'>
               Trách nhiệm của chúng tôi
            </div>
            <br />

            <div>
               <img src={cwm_banner} style={{ width: '100%' }} />
            </div>
         </center>
         <div>
            <br />
            <p className='content'>
               <h3>#Các mối nguy hiểm nếu bạn không bảo trì, vệ sinh máy giặt thường xuyên:</h3>
               <u>Rất nhiều gia đình thường bỏ qua việc vệ sinh máy giặt theo chu kỳ vì nghĩ nó không quan trọng. Trên thực tế đây lại là lý do gây lên rất nhiều tác hại vô cùng nguy hiểm:</u><br />
            </p>
         </div>
         <div className='cleaning-the washing-machine-content-02'>
            <ul className='list-content'>
               <li><b>Tăng nguy cơ nhiễm khuẩn và vi khuẩn:</b> Nếu không được vệ sinh định kỳ, các vi khuẩn và nấm mốc có thể phát triển trong máy giặt, gây ra mùi hôi khó chịu và tăng nguy cơ nhiễm khuẩn cho quần áo của bạn.
               </li>
               <li><b>Hỏng hóc và giảm tuổi thọ của máy giặt:</b> Cặn bẩn tích tụ trong máy giặt có thể làm tắc nghẽn các bộ phận cơ khí và ống dẫn nước. Điều này có thể gây ra các vấn đề về hoạt động của máy giặt và giảm tuổi thọ của nó, đồng thời tăng chi phí sửa chữa hoặc thay thế.</li>
               <li><b>Mất hiệu suất giặt:</b> Máy giặt bị ô nhiễm có thể không hoạt động hiệu quả như mong đợi. Nước giặt có thể không được phân phối đều, hoặc quá trình giặt có thể không diễn ra đúng cách, dẫn đến việc quần áo của bạn sẽ không được vệ sinh kỹ lưỡng.</li>
               <li><b>Tác động đến sức khỏe:</b> Mùi hôi và vi khuẩn có thể gây ra các vấn đề về sức khỏe như dị ứng và kích ứng da, đặc biệt đối với những người có da nhạy cảm.
               </li>
               <li>Ngoài ra máy móc sẽ có tuổi thọ nhất định nếu bạn không bảo trì, vệ sinh thường xuyên sẽ dẫn đến thiết bị làm việc quá tải có thể gây ra tình trạng hỏng hóc, chập điện hay cháy nổ
               </li>
            </ul>
         </div>
         <div className='cleaning-the washing-machine-content-03'>
            <p className='title'>
               <h3><b>Bảng giá vệ sinh máy giặt tại nhà</b></h3>
               <b>Giá vệ sinh máy giặt cửa trên:</b>
            </p>
            <table className='your-table-class table'>
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
            <p className='title'><b>Giá vệ sinh máy giặt cửa trước:</b></p>
            <table className='your-table-class  table'>
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
            <p className='title'><b>Giá vệ sinh máy sấy:</b></p>
            <table className='your-table-class  table'>
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
            <ul className='list-content'>
               <li>Đơn giá chưa bao gồm VAT</li>
               <li>Không áp dụng cho hàng NỘI ĐỊA</li>
            </ul>
         </div>
         <div className='cleaning-the washing-machine-content-04'>
            <p className='title'><b>Dấu hiệu cần vệ sinh, bảo trì định kì thiết bị?</b></p>
            <ul className='list-content'>
               <li>Mùi hôi khó chịu</li>
               <li>Nước dơ hoặc cặn bẩn trong máy</li>
               <li>Tiếng ồn hoặc rung lắc không bình thường</li>
               <li>Nước dư thừa sau mỗi lần giặt</li>
               <li>Hiệu suất giặt giảm đi đáng kể</li>
            </ul>
            <p className='title'><b>Cần bảo trì máy giặt thì liên hệ ngay Hợp Nhất</b></p>
            <p className='content'>

               Với nhiều năm kinh nghiệm trong lĩnh vực điện lạnh, sở hữu đội kĩ thuật viên có trình độ cao, chuyên nghiệp, Hợp Nhất là lựa chọn không thể bỏ qua nếu bạn cần dịch vụ vệ sinh, bảo trì máy giặt, chúng tôi cam kết:<br />

            </p>
            <ul className='list-content'>
               <li>Chất lượng dịch vụ hàng đầu</li>
               <li>Kỹ thuật viên chuyên nghiệp và đáng tin cậy</li>
               <li>Sử dụng sản phẩm an toàn và hiệu quả</li>
               <li>Dịch vụ linh hoạt</li>
               <li>Cung cấp tư vấn và hỗ trợ cho bạn về cách duy trì và bảo quản máy giặt của mình sau khi dịch vụ được hoàn thành.</li>
               <li>Giá cả hợp lý và minh bạch</li>
            </ul>
         </div>
      </div>
   )
}

export default CWM
