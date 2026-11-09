// Fade out blackhole loader screen on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('fade-out');
  }, 2200);
});

const novels = [
  // 5 Published Novels
  { 
    id: 1, 
    title: "Disaster-Level Player Is Too Good at Broadcasting", 
    status: "Published", 
    platform: "Webnovel", 
    link: "https://www.webnovel.com/book/disaster-level-player-is-too-good-at-broadcasting_34718869600180705", 
    img: "images/streaming.jpeg", 
    desc: "Kang Min was the only one to make it past the 600th Floor. After clearing the 666th floor in total solitude he faces death. However, for some reason he wakes up 13 years in the future..\n\nBut what's this?\n[Constellation Stream] - Players can now stream their hunts and floor clears to viewers and gods who sponsor coins and promise more power and fame.\n\nHe is sure to take over faster than anyone...after all he was the sole human to clear 666 Floors.\n\nThe world-ending livestream of the 666th Floor Veteran starts now!!!" 
  },
  { 
    id: 2, 
    title: "I Killed the Main Characters", 
    status: "Published", 
    platform: "Webnovel", 
    link: "https://www.webnovel.com/book/i-killed-the-main-characters_30292728206215605", 
    img: "images/killedmain.jpeg", 
    desc: "To save a doomed fantasy world, I killed the main characters, then destroyed the game world, and fell into another timeline as the academy's top seat and rival to the protagonist. Now, I'm trying to save the world and steer it towards a better ending… But I'm the final boss." 
  },
  { 
    id: 3, 
    title: "Terminally-ill Instructor in Romance Fantasy", 
    status: "Published", 
    platform: "Webnovel", 
    link: "https://www.webnovel.com/book/terminally-ill-instructor-in-romance-fantasy_31586351508966105", 
    img: "images/terminallyill.jpeg", 
    desc: "I fell into a romance fantasy game full of dreams and hopes. But the genre was not what it seemed or said to be…" 
  },
  { 
    id: 4, 
    title: "Grab the Manual and Debut", 
    status: "Published", 
    platform: "Webnovel", 
    link: "https://www.webnovel.com/book/grab-the-manual-and-debut!_34514217900531405", 
    img: "images/debut.jpeg", 
    desc: "Heart Attack from exhaustion, a stage accident during a final rehearsal, a manager's car crash on the way to the audition, a sudden seizure from malnutrition, even poisoning from an overzealous sasaeng fan... I had lost count.\n\nCan I really debut without dying this time?" 
  },
  { 
    id: 5, 
    title: "Even if I'm a Level 0, Still Gotta Work", 
    status: "Published", 
    platform: "PocketFM", 
    link: "https://pocketfm.com/show/level-0-raises-s-classes/8838d0c88a29ac5b16c15ba1ad7eda3fc5c8e51c", 
    img: "images/level0.jpeg", 
    desc: "I am an employee at the Hunters Association, my former dreams of streaming being crushed when my unlevelable rank collided with the reality of the Tower.\n\nEven with no future in ascension, I've still got to make money\n\nBut these hunters I'm managing...they are a bit strange." 
  },
  
  // 2 Currently Active Whop Daily Release Novels
  { 
    id: 6, 
    title: "EX-Grade Summons Live in My Inventory", 
    status: "Whop Live", 
    platform: "Whop Hub", 
    link: "https://whop.com/regressors-hall/ex-grade-summons-live-in-my-inventory-40", 
    img: "images/exsummons.jpeg", 
    desc: "After I got divorced, ex-grade summons started appearing in my inventory. Daily advance chapters live on Whop." 
  },
  { 
    id: 7, 
    title: "Level-99 Necromancer is Too Good at Farming", 
    status: "Whop Live", 
    platform: "Whop Hub", 
    link: "https://whop.com/regressors-hall/level-99-necromancer-is-too-good-at-farming-97", 
    img: "images/level99.jpeg", 
    desc: "After reaching the summit and met by betrayal, Kang Soo is forced into a contract by the cruel Constellation Stream, and exiled back to Floor 49—a desolate, man-eating wasteland three years in the future to become its floor Boss and stop climbers from ascending the tower.\n\nHe might be a death-magic user, but he's about to make this barren floor the safest, best-fed stop in the entire Tower.\nAnd he'll free humanity while he's at it!. Daily releases live." 
  },
  
  // 8 Coming Soon Whop Novels (Descriptions removed)
  { id: 8, title: "The Third Generation Chaebol Finds Investing Way Too Easy", status: "Coming Soon", platform: "Whop Hub", link: "#", img: "images/investing too easy.jpeg", desc: "" },
  { id: 9, title: "I Picked Up an Outer God's Grimoire as a Part-time Cafe Worker", status: "Coming Soon", platform: "Webnovel", link: "#", img: "images/outergod.jpeg", desc: "" },
  { id: 10, title: "I Returned to 1924 and Started a Mage Company", status: "Coming Soon", platform: "Webnovel", link: "#", img: "images/1924mage.jpeg", desc: "" },
  { id: 11, title: "Managing Ghost Stories is Way Too Easy for an Office Worker", status: "Coming Soon", platform: "Webnovel", link: "#", img: "images/ghostmanager.jpeg", desc: "" },
  { id: 12, title: "I Raised the Scoundrel Protagonists Too Well", status: "Coming Soon", platform: "Whop Hub", link: "#", img: "images/raisingprotags.jpeg", desc: "" },
  { id: 13, title: "Monopolizing Skills to the 200th Floor", status: "Coming Soon", platform: "Whop Hub", link: "#", img: "images/200floor.jpeg", desc: "" },
  { id: 14, title: "The Count Family's Scoundrel Got a Gallery", status: "Coming Soon", platform: "Webnovel", link: "#", img: "images/cover-14.jpeg", desc: "" },
  { id: 15, title: "I'm a Max-Level Space Marine, Please Let Me Quit", status: "Coming Soon", platform: "Whop Hub", link: "#", img: "images/spacemarine.jpeg", desc: "" }
];

