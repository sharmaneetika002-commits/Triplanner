const countryData =
{
  Norway: {
    image: "../pictures/norway.png", subtitle: "The Land of the Midnight Sun • Europe",
    activities: [
      { name: "Geirangerfjord", desc: "stunning fjord with waterfalls spilling down giant cliffs.", tag: "Nature", emoji: "💧" },
      { name: "Lofoten Islands", desc: "Sharp mountains, red fishing cabins, and beautiful skies.", tag: "Nature", emoji: "⛰️" },
      { name: "Bergen", desc: "Harbor city wrapped in rain, mountains, and Nordic vibes", tag: "City", emoji: "🌧️" },
      { name: "Trolltunga", desc: "Cliff ledge hanging dramatically above a blue lake", tag: "Nature", emoji: "🌄" },
      { name: "Atlantic Ocean Road", desc: "Highway weaving across tiny islands and crashing waves", tag: "Nature", emoji: "🛣️" },
      { name: "Svalbard", desc: "Arctic wilderness filled with glaciers, polar bears, and endless snow", tag: "Nature", emoji: "🐻‍❄️" },
      { name: "Nærøyfjord", desc: "narrow emerald fjord surrounded by towering mountain walls", tag: "Nature", emoji: "🕊️" },
      { name: "Preikestolen", desc: "massive cliff platform with jaw-dropping fjord views", tag: "Nature", emoji: "🎨" },
      { name: "Oslo", desc: "Norway's capital where modern architecture meets forests and fjords", tag: "History", emoji: "🏛️" },
    ]
  },
  China: {
    image: "../pictures/china.png", subtitle: "The Red Dragon • Asia",
    activities: [
      { name: "Great Wall of China", desc: "ancient wall stretching across mountains and valleys", tag: "History", emoji: "🏯" },
      { name: "Zhangjiajie", desc: "towering stone pillars that inspired the world of Avatar", tag: "Nature", emoji: "🌄" },
      { name: "Forbidden City", desc: "massive imperial palace filled with centuries of history", tag: "History", emoji: "👑" },
      { name: "Shanghai", desc: "futuristic skyline glowing beside historic riverside streets", tag: "City", emoji: "🌃" },
      { name: "Li River", desc: "peaceful river surrounded by dramatic karst mountains", tag: "Nature", emoji: "🚣" },
      { name: "Chengdu", desc: "home of giant pandas and spicy Sichuan cuisine", tag: "City", emoji: "🐼" },
      { name: "Terracotta Army", desc: "thousands of life-sized clay soldiers guarding an emperor", tag: "History", emoji: "⚔️" },
      { name: "Guilin", desc: "dreamy landscapes filled with misty green peaks", tag: "Nature", emoji: "🌿" },
      { name: "West Lake", desc: "serene lake surrounded by gardens, temples, and bridges", tag: "Nature", emoji: "🌸" },
    ]
  },
  Switzerland: {
    image: "../pictures/switzerland.png", subtitle: "The Land of the Alps • Europe",
    activities: [
      { name: "Zermatt", desc: "mountain village beneath the iconic Matterhorn peak", tag: "Nature", emoji: "🏔️" },
      { name: "Interlaken", desc: "beautiful resort town between two turquoise lakes", tag: "Nature", emoji: "🚞" },
      { name: "Lucerne", desc: "charming lakeside city with medieval architecture", tag: "City", emoji: "🌉" },
      { name: "Jungfraujoch", desc: "snowy mountain pass known as the Top of Europe", tag: "Nature", emoji: "❄️" },
      { name: "Lake Geneva", desc: "crescent-shaped lake surrounded by vineyards and mountains", tag: "Nature", emoji: "🦢" },
      { name: "Bern", desc: "capital city filled with old stone streets and clock towers", tag: "History", emoji: "🕰️" },
      { name: "Lauterbrunnen", desc: "storybook valley with cliffs and giant waterfalls", tag: "Nature", emoji: "💧" },
      { name: "St. Moritz", desc: "luxury alpine resort famous for skiing and frozen lakes", tag: "City", emoji: "🎿" },
      { name: "Rhine Falls", desc: "Europe's largest waterfall crashing with immense power", tag: "Nature", emoji: "🌊" },
    ]
  },
  Japan: {
    image: "../pictures/japan.png", subtitle: "Land of the Rising Sun • Asia",
    activities: [
      { name: "Mount Fuji", desc: "Iconic volcanic peak, hike or view from Hakone", tag: "Nature", emoji: "🗻" },
      { name: "Senso-ji Temple", desc: "Tokyo's oldest temple in Asakusa", tag: "Culture", emoji: "⛩️" },
      { name: "Shibuya Crossing", desc: "World's busiest pedestrian scramble", tag: "City", emoji: "🚦" },
      { name: "Arashiyama Bamboo", desc: "Stunning bamboo groves in Kyoto", tag: "Nature", emoji: "🎋" },
      { name: "Fushimi Inari", desc: "Thousands of torii gates up a hillside", tag: "Culture", emoji: "🔴" },
      { name: "Dotonbori, Osaka", desc: "Neon-lit street food heaven", tag: "Food", emoji: "🍜" },
      { name: "Hiroshima Peace Park", desc: "Powerful memorial and museum", tag: "History", emoji: "🕊️" },
      { name: "TeamLab Planets", desc: "Immersive digital art experience", tag: "Art", emoji: "🎨" },
      { name: "Shinjuku Gyoen", desc: "Beautiful garden, perfect in cherry blossom season", tag: "Nature", emoji: "🌸" },
    ]
  },
  Thailand: {
    image: "../pictures/thailand.png", subtitle: "Land of Smiles • Southeast Asia",
    activities: [
      { name: "Wat Arun", desc: "Stunning riverside temple in Bangkok", tag: "Culture", emoji: "🏯" },
      { name: "Phi Phi Islands", desc: "Crystal clear waters and stunning cliffs", tag: "Beach", emoji: "🏝️" },
      { name: "Chiang Mai Night Bazaar", desc: "Street food and local crafts", tag: "Food", emoji: "🛍️" },
      { name: "Grand Palace Bangkok", desc: "Opulent royal complex in the city centre", tag: "Culture", emoji: "👑" },
      { name: "Elephant Sanctuary", desc: "Ethical elephant experience in Chiang Mai", tag: "Nature", emoji: "🐘" },
      { name: "Railay Beach", desc: "Limestone cliffs, pristine beach accessible only by boat", tag: "Beach", emoji: "🌊" },
      { name: "Floating Markets", desc: "Damnoen Saduak boat market experience", tag: "Food", emoji: "⛵" },
      { name: "Doi Inthanon", desc: "Thailand's highest peak with waterfalls", tag: "Nature", emoji: "🌿" },
      { name: "Muay Thai Fight Night", desc: "Watch a live match at Rajadamnern Stadium", tag: "Sport", emoji: "🥊" },
    ]
  },
  "South Korea": {
    image: "../pictures/southkore.png", subtitle: "Land of the Morning Calm • East Asia",
    activities: [
      { name: "Gyeongbokgung Palace", desc: "Grand Joseon dynasty palace in Seoul", tag: "Culture", emoji: "🏯" },
      { name: "N Seoul Tower", desc: "Iconic tower with panoramic city views", tag: "City", emoji: "🗼" },
      { name: "Bukchon Hanok Village", desc: "Traditional Korean houses in old Seoul", tag: "Culture", emoji: "🏘️" },
      { name: "Jeju Island", desc: "Volcanic island with beaches and waterfalls", tag: "Nature", emoji: "🌋" },
      { name: "Myeongdong Shopping", desc: "K-beauty and street food paradise", tag: "Shopping", emoji: "🛍️" },
      { name: "DMZ Tour", desc: "Visit the demilitarized zone border", tag: "History", emoji: "🪖" },
      { name: "Hongdae Street Food", desc: "Youth culture, art and late-night bites", tag: "Food", emoji: "🍢" },
      { name: "Seoraksan National Park", desc: "Dramatic peaks and stunning autumn foliage", tag: "Nature", emoji: "🍂" },
      { name: "K-Pop Experience", desc: "SMTOWN or HYBE studio tours in Seoul", tag: "Music", emoji: "🎤" },
    ]
  },
  Greece: {
    image: "../pictures/greece.png", subtitle: "Cradle of Civilization • Mediterranean",
    activities: [
      { name: "Santorini Sunset", desc: "Watch the famous sunset from Oia village", tag: "Nature", emoji: "🌅" },
      { name: "Acropolis of Athens", desc: "Ancient citadel with the Parthenon", tag: "History", emoji: "🏛️" },
      { name: "Mykonos Beaches", desc: "Crystal blue waters and white windmills", tag: "Beach", emoji: "⚓" },
      { name: "Delphi Oracle", desc: "Ancient sanctuary of Apollo on Mt. Parnassus", tag: "History", emoji: "🔮" },
      { name: "Meteora Monasteries", desc: "Clifftop monasteries rising from Thessaly plains", tag: "Culture", emoji: "⛪" },
      { name: "Greek Food Tour", desc: "Mezze, souvlaki and fresh Aegean seafood", tag: "Food", emoji: "🫒" },
      { name: "Samaria Gorge Hike", desc: "Epic 16km gorge hike through Crete", tag: "Nature", emoji: "🥾" },
      { name: "Athens Plaka District", desc: "Charming old neighbourhood below the Acropolis", tag: "City", emoji: "🏘️" },
      { name: "Sailing the Aegean", desc: "Island hop by catamaran or yacht", tag: "Adventure", emoji: "⛵" },
    ]
  },
  France: {
    image: "../pictures/france.png", subtitle: "La Belle France • Western Europe",
    activities: [
      { name: "Eiffel Tower", desc: "Iconic iron lattice tower in the heart of Paris", tag: "Landmark", emoji: "🗼" },
      { name: "Louvre Museum", desc: "World's largest art museum, home of the Mona Lisa", tag: "Art", emoji: "🖼️" },
      { name: "Palace of Versailles", desc: "Opulent royal palace with stunning gardens", tag: "History", emoji: "👑" },
      { name: "Mont Saint-Michel", desc: "Tidal island abbey off the Normandy coast", tag: "Culture", emoji: "🏰" },
      { name: "French Riviera", desc: "Glamorous coastline along the Mediterranean", tag: "Beach", emoji: "🌊" },
      { name: "Loire Valley Châteaux", desc: "Fairy tale castles along the Loire river", tag: "History", emoji: "🏯" },
      { name: "Bordeaux Wine Tour", desc: "World-class wine estates and vineyards", tag: "Food", emoji: "🍷" },
      { name: "Montmartre District", desc: "Bohemian hilltop art neighbourhood in Paris", tag: "Art", emoji: "🎨" },
      { name: "French Alps Skiing", desc: "Ski resorts like Chamonix and Courchevel", tag: "Adventure", emoji: "⛷️" },
    ]
  },
  England: {
    image: "../pictures/england.png", subtitle: "Land of History • Western Europe",
    activities: [
      { name: "Tower of London", desc: "Historic castle and home of the Crown Jewels", tag: "History", emoji: "🏰" },
      { name: "Stonehenge", desc: "Mysterious prehistoric monument in Wiltshire", tag: "History", emoji: "🪨" },
      { name: "The British Museum", desc: "World-class collection of human history and art", tag: "Art", emoji: "🏛️" },
      { name: "Cotswolds Villages", desc: "Picturesque honey-stone villages in the countryside", tag: "Nature", emoji: "🌿" },
      { name: "Buckingham Palace", desc: "Royal residence with Changing of the Guard", tag: "Culture", emoji: "👑" },
      { name: "Lake District", desc: "Stunning lakes and fells in Cumbria", tag: "Nature", emoji: "🏔️" },
      { name: "Oxford University", desc: "Walk through one of the world's oldest universities", tag: "Culture", emoji: "📚" },
      { name: "Borough Market", desc: "London's oldest and most famous food market", tag: "Food", emoji: "🧀" },
      { name: "Edinburgh Castle", desc: "Dramatic castle on volcanic rock (day trip north)", tag: "History", emoji: "🏯" },
    ]
  }
};

