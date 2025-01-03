import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد CSS الخاص بـ Bootstrap
const UserProfile = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/src/assets/manual.json").then((res) => {
      const users = res.data;

      // البحث عن المستخدم الذي يتوافق مع المعرف (id) في الـ URL
      const selectedUser = users.find((user) => user.id === Number(id));

      if (selectedUser) {
        setUser(selectedUser);
        
        // إعدادات الـ Modal باستخدام bootstrap
        const personalModal = new bootstrap.Modal(document.getElementById('personal-modal'));

        // دالة لعرض تفاصيل المستخدم
        function showDetails(key) {
          const personalData = selectedUser[key];
          personalModal.show();
        }

        // تحديث محتويات الصفحة
        document.getElementById('hero-title').innerText = selectedUser.name;
        document.getElementById('nav-brand').innerText = selectedUser.name;
        document.getElementById('hero-subtitle').innerText = selectedUser.jobTitle;
        document.getElementById('about-description').innerText = selectedUser.objective;
        document.getElementById('personal-image').src = selectedUser.image;
        document.getElementById('personal-image').classList.add("w-100");
        document.getElementById('education').innerHTML = "<a id='eduModal' onClick={() => showDetails('education')}><i class='fa-solid fa-school'></i> Education</a>";
        document.getElementById('work').innerHTML = "<i class='fa-solid fa-briefcase'></i> Work";
        document.getElementById('certifications').innerHTML = '<i class="fa-solid fa-certificate"></i> Certifications';
        document.getElementById('hobbies').innerHTML = "<i class='fa-solid fa-gamepad'></i> Hobbies";
        document.getElementById('volantering').innerHTML = "<i class='fa-solid fa-handshake-angle'></i> Volunteering";
        document.getElementById('skills').innerHTML = "<i class='fa-solid fa-book-skull'></i> Skills";
        document.getElementById('interests').innerHTML = "<i class='fa-regular fa-face-smile'></i> Interests";
        document.getElementById('experiences').innerHTML = "<i class='fa-solid fa-book-skull'></i> Experience";

        // إضافة المشاريع إلى الـ portfolio
        const portfolioContainer = document.getElementById('portfolio-container');
        selectedUser.portfolio.forEach(project => {
          project.images.forEach(image => {
            const item = `
              <div class="col-md-4 mb-4">
                <div class="card portfolio-item">
                  <img src="${image}" alt="${project.title}">
                  <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description || ''}</p>
                    <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                  </div>
                </div>
              </div>`;
            portfolioContainer.innerHTML += item;
          });
        });
      } else {
        // إعادة التوجيه إذا لم يتم العثور على المستخدم
        document.location.href = "404.html";
      }
    });
  }, [id]); // تفعيل الـ useEffect عند تغير الـ id

  if (!user) {
    return <div>Loading...</div>; // عرض الرسالة "تحميل" إذا كانت البيانات قيد التحميل
  }

  return (
    <div>
      {/* محتويات الصفحة بناءً على بيانات المستخدم */}
      <h1 id="hero-title">{user.name}</h1>
      <div id="hero-subtitle">{user.jobTitle}</div>
      <div id="about-description">{user.objective}</div>
      <img id="personal-image" alt="User" />
      <div id="portfolio-container"></div>
    </div>
  );
};

export default UserProfile;
