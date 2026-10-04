/* ============================================================
   INCREDIBLE INDIA · SCRIPT
   States: Kerala, Goa, Maharashtra, Tamil Nadu,
           Karnataka, Andhra Pradesh
   With destination images for every place
   ============================================================ */

// ------------------------------------------------------------
// 1. DATA
// ------------------------------------------------------------
const statesData = [
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    description:
      "Serene backwaters, lush tea plantations, and pristine beaches. Kerala is a tropical paradise known for its Ayurveda, spices, and tranquil beauty.",
    meta: {
      capital: "Thiruvananthapuram",
      language: "Malayalam",
      bestTime: "Sep – Mar",
    },
    places: [
      {
        name: "Alleppey Backwaters",
        history:
          'Known as "Venice of the East", houseboat cruises since the 20th century. A network of lagoons, lakes, and canals parallel to the Arabian Sea.',
        entry: "Houseboat from ₹8000",
        timings: "All day",
        location: "Alappuzha",
        lat: 9.4981,
        lng: 76.3388,
        image:
          "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Munnar Tea Gardens",
        history:
          "Rolling hills of tea plantations developed during British era in late 19th century. A hill station at 1,600m with cool climate and biodiversity.",
        entry: "Free (tours from ₹200)",
        timings: "9 AM – 5 PM",
        location: "Munnar",
        lat: 10.0889,
        lng: 77.0595,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Fort Kochi",
        history:
          "Portuguese built Fort Immanuel in 1503, later Dutch and British influence. A historic district with Chinese fishing nets and colonial architecture.",
        entry: "Free",
        timings: "All day",
        location: "Kochi",
        lat: 9.9658,
        lng: 76.2422,
        image:
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Varkala Cliff",
        history:
          "Ancient Janardhana Swamy Temple, cliff formed by geological laterite. A unique red sandstone cliff overlooking the Arabian Sea.",
        entry: "Free",
        timings: "All day",
        location: "Varkala",
        lat: 8.7379,
        lng: 76.7163,
        image:
          "https://images.unsplash.com/photo-1600010315760-5e3c1b4c6d1e?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Periyar Wildlife Sanctuary",
        history:
          "Established 1950, home to elephants and tigers around Periyar lake. A major tiger reserve and elephant sanctuary in the Western Ghats.",
        entry: "₹300 (Indians)",
        timings: "6 AM – 5 PM",
        location: "Thekkady",
        lat: 9.468,
        lng: 77.159,
        image:
          "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=900&h=600&fit=crop&auto=format&q=80",
      },
    ],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Pearl of the Orient",
    description:
      "Sun-kissed beaches, Portuguese heritage, and vibrant nightlife. Goa is India's smallest state, blending Indian and Western cultures perfectly.",
    meta: {
      capital: "Panaji",
      language: "Konkani, English",
      bestTime: "Nov – Feb",
    },
    places: [
      {
        name: "Baga Beach",
        history:
          "One of the most popular beaches, known for water sports and nightlife. A bustling stretch with shacks, clubs, and the famous Baga creek.",
        entry: "Free",
        timings: "All day",
        location: "North Goa",
        lat: 15.5553,
        lng: 73.7517,
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Basilica of Bom Jesus",
        history:
          "UNESCO site, built in 1605, holds remains of St. Francis Xavier. A masterpiece of Baroque architecture in India.",
        entry: "Free",
        timings: "9 AM – 6:30 PM",
        location: "Old Goa",
        lat: 15.5009,
        lng: 73.9116,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Dudhsagar Falls",
        history:
          "Four-tiered waterfall on Mandovi river, legendary milky appearance. One of India's tallest waterfalls at 310 meters.",
        entry: "₹400 (jeep)",
        timings: "7 AM – 5 PM",
        location: "Sonaulim",
        lat: 15.3144,
        lng: 74.3143,
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Fort Aguada",
        history:
          "17th-century Portuguese fort and lighthouse, built in 1612. Strategically located to defend against Dutch and Maratha attacks.",
        entry: "₹100",
        timings: "9:30 AM – 5:30 PM",
        location: "Sinquerim",
        lat: 15.4923,
        lng: 73.773,
        image:
          "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Anjuna Flea Market",
        history:
          "Started in 1960s by hippies, now a famous Wednesday market. A vibrant bazaar with handicrafts, clothes, and Goan delicacies.",
        entry: "Free",
        timings: "Wed 9 AM – 6 PM",
        location: "Anjuna",
        lat: 15.5833,
        lng: 73.7408,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&h=600&fit=crop&auto=format&q=80",
      },
    ],
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    tagline: "The Great Land",
    description:
      "Home to Bollywood, ancient caves, and the mighty Sahyadri mountains. Maharashtra offers a perfect blend of modern cities and historical wonders.",
    meta: { capital: "Mumbai", language: "Marathi", bestTime: "Oct – Mar" },
    places: [
      {
        name: "Gateway of India",
        history:
          "Built in 1924 to commemorate King George V visit, iconic arch. Mumbai's most famous monument overlooking the Arabian Sea.",
        entry: "Free",
        timings: "All day",
        location: "Mumbai",
        lat: 18.922,
        lng: 72.8347,
        image:
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Ajanta Caves",
        history:
          "2nd century BCE Buddhist caves, UNESCO site with ancient paintings. 30 rock-cut caves with masterpieces of Buddhist art.",
        entry: "₹40 (Indians)",
        timings: "9 AM – 5:30 PM",
        location: "Aurangabad",
        lat: 20.5534,
        lng: 75.7004,
        image:
          "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Ellora Caves",
        history:
          "Rock-cut temples from 600-1000 CE, including Kailasa temple. A UNESCO site with 34 caves representing Buddhist, Hindu, and Jain faiths.",
        entry: "₹40",
        timings: "6 AM – 6 PM",
        location: "Aurangabad",
        lat: 20.0269,
        lng: 75.1799,
        image:
          "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Mahabaleshwar",
        history:
          "Hill station developed by British, source of Krishna river. Known for strawberries, waterfalls, and panoramic valley views.",
        entry: "Free",
        timings: "All day",
        location: "Satara",
        lat: 17.9301,
        lng: 73.6598,
        image:
          "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Shaniwar Wada",
        history:
          "Peshwa palace built in 1732, now a historical landmark. A 13-year-old Peshwa Narayan Rao was murdered here in 1773.",
        entry: "₹25",
        timings: "9:30 AM – 5:30 PM",
        location: "Pune",
        lat: 18.5196,
        lng: 73.8553,
        image:
          "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=900&h=600&fit=crop&auto=format&q=80",
      },
    ],
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    tagline: "Land of Temples",
    description:
      "Dravidian architecture, ancient temples, and vibrant culture. Tamil Nadu is the cradle of South Indian civilization with a rich artistic heritage.",
    meta: { capital: "Chennai", language: "Tamil", bestTime: "Oct – Mar" },
    places: [
      {
        name: "Meenakshi Temple",
        history:
          "Ancient temple dedicated to Meenakshi, rebuilt in 17th century. A historic Hindu temple with 14 gopurams and stunning sculptures.",
        entry: "Free",
        timings: "5 AM – 10 PM",
        location: "Madurai",
        lat: 9.9195,
        lng: 78.1193,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Shore Temple",
        history:
          "Pallava dynasty 8th century, part of Mahabalipuram UNESCO site. One of the oldest structural stone temples in South India.",
        entry: "₹40",
        timings: "6 AM – 6 PM",
        location: "Mahabalipuram",
        lat: 12.6164,
        lng: 80.1994,
        image:
          "https://images.unsplash.com/photo-1621922801788-90e6e05c34b9?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Ooty Botanical Gardens",
        history:
          "Established in 1848 by Marquis of Tweeddale, famous rose collection. A 55-acre garden with over 1,000 species of plants.",
        entry: "₹30",
        timings: "7 AM – 6:30 PM",
        location: "Ooty",
        lat: 11.41,
        lng: 76.71,
        image:
          "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Kanyakumari",
        history:
          "Southernmost tip, Vivekananda Rock Memorial built in 1970. Where three seas meet – the only place to see sunrise and sunset over the ocean.",
        entry: "Free (ferry ₹50)",
        timings: "All day",
        location: "Kanyakumari",
        lat: 8.078,
        lng: 77.5385,
        image:
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Brihadeeswarar Temple",
        history:
          "Chola temple built in 1010 CE, UNESCO Great Living Chola Temples. An architectural marvel with a 66-meter tall vimana.",
        entry: "Free",
        timings: "6 AM – 8 PM",
        location: "Thanjavur",
        lat: 10.7828,
        lng: 79.1318,
        image:
          "https://images.unsplash.com/photo-1621922801788-90e6e05c34b9?w=900&h=600&fit=crop&auto=format&q=80",
      },
    ],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    tagline: "One State, Many Worlds",
    description:
      "From the tech hub of Bengaluru to ancient Hampi ruins and the misty hills of Coorg — Karnataka blends history, nature, and modern innovation seamlessly.",
    meta: { capital: "Bengaluru", language: "Kannada", bestTime: "Oct – Feb" },
    places: [
      {
        name: "Hampi",
        history:
          "Capital of the Vijayanagara Empire (14th–16th century), a UNESCO World Heritage Site with stunning temple ruins, boulders, and ancient bazaars.",
        entry: "₹40 (Indians)",
        timings: "6 AM – 6 PM",
        location: "Hampi, Ballari",
        lat: 15.335,
        lng: 76.46,
        image:
          "https://images.unsplash.com/photo-1600100397608-f010d0a7e5a5?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Mysore Palace",
        history:
          "Built in 1912 for the Wadiyar dynasty, the Amba Vilas Palace is one of India's grandest royal residences, illuminated by 97,000 lights on Sundays.",
        entry: "₹70",
        timings: "10 AM – 5:30 PM",
        location: "Mysuru",
        lat: 12.3051,
        lng: 76.6551,
        image:
          "https://images.unsplash.com/photo-1600100397608-f010d0a7e5a5?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Coorg (Kodagu)",
        history:
          'Known as the "Scotland of India", misty hills of coffee and spice plantations, home to the Kodava people and Abbey Falls.',
        entry: "Free (falls ₹30)",
        timings: "All day",
        location: "Madikeri",
        lat: 12.4244,
        lng: 75.7382,
        image:
          "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Jog Falls",
        history:
          "One of India's tallest waterfalls (253m) on the Sharavathi River, formed by four cascades: Raja, Rani, Roarer, and Rocket.",
        entry: "₹15",
        timings: "7 AM – 6 PM",
        location: "Shimoga",
        lat: 14.229,
        lng: 74.791,
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Gokarna Beach",
        history:
          "Ancient temple town and pristine beaches, believed to be where Lord Shiva emerged from the ear of a cow (Go-Karna).",
        entry: "Free",
        timings: "All day",
        location: "Gokarna",
        lat: 14.5479,
        lng: 74.3188,
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=600&fit=crop&auto=format&q=80",
      },
    ],
  },
  {
    id: "andhrapradesh",
    name: "Andhra Pradesh",
    tagline: "The Rice Bowl of India",
    description:
      "Home to the sacred Tirupati temple, serene Godavari deltas, and rich cultural heritage. Andhra Pradesh is a land of devotion, cuisine, and coastal beauty.",
    meta: { capital: "Amaravati", language: "Telugu", bestTime: "Oct – Mar" },
    places: [
      {
        name: "Tirumala Venkateswara Temple",
        history:
          "One of the world's most visited religious sites, dedicated to Lord Venkateswara. The temple dates back over 1,500 years and is a Dravidian architectural marvel.",
        entry: "Free (special darshan ₹300)",
        timings: "2:30 AM – 1:30 AM",
        location: "Tirupati",
        lat: 13.6833,
        lng: 79.3474,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Araku Valley",
        history:
          "A scenic hill station in the Eastern Ghats, known for coffee plantations, tribal culture, and the Borra Caves (1 million years old).",
        entry: "Free (caves ₹50)",
        timings: "All day",
        location: "Visakhapatnam",
        lat: 18.3273,
        lng: 82.8774,
        image:
          "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Charminar",
        history:
          "Built in 1591 by Muhammad Quli Qutb Shah, the iconic four-minaret monument marks the founding of Hyderabad. A symbol of Indo-Islamic architecture.",
        entry: "₹25",
        timings: "9 AM – 5:30 PM",
        location: "Hyderabad",
        lat: 17.3616,
        lng: 78.4747,
        image:
          "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "Golconda Fort",
        history:
          "A 13th-century diamond-fortress of the Qutb Shahi dynasty, famous for its acoustic design and the legendary Koh-i-Noor diamond.",
        entry: "₹25",
        timings: "9 AM – 5:30 PM",
        location: "Hyderabad",
        lat: 17.3833,
        lng: 78.4011,
        image:
          "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=900&h=600&fit=crop&auto=format&q=80",
      },
      {
        name: "R K Beach",
        history:
          "One of the longest beaches on the east coast of India (6 km), named after Ramakrishna Mission. A lively promenade with a submarine museum.",
        entry: "Free",
        timings: "All day",
        location: "Visakhapatnam",
        lat: 17.702,
        lng: 83.324,
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=600&fit=crop&auto=format&q=80",
      },
    ],
  },
];