//get country from localStorage 
const country = localStorage.getItem("destination") || "Japan";
const data = countryData[country];

//load basic info
document.getElementById("heroImg").src = data.image;
document.getElementById("heroTitle").textContent = country;
document.getElementById("heroSubtitle").textContent = data.subtitle;

// ── inject tick-overlay styles once ────────────────────────────
const style = document.createElement("style");
style.textContent = `
  .activity-card { position: relative; transition: transform 0.15s, box-shadow 0.15s; }
.act-tick {
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  background: var(--accent-color, #4f46e5);
  color: white;

  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;

  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}
  .activity-card.added .act-tick { display: block; }

  #itinerary-toast {
    position: fixed; bottom: 24px; left: 50%;
    transform: translateX(-50%) translateY(80px);
    background: #1a1a1a; color: #fff;
    padding: 13px 20px; border-radius: 14px;
    font-size: 14px; font-weight: 500;
    display: flex; align-items: center; gap: 10px;
    z-index: 9999; white-space: nowrap;
    box-shadow: 0 6px 24px rgba(0,0,0,0.22);
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s;
    opacity: 0;
  }
  #itinerary-toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  #itinerary-toast a {
    color: #86efac; text-decoration: none; font-weight: 600;
  }
  #itinerary-toast a:hover { text-decoration: underline; }
`;
document.head.appendChild(style);

