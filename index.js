// منع الزر الأيمن للفأرة
document.addEventListener('contextmenu', event => event.preventDefault());

// منع اختصارات لوحة المفاتيح الخاصة بالمطورين
document.onkeydown = function(e) {
    if (e.keyCode == 123) { return false; } // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { return false; } // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 67) { return false; } // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { return false; } // Ctrl+Shift+J
    if (e.ctrlKey && e.keyCode == 85) { return false; } // Ctrl+U (عرض المصدر)
};
