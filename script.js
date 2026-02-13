const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        const video = entry.target.querySelector("video");

        if (entry.isIntersecting) {

            sections.forEach(sec => sec.classList.remove("active"));

            entry.target.classList.add("active");

            video.classList.remove("blur");
            video.currentTime = 0;
            video.play();

        } else {
            video.pause();
        }

    });
}, { threshold: 0.6 });

sections.forEach(section => {
    const video = section.querySelector("video");

    video.addEventListener("ended", () => {
        video.classList.add("blur");
    });

    observer.observe(section);
});
