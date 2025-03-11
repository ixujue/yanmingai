document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // 点击菜单项时关闭菜单
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // 点击页面其他区域时关闭菜单
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}));