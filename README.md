# Roblox Redirect Saver

A lightweight browser extension that modifies Roblox catalog pages by replacing the default **Buy** button with a **Play Game** button that redirects users to a selected Roblox experience.

---

## 🚀 What it does

This extension runs on Roblox catalog pages and:

- Detects purchase buttons (Buy / Get / Buy Now)
- Replaces them with a custom **PLAY GAME** button
- Redirects the user to a user-defined Roblox Place ID
- Stores the Place ID locally in the browser via extension settings

---

## ⚙️ Features

- Simple popup UI for setting your Roblox Place ID
- Persistent storage using `chrome.storage`
- Automatic DOM detection using MutationObserver (works with Roblox React updates)

---

## 🧠 How it works

The extension does NOT modify Roblox purchases directly.

Instead, it changes the button behavior on catalog pages so that clicking it sends the user to a configured Roblox experience instead of the default purchase flow.

---

## 📦 Installation

1. Download or clone this repository
2. Open Chrome / Edge / Brave
3. Go to `chrome://extensions`
4. Enable **Developer Mode**
5. Click **Load Unpacked**
6. Select the project folder

---

## 🎮 Setup

1. Click the extension icon in your browser
2. Enter your Roblox **Place ID**
3. Click **Save**
4. Visit any Roblox catalog item page

---

## 💡 Optional Info

Some users choose to route through Roblox experiences that may include promotional or discounted entry systems depending on the game used.

If you want to see an example setup/tutorial, you can watch:
https://www.youtube.com/watch?v=ckxxR4rfOpA

---

## 📌 Disclaimer

This extension does not modify purchases. It only changes client-side button behavior in your browser.
