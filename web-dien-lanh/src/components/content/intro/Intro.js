import React from 'react'
import BannerImage from '../../../images/1CwH9mAibSg2qeIuq0cs4.jpg'
import ServiceImage from '../../../images/Rectangle.png'
import './Intro.scss'

const Intro = () => {
	return (
		<div className='about-us-conatiner'>
			<div className='banner-wrapper' style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className='banner-content'>
					<div className='content-1 col-12 col-lg-8'>
						<div className='content-1-row-1'>
							Về chúng tôi
						</div>
						<div className='content-1-row-2'>
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas faucibus mollis interdum festibulum id ligula porta felis Lorem ipsum dolor sit amet
						</div>
					</div>
					<div className='content-2 col-12 col-lg-4'>
						<div className='content-2-row'>
							<i className="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
							</div>
						</div>
						<div className='content-2-row'>
							<i className="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
							</div>
						</div>
						<div className='content-2-row'>
							<i className="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
							</div>
						</div>
						<div className='content-2-row'>
							<i className="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
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
						Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur
						est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
						dolor auctor. Maecenas faucibus mollis interdum. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.

					</div>
					<div className='left-content-row'>
						Penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Nullam quis risus eget
						urna mollis ornare vel eu leo. Maecenas faucibus
						mollis interdum. Nulla vitae elit libero,
						a pharetra augue.Cum sociis natoque penatibus
						et magnis dis parturient montes, nascetur

					</div>
				</div>
				<div className='right-content col-lg-6'>
					<div className='right-content-row'>
						<div className='content-title'>
							Nhiệm Vụ Của Chúng Tôi
						</div>
						<div className='right-content-content'>
							Donec ullamcorper nulla non metus auctor fringilla.
							Sed posuere consectetur est at lobortis. Vivamus sagittis
							lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas
							faucibus mollis
						</div>
					</div>
					<div className='right-content-row'>
						<div className='content-title'>
							Trách Nhiệm Của Chúng Tôi
						</div>
						<div className='right-content-content'>
							Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis
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
				<div className='service repair-service col-lg-4' style={{backgroundImage: `url(${ServiceImage})`}}>
					<div className='service-title'>
						Dich vụ sửa chữa
					</div>
					<div className='service-content'>
						Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion elit. Vestibulum nec odios Suspe
						ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion elit.
					</div>
					<div className='service-view-more'>
						
						<span className="btn-view-more">Xem Thêm </span>
					</div>
				</div>
				<div className='service maintan-service col-lg-4' style={{backgroundImage: `url(${ServiceImage})`}}>
					<div className='service-title'>
						Dịch vụ bảo trì
					</div>
					<div className='service-content'>
						Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion elit. Vestibulum nec odios Suspe
						ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion elit.
					</div>
					<div className='service-view-more'>
						<span className="btn-view-more">Xem Thêm </span>
					</div>
				</div>
				<div className='service construction-service col-lg-4' style={{backgroundImage: `url(${ServiceImage})`}}>
					<div className='service-title'>
						Dich vụ công trình
					</div>
					<div className='service-content'>
						Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion elit. Vestibulum nec odios Suspe
						ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion elit.
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
