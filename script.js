/**
 * =========================================================================
 * "this webiste only had ads" - Interactive 2010s Prank Engine
 * =========================================================================
 */

// Global State
let adCount = 149;
let monkeyHits = 0;
let isScanning = true;
let scanPercent = 15;
let wheelSpun = false;

document.addEventListener('DOMContentLoaded', () => {
    initAdCounter();
    initElusiveCloseButton();
    initAntivirusScanner();
    initLocationSpoof();
    initCountdownTimer();
    initRandomToasts();
});

/* -------------------------------------------------------------------------
   1. Live Ad Counter Ticker
   ------------------------------------------------------------------------- */
function initAdCounter() {
    const counterEl = document.getElementById('adCounter');
    if (!counterEl) return;

    // Increment ad count randomly to simulate continuous ad loading
    setInterval(() => {
        adCount += Math.floor(Math.random() * 3) + 1;
        counterEl.textContent = adCount.toLocaleString();
    }, 2500);

    // Increase ad count on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(currentScroll - lastScroll) > 200) {
            adCount += 2;
            counterEl.textContent = adCount.toLocaleString();
            lastScroll = currentScroll;
        }
    });
}

function incrementAdCount(amount = 1) {
    adCount += amount;
    const counterEl = document.getElementById('adCounter');
    if (counterEl) {
        counterEl.textContent = adCount.toLocaleString();
    }
}

/* -------------------------------------------------------------------------
   2. Elusive "Close Ad" Button (Dodges Cursor!)
   ------------------------------------------------------------------------- */
function initElusiveCloseButton() {
    const closeBtn = document.getElementById('elusiveCloseBtn');
    if (!closeBtn) return;

    let dodgeCount = 0;

    const dodge = (e) => {
        if (dodgeCount < 6) {
            dodgeCount++;
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 60;
            closeBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
            showToast(`Ad Close Button dodged your cursor! (${dodgeCount}/6)`);
        } else {
            // Reset position after 6 dodges
            closeBtn.style.transform = 'translate(0, 0)';
            dodgeCount = 0;
        }
    };

    closeBtn.addEventListener('mouseenter', dodge);

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert("⚠️ NOTICE: You cannot close this advertisement.\n\nClosing ads violates Section 14-B of the 2010 Internet Regulations. 5 extra ads have been added to your session as a penalty.");
        spawnFiveMoreAds();
    });
}

/* -------------------------------------------------------------------------
   3. "Punch the Monkey" / Target Minigame
   ------------------------------------------------------------------------- */
function playMonkeyGame() {
    const target = document.getElementById('monkeyTarget');
    const scoreText = document.getElementById('gameScoreText');
    if (!target || !scoreText) return;

    monkeyHits++;
    
    // Move monkey to random coordinates inside target-area
    const maxX = 80;
    const maxY = 50;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;

    scoreText.textContent = `Score: ${monkeyHits} | ${Math.max(0, 3 - monkeyHits)} Hits to Win!`;

    if (monkeyHits >= 3) {
        triggerAdPrank("🎯 BINGO! YOU PUNCHED THE MONKEY! 🎁\n\nYou won a $1,000 Best Buy Gift Card! Enter your mother's maiden name and dial-up password to claim!");
        monkeyHits = 0;
        scoreText.textContent = 'Score: 0 | 3 Hits to Win!';
    } else {
        showToast(`💥 Direct Hit! ${3 - monkeyHits} more punches to win!`);
    }
}

/* -------------------------------------------------------------------------
   4. Lucky Wheel Spin
   ------------------------------------------------------------------------- */
function spinLuckyWheel() {
    const wheelFace = document.querySelector('.wheel-face');
    const resultText = document.getElementById('wheelResultText');
    const spinBtn = document.getElementById('spinWheelBtn');
    if (!wheelFace || wheelSpun) return;

    wheelSpun = true;
    spinBtn.disabled = true;
    spinBtn.textContent = 'SPINNING...';
    resultText.textContent = 'Calculating prize algorithm...';

    // 5 full rotations + landing on iPhone 4 or Mystery Box
    const deg = 1800 + Math.floor(Math.random() * 60) + 30;
    wheelFace.style.transform = `rotate(${deg}deg)`;

    setTimeout(() => {
        spinBtn.textContent = 'SPIN COMPLETED!';
        resultText.innerHTML = '🎉 <b>CONGRATULATIONS! You Won: Apple iPhone 4 32GB!</b>';
        triggerAdPrank("🎁 YOU WON AN IPHONE 4!\n\nPlease complete 14 sponsor surveys and send 20 SMS messages to unlock your tracking number!");
        spawnFiveMoreAds();
        wheelSpun = false;
        spinBtn.disabled = false;
        spinBtn.textContent = '🎡 SPIN AGAIN (FREE)!';
    }, 3600);
}

