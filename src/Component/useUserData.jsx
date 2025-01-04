// // useUserData.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useUserData = () => {
//   const [user, setUser] = useState(0);

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search); // استخراج الـ id من الـ URL
//     const nickname = urlParams.get('nickname');
  
    

//     if (nickname) {
//       axios
//         .get("/src/assets/manual.json")
//         .then((res) => {
//           const users = res.data;

//           // const selectedUser = users.find((user) => user.id === Number(id)); // البحث عن المستخدم بناءً على الـ id
//           const selectedUser = users.find((user) => user.nickname === nickname);
//           if (selectedUser) {
//             setUser(selectedUser); // حفظ المستخدم إذا وجد
//           } else {
//             redirectTo404(); // إعادة التوجيه لصفحة 404
//           }
//         })
//         .catch(() => {
//           redirectTo404(); // في حالة وجود خطأ أثناء الجلب
//         });
//     } else {
//       redirectTo404(); // إذا لم يتم العثور على الـ id
//     }
//   }, []); // تشغيل مرة واحدة عند تحميل الكومبوننت

//   const redirectTo404 = () => {
//     window.location.href = "/404.html"; // إعادة التوجيه إلى صفحة 404
//   };

//   return user; // إرجاع بيانات المستخدم
// };

// export default useUserData;
// useUserData.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useUserData = () => {
  const [user, setUser] = useState(0);
  const { nickname } = useParams(); // جلب الـ nickname من الـ Routing

  useEffect(() => {
    if (nickname) {
      axios
        .get("/src/assets/manual.json")
        .then((res) => {
          const users = res.data;

          // البحث عن المستخدم بناءً على الـ nickname
          const selectedUser = users.find((user) => user.nickname === nickname);
          if (selectedUser) {
            setUser(selectedUser); // حفظ المستخدم إذا وجد
          } else {
            redirectTo404(); // إعادة التوجيه لصفحة 404 إذا لم يتم العثور على المستخدم
          }
        })
        .catch(() => {
          redirectTo404(); // في حالة وجود خطأ أثناء الجلب
        });
    } else {
      redirectTo404(); // إذا لم يتم العثور على الـ nickname
    }
  }, [nickname]); // إعادة التشغيل عند تغيير الـ nickname

  const redirectTo404 = () => {
    window.location.href = "/404.html"; // إعادة التوجيه إلى صفحة 404
  };

  return user; // إرجاع بيانات المستخدم
};

export default useUserData;
