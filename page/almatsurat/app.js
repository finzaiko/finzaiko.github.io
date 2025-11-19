// Almatsurat Sughra - Aplikasi Interaktif

// Data Zikir
const dhikriData = {
    morning: [
        {
            title: "Bismillah",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            english: "Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang"
        },
        {
            title: "Alhamdulillah",
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            english: "Segala puji bagi Allah Tuhan semesta alam"
        },
        {
            title: "Subhanallah",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
            english: "Maha Suci Allah dan segala puji bagi-Nya, Maha Suci Allah Yang Maha Agung"
        },
        {
            title: "La Ilaha Illallah",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ",
            english: "Tidak ada ilah (yang berhak disembah) melainkan Allah semata, tiada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji"
        },
        {
            title: "Takbir",
            arabic: "اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا",
            english: "Allah Maha Besar sekali besar, dan segala puji bagi Allah sangat banyak, dan Maha Suci Allah di pagi dan sore hari"
        },
        {
            title: "Doa Pagi",
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ",
            english: "Ya Allah, Engkau adalah Tuhanku, tidak ada ilah (yang berhak disembah) selain Engkau, Engkau yang menciptakanku dan aku adalah hamba-Mu"
        },
        {
            title: "Berlindung dari Setan",
            arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
            english: "Aku berlindung kepada Allah dari setan yang terkutuk"
        },
        {
            title: "Doa Berkah Harian",
            arabic: "بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
            english: "Dengan nama Allah, Ya Allah, sesungguhnya aku memohon kepada-Mu keampunan dan kesehatan"
        }
    ],
    evening: [
        {
            title: "Bismillah",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            english: "Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang"
        },
        {
            title: "Alhamdulillah Petang",
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَمْسَىٰ بِنَا",
            english: "Segala puji bagi Allah yang telah membawa kami hingga sore hari"
        },
        {
            title: "Subhanallah Petang",
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ",
            english: "Maha Suci Allah dan segala puji bagi-Nya sebanyak makhluk-makhluk-Nya"
        },
        {
            title: "Takbir Petang",
            arabic: "اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا",
            english: "Allah Maha Besar sekali besar, dan segala puji bagi Allah sangat banyak, dan Maha Suci Allah di pagi dan sore hari"
        },
        {
            title: "La Ilaha Petang",
            arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            english: "Tidak ada ilah (yang berhak disembah) melainkan Allah semata, tiada sekutu bagi-Nya"
        },
        {
            title: "Doa Ampunan",
            arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
            english: "Ya Allah, sesungguhnya Engkau Maha Pemaaf dan menyukai keampunan, maka ampunilah aku"
        },
        {
            title: "Perlindungan Petang",
            arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ",
            english: "Dengan nama Allah yang tidak dapat merugikan sesuatupun bersama nama-Nya"
        },
        {
            title: "Doa Tidur",
            arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
            english: "Ya Allah, dengan nama-Mu aku mati dan aku hidup"
        }
    ]
};

// Manajemen State
let currentLayout = 'vertical'; // 'vertical' atau 'horizontal'
let currentPeriod = 'morning';
let currentFontSize = 'medium';
let autoScrollEnabled = false;
let autoScrollInterval = null;
let counter = 0;
let currentAudioIndex = 0;
let isAudioPlaying = false;

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadUserPreferences();
    renderDhikr();
    setupEventListeners();
    autoDetectTimePeriod();
    restoreScrollPosition();
});

// Inisialisasi aplikasi
function initializeApp() {
    console.log('Almatsurat Sughra - Aplikasi Diinisialisasi');
}

// Muat preferensi pengguna dari localStorage
function loadUserPreferences() {
    const savedLayout = localStorage.getItem('almatsurat-layout');
    const savedFontSize = localStorage.getItem('almatsurat-font-size');
    const savedPeriod = localStorage.getItem('almatsurat-period');
    const savedCounter = localStorage.getItem('almatsurat-counter');

    if (savedLayout) {
        currentLayout = savedLayout;
        updateLayoutDisplay();
    }

    if (savedFontSize) {
        currentFontSize = savedFontSize;
        document.getElementById('fontSize').value = savedFontSize;
    }

    if (savedPeriod) {
        currentPeriod = savedPeriod;
        document.getElementById('timePeriod').value = savedPeriod;
    }

    if (savedCounter) {
        counter = parseInt(savedCounter);
        updateCounterDisplay();
    }
}

