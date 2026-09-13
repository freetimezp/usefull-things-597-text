const repeat = 8;
const tl = gsap.timeline();
const chars = document.querySelectorAll(".char");

chars.forEach((char, i) => {
    const original = char.querySelector(".original-text");
    const clone = char.querySelector(".clone-text");

    gsap.set(clone, {
        yPercent: i % 2 === 0 ? -100 : 100,
    });

    let roll = gsap.to([original, clone], {
        repeat: repeat,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100",
        duration: 1,
    });

    tl.add(roll, 0);
});

gsap.to(tl, {
    progress: 1,
    duration: 4,
    ease: "power4.inOut",
});
