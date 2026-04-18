if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
    if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
});

const greeting = document.getElementById("greeting");
const overlay = document.getElementById("welcomeOverlay");
const greetBtn = document.getElementById("greetBtn");
const visitorNameInput = document.getElementById("visitorName");
const overlayError = document.getElementById("overlayError");

const hour = new Date().getHours();
let baseGreeting = "";

if (hour < 12) {
    baseGreeting = "Good Morning ";
} else if (hour < 18) {
    baseGreeting = "Good Afternoon ";
} else {
    baseGreeting = "Good Evening ";
}

if (greeting) {
    greeting.textContent = baseGreeting;
}


const savedName = localStorage.getItem("visitorName");

if (savedName && overlay && greeting) {
    overlay.classList.add("hidden");
    greeting.textContent = baseGreeting + savedName + "!";
}

if (greetBtn && overlay && visitorNameInput && overlayError && greeting) {
    greetBtn.addEventListener("click", function () {
        const visitorName = visitorNameInput.value.trim();

        if (visitorName === "") {
            overlayError.textContent = "Please enter your name before continuing.";
            return;
        }

        localStorage.setItem("visitorName", visitorName);
        overlayError.textContent = "";
        greeting.textContent = baseGreeting + visitorName + "!";
        overlay.classList.add("hidden");
        window.scrollTo(0, 0);
    });
}

const modeSwitchBtn = document.getElementById("modeSwitchBtn");
const projectCards = document.querySelectorAll(".project-card");
const modeDescription = document.getElementById("modeDescription");
const emptyMessage = document.getElementById("emptyMessage");

const favoritesFilterBtn = document.getElementById("favoritesFilterBtn");
let showFavoritesOnly = false;

const modes = ["all", "professional", "creative"];
let currentModeIndex = 0;

function updateModeVisuals(selectedMode) {
    const mixedCard = document.querySelector(".project-card.professional.creative");

    if (!mixedCard) return;

    const professionalView = mixedCard.querySelector(".professional-view");
    const creativeView = mixedCard.querySelector(".creative-view");

    if (!professionalView || !creativeView) return;

    if (selectedMode === "professional") {
        professionalView.style.display = "block";
        creativeView.style.display = "none";
    } else if (selectedMode === "creative") {
        professionalView.style.display = "none";
        creativeView.style.display = "block";
    } else {
        professionalView.style.display = "block";
        creativeView.style.display = "block";
    }
}

function applyMode(selectedMode) {
    let visibleCount = 0;

    document.body.classList.remove("mode-all", "mode-professional", "mode-creative");
    document.body.classList.add("mode-" + selectedMode);

    projectCards.forEach(card => {
        const matchesMode =
        selectedMode === "all" || card.classList.contains(selectedMode);

        const isFavorited = card.classList.contains("favorited");

        if (matchesMode && (!showFavoritesOnly || isFavorited)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (selectedMode === "all") {
        modeDescription.textContent = "Here you can view all projects from both my professional and creative interests.";
        modeSwitchBtn.textContent = "💻+🎨";
    } else if (selectedMode === "professional") {
        modeDescription.textContent = "Here you can view projects that reflect my academic and professional interests.";
        modeSwitchBtn.textContent = "💻";
    } else if (selectedMode === "creative") {
        modeDescription.textContent = "Here you can view projects that reflect my creative interests and hobbies.";
        modeSwitchBtn.textContent = "🎨";
    }

    emptyMessage.textContent = visibleCount === 0 ? "No projects found in this view." : "";


    updateModeVisuals(selectedMode);
    revealCreativeShots();
    zoomLaptopFrames();
}

if (modeSwitchBtn && projectCards.length > 0 && modeDescription && emptyMessage) {
    modeSwitchBtn.addEventListener("click", function () {
        currentModeIndex = (currentModeIndex + 1) % modes.length;
        applyMode(modes[currentModeIndex]);
    });

    applyMode("all");
}



const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button, index) => {
    const projectCard = button.closest(".project-card");
    const storageKey = "favoriteProject" + index;

    if (localStorage.getItem(storageKey) === "true") {
        projectCard.classList.add("favorited");
        button.textContent = "❤️";
    }

    button.addEventListener("click", function () {
        const isFavorited = projectCard.classList.toggle("favorited");

        if (isFavorited) {
            button.textContent = "❤️";
            localStorage.setItem(storageKey, "true");
        } else {
            button.textContent = "🤍";
            localStorage.setItem(storageKey, "false");
        }
    });
});


if (favoritesFilterBtn) {
    favoritesFilterBtn.addEventListener("click", function () {
        showFavoritesOnly = !showFavoritesOnly;

        if (showFavoritesOnly) {
            favoritesFilterBtn.textContent = "Showing Favorites";
        } else {
            favoritesFilterBtn.textContent = "Show Favorites";
        }

        applyMode(modes[currentModeIndex]);
    });
}

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formMessage = document.getElementById("formMessage");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm && nameInput && emailInput && messageInput && nameError && emailError && messageError && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";

        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = "Message should be at least 10 characters long.";
            isValid = false;
        }

        if (isValid) {
            formMessage.textContent = "Your message has been submitted successfully.";
            contactForm.reset();
        }
    });
} else {
    console.log("Form validation elements not found.");
}


const revealElements = document.querySelectorAll(".reveal");

function handleScrollReveal() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

function revealCreativeShots() {
    const creativeShots = document.querySelectorAll(".creative-shot");

    creativeShots.forEach((shot, index) => {
        const rect = shot.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 40 && rect.bottom > 100;

        if (isVisible && !shot.classList.contains("show")) {
            setTimeout(() => {
                shot.classList.add("show");
            }, index * 220);
        }
    });
}

function zoomLaptopFrames() {
    const frames = document.querySelectorAll(".zoom-card");

    frames.forEach(frame => {
        const rect = frame.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            frame.classList.add("zoomed");
        }
    });
}

window.addEventListener("scroll", function () {
    handleScrollReveal();
    revealCreativeShots();
    zoomLaptopFrames();
});

handleScrollReveal();
revealCreativeShots();
zoomLaptopFrames();
document.body.classList.add("mode-all");

const API_KEY = "MS8gYcs7eGvQjyYooEWNenJ4K59xnuWpfQnDsIfovWWxNYCVVH7g4IqW";

const gallery = document.getElementById("pexels-gallery");
const errorMessage = document.getElementById("pexels-error");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

async function loadImages(query) {
  try {
    gallery.innerHTML = "Loading...";
    errorMessage.textContent = "";

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=6`,
      {
        headers: {
          Authorization: API_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();

    gallery.innerHTML = "";

    if (data.photos.length === 0) {
      gallery.innerHTML = "No images found.";
      return;
    }

    data.photos.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.src.medium;
      img.alt = photo.alt || "image";

      gallery.appendChild(img);
    });

  } catch (error) {
    gallery.innerHTML = "";
    errorMessage.textContent = "Failed to load images.";
    console.error(error);
  }
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (query === "") {
    errorMessage.textContent = "Please enter a keyword.";
    return;
  }

  loadImages(query);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

