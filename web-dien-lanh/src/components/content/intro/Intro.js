import React from 'react'
import BannerImage from '../../../images/1CwH9mAibSg2qeIuq0cs4.jpg'
import ServiceImage from '../../../images/Rectangle.png'
import './Intro.scss'
import { useNavigate } from "react-router-dom";

const Intro = () => {
	const navigate = useNavigate();
	return (
		<div className='about-us-conatiner'>
			<div className='banner-wrapper' style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className='banner-content'>
					<div className='content-1 col-12 col-lg-8'>
						<div className='content-1-row-1'>
							Về chúng tôi
						</div>
						<div className='content-1-row-2'>
							Cửa hàng điện lạnh hợp nhất chúng tôi trân trọng đem đến quý khách hàng các gói dịch vụ về sửa chữa,
							bảo trì, dịch vụ lắp đặt thi công các công trình lớn nhỏ nhằm đáp ứng
							và cung cấp chất lượng dịch vụ tốt nhất cho quý khách.
						</div>
					</div>
					<div className='content-2 col-12 col-lg-4'>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-truck-fast"></i>
							<div>
								Nhanh chóng
							</div>
						</div>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-shield"></i>
							<div>
								An toàn
							</div>
						</div>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-piggy-bank"></i>
							<div>
								Tiết kiệm
							</div>
						</div>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-calendar-check"></i>
							<div>
								Mọi lúc mọi nơi
							</div>
						</div>
					</div>
					<div className='content-3'>

					</div>
				</div>
			</div>
			<div className='our-story-wrapper'>
				<div className='left-content col-lg-6'>
					<div className='content-title'>
						Lịch Sử Phát Triển
					</div>
					<div className='left-content-row' style={{ marginBottom: '10px' }}>
						Điện lạnh HỢP NHẤT là đơn vị chuyên nghiệp trong lĩnh vực điện lạnh. Có chuyên môn cao suốt nhiều năm trong nghề,
						chúng tôi đã thực hiện hàng ngàn công trình lắp đặt, sửa chữa các thiết bị điện lạnh. Với chúng tôi, sự tin tưởng, ủy thác của khách hàng là ưu tiên hàng đầu.
						Chúng tôi luôn cố gắng hoàn thiện công trình lắp đặt, sửa chữa thiết bị một cách tốt nhất, hoàn hảo nhất.
						Với trình độ chuyên môn trong lĩnh vực điện lạnh, chúng tôi luôn sẵn sàng mang đến cho quý khách những trải nghiệm tuyệt vời nhất.
					</div>
					<div className='left-content-row' style={{ marginBottom: '10px' }}>
						Đến với cửa hàng điện lạnh HỢP NHẤT khách hàng sẽ được trải nghiệm một sự uy tín, nhanh chóng, chuyên nghiệp hàng đầu.
						Ngoài việc cung cấp những dịch vụ sửa chữa,
						vệ sinh cho các cá nhân, hộ gia đình Hanara còn chuyên cung cấp các gói dịch vụ sửa chữa,
						bảo trì cho các đơn vị tổ chức có quy mô như các doanh nghiệp, các trường học, các hệ thống chuỗi nhà hàng,
						các phòng Gym, quán xá, công trình chung cư… .
					</div>

				</div>
				<div className='right-content col-lg-6'>
					<div className='right-content-row'>
						<div className='content-title'>
							Triết Lý Kinh Doanh
						</div>
						<div className='right-content-content'>
							Ngay từ những ngày đầu thành lập HỢP NHẤT đã xây dựng cho mình triết lý kinh doanh “Lấy khách hàng làm trọng tâm” cụ thể:
							Lấy sự hài lòng của khách hàng làm kim chỉ nam cho mọi hoạt động kinh doanh của cửa hàng.
							Luôn luôn lắng nghe, phân tích và thấu hiểu nhu cầu của từng khách hàng.
						</div>
					</div>
					<div className='right-content-row'>
						<div className='content-title'>
							Đội Ngũ Nhân Viên
						</div>
						<div className='right-content-content'>
							Chúng tôi có một đội ngũ nhân viên xuất sắc với tay nghề lâu năm, dày dạn kinh nghiệm bên cạnh đó là thái độ phục vụ chuyên nghiệp,
							nhanh nhẹn, cẩn thận và tỉ mỉ và được tuyển chọn kỹ lưỡng, mỗi cá nhân kỹ thuật viên đến nhân viên tư vấn luôn tận tình với khách hàng.
							Mang đến chất lượng dịch vụ tốt nhất làm hài lòng tất cả khách hàng và đối tác.
						</div>
					</div>
				</div>
			</div>
			<div className='achievement col-12' style={{ backgroundColor: 'rgb(79 176 229)' }}>
				<div className='main-content achievement-content col-lg-12'>
					<div className='col-12 col-lg-4 achievement-content-wrapper'>
						<div className='achievement-content-icon col-4 col-lg-6'>
							<i className="fa-solid fa-fan"></i>
						</div>
						<div className='achievement-content-detail col-8 col-lg-6'>
							<div className='achievement-content-row-1'>
								1000 +
							</div>
							<div className='achievement-content-row-2'>
								Dự án thành công
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-4 achievement-content-wrapper'>
						<div className='achievement-content-icon col-4 col-lg-6'>
							<i className="fa-regular fa-face-smile-beam"></i>
						</div>
						<div className='achievement-content-detail col-8 col-lg-6'>
							<div className='achievement-content-row-1'>
								1000 +
							</div>
							<div className='achievement-content-row-2'>
								Khách hàng được phục vụ
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-4 achievement-content-wrapper'>
						<div className='achievement-content-icon col-4 col-lg-6'>
							<i className="fa-regular fa-hourglass-half"></i>
						</div>
						<div className='achievement-content-detail col-8 col-lg-6'>
							<div className='achievement-content-row-1'>
								10 +
							</div>
							<div className='achievement-content-row-2'>
								Năm Kinh Nghiêm
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='what-we-do'>
				<div className='wrapper col-lg-8'>
					<div className='what-we-do-content'>
						<div className='row-1'>
							CHÚNG TÔI CUNG CẤP
						</div>
						<div className='row-2'>
							Dịch vụ sửa chữa, bảo trì, công trình và hơn thế nữa
						</div>
					</div>
				</div>
				<div className='col-lg-4'>

				</div>
			</div>
			<div className='my-service-container'>
				<div className='service repair-service col-lg-4' style={{ backgroundImage: `url(${ServiceImage})` }}>
					<div className='service-title'>
						Dich vụ sửa chữa
					</div>
					<div className='service-content'>
						Điện Lạnh HỢP NHẤT mang đến khách hàng dịch vụ sửa chữa chuyên nghiệp tận nhà uy tín tại khắp tất cả các Quận,
						Huyện khu vực thành phố Hồ Chí Minh.
					</div>
					<div className='service-view-more'>
						<span className="btn-view-more" onClick={() => navigate('/repair-services')}>Xem Thêm </span>
					</div>
				</div>
				<div className='service maintan-service col-lg-4' style={{ backgroundImage: `url(${ServiceImage})` }}>
					<div className='service-title'>
						Dịch vụ bảo trì
					</div>
					<div className='service-content'>
						Sửa tủ lạnh chuyên nghiệp, uy tín, giá rẻ. Điện lạnh HỢP NHẤT nhận sửa chữa bảo trì tất cả các hãng tủ lạnh, máy lạnh, bảo hành tận nhà tại Tp HCM.
					</div>
					<div className='service-view-more'>
						<span className="btn-view-more" onClick={() => navigate('/maintenance')}>Xem Thêm </span>
					</div>
				</div>
				<div className='service construction-service col-lg-4' style={{ backgroundImage: `url(${ServiceImage})` }}>
					<div className='service-title'>
						Dich vụ công trình
					</div>
					<div className='service-content'>
						Bạn đang cần dịch vụ di dời máy lạnh từ nơi này sang nơi khác? Điện lạnh HỢP NHẤT sẵn sàng phục vụ tận nhà tại Tp HCM, bất kể 24/7, có mặt ngay sau 30 phút
					</div>
					<div className='service-view-more'>
						<span className="btn-view-more">Xem Thêm </span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
