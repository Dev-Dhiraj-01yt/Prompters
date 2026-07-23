gsap.registerPlugin(ScrollTrigger);
    const easeOutExpo = "power4.out";
    const easeSmooth = "power3.inOut";
    const easeBack = "back.out(1.4)";

    //HERO ENTRANCE ANIMATIONS 
    const heroTl = gsap.timeline({ defaults: { ease: easeOutExpo } });

    // Portrait fades in and subtle scale
    heroTl.fromTo(".hero-portrait",
        { opacity: 0, scale: 1.08, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2 }
    );

    // "Strategy" slides in from left
    heroTl.fromTo(".hero-title .line1",
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.9"
    );

    // "Meets" slides in from left (slight delay after Strategy)
    heroTl.fromTo(".hero-title .line2",
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9 },
        "-=0.7"
    );

    // "Design" slides in from right
    heroTl.fromTo(".hero-title-right",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1 },
        "-=1"
    );

    // Left subtitle fades up
    heroTl.fromTo(".hero-subtitle-left",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
    );

    // Right subtitle fades up
    heroTl.fromTo(".hero-subtitle-right",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
    );

    // Top bar fades in
    heroTl.fromTo(".top-bar",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=1.2"
    );

    // HERO PARALLAX ON SCROLL
    
    gsap.to(".hero-portrait", {
        y: -60,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(".hero-title", {
        y: -40,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "60% top",
            scrub: 1
        }
    });

    gsap.to(".hero-title-right", {
        y: -40,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "60% top",
            scrub: 1
        }
    });

    // ABOUT SECTION — ScrollTrigger reveal
    gsap.fromTo(".about-label",
        { opacity: 0, x: -30 },
        {
            opacity: 1, x: 0, duration: 0.8,
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Headline words stagger in
    gsap.fromTo(".about-headline",
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 1, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".about-headline",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".about-bottom",
        { opacity: 0, y: 30 },
        {
            opacity: 1, y: 0, duration: 0.8, delay: 0.2,
            scrollTrigger: {
                trigger: ".about-bottom",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // STRATEGIC OUTCOMES — Staggered list reveal
    gsap.fromTo(".projects-header",
        { opacity: 0, y: 60, scale: 0.98 },
        {
            opacity: 1, y: 0, scale: 1, duration: 1, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".projects",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".project-item",
        { opacity: 0, x: -40 },
        {
            opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".project-list",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Active project preview image scale-in
    document.querySelectorAll('.project-item').forEach(item => {
        const preview = item.querySelector('.project-preview img');
        if (preview) {
            gsap.fromTo(preview,
                { opacity: 0, scale: 0.96, y: 20 },
                {
                    opacity: 1, scale: 1, y: 0, duration: 0.6, ease: easeOutExpo,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    });

    // PROCESS SECTION — Card stagger with rotation
    
    gsap.fromTo(".process-label",
        { opacity: 0, x: -30 },
        {
            opacity: 1, x: 0, duration: 0.7,
            scrollTrigger: {
                trigger: ".process",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".process-headline-wrap",
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 1, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".process-headline-wrap",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Process cards: stagger from bottom with slight rotation
    gsap.fromTo(".process-card",
        { opacity: 0, y: 70, rotateX: 8 },
        {
            opacity: 1, y: 0, rotateX: 0, duration: 0.9,
            stagger: 0.15, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".process-grid",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Plus icon subtle pulse on scroll into view
    gsap.fromTo(".process-icon svg",
        { scale: 0, rotation: -45 },
        {
            scale: 1, rotation: 0, duration: 0.6,
            stagger: 0.1, ease: easeBack,
            scrollTrigger: {
                trigger: ".process-grid",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // TESTIMONIALS — Fade + slide up stagger
    gsap.fromTo(".testimonials-header",
        { opacity: 0, y: 20 },
        {
            opacity: 1, y: 0, duration: 0.7,
            scrollTrigger: {
                trigger: ".testimonials",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".testimonials-title",
        { opacity: 0, y: 50, scale: 0.97 },
        {
            opacity: 1, y: 0, scale: 1, duration: 1, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".testimonials-title",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Row 1 cards
    gsap.fromTo(".testimonials-grid .testimonial-card",
        { opacity: 0, y: 40 },
        {
            opacity: 1, y: 0, duration: 0.7,
            stagger: 0.12, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".testimonials-grid",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Row 2 cards
    gsap.fromTo(".testimonials-grid-row2 .testimonial-card",
        { opacity: 0, y: 40 },
        {
            opacity: 1, y: 0, duration: 0.7,
            stagger: 0.12, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".testimonials-grid-row2",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".testimonials-cta",
        { opacity: 0, y: 20 },
        {
            opacity: 1, y: 0, duration: 0.6, delay: 0.3,
            scrollTrigger: {
                trigger: ".testimonials-cta",
                start: "top 95%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // FOOTER — Massive typography reveal
    gsap.fromTo(".footer-eyebrow",
        { opacity: 0, y: 15 },
        {
            opacity: 1, y: 0, duration: 0.6,
            scrollTrigger: {
                trigger: ".footer",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // "BRAND ARCHITECT" — dramatic clip-path / scale reveal
    gsap.fromTo(".footer-title",
        { opacity: 0, y: 80, scale: 0.92 },
        {
            opacity: 1, y: 0, scale: 1, duration: 1.2, ease: easeOutExpo,
            scrollTrigger: {
                trigger: ".footer-title",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Footer links stagger
    gsap.fromTo(".footer-col a",
        { opacity: 0, y: 15 },
        {
            opacity: 1, y: 0, duration: 0.5,
            stagger: 0.04, ease: "power2.out",
            scrollTrigger: {
                trigger: ".footer-links",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // MICRO-INTERACTIONS (hover effects via GSAP)

    // Project rows: subtle lift on hover
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { x: 6, duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { x: 0, duration: 0.3, ease: "power2.out" });
        });
    });

    // Process cards: 3D tilt on hover
    document.querySelectorAll('.process-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -6, scale: 1.01, duration: 0.35, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
        });
    });

    // Testimonial cards: subtle scale on hover
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });

    // Button hover: plus icon rotation
    document.querySelectorAll('.btn-outline').forEach(btn => {
        const plus = btn.querySelector('.plus');
        if (plus) {
            btn.addEventListener('mouseenter', () => {
                gsap.to(plus, { rotation: 90, duration: 0.3, ease: "power2.out" });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(plus, { rotation: 0, duration: 0.3, ease: "power2.out" });
            });
        }
    });

    // Menu button: hamburger lines animate
    const menuBtn = document.querySelector('.menu-btn');
    const hamburgerLines = menuBtn.querySelectorAll('.hamburger span');
    menuBtn.addEventListener('mouseenter', () => {
        gsap.to(hamburgerLines[0], { x: 3, duration: 0.25 });
        gsap.to(hamburgerLines[1], { x: -3, duration: 0.25 });
    });
    menuBtn.addEventListener('mouseleave', () => {
        gsap.to(hamburgerLines[0], { x: 0, duration: 0.25 });
        gsap.to(hamburgerLines[1], { x: 0, duration: 0.25 });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { y: target, offsetY: 60 },
                    ease: easeSmooth
                });
            }
        });
    });

    // SCROLL VELOCITY TILT
    
    let currentScroll = 0;
    let targetScroll = 0;
    let skewAmount = 0;

    const skewElements = document.querySelectorAll('.project-item, .process-card');

    window.addEventListener('scroll', () => {
        targetScroll = window.scrollY;
    }, { passive: true });

    function updateSkew() {
        currentScroll += (targetScroll - currentScroll) * 0.1;
        const velocity = targetScroll - currentScroll;
        const targetSkew = Math.max(-2, Math.min(2, velocity * 0.05));
        skewAmount += (targetSkew - skewAmount) * 0.1;

        skewElements.forEach(el => {
            el.style.transform = `skewY(${skewAmount}deg)`;
        });

        requestAnimationFrame(updateSkew);
    }
    
       updateSkew();    
         
