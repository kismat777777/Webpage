console.log('Hello World!');
function openLink(url) {
  window.open(url, "_blank");
}

/* Button Click Animation */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".enroll-btn");
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  });
});
function openLink(url) {
  window.open(url, "_blank");
}

/* ================= SEARCH FUNCTION ================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(e) {
  const keyword = searchInput.value.trim().toLowerCase();
  
  // Remove old highlights
  document.querySelectorAll(".search-highlight").forEach(el => {
    el.outerHTML = el.innerHTML;
  });
  
  if (keyword === "") return;
  
  let firstMatch = null;
  
  // Search all visible text nodes
  const elements = document.querySelectorAll("body *:not(script):not(style)");
  
  elements.forEach(el => {
    if (el.children.length === 0) {
      const text = el.textContent.toLowerCase();
      
      if (text.includes(keyword)) {
        const regex = new RegExp(`(${keyword})`, "gi");
        el.innerHTML = el.innerHTML.replace(
          regex,
          `<span class="search-highlight">$1</span>`
        );
        
        if (!firstMatch) firstMatch = el;
      }
    }
  });
  
  // Scroll to first result
  if (firstMatch) {
    firstMatch.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});
/* ===== SEARCH TILT + BOLD ADDON (PASTE BELOW) ===== */

(function() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;
  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();
    
    // Remove previous effects
    document.querySelectorAll(".element-highlight, .tilt-animate, .bold-text")
      .forEach(el => {
        el.classList.remove("element-highlight", "tilt-animate", "bold-text");
      });
    
    if (keyword === "") return;
    
    let firstMatch = null;
    
    const searchableElements = document.querySelectorAll(
      "h1, h2, h3, p, li, strong, nav li, .course-card, .resources, .testimonial"
    );
    
    searchableElements.forEach(el => {
      if (el.innerText.toLowerCase().includes(keyword)) {
        
        el.classList.add("element-highlight", "bold-text");
        
        // restart tilt animation every time
        el.classList.remove("tilt-animate");
        void el.offsetWidth;
        el.classList.add("tilt-animate");
        
        if (!firstMatch) firstMatch = el;
      }
    });
    
    if (firstMatch) {
      firstMatch.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
})();





/* ===== CLASS PANEL TOGGLE ===== */

const classBtn = document.getElementById("classBtn");
const classPanel = document.getElementById("classPanel");

classBtn.addEventListener("click", () => {
  classPanel.style.display =
    classPanel.style.display === "block" ? "none" : "block";
});

/* Close when clicking outside */
document.addEventListener("click", (e) => {
  if (!classBtn.contains(e.target) && !classPanel.contains(e.target)) {
    classPanel.style.display = "none";
  }
});




// ================================
// NAV PANEL TOGGLE SYSTEM
// ================================

const panels = {
  liveBtn: document.getElementById("liveBtn"),
  guideBtn: document.getElementById("guideBtn"),
  courseBtn: document.getElementById("courseBtn")
};

const panelDivs = {
  liveBtn: document.getElementById("livePanel"),
  guideBtn: document.getElementById("guidePanel"),
  courseBtn: document.getElementById("coursePanel")
};

// Function to toggle a panel
function togglePanel(btnId) {
  Object.keys(panelDivs).forEach(key => {
    if (key === btnId) {
      // Toggle clicked panel
      panelDivs[key].style.display =
        panelDivs[key].style.display === "block" ? "none" : "block";
    } else {
      // Close others
      panelDivs[key].style.display = "none";
    }
  });
}

// Add click listeners
Object.keys(panels).forEach(key => {
  panels[key].addEventListener("click", () => togglePanel(key));
});

// Close all panels when clicking outside
document.addEventListener("click", (e) => {
  let clickedInside = Object.values(panelDivs).some(panel => panel.contains(e.target)) ||
    Object.values(panels).some(btn => btn.contains(e.target));
  if (!clickedInside) {
    Object.values(panelDivs).forEach(panel => panel.style.display = "none");
  }
});