import React from 'react';
import './Maintenance.scss';
import { useNavigate } from 'react-router-dom'
import img1 from '../../../images/anhdv_vesinhmaylanh.jpg'
import img2 from '../../../images/anhdv_vesinhmaygiat.jpg'
const styles = {
   h4Style: {
      display: 'flex',
      margin: '20px',
      justifyContent: 'center',
      alignItems: 'center',
   }
};

const Maintenance = () => {
   const navigate = useNavigate();
   return (
      <div className='wrapper-content'>
         <h4 className='title ' style={styles.h4Style}>Dịch vụ bảo trì</h4>
         <div className="card-container col-lg-12">
            {postData.map(post => (
               <div key={post.id} className="card col-12 col-lg-5" style={{}} onClick={() => navigate(post.link)}>
                  {post.imgUrl && <img className='image' src={post.imgUrl} alt={`Image ${post.id}`} />}
                  <h3>{post.title}</h3>
                  <p className='content'>{post.content}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

const postData = [
   { id: 1, imgUrl: img2, title: 'DỊCH VỤ BẢO TRÌ MÁY GIẶT - Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả', content: 'Quần áo khi giặt vẫn bị ám mùi khó chịu khi đã dùng nước xả',link: '/cleaning-the-washing-machine' },
   { id: 2, imgUrl: img1, title: 'Dịch Vụ BẢO TRÌ MÁY LẠNH', content: 'Qua quá trình sử dụng lâu dài kiến gas máy lạnh bị cạn kiệt, hết...',link: '/regular-air-conditioning-maintenance' }
];

export default Maintenance;
