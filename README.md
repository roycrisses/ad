# this webiste only had ads (2010s Nostalgia Edition)

A satirical, interactive 2010s-era website prank overloaded with classic internet advertisements, glossy skeuomorphic buttons, fake download traps, popups, and clickbait.

---

## 🎯 How to Add Real Google AdSense & Adsterra Ads

The codebase in [`index.html`](file:///d:/website/index.html) comes with pre-configured slots and comments where you can paste your ad scripts:

### 1. Header & Popunder / Social Bar Scripts (Adsterra & AdSense Verification)
Open [`index.html`](file:///d:/website/index.html) and locate lines 10–18 inside the `<head>` tag:
```html
<!-- [ADSTERRA / ADSENSE HEAD SCRIPTS] -->
<!-- Paste your AdSense verification or Adsterra Popunder / Social Bar script here -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX" crossorigin="anonymous"></script>
```

### 2. Top Leaderboard Banner (728x90)
Locate line 54 in [`index.html`](file:///d:/website/index.html):
```html
<!-- [PASTE REAL GOOGLE ADSENSE OR ADSTERRA 728x90 CODE HERE] -->
```
You can paste the `<ins class="adsbygoogle" ...>` tag or Adsterra 728x90 banner iframe directly inside `<div class="ad-container-leaderboard">`.

### 3. Left & Right Skyscraper Banners (160x600)
Locate the skyscraper slots inside:
- Left Skyscraper: `aside.left-column`
- Right Skyscraper: `aside.right-column`
Replace or wrap the contents of `.ad-banner-160x600` with your Adsterra or AdSense 160x600 unit.

### 4. Medium Rectangles (300x250)
Inside `.ad-mid-section`, there are two 300x250 ad boxes:
- First box: Doctors Hate Him / Weight Loss banner slot
- Second box: Singles in Your Area banner slot
Paste your 300x250 responsive ad code directly inside.

### 5. Adsterra Direct Link (Smartlink)
You can link any of the fake buttons (e.g. the 4 "Download Now" buttons or the "Claim Prize" button) to your **Adsterra Direct Link URL** by setting:
```html
<a href="YOUR_ADSTERRA_DIRECT_LINK" target="_blank">...</a>
```

---

## 🕹️ Interactive Pranks Built-in
1. **Live Ad Counter**: Live ticker showing total ads rendered, ticking up continuously and on scroll.
2. **Dodging "Close Ad" Button**: The sticky bottom banner has an "X" button that jumps away from the mouse cursor when hovered!
3. **The 4 Fake Download Buttons Trap**: Every single download button is a different 2010 ad sponsor.
4. **"Punch the Monkey" Minigame**: Interactive 2010 flash-style game that prompts for SMS subscriptions on winning.
5. **Wheel of Fortune**: Spin to win an iPhone 4 with full 3.5-second spin physics.
6. **Windows 7 Security Center Scanner**: Animated virus scanner uncovering 38+ Trojans in real time.
7. **"Remove All Ads [VIP]" Button**: Clicking this activates bonus emergency ads.
8. **Spawn 10 More Ads Button**: Dynamic ad injector that keeps piling on more ads.
