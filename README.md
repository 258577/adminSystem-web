这是一个基于 Vue 3 + Vite 构建的后台管理系统前端项目，用于练习和学习 Vue 3 相关技术栈。

## 技术栈

- **Vue 3**：渐进式 JavaScript 框架
- **Vite**：下一代前端构建工具
- **Element Plus**：基于 Vue 3 的桌面端组件库
- **Vue Router**：Vue.js 官方路由管理器
- **Pinia**：Vue 3 官方状态管理库
- **Less**：CSS 预处理器
- **Mock.js**：前端数据模拟库
- **Axios**：HTTP 客户端

## 功能模块

- **登录功能**：用户认证和权限验证
- **首页**：系统概览和数据统计
- **用户管理**：用户信息的增删改查
- **商品管理**：商品信息的管理
- **权限管理**：系统权限控制
- **标签页**：多页面标签切换

## 项目结构

```
src/
├── api/              # API 相关文件
│   ├── mockData/     # Mock 数据
│   ├── api.js        # API 接口定义
│   ├── mock.js       # Mock 配置
│   └── request.js    # 请求拦截器
├── assets/           # 静态资源
│   ├── images/       # 图片资源
│   └── less/         # Less 样式文件
├── components/       # 通用组件
│   ├── CommonAside.vue   # 侧边栏组件
│   ├── CommonHeader.vue  # 头部组件
│   └── CommonTab.vue     # 标签页组件
├── config/           # 配置文件
├── router/           # 路由配置
├── stores/           # Pinia 状态管理
├── views/            # 页面组件
│   ├── Home.vue      # 首页
│   ├── Login.vue     # 登录页
│   ├── Main.vue      # 主布局
│   ├── Mall.vue      # 商品管理
│   └── User.vue      # 用户管理
├── App.vue           # 根组件
└── main.js           # 入口文件
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 开发说明

1. **组件设计**：采用模块化组件设计，提高代码复用性
2. **路由管理**：使用 Vue Router 实现页面路由和导航
3. **状态管理**：使用 Pinia 管理全局状态
4. **数据模拟**：使用 Mock.js 模拟后端 API 数据
5. **样式管理**：使用 Less 进行样式编写和管理
6. **响应式设计**：适配不同屏幕尺寸

## 预览截图

### 首页

### 用户管理


### 商品管理


