import React from 'react'
import './RefrigeratorRepairService.scss'
import img1 from '../../../../images/sua-chua-tu-lanh-lien-chieu.jpg'
import {INFO} from "../../../../share/constance";

const RefrigeratorRepairService = () => {
    return (
        <div className="refrigerator-repair-service-container">
            <br />
            <br />
            <div className='title'>
                Dịch vụ sửa chữa tủ lạnh tại nhà giá rẻ-chất lượng cao
            </div>
            <div className='content' style={{ padding: '0' }}>
                Sửa tủ lạnh khu vực TP.Hồ Chí Minh- hotline: {INFO.PHONE_NUMBER}
            </div>
            <hr />
            <br />
            <div style={{ textAlign: 'center' }}>
                <img style={{height: "1000px"}} src={img1}></img>
            </div>
            <div>
                <p className='title'>
                    #Lý do bạn nên sửa tủ lạnh
                </p>
                <p className='content'>
                    Tủ lạnh đã trở thành một thiết bị không thể thiếu của mỗi nhà với công
                    dụng giữ thực phẩm tươi ngon và bảo quản thực phẩm an toàn nhưng khi bạn
                    sử dụng được một thời gian thì sẽ không tránh khỏi việc thiết bị sẽ xảy ra
                    vấn đề, nhẹ thì bạn có thể sữa tại nhà bằng một số phương pháp truyền thống
                    tuy nhiên với các sự cố khó thì bạn hoàn toàn không thể sửa tại nhà nếu bạn không
                    có kỹ thuật. Với đội ngũ kỹ thuật viên chuyên nghiệp và có nhiều kinh nghiệm,
                    Hợp Nhất cam kết mang đến dịch vụ sửa chữa tủ lạnh nhanh chóng, hiệu quả và
                    đáng tin cậy vì Hợp Nhất hiểu rằng sửa chữa tủ lạnh không chỉ là vấn đề kỹ thuật,
                    mà còn là sự đảm bảo cho cuộc sống hàng ngày của bạn. Hãy để chúng tôi giúp bạn
                    tiết kiệm thời gian và tiền bạc bằng cách khắc phục các vấn đề kỹ thuật một cách chuyên nghiệp nhất!
                </p>
            </div>
            <div>
                <p className='title'>
                    #Bạn nên chọn chúng tôi vì
                </p>
                <ul className='list-content'>
                    <li>Với nhiều năm kinh nghiệm trong lĩnh vực điện lạnh</li>
                    <li>Cam kết linh kiện chính hãng 100%</li>
                    <li>Giải pháp toàn diện để tăng hiệu suất và độ bền cho tủ lạnh</li>
                    <li>Mức giá hợp lý và minh bạch, không có phí ẩn</li>
                    <li>Thời gian làm việc 24/24, 7 ngày một tuần</li>
                </ul>
            </div>

            <h2 className='title'>Giá sửa tủ lạnh tại nhà</h2>
            <center>
                <table style={{ width: '80.2761%', height: '250px' }} width={652} className='table'>
                    <tbody>
                        <tr style={{ height: '50px' }}>
                            <td style={{ height: '50px' }}>Dịch vụ</td>
                            <td style={{ height: '50px' }}>Đơn vị</td>
                            <td style={{ height: '50px' }}>Đơn&nbsp;Giá</td>
                        </tr>
                        <tr style={{ height: '50px' }}>
                            <td style={{ height: '50px' }}>Sửa&nbsp;board&nbsp;tủ lạnh &lt; 220 lít</td>
                            <td style={{ height: '50px' }}>Bộ</td>
                            <td style={{ height: '50px' }}>500.000đ – 700.000đ</td>
                        </tr>
                        <tr style={{ height: '50px' }}>
                            <td style={{ height: '50px' }}>Sửa&nbsp;board&nbsp;tủ lạnh &gt; 220 lít</td>
                            <td style={{ height: '50px' }}>Bộ</td>
                            <td style={{ height: '50px' }}>700.000đ – 1.000.000đ</td>
                        </tr>
                        <tr style={{ height: '50px' }}>
                            <td style={{ height: '50px' }}>Sửa&nbsp;board&nbsp;tủ lạnh&nbsp;Inverter</td>
                            <td style={{ height: '50px' }}>Bộ</td>
                            <td style={{ height: '50px' }}>700.000đ – 1.500.000đ</td>
                        </tr>
                        <tr style={{ height: '50px' }}>
                            <td style={{ height: '50px' }}>Hàn xì và nạp ga</td>
                            <td style={{ height: '50px' }}>Bộ</td>
                            <td style={{ height: '50px' }}>1.000.000đ – 1.800.000đ</td>
                        </tr>
                    </tbody>
                </table>
            </center>





        </div>
    )
}

export default RefrigeratorRepairService
