# EduTrack 🚀 (IoT-Enabled Campus Safety Dashboard)

EduTrack is a modern web application designed to bridge the gap between physical Internet of Things (IoT) hardware and real-time campus safety monitoring systems. Built to address student transit tracking, the system demonstrates how RFID-enabled student ID badges integrate seamlessly with communication networks.

When a student arrives at school and scans their card, the platform registers their presence instantly, updating the central dashboard analytics while triggering an automated alert preview simulating an SMS message dispatched directly to their parents.

---

## ✨ Features

* **📟 IoT Hardware Simulator:** An interactive controller that replicates real-time RFID sensor inputs, letting you test system logic instantly without needing physical microcontrollers.
* **📱 Automated Notification Engine:** A built-in mobile viewport mockup that visualizes instant push notifications detailing precise arrival timestamps.
* **📈 Live Telemetry & Metrics:** A dynamic KPI grid calculating real-time analytical vectors, including active on-campus student counts and outbound notification loops.
* **📋 Transactional Ledger Stream:** A structured data grid that continuously appends, formats, and displays real-time hardware logs upon every system interaction.
* **🗂 Single-Page View Routing:** A modular, client-side sidebar architecture providing clean viewport switches to view live tracking data or separate emergency records.

---

## 🛠 Tech Stack

* **HTML5:** Semantic elements mapping the responsive system viewport.
* **CSS3:** Advanced Layouts (Grid/Flexbox), custom properties (`:root` variables), and modular keyframe fade-in transitions.
* **Vanilla JavaScript (ES6+):** Dynamic DOM manipulation, data arrays, custom event listeners, and programmatic client-side routing state management.

---

## 📂 Project Structure

```text
├── index.html          # Main application structure & layouts
├── style.css           # UI design tokens, animations, and typography
└── script.js          # Hardware logic, state machinery, and view routing
