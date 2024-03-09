import React from 'react';
import './Maintenance.scss';
import { useNavigate } from 'react-router-dom'
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
         <h4 style={styles.h4Style}>Dịch vụ bảo trì</h4>
         <div className="card-container">
            {postData.map(post => (
               <div key={post.id} className="card" style={{}} onClick={() => navigate(post.link)}>
                  {post.imgUrl && <img src={post.imgUrl} alt={`Image ${post.id}`} />}
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

const postData = [
   { id: 1, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/11/ve-sinh-may-giat-300x225.jpg', title: 'DỊCH VỤ BẢO TRÌ MÁY GIẶT - Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả', content: 'Quần áo khi giặt vẫn bị ám mùi khó chịu khi đã dùng nước xả',link: '/CWM' },
   { id: 2, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/10/dich-vu-bom-gas-may-lanh-1-300x225.jpg', title: 'Dịch Vụ BẢO TRÌ MÁY LẠNH', content: 'Qua quá trình sử dụng lâu dài kiến gas máy lạnh bị cạn kiệt, hết...',link: '/RACM' }
];

export default Maintenance;
