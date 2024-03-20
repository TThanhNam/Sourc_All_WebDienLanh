import React from 'react'
import './AirConditionerRepairing.scss'
import bamer01 from '../../../../images/banner-sua-chua-02.jpg'
const AirConditionerRepairing = () => {
   return (
      <div className='air-conditioner-repairing-container col-lg-12 wrapper-content'>
         <br />
         <br />
         <div className='title'>
            Dịch vụ sửa chữa máy lạnh tại nhà giá rẻ-chất lượng cao
         </div>
         <div className='content' style={{ padding: '0' }}>
            Sửa máy lạnh khu vực TP.Hồ Chí Minh- hotline: 0365443972
         </div>
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
               <img src={bamer01} style={{ width: '100%' }} />
            </div>
         </center>
         <div>
            <br />
            <p className='content'>
               Với khí hậu miền Nam nói chung và thành phố Hồ Chí Minh nói riêng luôn trong tình trạng oi bức thì
               máy lạnh đã trở thành một thiết bị quen thuộc của đa số hộ gia đình. Tuy nhiên trong
               quá trình sử dụng sẽ không tránh khỏi việc thiết bị gặp sự cố, với người không có kinh nghiệm
               thì việc tự sửa chữa là điều không thể và tìm một chỗ sửa chữa uy tín thì lại càng khó khăn hơn.
               Điện lạnh HN với nhiều năm kinh nghiệm là một nơi uy tín mà bạn không thể bỏ qua, chúng tôi
               cam kết về chất lượng dịch vụ sẽ đem lại sự hài lòng cho khách hàng.
            </p>
         </div>
         <div className='air-conditioner-content-02'>
            <p className='title'>
               #Nên chọn dịch vụ điện lạnh HOPNHAT vì:
            </p>
            <ul className='list-content'>
               <li>Dịch vụ nhanh chóng và tiện lợi</li>
               <li>Phục vụ 24/24 ( hoạt động cả cuối tuần )</li>
               <li>Kỹ thuật viên có kiến thức, trình độ chuyên môn khắc phục tình trạng đơn giản đến phức tạp</li>
               <li>Giá niêm yết công khai</li>
               <li>Cam kết thay lắp linh kiện chính hãng</li>
               <li>Nhận sửa chữa các dòng máy lạnh: tất cả các dòng từ đời cũ đến đời mới.</li>
               <li>Chế độ bảo hành: 6-12 tháng</li>
               <li>Là đơn vị sửa chữa tại nhà tận tâm, nhiệt tình với kim chỉ Nam là sự hài lòng của khách hàng</li>
            </ul>
            <br />
            <p className='title'>
               #Những sự cố thường ở máy lạnh có thể tìm đến dịch vụ sửa chữ:
            </p>
            <ul className='list-content'>
               <li>Máy lạnh bị chảy nước</li>
               <li>Máy lạnh hoạt động phát ra âm thanh to</li>
               <li>Cục lạnh (dàn lạnh), Cục nòng (dàn nóng) phát ra tiếng ồn</li>
               <li>Máy lạnh không lạnh dù đã điều chỉnh đúng chế độ</li>
               <li>Máy lạnh không hoạt động bất kì chức năng gì.</li>
               <li>Cục nóng, cục lạnh không hoạt động, không quạt..</li>
               <li>Máy điều hòa bị xì gas.</li>
               <li>Máy điều hòa không nhận tín hiệu điều khiển, báo lỗi bo mạch.</li>
               <li>Block điều hòa không hoạt động</li>
               <li>Sửa điều hòa quá lạnh so với nhiệt độ điều chỉnh</li>
               <li>Máy không chảy nước ra ống dẫn nước.</li>
               <li>Máy lạnh rỉ nước trực tiếp.</li>
               <li>Máy lạnh không lạnh, kém lạnh</li>
            </ul>
            <br />
            <p className='title'>
               #Ngoài ra một số nguyên nhân khác khiến máy lạnh bị hư như:
            </p>
            <ul className='list-content'>
               <li>Máy lạnh xì giàn</li>
               <li>Máy lạnh thiếu gas, mục đồng</li>
               <li>Máy nén không chạy, quạt chạy</li>
               <li>Máy hoạt động nhưng không lạnh</li>
               <li>Áp suất hút thấp hoặc cao</li>
               <li>Máy lạnh xì gas</li>
            </ul>
            <p className='title'>
               #Quy trình nhận và sửa máy lạnh tại nhà
            </p>
            <ul className='list-content' style={{ listStyle: 'none' }}>
               <li>1. Tiếp nhận thông tin:</li>
               <div className='content' style={{ marginLeft: '10px' }}>
                  Bạn có thể liên hệ với HN qua hotline hoặc zalo, sau đó kĩ thuật viên sẽ tư vấn sơ bộ và hẹn thời gian khảo sát tổng quan về thiết bị tại nhà
               </div>
               <li>2. Kiểm tra sơ bộ và tư vấn</li>
               <div className='content' style={{ marginLeft: '10px' }}>
                  Sau khi lắng nghe các vấn đề về thiết bị từ khách hàng nhân viên sẽ tư vấn tổng thể
               </div>
               <li>3. Báo lỗi và chi phí</li>
               <div className='content' style={{ marginLeft: '10px' }}>
                  Nhân viên kỹ thuật sẽ kiểm tra máy sau đó dựa vào mức độ gặp sự cố báo chi phí dựa trên bảng giá
               </div>
               <li>4. Tiến hành sữa chữa</li>
               <div className='content' style={{ marginLeft: '10px' }}>
                  Tiến hành sữa chữa theo đúng yêu cầu kỹ thuật
               </div>
               <li>5. Kiểm tra lại, bàn giao và thanh toán</li>
               <div className='content' style={{ marginLeft: '10px' }}>
                  Khi hoàn tất việc sửa chữa kĩ thuật viên sẽ kiểm tra vận hành trước bàn giao sau đó sẽ viết hóa đơn thanh toán
               </div>
               <li>6. Bảo hành hậu mãi</li>
               <div className='content' >
                  Đưa phiếu bảo hành có thời hạn 6-12 tháng cho khách hàng
               </div>
            </ul>
         </div>
         <br />
         <div className='air-conditioner-content-03'>
            <center>
               <h2>
                  Bảng giá dịch vụ tại HOPNHAT
               </h2>
               <br />
               <table className='table' style={{ height: '1797px', width: '93.4728%', borderCollapse: 'collapse', borderColor: '#070708' }} border="đen đậm" cellSpacing="không">
                  <tbody>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '3.97598%', height: '100px' }} rowSpan={2} />
                        <td style={{ width: '19.4816%', height: '100px' }} rowSpan={2}><span style={{ color: '#0000ff' }}><strong>PHỤ THÙNG THAY THẾ</strong></span></td>
                        <td style={{ width: '9.33424%', height: '50px' }}><span style={{ color: '#0000ff' }}><strong>&nbsp; CÔNG SUẤT&nbsp;</strong></span></td>
                        <td style={{ width: '36.4505%', height: '50px' }}><span style={{ color: '#0000ff' }}><strong>&nbsp;ĐƠN GIÁ&nbsp;</strong></span></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '9.33424%', height: '50px' }}><span style={{ color: '#0000ff' }}><strong>&nbsp; &nbsp; &nbsp; &nbsp; HP</strong></span></td>
                        <td style={{ width: '36.4505%', height: '50px' }}><span style={{ color: '#0000ff' }}><strong>&nbsp;VẬT TƯ + CÔNG&nbsp;</strong></span></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '3.97598%', height: '700px' }} rowSpan={14}><span style={{ color: '#0000ff' }}><strong><span style={{ fontSize: '120%' }}>DÀN LẠNH</span></strong></span></td>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa mất nguồn, chập/hở mạch</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>390.000 – 590.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa board dàn lạnh (mono)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>490.000 – 690.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa board dàn lạnh (inverter)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>690.000 – 1250.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay cảm biến to phòng/dàn</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>490.000 – 690.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay mắt nhận tín hiệu</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>490.000 – 690.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay mô tơ lá đảo gió</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>350.000 – 450.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay tụ quạt dàn lạnh</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>390.000 – 490.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay stato dàn lạnh</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>400.000 – 500.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay mô tơ quạt dàn lạnh (AC)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>790.000 – 1tr2</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay mô tơ quạt dàn lạnh (DC)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>990.000 – 1tr5</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa chảy nước, đọng sương</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>300.000 – 350.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa xì dàn lạnh (hàn)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>790.000 – 990.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa nghẹt dàn (tháo dàn)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>450.000 – 650.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay quạt (lồng sóc)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>450.000 – 650.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '3.97598%', height: '600px' }} rowSpan={12}><span style={{ fontSize: '130%', color: '#0000ff' }}><strong>DÀN</strong> NÓNG</span></td>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa board dàn nóng (inverter)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>750.000 – 950.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay tụ quạt dàn nóng</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>450.000 – 480.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay tụ ( Kapa đề block)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>490.000 – 590.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay stator quạt dàn nóng</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>600.000 – 700.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay cánh quạt dàn nóng</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>490.000 – 690.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay mô tơ quạt dàn nóng</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>690.000 – 890.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Sửa xì dàn nóng (hàn)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>690.000 – 990.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay rơ le bảo vệ block (tẹc mít)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>490.000 – 590.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay terminal nối 3 chân block</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>390.000 – 490.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay bộ dây nối 3 chân lock</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>390.000 – 490.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay khởi động từ (contactor)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>890.000 – 1.000.000</strong></td>
                     </tr>
                     <tr style={{ height: '50px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '50px' }}><strong>Thay block máy lạnh</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '50px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '50px' }}><strong>Liên hệ</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '3.97598%', textAlign: 'center', height: '397px' }} rowSpan={9}><span style={{ color: '#0000ff', fontSize: '130%' }}><b>HỆ THỐNG</b></span></td>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '44px' }}><strong>Sửa nghẹt đường thoát nước</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>150.000 – 300.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '44px' }}><strong>Thay gen cách nhiệt + si</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>50.000 – 90.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '44px' }}><strong>Thay bơm thoát nước rời</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1 – 2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>1.500.000&nbsp;– 1.800.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '132px' }} rowSpan={3}><strong>Nạp ga toàn bộ – R22 (mono)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>390.000 – 590.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1.5</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>490.000 – 590.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>590.000 – 690.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '19.4816%', textAlign: 'center', height: '133px' }} rowSpan={3}><strong>Nạp ga toàn bộ – 410A (inverter)</strong></td>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>690.000 – 790.000</strong></td>
                     </tr>
                     <tr style={{ height: '44px' }}>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '44px' }}><strong>1.5</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '44px' }}><strong>790.000 – 890.000</strong></td>
                     </tr>
                     <tr style={{ height: '45px' }}>
                        <td style={{ width: '9.33424%', textAlign: 'center', height: '45px' }}><strong>2</strong></td>
                        <td style={{ width: '36.4505%', textAlign: 'center', height: '45px' }}><strong>790.000 – 990.000</strong></td>
                     </tr>
                  </tbody>
               </table>
            </center>
            <p>&nbsp;</p>
            <p className='content' style={{ padding: '0' }}><strong><span style={{ color: '#0000ff' }}><em>*LƯU Ý</em> <span style={{ color: '#993300' }}><span style={{ color: '#000000' }}>: </span></span></span></strong>Đây là bảng giá tham khảo để quý khách nắm được chi phí khi sửa chữa. Trong trường hợp thực tế thì việc sửa chữa máy lạnh còn phụ thuộc vào những yếu tố sau:</p>
            <ul className='list-content'>
               <li>Thương hiệu máy lạnh:<strong>&nbsp;Daikin, Mitsubishi, Reetech, Toshiba,</strong>&nbsp;… vì mỗi thương hiệu, mỗi dòng máy lạnh sẽ có cơ cấu máy móc và nguyên vật liệu thay thế khác nhau.</li>
               <li>Dòng máy lạnh: Máy lạnh treo tường, máy lạnh âm trần, máy lạnh công nghiệp,…</li>
               <li>Tình trạng hư hỏng của máy lạnh</li>
            </ul>
         </div>
      </div>
   )
}

export default AirConditionerRepairing
