// Example announcement data
const announcements = [
    {
        message: "We have an exam for the level up.\n Date: June 23th, 2025.\n Time: 1.10pm and 2.15pm",
        datetime: "2025-06-22T23:36:00"
    },
    {
        message: "Welcome to the new CPC Club website! 🚀",
        datetime: "2025-06-22T14:30:00"
    }
];  

// Helper to format "time ago"
function timeAgo(date) {
    const now = new Date();
    const then = new Date(date);
    const diff = Math.floor((now - then) / 1000);
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff/60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff/3600)} hours ago`;
    return `${Math.floor(diff/86400)} days ago`;
}

function renderAnnouncements() {
    const container = document.getElementById('announcementList');
    container.innerHTML = announcements.map(a => `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition transform hover:scale-[1.02] hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer">
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500 dark:text-gray-400">${new Date(a.datetime).toLocaleString()}</span>
                <span class="text-xs text-blue-600 dark:text-blue-300">${timeAgo(a.datetime)}</span>
            </div>
            <div class="text-lg font-medium text-gray-900 dark:text-gray-100">${a.message.replace(/\n/g, "<br>")}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderAnnouncements);