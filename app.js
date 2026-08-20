/* ==========================================================================
   ZHOU YIRAN (周翊然) - DEDICATED SOLE PROTAGONIST PORTFOLIO DATASET
   ========================================================================== */

const portfolioWorks = [
  // 1. Drama & Movies
  {
    id: 1,
    category: 'drama',
    badge: '🎬 Drama (드라마)',
    type: ' 대표 히트작',
    year: '2023',
    title: '당아비분향너 (当我飞奔向你)',
    subtitle: '장루랑 (张陆让) 역',
    desc: '글로벌 누적 스트리밍 45억 뷰 돌파. 츤데레 천재 소년 장루랑 역을 완벽히 소화하며 아시아 전역에서 폭발적인 인기를 얻은 대표작.',
    highlight: '🔥 글로벌 OTT 청춘물 1위',
    img: '../../brain/27fffe39-2e1e-4bf5-9a66-80b101057196/ai_idol_hero_1787112104176.jpg'
  },
  {
    id: 2,
    category: 'drama',
    badge: '🎬 Drama (드라마)',
    type: '메인 주연작',
    year: '2023',
    title: '백일몽아 (白日梦我)',
    subtitle: '심권 (沈倦) 역',
    desc: '상처를 품은 사격 선수이자 학생인 심권 역으로 섬세한 감정 연기와 훈훈한 비주얼을 자랑하며 청춘 스타 입지를 다짐.',
    highlight: '📈 텐센트/망고TV 1위',
    img: '../../brain/27fffe39-2e1e-4bf5-9a66-80b101057196/ai_idol_stage_1787112202569.jpg'
  },
  {
    id: 3,
    category: 'drama',
    badge: '🎬 Drama (드라마)',
    type: '지상파 주요작',
    year: '2022',
    title: '20세불혹 2 (二十不惑 2)',
    subtitle: '은상 (殷赏) 역',
    desc: '현대 청춘의 시련과 성장을 그린 화제작. 현실적인 대학생 및 사회초년생의 고뇌를 몰입감 있게 연기하여 호평 받음.',
    highlight: '⭐ 시청률 동시간대 1위',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'drama',
    badge: '🎬 Film & Drama',
    type: '주전 시청률 1위',
    year: '2021',
    title: '소민가 (小敏家)',
    subtitle: '김가준 (金家骏) 역',
    desc: '주쉰, 황레이 등 대배우들과 함께 호흡을 맞춘 주전 드라마. 수험생의 복잡한 내면을 섬세하게 표현해 신인상 후보 노미네이트.',
    highlight: '🏆 위성 TV 시청률 1위',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },

  // 2. Commercials & Endorsements
  {
    id: 5,
    category: 'commercial',
    badge: '💎 Brand Ambassador',
    type: '글로벌 앰버서더',
    year: '2024 - 2026',
    title: '글로벌 럭셔리 패션 & 뷰티 앰버서더',
    subtitle: '하이엔드 코스메틱 & 수트 브랜딩',
    desc: '프랑스 럭셔리 코스메틱 및 이탈리아 하이 패션 브랜드의 공식 얼굴로 활약하며 독보적인 고급스러움과 아우라를 전달.',
    highlight: '✨ 전 세계 캠페인 메인',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'commercial',
    badge: '💎 Commercial Film',
    type: 'TVC 메인 모델',
    year: '2025',
    title: '프리미엄 럭셔리 오토모빌 광고',
    subtitle: '스마트 전기 스포츠카 메인 모델',
    desc: '젊고 역동적인 이미지와 시너지 효과를 내며 신차 런칭 TVC 및 디지털 필름에 메인 아티스트로 참여.',
    highlight: '🏎️ TVC 1억 회 이상 조회',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },

  // 3. Modeling & Fashion Photoshoots
  {
    id: 7,
    category: 'fashion',
    badge: '📸 Fashion Cover',
    type: '매거진 커버',
    year: '2024 - 2025',
    title: 'Harper\'s BAZAAR & ELLE 커버',
    subtitle: '패션 매거진 단독 커버 아티스트',
    desc: '시크함과 소년미를 넘나드는 수트 룩 및 하이패션 화보를 선보이며 패션계가 가장 사랑하는 잇보이(It Boy)로 선정.',
    highlight: '📸 커버 매거진 완판 기록',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    category: 'fashion',
    badge: '📸 Magazine Editorial',
    type: '시그니처 화보',
    year: '2025',
    title: 'GQ CHINA & COSMOPOLITAN 화보',
    subtitle: '시즌 시그니처 패션 에디토리얼',
    desc: '몽환적이고 감각적인 조명 속 연출된 하이 패션 화보 컷으로 비주얼 아티스트로서의 깊이를 증명.',
    highlight: '🎨 패션 위크 베스트 화보',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
  },

  // 4. Motor Racing
  {
    id: 9,
    category: 'racing',
    badge: '🏎️ Motorsport',
    type: '프로 트랙 레이서',
    year: '2023 - 2026',
    title: '프로페셔널 서킷 레이싱 & 드라이버',
    subtitle: '공식 트랙 모터스포츠 경기 참가',
    desc: '배우 활동과 함께 서킷 레이싱에 전문적으로 입문. 고속 카트 및 서킷 레이싱 경기에 출전하여 뛰어난 기량 발휘.',
    highlight: '🏆 트랙 레이스 톱 포디움',
    img: '../../brain/27fffe39-2e1e-4bf5-9a66-80b101057196/ai_idol_racing_1787112295363.jpg'
  },

  // 5. Concerts & Music
  {
    id: 10,
    category: 'concert',
    badge: '🎤 Concert & OST',
    type: 'OST & 음원 발매',
    year: '2024 - 2025',
    title: '단독 팬 라이브 콘서트 & 드라마 OST',
    subtitle: '음원 발매 및 감성 라이브 스테이지',
    desc: '직접 가창한 드라마 OST 《당아비분향너》 테마곡 음원 발매 및 팬들과 함께한 단독 콘서트에서 폭발적 라이브 공연 선보임.',
    highlight: '🎵 음원 차트 최상위권',
    img: '../../brain/27fffe39-2e1e-4bf5-9a66-80b101057196/ai_idol_stage_1787112202569.jpg'
  },

  // 6. Variety Shows
  {
    id: 11,
    category: 'variety',
    badge: '📺 Variety Show',
    type: '예능 메인 캐스트',
    year: '2024',
    title: '인기 예능 《청춘 여행기 (Youth Trip)》',
    subtitle: '메인 캐스트 & 게스트 활약',
    desc: '솔직하고 재치 넘치는 유머 감각과 온화한 성격으로 예능 프로그램 시청자들을 사로잡으며 인간적인 매력 발산.',
    highlight: '📺 동시간대 화제성 1위',
    img: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=800&q=80'
  },

  // 7. Global Events & Appearances
  {
    id: 12,
    category: 'event',
    badge: '🌟 Global Event',
    type: '글로벌 레드카펫',
    year: '2025 - 2026',
    title: '파리 패션위크 & 글로벌 팝업 행사',
    subtitle: '럭셔리 브랜드 메인 게스트 참석',
    desc: '파리·밀라노 패션위크 및 브랜드 메인 팝업스토어 행사에 수많은 인파 속 메인 셀러브리티로 참석하여 글로벌 프레스 조명 받아.',
    highlight: '👑 글로벌 헤드라인 장식',
    img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
  }
];

