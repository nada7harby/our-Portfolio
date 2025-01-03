// useUserData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserData = () => {
  const [user, setUser] = useState(null); // هنخزن فيه بيانات المستخدم

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); // جلب الـ id من الـ URL
    const id = urlParams.get('id'); // احنا بنبحث عن الـ id في الـ URL

    if (id) {
      // إذا كان فيه id
      axios.get("/src/assets/manual.json") // جلب البيانات من الملف
        .then((res) => {
          const users = res.data; // البيانات اللي جاية من الملف

          const selectedUser = users.find((user) => user.id === Number(id)); // نبحث عن المستخدم بناءً على الـ id

          if (selectedUser) {
            setUser(selectedUser); // إذا لاقينا المستخدم، نحفظه في الـ state
          } else {
            document.location.href = "404.html"; // لو المستخدم مش موجود، نروح على صفحة 404
          }
        })
        .catch(() => {
          document.location.href = "404.html"; // لو في خطأ في تحميل البيانات، نروح على صفحة 404
        });
    } else {
      document.location.href = "404.html"; // إذا مفيش id في الـ URL، نروح على صفحة 404
    }
  }, []); // الـ useEffect ده هيشتغل لما المكون يتعمله mount لأول مرة

  return user; // نرجع بيانات المستخدم
};

export default useUserData;
