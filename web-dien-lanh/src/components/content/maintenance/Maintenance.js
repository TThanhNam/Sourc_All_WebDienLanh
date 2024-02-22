import React from 'react';
import './Maintenance.scss';

const styles = {
   h4Style: {
      display: 'flex',
      margin: '20px',
      justifyContent: 'center',
      alignItems: 'center',
   }
};

const Maintenance = () => {
   return (
      <div>
         <h4 style={styles.h4Style}>Dịch vụ bảo trì</h4>
         <div className="card-container">
            {postData.map(post => (
               <div key={post.id} className="card">
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
   { id: 1, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/11/ve-sinh-may-giat-300x225.jpg', title: 'DỊCH VỤ VỆ SINH MÁY GIẶT HANARA CHUYÊN NGHIỆP - Giữ máy giặt luôn sạch đẹp, hoạt động hiệu quả', content: 'Quần áo khi giặt vẫn bị ám mùi khó chịu khi đã dùng nước xả' },
   { id: 2, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/10/dich-vu-bom-gas-may-lanh-1-300x225.jpg', title: 'Dịch Vụ Nạp Ga Máy Lạnh Uy Tín Số 1 Tp.Hồ Chí Minh', content: 'Qua quá trình sử dụng lâu dài kiến gas máy lạnh bị cạn kiệt, hết...' },
   { id: 3, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/10/dich-vu-bom-gas-tu-lanh-1-300x225.jpg', title: 'Dịch vụ bơm gas tủ lạnh', content: 'Công ty Hanara với nhiều năm kinh nghiệm trong việc cung cấp dịch vụ bơm...' },
   { id: 4, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/10/bao-tri-may-lanh-300x200.jpg', title: 'Dịch vụ Bảo Trì Máy Lạnh Số 1 Tp.Hồ Chí Minh', content: 'Đọc tiếp...' },
   { id: 5, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/10/ve-sinh-may-giat-300x200.jpg', title: 'Dịch vụ vệ sinh máy giặt tại Hanara', content: 'Máy giặt nhà bạn luôn tiếp xúc với những chất bẩn gây hại do đó...' },
   { id: 6, imgUrl: 'https://hanara.vn/wp-content/uploads/2022/10/ve-sinh-may-lanh-2-300x200.jpg', title: 'Dịch Vụ Vệ Sinh Máy Lạnh – Bảo Trì Định Kỳ Uy Tín Số 1 Tp.Hồ Chí Minh', content: 'NHANH CHÓNG – TIN CẬY – BẢO HÀNH DÀI LÂU CÓ MẶT SAU 30 PHÚT...' },
];

export default Maintenance;
