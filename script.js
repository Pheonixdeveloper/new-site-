document.getElementById('animateBtn').addEventListener('click', function() {
    // TweenMax is part of GSAP
    // Animate the header
    gsap.to('header', { duration: 1, opacity: 0, y: -50, ease: "power2.inOut" });
  
    // Animate the content
    gsap.from('.content', { duration: 1, opacity: 0, y: 50, ease: "power2.inOut", delay: 0.5 });
  
    // Animate the footer
    gsap.from('footer', { duration: 1, opacity: 0, y: 50, ease: "power2.inOut", delay: 1 });
  }
  );
  