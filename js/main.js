// 加载日程数据
async function loadSchedule() {
    try {
        const response = await fetch('data/timeline.json');
        const data = await response.json();
        renderSchedule(data.events);
    } catch (error) {
        console.error('加载日程失败:', error);
    }
}

// 渲染日程
function renderSchedule(events) {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = events.map((event, index) => {
        const titleHtml = event.link && event.link.trim() !== ''
            ? `<a href="${event.link}" target="_blank" rel="noopener noreferrer" class="text-lg md:text-xl font-display font-bold text-primary mb-2 hover:underline inline-block">${event.title} <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i></a>`
            : `<div class="text-lg md:text-xl font-display font-bold text-primary mb-2">${event.title}</div>`;

        const day = event.day || '';
        const month = event.month || '';
        const year = event.year || '';

        return `
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 animate-fade-in px-4 md:px-0 py-6 md:py-0 border-b md:border-b-0 md:pb-8" style="animation-delay: ${index * 0.1}s">
            <div class="flex-shrink-0 md:w-32 flex md:block gap-4 md:gap-0">
                <div class="text-center flex-1 md:flex-none">
                    <div class="text-2xl md:text-3xl font-display font-bold text-accent">${year}</div>
                    <div class="text-xs md:text-sm font-medium text-gray-500 mt-1">${month ? month + '月' : ''}${day ? day + '日' : ''}</div>
                </div>
            </div>
            <div class="flex-grow md:border-l-2 md:border-accent md:pl-8 border-l-0">
                ${titleHtml}
                <p class="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    ${event.description}
                </p>
                <p class="text-xs md:text-sm font-medium text-gray-600 mb-1 md:mb-2">${event.date}</p>
                <p class="text-xs md:text-sm text-gray-600">${event.location}</p>
            </div>
        </div>
        `;
    }).join('');
}

// 加载画廊数据 - 现在加载相册而不是所有图片
async function loadGallery() {
    try {
        const response = await fetch('data/albums.json');
        const data = await response.json();
        renderAlbums(data.albums);
    } catch (error) {
        console.error('加载相册失败:', error);
    }
}

// 渲染相册卡片在主页
function renderAlbums(albums) {
    const container = document.getElementById('albums-display-list');
    if (!container) return;
    
    container.innerHTML = albums.map((album, index) => {
        return `
        <a href="pages/gallery.html?album=${album.id}" class="group hover-lift cursor-pointer block">
            <div class="relative h-64 overflow-hidden rounded-xl bg-gray-200 mb-4">
                <img 
                    src="${album.cover}" 
                    alt="${album.title}" 
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
                <!-- 悬停覆盖层 -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p class="text-white font-medium text-sm">点击查看 (${album.imageCount} 张图片)</p>
                </div>
            </div>
            <h3 class="text-xl md:text-2xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                ${album.title}
            </h3>
            <p class="text-accent font-medium text-sm mb-2">${album.date}</p>
            <p class="text-gray-700 text-sm leading-relaxed">
                ${album.description}
            </p>
        </a>
    `;
    }).join('');
}

// 加载支持方数据
async function loadSupporters() {
    try {
        const response = await fetch('data/supporters.json');
        const data = await response.json();
        renderSupporters(data.supporters);
    } catch (error) {
        console.error('加载支持方失败:', error);
    }
}

