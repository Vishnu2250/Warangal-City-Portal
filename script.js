
const newsItems = [
  {
    title: "City Cleanliness Drive",
    date: "2025-01-10",
    type: "Public Event",
    description:
      "A citywide cleanliness campaign in residential and market areas. Volunteers are welcome to participate."
  },
  {
    title: "Traffic Diversion Notice",
    date: "2025-01-15",
    type: "Notice",
    description:
      "Temporary traffic diversions near the fort area due to restoration works. Commuters are advised to plan accordingly."
  },
  {
    title: "Cultural Festival at Bhadrakali",
    date: "2025-02-01",
    type: "Festival",
    description:
      "Music, dance, and food stalls celebrating the rich culture of Warangal at Bhadrakali Lake."
  }
];

function renderNews() {
  const container = document.getElementById("news-container");
  if (!container) return;

  newsItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="news-meta">
        <strong>${item.type}</strong> • 
        <span>${new Date(item.date).toLocaleDateString()}</span>
      </p>
      <p>${item.description}</p>
    `;

    container.appendChild(card);
  });
}

function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function updateLocalTime() {
  const timeEl = document.getElementById("local-time");
  if (!timeEl) return;

  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

// Simple fake form submission
function handleFormSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your feedback has been recorded (demo).");
  event.target.reset();
  return false;
}


document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  updateYear();
  updateLocalTime();
  setInterval(updateLocalTime, 60000);
});