/* -------------------------------------------------------------------------
   5. Fake Windows 7 / XP Antivirus Progress Bar
   ------------------------------------------------------------------------- */
function initAntivirusScanner() {
    const bar = document.getElementById('scanProgressBar');
    const status = document.getElementById('scanStatus');
    const threatCount = document.getElementById('threatCount');
    if (!bar || !status) return;

    const files = [
        'C:\\Windows\\System32\\hal.dll',
        'C:\\Program Files\\LimeWire\\download.exe',
        'C:\\Windows\\explorer.exe.vir',
        'C:\\Users\\Guest\\Downloads\\keygen_crack.exe',
        'C:\\Windows\\System32\\drivers\\tcpip.sys',
        'C:\\Windows\\System32\\mshearts.exe'
    ];

    let fileIdx = 0;
    let threats = 38;

    setInterval(() => {
        if (scanPercent < 98) {
            scanPercent += Math.floor(Math.random() * 4) + 1;
            if (scanPercent > 98) scanPercent = 98;
            bar.style.width = `${scanPercent}%`;

            fileIdx = (fileIdx + 1) % files.length;
            status.textContent = `Scanning: ${files[fileIdx]}`;

            if (Math.random() > 0.6) {
                threats += 1;
                if (threatCount) threatCount.textContent = threats;
            }
        }
    }, 800);
}

/* -------------------------------------------------------------------------
   6. Location Spoofing ("Hot Singles in [Your City]")
   ------------------------------------------------------------------------- */
function initLocationSpoof() {
    const locEl = document.getElementById('userLocation');
    if (!locEl) return;

    // Default fallback
    locEl.textContent = 'Your Neighborhood';

    // Attempt timezone-based city approximation or fallback
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone) {
            const city = timeZone.split('/')[1] ? timeZone.split('/')[1].replace(/_/g, ' ') : 'Your Area';
            locEl.textContent = city;
        }
    } catch (e) {
        locEl.textContent = 'Your Area (IP: 192.168.1.1)';
    }
}

/* -------------------------------------------------------------------------
   7. Countdown Timer for Sticky Ribbon
   ------------------------------------------------------------------------- */
function initCountdownTimer() {
    const timerEl = document.getElementById('countdownTimer');
    if (!timerEl) return;

    let seconds = 179; // 2 min 59 sec
    setInterval(() => {
        if (seconds > 0) {
            seconds--;
            const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
            const secs = (seconds % 60).toString().padStart(2, '0');
            timerEl.textContent = `${mins}:${secs}`;
        } else {
            seconds = 180; // Loop back for perpetual urgency!
        }
    }, 1000);
}

/* -------------------------------------------------------------------------
   8. Retro Floating Pop-up Modal Controls
   ------------------------------------------------------------------------- */
function handlePopupClose() {
    const modal = document.getElementById('retroPopupModal');
    if (modal) {
        modal.style.display = 'none';
        showToast("Popup minimized... Spawning replacement banner!");
        incrementAdCount(3);
        setTimeout(() => {
            modal.style.display = 'block';
            modal.style.top = `${Math.floor(Math.random() * 40) + 15}%`;
            modal.style.right = `${Math.floor(Math.random() * 30) + 5}%`;
        }, 5000);
    }
}

function handlePopupAccept() {
    triggerAdPrank("Downloading 'Secret_Love_Letter_2010.scr.exe' (74 KB)... Your browser has blocked 19 other popups!");
    handlePopupClose();
}

function handlePopupCancel() {
    alert("Cancel rejected! Here are 2 extra advertisements courtesy of our sponsors.");
    spawnFiveMoreAds();
    handlePopupClose();
}

/* -------------------------------------------------------------------------
   9. Prank Alert & Ad Trigger
   ------------------------------------------------------------------------- */
const ADSTERRA_DIRECT_LINK = 'https://www.profitableratecpmnetwork.com/f0puazjbe?key=dd360d55dcf826bbef5abd71be3cad07';

function triggerAdPrank(message) {
    incrementAdCount(4);
    try {
        window.open(ADSTERRA_DIRECT_LINK, '_blank');
    } catch (e) {
        console.log('Ad popup blocked by browser');
    }
    alert(`[2010 SPONSOR NOTIFICATION]\n\n${message}\n\n(Total ads viewed: ${adCount})`);
    showToast("🎉 Ad engagement detected! Loading +4 sponsored slots...");
}


