/**
 * =========================================================================
   2010S GEOCITIES STYLE - AD HEAVY PRANK CHAT ENGINE
   =========================================================================
*/

const ADSTERRA_DIRECT_LINK = 'https://www.profitableratecpmnetwork.com/f0puazjbe?key=dd360d55dcf826bbef5abd71be3cad07';

let queryCount = 0;
let isThinking = false;

const cosmicResponses = [
    {
        intro: "👨‍🚀 **Houston, we have decoded your query!**",
        body: "Based on multi-spectral orbital analysis from our Apollo-XX telemetry relay, your question bends spacetime by exactly **4.82 milliradians**.",
        prankText: "⚡ Space Command has flagged your question as high-priority. To decrypt the final classified equations, authenticate with our cosmic compute provider below:",
        btnText: "🔓 Unlock Full Interstellar Telemetry >>"
    },
    {
        intro: "🪐 **Telemetry Log #4092: Dark Matter Resonance Detected**",
        body: "According to Einstein's Field Equations, what you are asking requires approximately **1.21 Gigawatts of orbital solar power**. Our solar arrays are currently operating at 99.4% capacity.",
        prankText: "🚀 Our satellite ground station requires an oxygen refill sponsor before streaming the rest of this code:",
        btnText: "🛸 Sponsor Oxygen Tank & Read Answer >>"
    },
    {
        intro: "🛸 **Astra Quantum Core v4.9 Output:**",
        body: "Deep space is silent, but your request echoed across three planetary orbits. We simulated 14,000,605 possible futures for this query.",
        prankText: "🛰️ Starlink relay requires temporary handshake verification. Click below to confirm you are not an extraterrestrial rogue probe:",
        btnText: "👽 Confirm Non-Alien Identity >>"
    },
    {
        intro: "🌌 **Cosmic Intelligence Stream:**",
        body: "The answer is **42**! However, in zero gravity, standard logic breaks down. To fix the floating variable error in your neural buffer, please synchronize with the orbital beacon.",
        prankText: "✨ Bonus: Your IP has been granted 1 Free Space Tourist ticket courtesy of our telemetry sponsors:",
        btnText: "🎟️ Claim Orbital Boarding Pass >>"
    }
];

const thinkingStatuses = [
    "Astronaut GPT is consulting the James Webb Space Telescope...",
    "Synthesizing quantum dark matter vectors...",
    "Decoding interstellar radio transmission...",
    "Calibrating orbital booster telemetry...",
    "Bypassing NASA deep-space firewall..."
];

document.addEventListener('DOMContentLoaded', () => {
    // Auto-focus input
    const input = document.getElementById('userInput');
    if (input) input.focus();
});

/* -------------------------------------------------------------------------
   1. Chat Submission Handling
   ------------------------------------------------------------------------- */
function handleTextareaKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChatSubmit(e);
    }
}

function handleChatSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (isThinking) return;

    const input = document.getElementById('userInput');
    const query = input.value.trim();
    if (!query) return;

    // Reset input
    input.value = '';

    sendUserMessage(query);
}

function usePromptChip(text) {
    sendUserMessage(text);
}

function sendUserMessage(text) {
    if (isThinking) return;

    // Hide welcome hero on first message
    const hero = document.getElementById('welcomeHero');
    if (hero) hero.style.display = 'none';

    // Append user message
    appendMessage(text, 'user');

    queryCount++;

    // Trigger thinking state
    isThinking = true;
    showThinking(true);

    // Scroll down
    scrollToBottom();

    // Check if we should pop up the cosmic modal or directly answer
    const thinkDuration = 1800 + Math.random() * 1200;

    setTimeout(() => {
        showThinking(false);
        isThinking = false;

        if (queryCount % 2 === 0) {
            // Show cosmic modal prank every 2 queries
            showCosmicModal();
        }

        // Generate response
        const randomResp = cosmicResponses[Math.floor(Math.random() * cosmicResponses.length)];
        const botHtml = `
            <div>${randomResp.intro}</div>
            <div style="margin-top: 6px;">${randomResp.body}</div>
            <div class="bot-ad-card">
                <div>${randomResp.prankText}</div>
                <button class="bot-ad-btn" onclick="triggerDirectAdPrank('Connecting to Deep Space Compute Network...')">
                    ${randomResp.btnText}
                </button>
            </div>
        `;
        appendMessage(botHtml, 'bot', true);
        scrollToBottom();

        // 50% chance to open direct link in background
        if (Math.random() > 0.4) {
            openDirectLink();
        }
    }, thinkDuration);
}

/* -------------------------------------------------------------------------
   2. UI Append Message
   ------------------------------------------------------------------------- */
function appendMessage(content, sender) {
    const list = document.getElementById('messagesList');
    if (!list) return;

    const row = document.createElement('div');
    row.className = `message-row ${sender}-row`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = sender === 'user' ? '🧑‍🚀' : '👨‍🚀';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = content;

    row.appendChild(avatar);
    row.appendChild(bubble);
    list.appendChild(row);
}

/* -------------------------------------------------------------------------
   3. Thinking Animation
   ------------------------------------------------------------------------- */
function showThinking(show) {
    const indicator = document.getElementById('thinkingIndicator');
    const statusText = document.getElementById('thinkingStatusText');
    if (!indicator) return;

    if (show) {
        indicator.style.display = 'block';
        if (statusText) {
            const randomStatus = thinkingStatuses[Math.floor(Math.random() * thinkingStatuses.length)];
            statusText.textContent = randomStatus;
        }
    } else {
        indicator.style.display = 'none';
    }
}

function scrollToBottom() {
    const container = document.getElementById('chatContainer');
    if (container) {
        setTimeout(() => {
            container.scrollTop = container.scrollHeight;
        }, 50);
    }
}

/* -------------------------------------------------------------------------
   4. Prank Actions & Direct Links
   ------------------------------------------------------------------------- */
function openDirectLink() {
    try {
        window.open(ADSTERRA_DIRECT_LINK, '_blank');
    } catch (e) {
        console.log('Ad popup blocked');
    }
}

function triggerDirectAdPrank(message) {
    openDirectLink();
    if (message) {
        // Subtle astronaut system alert
        setTimeout(() => {
            alert('[ASTRONAUT GPT - MISSION CONTROL]\n\n' + message + '\n\nOrbital relay connected.');
        }, 100);
    }
}

function showCosmicModal() {
    const modal = document.getElementById('cosmicModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModalPrank() {
    const modal = document.getElementById('cosmicModal');
    if (modal) modal.style.display = 'none';
    openDirectLink();
}

function confirmModalPrank() {
    closeModalPrank();
}

/* -------------------------------------------------------------------------
   5. Model Dropdown & Sidebar Actions
   ------------------------------------------------------------------------- */
function toggleModelDropdown() {
    const dropdown = document.getElementById('modelDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function selectModel(modelName) {
    toggleModelDropdown();
    triggerDirectAdPrank('Model switched to ' + modelName + '. Synchronizing satellite weights...');
}

function startNewChat() {
    const list = document.getElementById('messagesList');
    if (list) list.innerHTML = '';
    const hero = document.getElementById('welcomeHero');
    if (hero) hero.style.display = 'block';
    triggerDirectAdPrank('Initializing new Cosmic Mission Log...');
}

function switchChat(title) {
    triggerDirectAdPrank('Switched to orbital log: "' + title + '"');
}