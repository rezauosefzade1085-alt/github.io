/* دانلود با باز کردن لینک در تب جدید */
document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.getAttribute("data-file");
    if (!file) return;
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
  adminModal.setAttribute("aria-hidden", "false");
  setTimeout(() => adminModal.classList.add("show"), 10);
}

function closeAdminModal() {
  if (!adminModal) return;
  adminModal.classList.remove("show");
  adminModal.setAttribute("aria-hidden", "true");
  setTimeout(() => adminModal.style.display = "none", 300);
}

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

window.addEventListener("click", (e) => {
  if (e.target === adminModal) closeAdminModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && adminModal && adminModal.style.display === "block") {
    closeAdminModal();
  }
});
