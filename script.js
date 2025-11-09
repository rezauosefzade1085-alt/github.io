const gradeModal = document.getElementById("gradeModal");
const gradeTitle = document.getElementById("gradeTitle");
const gradeText = document.getElementById("gradeText");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const grade = btn.getAttribute("data-grade");
    openGradeModal(grade);
  });
});

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
  gradeText.innerText = "در حال آماده‌سازی...";

  gradeModal.style.display = "block";
  setTimeout(() => gradeModal.classList.add("show"), 10);
}

function closeGradeModal() {
  gradeModal.classList.remove("show");
  setTimeout(() => gradeModal.style.display = "none", 500);
}

const adminModal = document.getElementById("adminModal");

function openAdminModal() {
  adminModal.style.display = "block";
}

function closeAdminModal() {
  adminModal.style.display = "none";
}

window.addEventListener("click", e => {
  if (e.target === gradeModal) closeGradeModal();
  if (e.target === adminModal) closeAdminModal();
});