// 渲染支持方
function renderSupporters(items) {
    const list = document.getElementById('supporters-list');
    if (!list) return;
    list.innerHTML = items.map(item => `
        <div class="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
            <div class="flex-1">
                <h4 class="text-lg font-display font-bold text-primary mb-1">${item.name}</h4>
                <p class="text-xs text-gray-500 mb-2">${item.type}</p>
                <p class="text-sm text-gray-700">${item.description || ''}</p>
            </div>
            ${item.link ? `<div class="flex-shrink-0 self-center"><a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline"><i class="fa fa-external-link"></i></a></div>` : ''}
        </div>
    `).join('');
}

// 加载舞者心语数据
async function loadTestimonials() {
    try {
        const response = await fetch('data/testimonials.json');
        const data = await response.json();
        renderTestimonials(data.testimonials);
    } catch (error) {
        console.error('加载舞者心语失败:', error);
    }
}

// 渲染舞者心语
function renderTestimonials(items) {
    const list = document.getElementById('testimonials-list');
    if (!list) return;
    list.innerHTML = items.map((item, index) => {
        const contentPreview = item.content.substring(0, 200) + (item.content.length > 200 ? '...' : '');
        return `
        <div class="bg-soft rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in cursor-pointer group" style="animation-delay: ${index * 0.05}s" data-testimonial-id="${item.id}">
            <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-2">
                        <h4 class="text-lg md:text-xl font-display font-bold text-primary">${item.title}</h4>
                        <span class="text-xs px-2 py-1 bg-accent/10 text-secondary rounded-full whitespace-nowrap">${item.year}</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-3">
                        <i class="fa fa-user-circle mr-1"></i>${item.name} 
                        <span class="text-xs text-gray-500 ml-2">${item.category}</span>
                    </p>
                    <p class="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3">
                        ${contentPreview}
                    </p>
                </div>
                <div class="flex-shrink-0 mt-1">
                    <i class="fa fa-chevron-right text-accent text-lg group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        </div>
    `;
    }).join('');

    // 添加点击事件以展开全文
    document.querySelectorAll('[data-testimonial-id]').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.getAttribute('data-testimonial-id'));
            const testimonial = items.find(t => t.id === id);
            if (testimonial) {
                showTestimonialModal(testimonial);
            }
        });
    });
}

// 显示舞者心语详细信息模态框
function showTestimonialModal(testimonial) {
    const modal = document.createElement('div');
    modal.id = 'testimonial-modal';
    modal.className = 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full my-8 shadow-2xl animate-fade-in">
            <div class="bg-primary text-white p-6 md:p-8 flex items-start justify-between gap-4">
                <div class="flex-1">
                    <h2 class="text-2xl md:text-3xl font-display font-bold mb-2">${testimonial.title}</h2>
                    <p class="text-sm md:text-base text-white/80">
                        <span class="font-medium">${testimonial.name}</span> · ${testimonial.year} · ${testimonial.category}
                    </p>
                    ${testimonial.date ? `<p class="text-xs text-white/60 mt-2">${testimonial.date}</p>` : ''}
                </div>
                <button id="close-testimonial-modal" class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white hover:text-accent transition-colors">
                    <i class="fa fa-times text-xl"></i>
                </button>
            </div>
            <div class="p-6 md:p-8 max-h-[calc(100vh-250px)] overflow-y-auto">
                <div class="prose text-gray-800 leading-relaxed whitespace-pre-wrap">
                    ${testimonial.content}
                </div>
                ${testimonial.link ? `
                <div class="mt-6 pt-4 border-t border-gray-200">
                    <a href="${testimonial.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-accent hover:underline font-medium">
                        查看原文 <i class="fa fa-external-link text-sm"></i>
                    </a>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    document.getElementById('close-testimonial-modal').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    loadSchedule();
    loadSupporters();
    loadGallery();
});

// 移动菜单
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// 点击链接关闭菜单
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// 导航栏滚动效果 - 透明到有色转换
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navbarTitle = document.getElementById('navbar-title');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const navbarIcon = document.querySelector('.navbar-icon');
    
    if (window.scrollY > 50) {
        // 滚动时显示背景和边框，改变文本颜色为深色
        navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-gray-100', 'shadow-md');
        navbar.classList.remove('bg-transparent');
        
        // 改变文本颜色为深色
        navbarTitle.classList.remove('text-white');
        navbarTitle.classList.add('text-primary');
        navbarLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-dark');
        });
        navbarIcon?.classList.remove('text-white');
        navbarIcon?.classList.add('text-dark');
    } else {
        // 在顶部时保持透明，文本颜色为白色
        navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-gray-100', 'shadow-md');
        navbar.classList.add('bg-transparent');
        
        // 改变文本颜色为白色
        navbarTitle.classList.add('text-white');
        navbarTitle.classList.remove('text-primary');
        navbarLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-dark');
        });
        navbarIcon?.classList.add('text-white');
        navbarIcon?.classList.remove('text-dark');
    }
});

// 页面加载时触发淡入动画
window.addEventListener('load', () => {
    document.querySelectorAll('.animate-fade-in').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
