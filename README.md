# 🎥 Apna Video Call

A real-time, production-ready video conferencing application built using **WebRTC**, **Socket.io**, **Node.js**, **Express**, and **React**. It allows multiple users to seamlessly create or join meetings with features like real-time audio/video controls, screen sharing, and an in-app chat system.

## 🚀 Features

- 📹 **Real-Time Video & Audio Calling** – Low-latency peer-to-peer connection using WebRTC.
- 🎤 **Media Controls** – Instantly mute/unmute your microphone or toggle your camera on/off.
- 🖥️ **Screen Sharing** – Share your screen with all participants during a meeting.
- 💬 **In-Call Real-Time Chat** – Text chat instantly with everyone inside the conference room.
- 👥 **Multi-User Rooms** – Connect with multiple participants in a single room using Socket.io signaling.
- 🔒 **Secure Infrastructure** – Built-in room validation and secure handling of user state.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** MongoDB (for managing sessions/user auth)
- **WebRTC:** Native WebRTC API for peer-to-peer audio/video streaming

---

## 📁 Project Structure

```text
Video-Streaming/
├── backend/            # Express + Socket.io + MongoDB Server
│   └── src/            # Core backend logic (controllers, events, routes)
├── frontend/           # React + Tailwind CSS Client Application
├── .gitignore          # Files/folders excluded from version control
└── README.md           # Project documentation

```
## ⚡ Installation & Setup
To get a local copy up and running, follow these simple steps:

```text
1️⃣ Clone the Repository
Bash
git clone ( https://github.com/MDsitare092/Apna-Video-Call.git )

2️⃣ Backend Setup
Bash
cd backend
npm install
# Start the backend server in development mode
npm run dev

3️⃣ Frontend Setup
Open a new terminal window, navigate back to the root, and run:

Bash
cd frontend
npm install
# Start the React development client
npm start

🖥️ Usage
Make sure both the backend and frontend servers are running successfully.

Open your web browser and navigate to http://localhost:3000/.

Create a new meeting room or join an existing one by sharing the room ID.

Enjoy smooth, real-time video conferencing! 🎉

```

🎯 Future Enhancements

[ ] 🔴 Meeting Recording – Save your video sessions directly to local or cloud storage.

[ ] 📅 Meeting Scheduling – Set up meetings for future dates and send link invites.

[ ] 📁 File Sharing – Exchange documents and media directly in the chat window.

[ ] 🔑 JWT Authentication – Robust user login and registration flows.

```

👨‍💻 Author

Md Sitare

GitHub: (https://github.com/MDsitare092/Apna-Video-Call) Email: mdsitare9202@gmail.com

📄 License

This project is open-source and available under the MIT License. Feel free to fork, modify, and build upon it!
