# noYtAds 🚫📺

**noYtAds** is a lightweight and effective Chrome extension that automatically disables or skips all types of YouTube ads – including pre-roll, mid-roll, banners, and popups. It's simple, fast, and does not require any configuration.

---

## 🧰 Features

- ⏭️ Auto-skips pre-roll and mid-roll video ads  
- 🚫 Removes banner ads and overlay popups  
- ⚡ Lightweight and fast – no background server calls  
- 🔒 100% client-side – respects your privacy  
- 🧩 Easy to use, install and forget  

---

## 📁 Project Structure

noYtAds/  
│  
├── bg.js            # Background script for handling YouTube ad events  
├── jquery.js        # jQuery library (used by popup or core logic)  
├── logo.jpg         # Optional branding  
├── logo.png         # Extension icon  
├── manifest.json    # Chrome extension manifest (V3 or V2)  
├── popup.html       # User-facing popup UI  
├── popup.js         # JS logic for popup interactions  
└── README.md        # Project documentation  

---

## 🛠️ Installation (Developer Mode)

1. Download or clone this repository.  
2. Open Chrome and go to `chrome://extensions/`.  
3. Enable **Developer mode** (toggle in the top right).  
4. Click **"Load unpacked"** and select the `noYtAds` directory.  
5. You should now see the extension in your toolbar with the logo.

---

## 🖥️ How It Works

- The extension uses background scripts to monitor and block ad elements on YouTube pages.
- It automatically clicks "Skip Ad" buttons and hides known ad containers.
- The popup interface may display status or control options (if enabled).

---

## ⚠️ Disclaimer

This project is for **educational purposes** only.  
Bypassing advertisements may violate YouTube’s Terms of Service. Use at your own risk. The author is not responsible for any misuse or consequences.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Developed by @princemehta-git  
https://github.com/princemehta-git