// ------------------------------------------------------------
// 2. STATE BACKGROUND IMAGES (Unsplash)
// ------------------------------------------------------------
const stateImages = {
  kerala:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=1000&fit=crop&auto=format&q=80",
  goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=1000&fit=crop&auto=format&q=80",
  maharashtra:
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=1000&fit=crop&auto=format&q=80",
  tamilnadu:
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=1000&fit=crop&auto=format&q=80",
  karnataka:
    "https://images.unsplash.com/photo-1600100397608-f010d0a7e5a5?w=800&h=1000&fit=crop&auto=format&q=80",
  andhrapradesh:
    "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800&h=1000&fit=crop&auto=format&q=80",
};

// ------------------------------------------------------------
// 3. DOM REFS
// ------------------------------------------------------------
const loader = document.getElementById("loader");
const header = document.getElementById("header");
const heroSection = document.getElementById("heroSection");
const statesView = document.getElementById("statesView");
const detailView = document.getElementById("detailView");
const stateGrid = document.getElementById("stateGrid");
const placesContainer = document.getElementById("placesContainer");
const stateHeroBg = document.getElementById("stateHeroBg");
const stateHeroTitle = document.getElementById("stateHeroTitle");
const stateHeroDesc = document.getElementById("stateHeroDesc");
const stateMetaRow = document.getElementById("stateMetaRow");

