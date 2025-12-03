/* لینک‌های دانلود پایه‌های بدون مودال */
document.querySelectorAll(".download-direct").forEach(btn => {
    btn.addEventListener("click", () => {
        const file = btn.getAttribute("data-file");
        window.open(file, "_blank");
    });
});

/* لینک‌های رشته‌ای پایه‌های 10 – 11 – 12 */
const links = {
    10: {
        human: "LINK_10_HUMAN",
        experimental: "LINK_10_EXPERIMENTAL",
        math: "LINK_10_MATH"
    },
    11: {
        human: "LINK_11_HUMAN",
        experimental: "LINK_11_EXPERIMENTAL",
        math: "LINK_11_MATH"
    },
    12: {
        human: "LINK_12_HUMAN",
        experimental: "LINK_12_EXPERIMENTAL",
        math: "LINK_12_MATH"
    }
};

/* مودال انتخاب رشته */
const gradeModal = document.getElementById("gradeModal");
const gradeClose = document.getElementById("gradeClose");
const gradeTitle = document.getElementById("gradeTitle");

const humanBtn = document.getElementById("human");
const experimentalBtn = document.getElementById("experimental");
const mathBtn = document.getElementById("math");

/* باز کردن مودال رشته‌ای فقط برای پایه 10/11/12 */
document.querySelectorAll(".open-grade").forEach(btn => {
    btn.addEventListener("click", () => {
        const grade = btn.getAttribute("data-grade");

        gradeTitle.innerText = `پایه ${grade}`;

        humanBtn.href = links[grade].human;
        experimentalBtn.href = links[grade].experimental;
        mathBtn.href = links[grade].math;

        gradeModal.style.display = "block";
        setTimeout(() => gradeModal.classList.add("show"), 10);
    });
});

/* بستن مودال رشته‌ای */
gradeClose.onclick = () => {
    gradeModal.classList.remove("show");
    setTimeout(() => gradeModal.style.display = "none", 200);
};

window.addEventListener("click", (e) => {
    if (e.target === gradeModal) gradeClose.click();
});

/* مودال ادمین */
const adminModal = document.getElementById("adminModal");
const adminOpen = document.getElementById("adminOpen");
const adminClose = document.getElementById("adminClose");

adminOpen.onclick = () => {
    adminModal.style.display = "block";
    setTimeout(() => adminModal.classList.add("show"), 10);
};

adminClose.onclick = () => {
    adminModal.classList.remove("show");
    setTimeout(() => adminModal.style.display = "none", 200);
};

window.addEventListener("click", (e) => {
    if (e.target === adminModal) adminClose.click();
});
