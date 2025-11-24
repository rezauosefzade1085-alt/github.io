/* ============================
   script.js نسخه نهایی
   ============================ */

/* -----------------------------
   1) رفتار دکمه‌های دانلود
   باز کردن لینک PDF در تب جدید
------------------------------ */
document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.dataset.file;
    if (!file) return;
    window.open(file, "_blank"); // مرورگر خودش دانلود/نمایش می‌کند
  });
});


/* -----------------------------
   2) مدیریت مودال ادمین
------------------------------ */
const adminOpen  = document.getElementById("adminOpen");
const adminModal = document.getElementById("adminModal");
const adminClose = document.getElementById("adminClose");

function openAdminModal() {
  if (!adminModal) return;

  adminModal.style.display = "block";
  adminModal.setAttribute("aria-hidden", "false");

  // برای انیمیشن
  setTimeout(() => {
    adminModal.classList.add("show");
  }, 10);
}

function closeAdminModal() {
  if (!adminModal) return;

  adminModal.classList.remove("show");
  adminModal.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    adminModal.style.display = "none";
  }, 250);
}

/* باز کردن مودال */
if (adminOpen) {
  adminOpen.addEventListener("click", e => {
    e.preventDefault();
    openAdminModal();
  });
}

/* بستن مودال با دکمه x */
if (adminClose) {
  adminClose.addEventListener("click", e => {
    e.preventDefault();
    closeAdminModal();
  });
}

/* بستن با کلیک روی فضای بیرون مودال */
window.addEventListener("click", e => {
  if (e.target === adminModal) {
    closeAdminModal();
  }
});

/* بستن با کلید ESC */
window.addEventListener("keydown", e => {
  if (e.key === "Escape" && adminModal && adminModal.style.display === "block") {
    closeAdminModal();
  }
});