// Deteksi waktu otomatis (pagi atau petang)
function autoDetectTimePeriod() {
    const now = new Date();
    const hour = now.getHours();

    // Pagi: 4 AM hingga 12 PM
    // Petang: 4 PM hingga 10 PM
    let period = (hour >= 4 && hour < 12) ? 'morning' : (hour >= 16 && hour < 22) ? 'evening' : 'morning';

    if (period !== currentPeriod) {
        currentPeriod = period;
        document.getElementById('timePeriod').value = period;
        renderDhikr();
        localStorage.setItem('almatsurat-period', period);
    }

    // Cek setiap jam
    setTimeout(autoDetectTimePeriod, 3600000);
}

// Setup event listeners
function setupEventListeners() {
    // Pemilih periode waktu
    document.getElementById('timePeriod').addEventListener('change', (e) => {
        currentPeriod = e.target.value;
        renderDhikr();
        localStorage.setItem('almatsurat-period', currentPeriod);
    });

    // Pemilih ukuran font
    document.getElementById('fontSize').addEventListener('change', (e) => {
        currentFontSize = e.target.value;
        applyFontSize();
        localStorage.setItem('almatsurat-font-size', currentFontSize);
    });

    // Tombol toggle tata letak
    document.getElementById('layoutBtn').addEventListener('click', () => {
        toggleLayout();
    });

    // Toggle tata letak dari navbar
    document.querySelector('.layout-toggle').addEventListener('click', () => {
        toggleLayout();
    });

    // Tombol gulir otomatis
    document.getElementById('autoScrollBtn').addEventListener('click', () => {
        toggleAutoScroll();
    });

    // Tombol putar audio
    document.getElementById('playBtn').addEventListener('click', () => {
        playAudio();
    });

    // Tombol jeda audio
    document.getElementById('pauseBtn').addEventListener('click', () => {
        pauseAudio();
    });

    // Tombol penghitung
    document.getElementById('incrementBtn').addEventListener('click', () => {
        incrementCounter();
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        resetCounter();
    });

    document.getElementById('decrementBtn').addEventListener('click', () => {
        decrementCounter();
    });

    // Pelacakan posisi gulir
    document.getElementById('dhikrContainer').addEventListener('scroll', () => {
        saveScrollPosition();
    });

    // Klik pada progress bar
    document.querySelector('.progress-bar').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        // Update kemajuan audio jika diperlukan
    });
}

// Render item Zikir
function renderDhikr() {
    const container = document.getElementById('dhikrContent');
    const dhikrList = dhikriData[currentPeriod];

    container.innerHTML = '';

    dhikrList.forEach((dhikr, index) => {
        const card = document.createElement('div');
        card.className = `dhikr-item-card font-${currentFontSize}`;
        card.innerHTML = `
            <div class="dhikr-title">${dhikr.title}</div>
            <div class="dhikr-arabic">${dhikr.arabic}</div>
            <div class="dhikr-english">${dhikr.english}</div>
        `;
        container.appendChild(card);
    });

    applyFontSize();
}

// Terapkan ukuran font ke semua kartu
function applyFontSize() {
    const cards = document.querySelectorAll('.dhikr-item-card');
    cards.forEach(card => {
        card.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
        card.classList.add(`font-${currentFontSize}`);
    });
}

// Toggle tata letak
function toggleLayout() {
    currentLayout = currentLayout === 'vertical' ? 'horizontal' : 'vertical';
    updateLayoutDisplay();
    localStorage.setItem('almatsurat-layout', currentLayout);
}

// Update tampilan tata letak
function updateLayoutDisplay() {
    const container = document.getElementById('dhikrContainer');
    const layoutBtn = document.getElementById('layoutBtn');

    if (currentLayout === 'horizontal') {
        container.classList.add('horizontal-layout');
        layoutBtn.textContent = '↔️ Horizontal';
    } else {
        container.classList.remove('horizontal-layout');
        layoutBtn.textContent = '📊 Vertikal';
    }
}

