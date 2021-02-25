gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});
gsap.to(".text", {duration: 1, x: 50, y: 100, scale: 2, skewX: 0, rotation: 0});

