import React from 'react'
import BannerImage from '../../../images/1CwH9mAibSg2qeIuq0cs4.jpg'
import './Intro.scss'

const Intro = () => {
	return (
		<div className='about-us-conatiner'>
			<div className='banner-wrapper' style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className='banner-content'>
					<div className='content-1 col-12 col-lg-8'>
						<div className='content-1-row-1'>
							ABOUT US
						</div>
						<div className='content-1-row-2'>
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas faucibus mollis interdum festibulum id ligula porta felis Lorem ipsum dolor sit amet
						</div>
					</div>
					<div className='content-2 col-12 col-lg-4'>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
							</div>
						</div>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
							</div>
						</div>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-circle-check"></i>
							<div>
								High Quality, Ethically Sourced Materials
							</div>
						</div>
						<div className='content-2-row'>
							<i class="icon fa-solid fa-circle-check"></i>
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
					<div className='left-content-row'>
						Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
						Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.
					</div>
					<div className='left-content-row'>

					</div>
				</div>
				<div className='right-content col-lg-6'>
					<div className='right-content-row'>
						<div className='right-content-title'>
							Our Mission
						</div>
						<div className='right-content-content'>
							Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis
						</div>
					</div>
					<div className='right-content-row'>
						<div className='right-content-title'>
							Our Mission
						</div>
						<div className='right-content-content'>
							Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
