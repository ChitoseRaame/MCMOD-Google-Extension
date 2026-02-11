document.addEventListener('DOMContentLoaded', function () {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const url = this.getAttribute('data-url');
            const ripple = this.querySelector('.ripple');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.animation = 'none';
            ripple.offsetHeight;
            ripple.style.animation = 'ripple-animation 0.6s ease-out forwards';
            setTimeout(() => {
                chrome.tabs.create({ url: url });
            }, 600);
        });
    });

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.querySelector('.search-container');

    function performSearch() {
        const keyword = searchInput.value.trim();
        if (!keyword) return;
        const progressWrapper = document.createElement('div');
        progressWrapper.className = 'search-progress-wrapper';
        searchContainer.appendChild(progressWrapper);
        progressWrapper.style.display = 'block';
        const progressLine = document.createElement('div');
        progressLine.className = 'search-progress-line';
        progressWrapper.appendChild(progressLine);
        setTimeout(() => {
            progressLine.style.transition = 'left 0.5s ease-out';
            progressLine.style.left = '100%';
        }, 10);
        setTimeout(() => {
            const encodedKeyword = encodeURIComponent(keyword);
            const searchUrl = `https://search.mcmod.cn/s?key=${encodedKeyword}`;
            chrome.tabs.create({ url: searchUrl });
        }, 600);
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});