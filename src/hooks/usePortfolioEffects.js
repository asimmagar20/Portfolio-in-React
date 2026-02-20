import { useEffect } from "react";

// ============================================================
// PREMIUM PORTFOLIO - REACT EFFECTS (ported from scripts.js)
// Keeps the same behaviors: theme toggle, active nav, smooth scroll,
// scroll reveal, parallax, back-to-top, copy notification, shortcuts,
// and looping typewriter.
// ============================================================

export function usePortfolioEffects() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const backToTopBtn = document.getElementById("backToTop");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    if (!body) return;

    // Theme Toggle
    let currentTheme = localStorage.getItem("theme") || "dark";

    function updateThemeIcon() {
      const moonIcon = themeToggle?.querySelector(".fa-moon");
      const sunIcon = themeToggle?.querySelector(".fa-sun");
      if (moonIcon && sunIcon) {
        if (currentTheme === "dark") {
          moonIcon.style.display = "block";
          sunIcon.style.display = "none";
        } else {
          moonIcon.style.display = "none";
          sunIcon.style.display = "block";
        }
      }
    }

    function enhanceLightTheme() {
      if (currentTheme === "light") {
        document
          .querySelectorAll(
            ".about-card, .experience-card, .expertise-card, .project-card, .contact-info, .cta-card",
          )
          .forEach((card) => {
            card.style.backdropFilter = "blur(10px)";
          });
      }
    }

    function toggleTheme() {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
      updateThemeIcon();
      enhanceLightTheme();
    }

    function initTheme() {
      body.setAttribute("data-theme", currentTheme);
      updateThemeIcon();
      enhanceLightTheme();
      if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
      }
    }

    // Navbar Scroll + Active Link
    function updateActiveNavLink() {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href") || "";
        if (current && href.includes(`#${current}`)) {
          link.classList.add("active");
        }
      });
    }

    function initNavbarScroll() {
      if (!navbar) return;
      const onScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
        updateActiveNavLink();
      };
      window.addEventListener("scroll", onScroll);
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Smooth Scroll (anchors)
    function initSmoothScroll() {
      const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
      const handlers = anchors.map((anchor) => {
        const handler = (e) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        };
        anchor.addEventListener("click", handler);
        return [anchor, handler];
      });

      return () => {
        handlers.forEach(([a, h]) => a.removeEventListener("click", h));
      };
    }

    // Scroll Reveal Animations
    function initScrollAnimations() {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation =
              "fadeInUp 0.8s cubic-bezier(0.22, 0.9, 0.2, 1) forwards";
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document
        .querySelectorAll(
          ".about-card, .experience-card, .expertise-card, .project-card, .contact-info, .cta-card, .glass-card",
        )
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }

    // Parallax Effect
    function initParallax() {
      const profileImage = document.querySelector(".profile-image");
      if (!profileImage) return () => {};

      const handler = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        profileImage.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
      };

      window.addEventListener("mousemove", handler);
      return () => window.removeEventListener("mousemove", handler);
    }

    // Back to Top
    function initBackToTop() {
      if (!backToTopBtn) return () => {};

      const onScroll = () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      };

      const onClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      window.addEventListener("scroll", onScroll);
      backToTopBtn.addEventListener("click", onClick);

      onScroll();

      return () => {
        window.removeEventListener("scroll", onScroll);
        backToTopBtn.removeEventListener("click", onClick);
      };
    }

    // Copy notification (same class name as CSS)
    function showCopyNotification(text) {
      const existing = document.querySelector(".copy-notification");
      if (existing) existing.remove();

      const notification = document.createElement("div");
      notification.className = "copy-notification";
      notification.innerHTML = `<i class="fas fa-check"></i> Copied: ${text}`;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.classList.add("hidden");
        setTimeout(() => notification.remove(), 400);
      }, 2500);
    }

    // Expose for inline usage if needed
    window.copyToClipboard = (text) => {
      navigator.clipboard
        .writeText(text)
        .then(() => showCopyNotification(text))
        .catch((err) => console.error("Failed to copy:", err));
    };

    // Ensure all buttons clickable
    function ensureButtonsClickable() {
      document.querySelectorAll("a[href]").forEach((link) => {
        link.style.pointerEvents = "auto";
        link.style.cursor = "pointer";
      });

      document.querySelectorAll(".btn").forEach((btn) => {
        btn.style.pointerEvents = "auto";
        btn.style.cursor = "pointer";
        btn.style.display = "inline-flex";
      });
    }

    // Looping typewriter for hero subtitle (same roles + timing)
    const roles = ["Full Stack Developer", "UI/UX Designer"]; // from scripts.js
    function initTypewriter() {
      const el = document.querySelector(".hero-subtitle");
      if (!el) return () => {};

      el.setAttribute("contenteditable", "false");
      el.setAttribute("tabindex", "-1");

      const cursor = document.createElement("span");
      cursor.className = "typewriter-cursor";
      cursor.textContent = "";

      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let timer = null;

      function tick() {
        const currentRole = roles[roleIndex];
        const text = currentRole.substring(0, charIndex);

        el.textContent = text;
        el.appendChild(cursor);

        if (!isDeleting && charIndex < currentRole.length) {
          charIndex++;
          timer = window.setTimeout(tick, 90);
        } else if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true;
          timer = window.setTimeout(tick, 1000);
        } else if (isDeleting && charIndex > 0) {
          charIndex--;
          timer = window.setTimeout(tick, 60);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timer = window.setTimeout(tick, 200);
        }
      }

      tick();

      return () => {
        if (timer) window.clearTimeout(timer);
      };
    }

    // Keyboard shortcuts
    const onKeyDown = (e) => {
      if (e.key === "t" || e.key === "T") toggleTheme();
      if (e.key === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("keydown", onKeyDown);

    // INIT (order same as scripts.js)
    const cleanups = [];
    initTheme();
    const c1 = initNavbarScroll();
    if (typeof c1 === "function") cleanups.push(c1);
    const c2 = initSmoothScroll();
    if (typeof c2 === "function") cleanups.push(c2);
    const c3 = initBackToTop();
    if (typeof c3 === "function") cleanups.push(c3);
    const c4 = initScrollAnimations();
    if (typeof c4 === "function") cleanups.push(c4);
    const c5 = initParallax();
    if (typeof c5 === "function") cleanups.push(c5);
    const c6 = initTypewriter();
    if (typeof c6 === "function") cleanups.push(c6);
    ensureButtonsClickable();

    // eslint-disable-next-line no-console
    console.log(
      "%c✨ Premium Portfolio Loaded Successfully",
      "color: #00d4ff; font-size: 16px; font-weight: bold;",
    );

    return () => {
      cleanups.forEach((fn) => fn());
      document.removeEventListener("keydown", onKeyDown);
      if (themeToggle) themeToggle.removeEventListener("click", toggleTheme);
      // best-effort cleanup for global
      try {
        delete window.copyToClipboard;
      } catch {}
    };
  }, []);
}
