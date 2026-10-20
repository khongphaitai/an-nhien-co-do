/* --- script.js --- */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle a');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Hàm mở/đóng menu
    function toggleMenu(e) {
        if(e) e.preventDefault(); // Ngăn trình duyệt nhảy trang
        sidebarMenu.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    }

    // Bắt sự kiện click
    if(menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    if(closeSidebar) {
        closeSidebar.addEventListener('click', toggleMenu);
    }
    if(sidebarOverlay) {
        // Nhấn ra ngoài lớp phủ tối cũng đóng được menu
        sidebarOverlay.addEventListener('click', toggleMenu);
    }
});