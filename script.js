/* script.js
   رفتار: دکمه‌های دانلود فایل (data-file) را باز می‌کند.
   مودال ادمین: باز و بسته می‌شود و آی‌دی را نشان می‌دهد.
*/

/* دانلود با باز کردن لینک در تب جدید (همان رفتار قبلی سایتت) */
document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.getAttribute("data-file");
    if (!file) return;
    // باز کردن در تب جدید — مرورگر تصمیم به دانلود یا نمایش خواهد گرفت
    window.open(file, "_blank");
  });
});

/* مودال ادمین */
const adminOpen = document.getElementById("adminOpen");
const adminModal = document.getElementById("adminModal");
const adminClose = document.getElementById("adminClose");

function openAdminModal() {
  if (!adminModal) return;
  adminModal.style.display = "block";
  // دسترسی‌پذیری: aria-hidden
  adminModal.setAttribute("aria-hidden", "false");
  setTimeout(() => adminModal.classList.add("show"), 10);
}

function closeAdminModal() {
  if (!adminModal) return;
  adminModal.classList.remove("show");
  adminModal.setAttribute("aria-hidden", "true");
  setTimeout(() => adminModal.style.display = "none", 300);
}

// اگر دکمه شناسه‌ای در HTML نداشتی، از عنصر شناور استفاده می‌کنیم
if (adminOpen) {
  adminOpen.addEventListener("click", (e) => {
    e.preventDefault();
    openAdminModal();
  });
}
if (adminClose) {
  adminClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeAdminModal();
  });
}

// بستن مودال با کلیک بیرون محتوا
window.addEventListener("click", (e) => {
  if (e.target === adminModal) closeAdminModal();
});

// بستن با کلید Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && adminModal && adminModal.style.display === "block") {
    closeAdminModal();
  }
});