// ------------------------------------------------------------
// 4. LOADER + HEADER SCROLL
// ------------------------------------------------------------
window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("done"), 800);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ------------------------------------------------------------
// 5. RENDER STATE CARDS
// ------------------------------------------------------------
function renderStateCards() {
  stateGrid.innerHTML = "";
  statesData.forEach((state, index) => {
    const card = document.createElement("div");
    card.className = "state-card";
    card.dataset.stateId = state.id;
    card.style.animation = `fadeUp 0.7s var(--ease-out-expo) ${0.1 + index * 0.08}s both`;

    card.innerHTML = `
      <div class="state-card-bg" style="background-image: url('${stateImages[state.id]}')"></div>
      <div class="state-card-icon"><i class="fas fa-arrow-right"></i></div>
      <div class="state-card-content">
        <h3>${state.name}</h3>
        <div class="tagline"><i class="fas fa-compass"></i> ${state.tagline}</div>
        <div class="place-count"><i class="fas fa-map-pin"></i> 5 Places</div>
      </div>
    `;

    card.addEventListener("click", () => showStateDetails(state.id));
    stateGrid.appendChild(card);
  });
}

// ------------------------------------------------------------
// 6. SHOW STATE DETAILS
// ------------------------------------------------------------
function showStateDetails(stateId) {
  const state = statesData.find((s) => s.id === stateId);
  if (!state) return;

  document
    .querySelectorAll(".state-card")
    .forEach((c) => c.classList.remove("active"));
  const activeCard = document.querySelector(
    `.state-card[data-state-id="${stateId}"]`,
  );
  if (activeCard) activeCard.classList.add("active");

  stateHeroBg.style.backgroundImage = `url('${stateImages[state.id]}')`;
  stateHeroTitle.textContent = state.name;
  stateHeroDesc.textContent = state.description;

  stateMetaRow.innerHTML = `
    <div class="state-meta-item"><i class="fas fa-city"></i> Capital: ${state.meta.capital}</div>
    <div class="state-meta-item"><i class="fas fa-language"></i> ${state.meta.language}</div>
    <div class="state-meta-item"><i class="fas fa-calendar"></i> Best: ${state.meta.bestTime}</div>
  `;

  placesContainer.innerHTML = "";
  state.places.forEach((place, index) => {
    const placeCard = document.createElement("div");
    placeCard.className = "place-card";

    placeCard.innerHTML = `
      <div class="accent-bar"></div>

      <!-- ✅ DESTINATION IMAGE -->
      <div class="place-image" style="background-image: url('${place.image}')">
        <div class="place-number">0${index + 1}</div>
        <div class="place-image-caption">
          <i class="fas fa-camera"></i> ${place.name} · ${place.location}
        </div>
      </div>

      <div class="place-content">
        <h3><i class="fas fa-landmark"></i> ${place.name}</h3>
        <div class="place-location"><i class="fas fa-location-dot"></i> ${place.location}</div>
        <div class="history">
          <strong><i class="fas fa-clock-rotate-left"></i> History &amp; Significance</strong>
          ${place.history}
        </div>
        <div class="meta-grid">
          <div class="meta-item"><i class="fas fa-ticket"></i> ${place.entry}</div>
          <div class="meta-item"><i class="fas fa-clock"></i> ${place.timings}</div>
        </div>
        <button class="direction-btn" data-lat="${place.lat}" data-lng="${place.lng}" data-place="${place.name.replace(/'/g, "\\'")}">
          <i class="fas fa-diamond-turn-right"></i> Directions
        </button>
        <div class="map-embed-container" id="map-${state.id}-${index}"></div>
      </div>
    `;

    const dirBtn = placeCard.querySelector(".direction-btn");
    dirBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lat = dirBtn.dataset.lat;
      const lng = dirBtn.dataset.lng;
      const placeName = dirBtn.dataset.place;
      const mapContainer = placeCard.querySelector(".map-embed-container");
      embedDirections(mapContainer, lat, lng, placeName);
    });

    placesContainer.appendChild(placeCard);
  });

  heroSection.style.display = "none";
  statesView.classList.add("hidden-view");
  detailView.classList.remove("hidden-view");
  detailView.classList.add("fade-in");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ------------------------------------------------------------