// Toggle gulir otomatis
function toggleAutoScroll() {
    autoScrollEnabled = !autoScrollEnabled;
    const btn = document.getElementById('autoScrollBtn');

    if (autoScrollEnabled) {
        btn.style.backgroundColor = '#007B45';
        btn.style.color = '#FFF';
        startAutoScroll();
    } else {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        stopAutoScroll();
    }
}

// Mulai gulir otomatis
function startAutoScroll() {
    const container = document.getElementById('dhikrContainer');
    let scrollAmount = 0;

    autoScrollInterval = setInterval(() => {
        scrollAmount += 2;
        container.scrollTop = scrollAmount;

        // Reset ketika mencapai akhir
        if (scrollAmount >= container.scrollHeight - container.clientHeight) {
            scrollAmount = 0;
        }
    }, 50);
}

// Hentikan gulir otomatis
function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// Simpan posisi gulir
function saveScrollPosition() {
    const container = document.getElementById('dhikrContainer');
    const scrollData = {
        position: container.scrollTop,
        period: currentPeriod,
        timestamp: Date.now()
    };
    localStorage.setItem('almatsurat-scroll', JSON.stringify(scrollData));
}

// Kembalikan posisi gulir
function restoreScrollPosition() {
    const scrollData = localStorage.getItem('almatsurat-scroll');
    if (scrollData) {
        const data = JSON.parse(scrollData);
        if (data.period === currentPeriod) {
            setTimeout(() => {
                document.getElementById('dhikrContainer').scrollTop = data.position;
            }, 100);
        }
    }
}

// Fungsi penghitung
function incrementCounter() {
    counter++;
    updateCounterDisplay();
    localStorage.setItem('almatsurat-counter', counter);
}

function decrementCounter() {
    if (counter > 0) {
        counter--;
        updateCounterDisplay();
        localStorage.setItem('almatsurat-counter', counter);
    }
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
    localStorage.setItem('almatsurat-counter', counter);
}

function updateCounterDisplay() {
    document.getElementById('counterDisplay').textContent = counter.toString().padStart(3, '0');
}

// Fungsi pemutaran audio (simulasi audio)
function playAudio() {
    isAudioPlaying = true;
    document.getElementById('playBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;

    // Simulasi pemutaran audio
    simulateAudioPlayback();
}

function pauseAudio() {
    isAudioPlaying = false;
    document.getElementById('playBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}

function simulateAudioPlayback() {
    if (!isAudioPlaying) return;

    // Update progress bar
    const progress = document.getElementById('progress');
    const currentTime = Math.random() * 60; // Simulasi kemajuan acak
    const duration = 120; // 2 menit

    progress.style.width = (currentTime / duration) * 100 + '%';
    document.getElementById('audioTime').textContent = 
        formatTime(currentTime) + ' / ' + formatTime(duration);

    if (isAudioPlaying) {
        setTimeout(simulateAudioPlayback, 1000);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Jalan pintas keyboard
document.addEventListener('keydown', (e) => {
    // Spasi untuk toggle play/pause
    if (e.code === 'Space' && document.activeElement !== document.body) {
        e.preventDefault();
        if (isAudioPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    // Panah Atas untuk increment
    if (e.code === 'ArrowUp') {
        incrementCounter();
    }

    // Panah Bawah untuk decrement
    if (e.code === 'ArrowDown') {
        decrementCounter();
    }

    // 'L' untuk toggle tata letak
    if (e.key.toLowerCase() === 'l') {
        toggleLayout();
    }

    // 'S' untuk gulir otomatis
    if (e.key.toLowerCase() === 's') {
        toggleAutoScroll();
    }
});

console.log('🕋 Almatsurat Sughra - Siap');
console.log('Jalan Pintas: Spasi=Putar/Jeda, ↑=Penghitung+, ↓=Penghitung-, L=Tata Letak, S=Gulir Otomatis');
