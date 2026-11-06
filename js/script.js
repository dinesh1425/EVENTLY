"use strict";

const events = [
  { id: "future-forward", title: "Future Forward Summit", category: "Technology", date: "2027-01-16T09:30:00+05:30", endTime: "5:30 PM", location: "New Delhi", venue: "Bharat Mandapam, Pragati Maidan", price: 799, seats: 240, organizer: "Nextwave Collective", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85", alt: "Audience listening to a speaker at a technology conference", description: "A full day of sharp ideas, emerging technology, and conversations with the people shaping what's next. Meet founders, designers, and curious minds from across the country.", featured: true },
  { id: "afterglow-festival", title: "Afterglow Music Festival", category: "Music", date: "2027-01-24T16:00:00+05:30", endTime: "11:00 PM", location: "Mumbai", venue: "Mahalaxmi Racecourse", price: 1499, seats: 1250, organizer: "Afterglow Live", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85", alt: "Festival crowd enjoying a live performance under colorful lights", description: "One open sky, a brilliant lineup, and the kind of sunset you'll talk about all year. Discover independent Indian artists alongside the names you already love.", featured: true },
  { id: "ideas-in-motion", title: "Ideas in Motion", category: "Business", date: "2027-02-05T10:00:00+05:30", endTime: "6:00 PM", location: "Bengaluru", venue: "The Leela Palace, Old Airport Road", price: 999, seats: 180, organizer: "Good Company Forum", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85", alt: "Guest speaker sharing ideas with an engaged audience", description: "A thoughtful day of practical talks and generous networking for people building the next chapter of their work. Leave with new connections and ideas you can act on.", featured: true },
  { id: "city-stride", title: "The City Stride 10K", category: "Sports", date: "2027-02-14T06:00:00+05:30", endTime: "10:00 AM", location: "Pune", venue: "Shaniwar Wada, Kasba Peth", price: 499, seats: 800, organizer: "Run Together India", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1000&q=85", alt: "Runners taking part in a city road race", description: "A friendly city run for first-timers, weekend runners, and anyone who wants to start the day with a little momentum. Includes a 5K fun route and a timed 10K.", featured: true },
  { id: "make-and-matter", title: "Make & Matter Workshop", category: "Education", date: "2027-02-21T11:00:00+05:30", endTime: "4:00 PM", location: "Jaipur", venue: "The Artisan House, C-Scheme", price: 650, seats: 32, organizer: "Studio Mitti", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=85", alt: "Creative workshop attendees working on a hands-on project", description: "An easygoing, hands-on afternoon exploring print, pattern, and making things with your hands. All materials are included; curiosity is the only prerequisite.", featured: true },
  { id: "open-air-cinema", title: "Moonlight Cinema Club", category: "Entertainment", date: "2027-02-28T18:30:00+05:30", endTime: "10:00 PM", location: "Hyderabad", venue: "Durgam Cheruvu Park", price: 399, seats: 220, organizer: "Reel Good Nights", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=85", alt: "Outdoor film screening beneath the evening sky", description: "A beloved film, a blanket under the stars, and snacks from local makers. Come early to settle in and stay after for a little conversation about what you watched.", featured: true },
  { id: "designing-tomorrow", title: "Designing Tomorrow", category: "Technology", date: "2027-03-06T09:00:00+05:30", endTime: "4:30 PM", location: "Mumbai", venue: "Nehru Centre, Worli", price: 850, seats: 140, organizer: "People First Design", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85", alt: "Design conference with a presentation on stage", description: "A practical, people-first design gathering for anyone curious about making digital experiences more useful, inclusive, and humane. Bring a question; leave with a sketchbook full of ideas.", featured: false },
  { id: "sound-and-soul", title: "Sound & Soul Sessions", category: "Music", date: "2027-03-13T17:00:00+05:30", endTime: "9:30 PM", location: "Bengaluru", venue: "Ranga Shankara Courtyard, JP Nagar", price: 599, seats: 300, organizer: "Indie Room", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85", alt: "Musicians performing live on an intimate outdoor stage", description: "A warm, intimate evening for discovering brilliant new voices in Indian independent music. Three live sets, a courtyard full of listeners, and no rush to go home.", featured: false },
  { id: "founder-friday", title: "Founder Friday: Building Well", category: "Business", date: "2027-03-20T15:00:00+05:30", endTime: "7:00 PM", location: "New Delhi", venue: "The Quorum, DLF Two Horizon Centre", price: 0, seats: 90, organizer: "Good Company Forum", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=85", alt: "Entrepreneurs connecting at a small business gathering", description: "A generous, no-pitch afternoon for founders to share what's working, what isn't, and what they wish they'd known sooner. Thoughtful questions and honest answers welcome.", featured: false },
  { id: "clay-sunday", title: "Clay Sunday Social", category: "Education", date: "2027-03-27T10:30:00+05:30", endTime: "1:30 PM", location: "Pune", venue: "Mitti Studio, Koregaon Park", price: 750, seats: 24, organizer: "Studio Mitti", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=85", alt: "Handmade pottery pieces at a ceramics workshop", description: "Get your hands messy and your mind quiet. Learn the basics of hand-building clay with a friendly local ceramicist. Materials, firing, and a cup of chai are on us.", featured: false },
  { id: "city-courts", title: "City Courts Open Play", category: "Sports", date: "2027-04-03T08:00:00+05:30", endTime: "12:00 PM", location: "Jaipur", venue: "SMS Stadium, Rambagh", price: 250, seats: 100, organizer: "Play Local", image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=85", alt: "Friends playing sport together outdoors", description: "A relaxed morning of rotating teams, friendly matches, and meeting people who'd rather be outside. All skill levels are welcome; equipment is available to borrow.", featured: false },
  { id: "little-big-stories", title: "Little Big Stories Live", category: "Entertainment", date: "2027-04-10T19:00:00+05:30", endTime: "9:00 PM", location: "Hyderabad", venue: "Lamakaan, Banjara Hills", price: 350, seats: 75, organizer: "Lamakaan Stories", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85", alt: "Small live performance in an intimate venue", description: "An intimate evening of true stories, music, and the small details that make a life. Come for one story, stay for the conversation and the company.", featured: false }
];

const STORAGE_KEYS = { registrations: "evently.registrations", favorites: "evently.favorites", theme: "evently.theme", newsletter: "evently.newsletter" };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const elements = {
  featured: $("#featured-grid"), events: $("#event-grid"), count: $("#results-count"), empty: $("#empty-state"),
  query: $("#filter-query"), category: $("#filter-category"), location: $("#filter-location"), sort: $("#filter-sort"),
  registrationEvent: $("#registration-event"), eventDialog: $("#event-dialog"), successDialog: $("#success-dialog"),
  dialogContent: $("#dialog-content"), toast: $("#toast"), menuToggle: $(".menu-toggle"), navLinks: $("#primary-nav")
};
let toastTimer;
let countdownEvent;
let favorites = readStoredArray(STORAGE_KEYS.favorites);

function readStoredArray(key) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.error(`Unable to read ${key} from local storage.`, error);
    return [];
  }
}

function saveStored(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save ${key} to local storage.`, error);
    showToast("Your browser couldn't save this on this device. Check available storage.");
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function formatDate(value, options = { month: "short", day: "numeric", year: "numeric" }) {
  return new Intl.DateTimeFormat("en-IN", options).format(new Date(value));
}

function formatPrice(price) {
  return price === 0 ? "Free" : `₹${price.toLocaleString("en-IN")}`;
}

function fallbackImage(image) {
  image.onerror = null;
  image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23ddd6f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%235b5277' font-family='sans-serif' font-size='28'%3EEvently%3C/text%3E%3C/svg%3E";
}

function cardMarkup(event) {
  const date = new Date(event.date);
  const favorite = favorites.includes(event.id);
  return `<article class="event-card">
    <div class="event-image-wrap">
      <img src="${event.image}" alt="${escapeHTML(event.alt)}" loading="lazy" onerror="fallbackImage(this)">
      <span class="event-date-badge"><strong>${date.getDate()}</strong>${date.toLocaleDateString("en-IN", { month: "short" })}</span>
      <button class="favorite-button${favorite ? " is-favorite" : ""}" type="button" data-favorite="${event.id}" aria-label="${favorite ? "Remove from" : "Add to"} favourites" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
    </div>
    <div class="event-card-body">
      <div class="card-meta"><span class="category-tag">${escapeHTML(event.category)}</span><span>${formatDate(event.date, { weekday: "short", month: "short", day: "numeric" })}</span></div>
      <h3>${escapeHTML(event.title)}</h3>
      <p class="event-description">${escapeHTML(event.description.slice(0, 105))}${event.description.length > 105 ? "…" : ""}</p>
      <p class="event-location"><span aria-hidden="true">⌖</span>${escapeHTML(event.location)} · ${escapeHTML(event.venue)}</p>
      <div class="event-card-footer"><span class="event-price">${formatPrice(event.price)} <small>/ ticket</small></span><button class="details-button" type="button" data-details="${event.id}">View details ↗</button></div>
    </div>
  </article>`;
}

function renderFeatured() {
  elements.featured.innerHTML = events.filter((event) => event.featured).map(cardMarkup).join("");
}

function getFilteredEvents() {
  const query = elements.query.value.trim().toLocaleLowerCase();
  const category = elements.category.value;
  const location = elements.location.value;
  const sort = elements.sort.value;
  const filtered = events.filter((event) => {
    const searchable = `${event.title} ${event.description} ${event.category} ${event.location} ${event.venue} ${event.organizer}`.toLocaleLowerCase();
    return (!query || searchable.includes(query)) && (!category || event.category === category) && (!location || event.location === location);
  });
  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price || new Date(a.date) - new Date(b.date));
  else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price || new Date(a.date) - new Date(b.date));
  else filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  return filtered;
}

function renderEvents() {
  const filtered = getFilteredEvents();
  elements.events.innerHTML = filtered.map(cardMarkup).join("");
  elements.count.innerHTML = `<strong>${filtered.length}</strong> ${filtered.length === 1 ? "experience" : "experiences"} to explore`;
  elements.empty.hidden = filtered.length !== 0;
  elements.events.hidden = filtered.length === 0;
}

function populateSelects() {
  const categories = [...new Set(events.map((event) => event.category))].sort();
  const locations = [...new Set(events.map((event) => event.location))].sort();
  const categoryOptions = categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
  const locationOptions = locations.map((location) => `<option value="${escapeHTML(location)}">${escapeHTML(location)}</option>`).join("");
  $("#filter-category").insertAdjacentHTML("beforeend", categoryOptions);
  $("#hero-category").insertAdjacentHTML("beforeend", categoryOptions);
  $("#filter-location").insertAdjacentHTML("beforeend", locationOptions);
  $("#hero-location").insertAdjacentHTML("beforeend", locationOptions);
  $("#registration-event").insertAdjacentHTML("beforeend", events.map((event) => `<option value="${event.id}">${escapeHTML(event.title)} — ${formatDate(event.date, { month: "short", day: "numeric" })}</option>`).join(""));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 3200);
}

function openEventDetails(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event) {
    showToast("Sorry, we couldn't find that event.");
    return;
  }
  elements.dialogContent.innerHTML = `<img class="dialog-image" src="${event.image}" alt="${escapeHTML(event.alt)}" onerror="fallbackImage(this)">
    <div class="dialog-body"><span class="category-tag">${escapeHTML(event.category)}</span><h2 id="dialog-title">${escapeHTML(event.title)}</h2>
    <p class="dialog-description">${escapeHTML(event.description)}</p>
    <div class="dialog-facts"><div><span>Date</span><strong>${formatDate(event.date, { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</strong></div><div><span>Time</span><strong>${new Date(event.date).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })} – ${escapeHTML(event.endTime)}</strong></div><div><span>Venue</span><strong>${escapeHTML(event.venue)}, ${escapeHTML(event.location)}</strong></div><div><span>Available seats</span><strong>${event.seats.toLocaleString("en-IN")}</strong></div></div>
    <div class="dialog-organizer">Organized by <strong>${escapeHTML(event.organizer)}</strong></div>
    <div class="dialog-footer"><span class="event-price">${formatPrice(event.price)} <small>/ ticket</small></span><button class="button button-primary" type="button" data-register-event="${event.id}">Register now <span aria-hidden="true">↗</span></button></div></div>`;
  elements.eventDialog.showModal();
  document.body.classList.add("modal-open");
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  if (!elements.eventDialog.open && !elements.successDialog.open) document.body.classList.remove("modal-open");
}

function setEventFilter(category = "", location = "", query = "") {
  elements.category.value = category;
  elements.location.value = location;
  elements.query.value = query;
  renderEvents();
  $("#explore").scrollIntoView({ behavior: "smooth" });
}

function updateCountdown() {
  const now = Date.now();
  countdownEvent = events.find((event) => new Date(event.date).getTime() > now) || null;
  if (!countdownEvent) {
    $("#countdown-title").textContent = "More good things are on the way.";
    $("#countdown-location").textContent = "Check back soon for the next gathering.";
    ["days", "hours", "minutes", "seconds"].forEach((id) => { $(`#${id}`).textContent = "00"; });
    $("#countdown-action").disabled = true;
    return;
  }
  $("#countdown-title").textContent = countdownEvent.title;
  $("#countdown-location").textContent = `${formatDate(countdownEvent.date, { weekday: "long", month: "long", day: "numeric" })} · ${countdownEvent.location}`;
  const remaining = Math.max(0, new Date(countdownEvent.date).getTime() - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  $("#days").textContent = String(days).padStart(2, "0");
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
}

function showFieldError(input, message) {
  const field = input.closest(".form-field");
  const error = field.querySelector(".field-error");
  error.textContent = message;
  field.classList.toggle("has-error", Boolean(message));
  input.setAttribute("aria-invalid", String(Boolean(message)));
}

function validateRegistration() {
  const name = $("#full-name");
  const email = $("#email");
  const phone = $("#phone");
  const eventSelect = $("#registration-event");
  const quantity = $("#ticket-quantity");
  const selectedEvent = events.find((event) => event.id === eventSelect.value);
  let valid = true;
  const checks = [
    [name, /^[\p{L}][\p{L}\p{M} .'-]{1,79}$/u.test(name.value.trim()) ? "" : "Enter a name using letters and common punctuation."],
    [email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? "" : "Enter a valid email address."],
    [phone, /^[6-9]\d{9}$/.test(phone.value.trim()) ? "" : "Enter a valid 10-digit Indian mobile number."],
    [eventSelect, selectedEvent ? "" : "Choose an event to continue."],
    [quantity, /^\d+$/.test(quantity.value) && Number(quantity.value) >= 1 && Number(quantity.value) <= 10 && (!selectedEvent || Number(quantity.value) <= selectedEvent.seats) ? "" : "Choose 1–10 tickets, within available seats."]
  ];
  checks.forEach(([input, error]) => {
    showFieldError(input, error);
    if (error) valid = false;
  });
  return { valid, selectedEvent };
}

function handleRegistration(submitEvent) {
  submitEvent.preventDefault();
  const { valid, selectedEvent } = validateRegistration();
  if (!valid || !selectedEvent) {
    $(".form-field.has-error input, .form-field.has-error select").focus();
    return;
  }
  const registration = {
    reference: `EVT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    name: $("#full-name").value.trim(),
    email: $("#email").value.trim(),
    phone: $("#phone").value.replace(/\D/g, ""),
    eventId: selectedEvent.id,
    eventTitle: selectedEvent.title,
    quantity: Number($("#ticket-quantity").value),
    message: $("#message").value.trim(),
    registeredAt: new Date().toISOString()
  };
  const registrations = readStoredArray(STORAGE_KEYS.registrations);
  registrations.push(registration);
  if (!saveStored(STORAGE_KEYS.registrations, registrations)) return;
  $("#success-message").textContent = `${registration.name}, you're registered for ${registration.quantity} ${registration.quantity === 1 ? "ticket" : "tickets"} to ${selectedEvent.title}. We've saved your details on this device.`;
  $("#reference-id").textContent = registration.reference;
  $("#registration-form").reset();
  $$(".field-error").forEach((field) => { field.textContent = ""; });
  $$(".form-field").forEach((field) => field.classList.remove("has-error"));
  $$("[aria-invalid]").forEach((input) => input.removeAttribute("aria-invalid"));
  elements.successDialog.showModal();
  document.body.classList.add("modal-open");
}

function initializeTheme() {
  const themeToggle = $(".theme-toggle");
  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (storedTheme === "light") document.body.classList.add("light-theme");
  updateThemeButton(themeToggle);
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    try { localStorage.setItem(STORAGE_KEYS.theme, theme); }
    catch (error) { console.error("Unable to save theme preference.", error); }
    updateThemeButton(themeToggle);
  });
}

function updateThemeButton(button) {
  const light = document.body.classList.contains("light-theme");
  button.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
  button.querySelector("span").textContent = light ? "☾" : "☼";
}

function initializeReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const revealItems = $$(".section-heading, .event-card, .category-card, .about-visual, .about-copy, .registration-form, .newsletter-inner");
  revealItems.forEach((item) => item.classList.add("reveal"));
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

function initialize() {
  populateSelects();
  renderFeatured();
  renderEvents();
  initializeTheme();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  $("#copyright-year").textContent = String(new Date().getFullYear());

  $("#filter-form").addEventListener("input", renderEvents);
  $("#filter-form").addEventListener("change", renderEvents);
  $("#filter-reset").addEventListener("click", () => window.setTimeout(renderEvents));
  $("#show-all").addEventListener("click", () => setEventFilter());
  $("#empty-reset").addEventListener("click", () => setEventFilter());
  $("#hero-search").addEventListener("click", () => setEventFilter($("#hero-category").value, $("#hero-location").value, $("#hero-query").value.trim()));
  $("#hero-query").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#hero-search").click();
    }
  });
  $("#hero-category").addEventListener("change", () => setEventFilter($("#hero-category").value, $("#hero-location").value, $("#hero-query").value.trim()));
  $("#hero-location").addEventListener("change", () => setEventFilter($("#hero-category").value, $("#hero-location").value, $("#hero-query").value.trim()));
  $$(".category-card").forEach((button) => button.addEventListener("click", () => setEventFilter(button.dataset.category)));
  $("#countdown-action").addEventListener("click", () => countdownEvent && openEventDetails(countdownEvent.id));
  $("#registration-form").addEventListener("submit", handleRegistration);
  $("#newsletter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#newsletter-email");
    const feedback = $("#newsletter-feedback");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.style.color = "#a23b45";
      input.focus();
      return;
    }
    const emails = readStoredArray(STORAGE_KEYS.newsletter);
    const email = input.value.trim().toLowerCase();
    if (emails.includes(email)) {
      feedback.textContent = "You're already on the list. We'll be in touch!";
    } else {
      emails.push(email);
      if (!saveStored(STORAGE_KEYS.newsletter, emails)) return;
      feedback.textContent = "You're on the list. See you in your inbox!";
    }
    feedback.style.color = "#443589";
    $("#newsletter-form").reset();
  });

  document.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
      const id = favoriteButton.dataset.favorite;
      favorites = favorites.includes(id) ? favorites.filter((favorite) => favorite !== id) : [...favorites, id];
      saveStored(STORAGE_KEYS.favorites, favorites);
      renderFeatured();
      renderEvents();
      showToast(favorites.includes(id) ? "Added to your favourites." : "Removed from your favourites.");
      return;
    }
    const detailButton = event.target.closest("[data-details]");
    if (detailButton) {
      openEventDetails(detailButton.dataset.details);
      return;
    }
    const registerButton = event.target.closest("[data-register-event]");
    if (registerButton) {
      const eventId = registerButton.dataset.registerEvent;
      closeDialog(elements.eventDialog);
      elements.registrationEvent.value = eventId;
      $("#register").scrollIntoView({ behavior: "smooth" });
      $("#full-name").focus({ preventScroll: true });
    }
  });
  $$(".dialog-close").forEach((button) => button.addEventListener("click", () => closeDialog(button.closest("dialog"))));
  $$(".event-dialog, .success-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", () => {
      if (!elements.eventDialog.open && !elements.successDialog.open) document.body.classList.remove("modal-open");
    });
  });
  $(".success-close").addEventListener("click", () => closeDialog(elements.successDialog));
  elements.menuToggle.addEventListener("click", () => {
    const expanded = elements.menuToggle.getAttribute("aria-expanded") === "true";
    elements.menuToggle.setAttribute("aria-expanded", String(!expanded));
    elements.menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    elements.navLinks.classList.toggle("is-open", !expanded);
  });
  $$("#primary-nav a").forEach((link) => link.addEventListener("click", () => {
    elements.navLinks.classList.remove("is-open");
    elements.menuToggle.setAttribute("aria-expanded", "false");
    elements.menuToggle.setAttribute("aria-label", "Open navigation");
  }));
  const backToTop = $("#back-to-top");
  window.addEventListener("scroll", () => backToTop.classList.toggle("is-visible", window.scrollY > 560), { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $$(".nav-links a[href^='#']").forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-30% 0px -65% 0px" });
    $$("main section[id]").forEach((section) => navObserver.observe(section));
  }
  initializeReveal();
}

document.addEventListener("DOMContentLoaded", initialize);