// ── toast element ───────────────────────────────────────────────
const toast = document.createElement("div");
toast.id = "itinerary-toast";
document.body.appendChild(toast);
let toastTimer;

function showToast(name) {
  const itinerary = JSON.parse(localStorage.getItem("itinerary") || "[]");
  toast.innerHTML = `✅ <strong>${name}</strong> added &nbsp;·&nbsp; <a href="itinerary.html">${itinerary.length} item${itinerary.length !== 1 ? 's' : ''} in itinerary →</a>`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// ── build cards ─────────────────────────────────────────────────
const grid = document.getElementById("activitiesGrid");

// mark already-saved activities on load
const savedItinerary = JSON.parse(localStorage.getItem("itinerary") || "[]");
const savedNames = new Set(savedItinerary.map(i => i.name));

data.activities.forEach((act, i) => {
  const card = document.createElement("div");
  card.className = "activity-card" + (savedNames.has(act.name) ? " added" : "");
  card.id = "act-" + i;

  card.innerHTML = `
    <div class="act-tick">✓</div>
    <div class="act-emoji">${act.emoji}</div>
    <h4>${act.name}</h4>
    <p>${act.desc}</p>
  `;

  card.onclick = () => toggleActivity(i, card, act.name);
  grid.appendChild(card);
});

// ── toggle without redirecting ──────────────────────────────────
function toggleActivity(index, card, name) {
  let itinerary = JSON.parse(localStorage.getItem("itinerary") || "[]");
  const activity = data.activities[index];
  const exists = itinerary.find(item => item.name === activity.name);

  if (exists) {
    // already added — remove it (toggle off)
    itinerary = itinerary.filter(item => item.name !== activity.name);
    card.classList.remove("added");
  } else {
    // add it
    itinerary.push({ ...activity, country });
    card.classList.add("added");
    showToast(activity.name);
  }

  localStorage.setItem("itinerary", JSON.stringify(itinerary));
}