/* -------------------------------------------------------------------------
   10. "REMOVE ALL ADS [VIP]" PRANK BUTTON
   ------------------------------------------------------------------------- */
const removeAllBtn = document.getElementById('removeAllAdsBtn');
if (removeAllBtn) {
    removeAllBtn.addEventListener('click', () => {
        alert("⚠️ VIP AD-FREE TRIAL FAILED!\n\nReason: Ad blocker blocker has detected your desire for no ads.\nSolution: Inverting colors and spawning 10 emergency banners!");
        spawnFiveMoreAds();
        document.body.style.filter = 'invert(0.15)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 800);
    });
}

/* -------------------------------------------------------------------------
   11. Spawn More Ads Dynamically
   ------------------------------------------------------------------------- */
function spawnFiveMoreAds() {
    const container = document.getElementById('dynamicAdStream');
    if (!container) return;

    incrementAdCount(10);

    const prankAdTemplates = [
        `
        <div class="content-box alert-yellow" style="border: 2px dashed #ff0000; animation: flashBadge 0.9s infinite alternate;">
            <div style="font-family: Impact; font-size: 16px; color: #cc0000;">🔥 SPECIAL FLASH PROMOTION: WIN A 2010 HONDA CIVIC! 🔥</div>
            <p style="font-size: 12px; margin: 4px 0;">Answer this simple question: What is 2 + 2? (A) 4 (B) 22</p>
            <button class="glossy-btn btn-green btn-small" onclick="triggerAdPrank('Correct! You qualify for a 2010 Honda Civic lease application!')">CLICK TO SUBMIT ANSWER &gt;&gt;</button>
        </div>
        `,
        `
        <div class="ad-mid-section">
            <div class="ad-banner-300x250" style="border: 3px ridge #00ff00; background: #000; color: #00ff00;">
                <div class="ad-disclaimer" style="color: #66ff66;">MATRIX AD SERVER</div>
                <div class="ad-box-content">
                    <div style="font-family: monospace; font-size: 14px;">⚡ DOWNLOAD 1000 FPS BOOSTER ⚡</div>
                    <div style="font-size: 32px;">🎮 🚀</div>
                    <p style="font-size: 11px; color: #fff;">Make Counter-Strike 1.6 and World of Warcraft run at 300 FPS instantly!</p>
                    <button class="glossy-btn btn-blue" onclick="triggerAdPrank('Booster installed! Mouse sensitivity multiplied by 400%!')">BOOST FPS NOW</button>
                </div>
            </div>
            <div class="ad-banner-300x250" style="border: 3px dotted #ff00ff; background: #fff0fa;">
                <div class="ad-disclaimer">CELEB GOSSIP</div>
                <div class="ad-box-content">
                    <div style="color: #990066; font-weight: bold; font-size: 13px;">📸 YOU WON'T BELIEVE WHO WAS SPOTTED AT STARBUCKS!</div>
                    <div style="font-size: 32px;">🕶️ ☕ 🐕</div>
                    <p style="font-size: 11px; color: #333;">Paparazzi leaked unedited photos from Beverly Hills! Click before they get taken down!</p>
                    <button class="glossy-btn btn-pink" onclick="triggerAdPrank('Photo gallery loading... Please wait 90 seconds.')">VIEW LEAKED PHOTOS</button>
                </div>
            </div>
        </div>
        `
    ];

    const randomTemplate = prankAdTemplates[Math.floor(Math.random() * prankAdTemplates.length)];
    const wrapper = document.createElement('div');
    wrapper.innerHTML = randomTemplate;
    container.appendChild(wrapper);

    showToast("➕ 10 Fresh 2010 Advertisements injected into page!");
}

/* -------------------------------------------------------------------------
   12. Random Toast Notifications
   ------------------------------------------------------------------------- */
function showToast(message) {
    const container = document.getElementById('prankToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'prank-toast';
    toast.innerHTML = `📢 <b>AD ALERT:</b> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

function initRandomToasts() {
    const messages = [
        "A user in Ohio just clicked on 'Download More RAM'!",
        "Visitor from Sydney won an Apple iPod Nano!",
        "Warning: 94 new ad impressions queued for your IP address.",
        "Your browser cache has received 15 promotional cookies.",
        "Flash Player 10.1 buffer at 99.4% capacity."
    ];

    setInterval(() => {
        if (Math.random() > 0.4) {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            showToast(randomMsg);
        }
    }, 7000);
}
