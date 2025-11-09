// دسترسی به مودال و المان‌های داخلی
const gradeModal = document.getElementById("gradeModal");
const gradeTitle = document.getElementById("gradeTitle");
const gradeText = document.getElementById("gradeText");

// لینک دانلود جداگانه برای هر پایه
const gradeDownloads = {
  "7": "https://quera.org/qbox/view/zCvWVft63E/Online-p1-cover.jpg",
  "8": "downloads/paye8.pdf",
  "9": "downloads/paye9.pdf",
  "10": "downloads/paye10.pdf",
  "11": "downloads/paye11.pdf",
  "12": "downloads/paye12.pdf"
};

// کلیک روی دکمه‌ها
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const grade = btn.getAttribute("data-grade");
    openGradeModal(grade);
  });
});

// باز کردن مودال برای هر پایه
function openGradeModal(grade) {
  const grades = {
    "7": "کلید پایه هفتم",
    "8": "کلید پایه هشتم",
    "9": "کلید پایه نهم",
    "10": "کلید پایه دهم",
    "11": "کلید پایه یازدهم",
    "12": "کلید پایه دوازدهم"
  };

  // عنوان مودال
  gradeTitle.innerText = grades[grade];

  // متن مودال همراه با دکمه دانلود
  gradeText.innerHTML = `
    در حال آماده‌سازی...
    <br><br>
    <a id="downloadLink" href="${gradeDownloads[grade]}" download class="btn" style="margin-top:15px;">⬇ دانلود فایل</a>
  `;

  // نمایش مودال
  gradeModal.style.display = "block";
  setTimeout(() => gradeModal.classList.add("show"), 10);
}

// بستن مودال پایه‌ها
function closeGradeModal() {
  gradeModal.classList.remove("show");
  setTimeout(() => gradeModal.style.display = "none", 500);
}

// مودال ادمین
const adminModal = document.getElementById("adminModal");

function openAdminModal() {
  adminModal.style.display = "block";
}

function closeAdminModal() {
  adminModal.style.display = "none";
}

// بستن مودال با کلیک روی پس‌زمینه
window.addEventListener("click", e => {
  if (e.target === gradeModal) closeGradeModal();
  if (e.target === adminModal) closeAdminModal();
});
