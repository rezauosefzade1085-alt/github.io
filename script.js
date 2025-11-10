const gradeModal = document.getElementById("gradeModal");
const gradeTitle = document.getElementById("gradeTitle");
const gradeText = document.getElementById("gradeText");

// لینک دانلود برای هر پایه (PDF)
const gradeDownloads = {
  "7": "downloads/paye7.pdf",
  "8": "downloads/paye8.pdf",
  "9": "downloads/paye9.pdf",
  "10": "downloads/paye10.pdf",
  "11": "downloads/paye11.pdf",
  "12": "downloads/paye12.pdf"
};

// وقتی روی دکمه‌ها کلیک می‌کنی
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

  gradeTitle.innerText = grades[grade];

  gradeText.innerHTML = `
    <p>فایل کلید مربوط به این پایه آماده‌ی دانلود است 📄</p>
    <br>
    <button id="downloadBtn" class="btn" style="margin-top:10px;">⬇ دانلود فایل PDF</button>
  `;

  gradeModal.style.display = "block";
  setTimeout(() => gradeModal.classList.add("show"), 10);

  // وقتی دکمه دانلود زده میشه
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = gradeDownloads[grade];
    link.download = gradeDownloads[grade].split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
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