// Render Directory Grid
const grid = document.getElementById('novelGrid');

function renderGrid(filter = 'all') {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? novels : novels.filter(n => n.status === filter);
  
  filtered.forEach(n => {
    const card = document.createElement('div');
    card.className = 'novel-card';
    card.innerHTML = `
      <div class="cover-wrapper" onclick="openModal(${n.id})" style="cursor: pointer;">
        <img src="${n.img}" alt="${n.title}">
        <span class="badge" style="${n.status === 'Coming Soon' ? 'border-color: #94a3b8; color: #94a3b8;' : ''}">${n.status}</span>
      </div>
      <div class="novel-info">
        <h3 class="novel-title">${n.title}</h3>
        ${n.desc ? `<p class="novel-synopsis">${n.desc}</p>` : '<p class="novel-synopsis" style="font-style: italic; opacity: 0.5;">Classified / Launching Soon</p>'}
        <button class="read-btn" onclick="openModal(${n.id})">Read Details</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Infinite Marquee Ticker Setup (Duplicated array items for seamless infinite loop effect)
const track = document.getElementById('carouselStage');
const featured = novels.filter(n => n.status !== 'Coming Soon');

// Populate track twice to create a seamless infinite loop animation buffer
const marqueeItems = [...featured, ...featured];

marqueeItems.forEach((n) => {
  const card = document.createElement('div');
  card.className = 'carousel-card';
  card.style.aspectRatio = '1148 / 1532';
  card.innerHTML = `<img src="${n.img}" alt="${n.title}" style="width: 100%; height: 100%; object-fit: cover;">`;
  
  // Click card to open modal
  card.onclick = () => {
    openModal(n.id);
  };
  
  track.appendChild(card);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderGrid(e.target.getAttribute('data-filter'));
  });
});

// Modal Logic with Ticket/Card Cover Layout
const modal = document.getElementById('novelModal');

function openModal(id) {
  const item = novels.find(n => n.id === id);
  if (!item) return;
  
  const modalContentBox = modal.querySelector('.modal-content');
  const coverUrl = item.img;
  
  let buttonHtml = '';
  if (item.status === 'Coming Soon') {
    buttonHtml = `<a href="#" class="read-btn" style="opacity: 0.5; pointer-events: none; margin-top: 1rem; display: block; text-align: center;">Coming Soon to Whop</a>`;
  } else if (item.status === 'Whop Live') {
    buttonHtml = `<a href="${item.link}" target="_blank" class="read-btn" style="margin-top: 1rem; display: block; text-align: center;">Read Daily on Whop</a>`;
  } else {
    buttonHtml = `<a href="${item.link}" target="_blank" class="read-btn" style="margin-top: 1rem; display: block; text-align: center;">Read on ${item.platform}</a>`;
  }

  // Inject exact webnovel dimensions ticket card layout into the modal content
  modalContentBox.innerHTML = `
    <button class="modal-close" id="modalClose">&times;</button>
    <div style="display: flex; gap: 1.5rem; flex-direction: ${window.innerWidth < 768 ? 'column' : 'row'}; align-items: center; margin-top: 1rem;">
      <!-- Cover Ticket Stub with 1148/1532 Aspect Ratio -->
      <div style="width: 170px; min-width: 170px; aspect-ratio: 1148 / 1532; border-radius: 8px; overflow: hidden; box-shadow: 0 0 15px var(--accent-neon-glow);">
        <img src="${coverUrl}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <!-- Ticket Details -->
      <div style="flex-grow: 1; text-align: left;">
        <span class="badge" style="position: static; display: inline-block; margin-bottom: 0.5rem; ${item.status === 'Coming Soon' ? 'border-color: #94a3b8; color: #94a3b8;' : ''}">${item.status}</span>
        <h2 style="font-family: 'Orbitron', sans-serif; font-size: 1.2rem; color: #fff; margin-bottom: 0.75rem; line-height: 1.3;">${item.title}</h2>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">${item.desc || 'Classified archive data. Synopsis unlocks upon release.'}</p>
        ${buttonHtml}
      </div>
    </div>
  `;
  
  // Re-bind close event since innerHTML wiped the old button
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

renderGrid();

// Mobile Hamburger Menu Toggle Logic
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu automatically when clicking any nav link
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside the header
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}