// 7. EMBED DIRECTIONS
// ------------------------------------------------------------
function embedDirections(container, destLat, destLng, placeName) {
  if (container.classList.contains("show") && container.innerHTML !== "") {
    container.classList.remove("show");
    setTimeout(() => {
      container.innerHTML = "";
    }, 300);
    return;
  }

  const iframeSrc = `https://maps.google.com/maps?q=${destLat},${destLng}&z=14&output=embed`;
  container.innerHTML = `
    <iframe
      src="${iframeSrc}"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <div class="map-note">
      <span><i class="fas fa-map-pin"></i> ${placeName}</span>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}" target="_blank" rel="noopener">
        Get Directions <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;
  container.classList.add("show");
}

// ------------------------------------------------------------
// 8. NAVIGATION
// ------------------------------------------------------------
function goHome() {
  heroSection.style.display = "flex";
  statesView.classList.remove("hidden-view");
  detailView.classList.add("hidden-view");
  detailView.classList.remove("fade-in");
  document
    .querySelectorAll(".state-card")
    .forEach((c) => c.classList.remove("active"));
  placesContainer.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToStates() {
  if (detailView.classList.contains("hidden-view")) {
    document
      .getElementById("statesSection")
      .scrollIntoView({ behavior: "smooth" });
  } else {
    goHome();
    setTimeout(() => {
      document
        .getElementById("statesSection")
        .scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
}

// Expose globals for inline onclick handlers
window.goHome = goHome;
window.scrollToStates = scrollToStates;

// ------------------------------------------------------------
// 9. INIT
// ------------------------------------------------------------
renderStateCards();
