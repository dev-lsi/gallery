export function showNotification(message, duration) {
    // Check if the browser supports the Notification API
    if ('Notification' in window) {
        // Request permission to show notifications
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // Create a notification
                var notification = new Notification(message);

                // Set a timeout to close the notification after the specified duration
                setTimeout(function() {
                    // Close the notification
                    notification.close();
                }, duration);
            }
        });
    }
}