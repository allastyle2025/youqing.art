// 获取URL参数
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// 加载相册列表
async function loadAlbums() {
    try {
        const response = await fetch('../data/albums.json');
        const data = await response.json();
        renderAlbums(data.albums);

        // 检查是否有相册ID参数，如果有则直接显示该相册
        const albumId = getUrlParam('album');
        if (albumId) {
            const album = data.albums.find(a => a.id === parseInt(albumId));
            if (album) {
                showAlbumImages(album);
            }
        }
    } catch (error) {
        console.error('加载相册失败:', error);
    }
}

// 渲染相册卡片
function renderAlbums(albums) {
    const container = document.getElementById('albums-container');
    container.innerHTML = albums.map((album, index) => {
        return `
        <div class="group hover-lift cursor-pointer" data-album-id="${album.id}">
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
        </div>
    `;
    }).join('');

    // 为相册卡片添加点击事件
    document.querySelectorAll('[data-album-id]').forEach(card => {
        card.addEventListener('click', () => {
            const albumId = parseInt(card.getAttribute('data-album-id'));
            const album = albums.find(a => a.id === albumId);
            if (album) {
                showAlbumImages(album);
            }
        });
    });
}

// 显示相册的图片
function showAlbumImages(album) {
    // 更新URL
    window.history.pushState({}, '', `?album=${album.id}`);

    // 隐藏相册列表，显示图片部分
    document.getElementById('albums-container').parentElement.style.display = 'none';
    document.getElementById('images-section').classList.remove('hidden');

    // 更新标题
    document.getElementById('album-title').textContent = album.title;

    // 从 gallerys.json 中按 albumId 获取该相册的图片
    fetch('../data/gallerys.json')
        .then(res => res.json())
        .then(data => {
            const entry = data.gallerys.find(g => g.albumId === album.id);
            const albumImages = entry ? entry.images.map(img => ({
                id: img.id,
                imageUrl: img.url,
                date: img.date || '',
                description: img.alt || ''
            })) : [];
            // 保持 album.imageCount 与实际图片数一致（可选）
            album.imageCount = albumImages.length;
            renderAlbumImages(albumImages, album);
        })
        .catch(err => console.error('加载图片失败:', err));
}

// 渲染相册图片
function renderAlbumImages(images, album) {
    const grid = document.getElementById('images-grid');
    grid.innerHTML = images.map((item, index) => {
        const heights = ['h-48', 'h-64', 'h-56', 'h-72', 'h-52', 'h-60'];
        const height = heights[index % heights.length];
        return `
        <div class="masonry-item group relative overflow-hidden rounded-xl animate-fade-in cursor-pointer shadow-md hover:shadow-xl transition-all duration-300" style="animation-delay: ${index * 0.03}s" data-image-id="${index}">
            <div class="overflow-hidden bg-gray-200 ${height}">
                <img 
                    src="${item.imageUrl}" 
                    alt="Gallery ${item.id}" 
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
            </div>
            <!-- 悬停信息卡 -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p class="text-white text-sm font-medium">${item.date}</p>
                <p class="text-accent text-sm font-display">${item.description}</p>
            </div>
        </div>
    `;
    }).join('');
    
    // 添加点击事件监听器
    document.querySelectorAll('#images-grid > div').forEach(item => {
        item.addEventListener('click', () => {
            const imageId = parseInt(item.getAttribute('data-image-id'));
            currentAlbumImages = images;
            currentAlbum = album;
            openLightbox(imageId);
        });
    });
}

// 返回相册列表
function backToAlbums() {
    window.history.pushState({}, '', location.pathname);
    document.getElementById('images-section').classList.add('hidden');
    document.getElementById('albums-container').parentElement.style.display = 'block';
    closeLightbox();
}

// 灯箱全局状态
let currentImageIndex = 0;
let currentAlbumImages = [];
let currentAlbum = {};

// 打开灯箱
function openLightbox(imageId) {
    currentImageIndex = imageId;
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    updateLightbox();
}

// 关闭灯箱
function closeLightbox(e) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 更新灯箱显示
function updateLightbox() {
    if (currentAlbumImages.length === 0) return;
    const image = currentAlbumImages[currentImageIndex];
    document.getElementById('lightbox-image').src = image.imageUrl;
    document.getElementById('lightbox-counter').textContent = `${currentImageIndex + 1} / ${currentAlbumImages.length}`;
    document.getElementById('lightbox-date').textContent = image.date || '未知日期';
    document.getElementById('lightbox-description').textContent = image.description || '暂无描述';
}

// 上一张
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentAlbumImages.length) % currentAlbumImages.length;
    updateLightbox();
}

// 下一张
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentAlbumImages.length;
    updateLightbox();
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    loadAlbums();

    // 返回相册按钮
    document.getElementById('back-to-albums').addEventListener('click', backToAlbums);

    // 灯箱事件监听
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev').addEventListener('click', prevImage);
    document.getElementById('lightbox-next').addEventListener('click', nextImage);
    
    // 点击背景关闭灯箱
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target === document.getElementById('lightbox')) {
            closeLightbox();
        }
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });

    // 移动设备滑动手势
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.getElementById('lightbox').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.getElementById('lightbox').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('hidden')) {
            if (touchStartX - touchEndX > 50) nextImage();
            if (touchEndX - touchStartX > 50) prevImage();
        }
    });

    // 移动菜单 - 已在main.js中处理，这里不需要重复添加
    console.log('Gallery page loaded - Mobile menu handled by main.js');

});
