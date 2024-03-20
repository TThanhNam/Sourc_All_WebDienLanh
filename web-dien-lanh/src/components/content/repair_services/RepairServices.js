import React from 'react'
import './RepairServices.scss'
import img1 from '../../../images/428ad4ea-fccc-45a2-871a-88ccff1c8a2f.jpg'
import img2 from '../../../images/7973fff1-410f-4904-a72f-1a1b9c68c446.jpg'
import img3 from '../../../images/dich-vu-sua-may-lanh-01.jpg'
import { useNavigate } from 'react-router-dom'

const postData = [
  { id: 1, imgUrl: img1, title: 'Dịch vụ sửa chữa tủ lạnh đẳng cấp, chuyên nghiệp', content: 'Tủ lạnh gặp các vấn đề như hư hỏng, hay không thể sử dụng được...', link: '/air-condition-repairing' },
  { id: 2, imgUrl: img2, title: 'Dịch vụ sửa chữa máy giặt Uy Tín Số 1 Tp.Hồ Chí Minh', content: 'Qua quá trình sử dụng lâu dài khiến máy giặt bị hư hỏng hoặc...', link: '/refrigerator-machine-repair-service' },
  { id: 3, imgUrl: img3, title: 'Dịch vụ sửa chữa tủ lạnh', content: 'Công ty HopNhat với nhiều năm kinh nghiệm trong việc cung cấp dịch vụ sửa...', link: '/washing-machine-repair-service' }
]

const styles = {
  h4Style: {
    display: 'flex',
    margin: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  }
};


const RepairServices = () => {
  const navigate = useNavigate();
  return (
    <div className='wrapper-content'>
      <h4 className='title' style={styles.h4Style}>Dịch vụ sửa chữa</h4>
      <div className="card-container">
        {postData.map(post => (
          <div key={post.id} className="card col-12 col-lg-3" style={{}} onClick={() => navigate(post.link)}>
            {post.imgUrl && <img src={post.imgUrl} alt={`Image ${post.id}`} />}
            <h3>{post.title}</h3>
            <p className='content'>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RepairServices
