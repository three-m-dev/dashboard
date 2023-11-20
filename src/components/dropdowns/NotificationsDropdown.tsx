import React, { useState } from 'react';

// Sample Notification Data
const notifications = [
  { id: 1, title: 'New Message', subtitle: 'You have a new message from John', timestamp: '10 mins ago', isRead: false },
  { id: 2, title: 'Update Available', subtitle: 'A new update is available for your software', timestamp: '1 hour ago', isRead: true },
  // ... more notifications
];

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [localNotifications, setLocalNotifications] = useState(notifications);

  const markAllAsRead = () => {
    const updatedNotifications = localNotifications.map(n => ({ ...n, isRead: true }));
    setLocalNotifications(updatedNotifications);
  };

  const clearAllNotifications = () => {
    setLocalNotifications([]);
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="rounded-md p-2 text-gray-600 hover:bg-gray-200">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute -right-2 mt-2 w-64 rounded-b-md bg-white shadow max-h-64 overflow-y-auto">
            {localNotifications.length > 0 ? (
              <>
                {localNotifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`flex items-center p-2 ${notification.isRead ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <input type="checkbox" checked={notification.isRead} readOnly className="mr-2" />
                    <div className="flex-1">
                      <div className="font-bold">{notification.title}</div>
                      <div className="text-sm text-gray-600">{notification.subtitle}</div>
                    </div>
                    <div className="text-xs text-gray-500">{notification.timestamp}</div>
                  </div>
                ))}
                <div className="flex justify-between border-t border-gray-100 p-2">
                  <button onClick={markAllAsRead} className="text-blue-600 hover:text-blue-800">Read All</button>
                  <button onClick={clearAllNotifications} className="text-red-600 hover:text-red-800">Clear All</button>
                </div>
              </>
            ) : (
              <div className="p-4 text-center text-gray-500">No notifications</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsDropdown;
