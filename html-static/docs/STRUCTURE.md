# 有情 - 项目目录结构说明

## 📁 目录组织

本项目采用了专业的 GitHub Pages 静态网站目录结构，以支持更好的代码维护和扩展。

```
youqing/
├── index.html                    # 主页面入口
├── README.md                     # 项目文档
├── .gitignore                    # Git 配置
├── .nojekyll                     # GitHub Pages 配置（禁用 Jekyll）
│
├── css/
│   └── style.css                # 全局样式表
│       └── 包含：动画、悬停效果、砌体布局等
│
├── js/
│   └── main.js                  # 主 JavaScript 文件
│       └── 功能：数据加载、画廊、灯箱、导航、菜单等
│
├── data/
│   ├── gallery.json             # 画廊数据
│   │   └── 包含：图片URL、日期、描述等
│   └── schedule.json            # 演出日程数据
│       └── 包含：日期、标题、描述、地点等
│
├── docs/
│   └── README_assets.md         # 资源管理指南
│       └── 说明资源目录组织和引用方法
│
├── assets/
│   ├── images/                  # 图片资源目录
│   │   ├── youqing_logo.png     # Logo
│   │   ├── people_*.jpg         # 舞者照片
│   │   └── [其他图片资源]
│   └── wingdancetheare-wechat-qrcode.png  # 微信二维码
│
├── hero.html                    # 英雄区域页面（备用）
└── hero-2.html                  # 英雄区域页面（当前使用）
```

## 📋 各目录说明

### 根目录文件

| 文件 | 说明 |
|------|------|
| `index.html` | 主页面，引入 CSS 和 JS |
| `README.md` | 项目总文档 |
| `.nojekyll` | GitHub Pages 配置，防止 Jekyll 处理静态文件 |
| `hero-2.html` | 英雄区域，通过 iframe 加载到 index.html |

### 📂 css/

存放所有 CSS 样式文件。

- **style.css**: 全局样式，包含：
  - 基础样式重置
  - 动画定义（fadeInUp）
  - 悬停效果（hover-lift）
  - 砌体布局（masonry-grid）
  - 线性分隔符等

### 📂 js/

存放所有 JavaScript 脚本文件。

- **main.js**: 主脚本，包含：
  - 画廊数据加载和渲染
  - 日程数据加载和渲染
  - 灯箱功能（打开、关闭、导航）
  - 移动菜单功能
  - 导航栏滚动效果
  - 页面动画初始化
  - 键盘和触摸事件处理

### 📂 data/

存放所有 JSON 数据文件，静态数据可直接修改无需编码。

- **gallery.json**: 画廊图片集合
  ```json
  {
    "gallery": [
      {
        "id": 1,
        "imageUrl": "https://...",
        "date": "2025-10-15",
        "description": "舞蹈演出现场"
      },
      ...
    ]
  }
  ```

- **schedule.json**: 演出日程集合
  ```json
  {
    "events": [
      {
        "id": 1,
        "month": "12",
        "day": "20",
        "year": "2025",
        "title": "演出标题",
        "description": "演出描述",
        "location": "地点",
        "date": "日期范围"
      },
      ...
    ]
  }
  ```

### 📂 docs/

存放文档和指南。

- **README_assets.md**: 资源管理指南，说明如何管理和引用各类资源

### 📂 assets/

存放所有媒体资源。

- **images/**: 所有图片文件
  - Logo 文件
  - 舞者照片
  - 其他项目图片

## 🔧 开发工作流

### 添加新的画廊图片

编辑 `data/gallery.json`，添加新的图片对象到 `gallery` 数组：

```json
{
  "id": 58,
  "imageUrl": "https://your-image-url.jpg",
  "date": "2026-01-23",
  "description": "新的舞蹈演出"
}
```

### 添加新的演出

编辑 `data/schedule.json`，添加新的事件到 `events` 数组：

```json
{
  "id": 5,
  "month": "03",
  "day": "15",
  "year": "2026",
  "title": "春季演出",
  "description": "新春舞蹈展演",
  "location": "上海·体育馆",
  "date": "2026.03.15"
}
```

### 修改样式

在 `css/style.css` 中修改或添加新的 CSS 规则。

### 添加新功能

在 `js/main.js` 中添加新的 JavaScript 函数或事件处理。

## 🌐 GitHub Pages 部署

1. 确保文件已推送到 GitHub 仓库
2. 在 GitHub 仓库设置中启用 GitHub Pages
3. 选择主分支作为源
4. `.nojekyll` 文件会防止 Jekyll 处理

## 📝 文件引用规则

### 在 HTML 中引用资源

```html
<!-- CSS -->
<link rel="stylesheet" href="css/style.css">

<!-- JavaScript -->
<script src="js/main.js"></script>

<!-- 图片 -->
<img src="assets/images/youqing_logo.png" alt="Logo">
```

### 在 JavaScript 中加载 JSON 数据

```javascript
fetch('data/gallery.json')
  .then(res => res.json())
  .then(data => console.log(data))
```

## ✨ 最佳实践

1. **数据与代码分离**: JSON 数据文件与 HTML/CSS/JS 分开存放
2. **模块化**: CSS 和 JS 分离到独立文件
3. **版本控制**: 使用 Git 管理所有更改
4. **资源优化**: 所有图片保存在统一的 assets 目录
5. **文档维护**: 在 docs 目录中保持更新的说明文档

---

**最后更新**: 2026-01-23  
**项目**: 有情 - 素人共创生态舞作