// Render Works Grid
function renderPortfolioGrid(filter = 'all') {
  const container = document.getElementById('worksGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? portfolioWorks 
    : portfolioWorks.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="work-card">
      <div class="card-media-wrapper">
        <img src="${item.img}" alt="${item.title}" class="card-image" loading="lazy">
        <span class="card-category-badge">${item.badge}</span>
      </div>
      <div class="card-body">
        <div class="card-year">${item.year}</div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-sub">${item.subtitle}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-highlight">${item.highlight}</span>
          <button class="btn-card-action" onclick="openMediaModal('${item.title}', '${item.subtitle}', '${item.desc}', '${item.img}')">
            ✨ 화보 보기
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Filter Buttons
function setupFilterTabs() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');

      const filterValue = target.dataset.filter;
      renderPortfolioGrid(filterValue);
    });
  });
}

// BGM Audio Music Player Setup
let audioInstance = null;
let isPlaying = false;

function setupBgmMusicPlayer() {
  const toggleBtn = document.getElementById('musicToggleBtn');
  const eqBars = document.getElementById('eqBars');

  // Zhou Yiran Soundtrack Theme
  audioInstance = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-glowing-112349.mp3');
  audioInstance.loop = true;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        audioInstance.pause();
        toggleBtn.textContent = '▶';
        if (eqBars) eqBars.style.display = 'none';
        isPlaying = false;
      } else {
        audioInstance.play().then(() => {
          toggleBtn.textContent = '❚❚';
          if (eqBars) eqBars.style.display = 'flex';
          isPlaying = true;
        }).catch(err => console.log('Audio autoplay:', err));
      }
    });
  }
}

// Lightbox Modal
function openMediaModal(title, subtitle, desc, imageSrc) {
  const modal = document.getElementById('lightboxModal');
  const titleEl = document.getElementById('modalTitle');
  const subEl = document.getElementById('modalSub');
  const descEl = document.getElementById('modalDesc');
  const mediaFrame = document.getElementById('modalMediaFrame');

  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
  if (descEl) descEl.textContent = desc;

  if (mediaFrame) {
    mediaFrame.innerHTML = `
      <img src="${imageSrc}" alt="${title}" style="width:100%; height:100%; object-fit:cover;">
    `;
  }

  if (modal) modal.classList.add('active');
}

function setupModalClose() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('closeModal');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// Form Handler
function setupContactForm() {
  const form = document.getElementById('castingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('주익연(Zhou Yiran) 단독 프로필 PDF 킷이 성공적으로 전송되었습니다.');
      form.reset();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioGrid('all');
  setupFilterTabs();
  setupModalClose();
  setupBgmMusicPlayer();
  setupContactForm();
});
