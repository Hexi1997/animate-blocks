# Animate-Blocks 产品需求文档（PRD）

## 一、产品概述

**产品名**：Animate-Blocks  
**定位**：轻量、开源的 Section 级 UI 组件库，提供可复制、可复用、可二次开发的酷炫网页区块源码（含 Three.js / Motion / GSAP 动画。
**核心价值**：

- 为前端工程师、设计师和开源爱好者提供可直接复制的高质量组件源码；
- 支持 React/Next.js 现代开发流程；
- 易读、可维护，鼓励学习与二次开发。

---

## 二、目标用户 & 使用场景

- **目标用户**：前端开发者、设计师、独立开发者、教学用户、模板开发者
- **典型场景**：
  - Hero 带 3D 背景 + 滚动联动
  - Features 列表 + 动效
  - 登录页的粒子/光效

---

## 三、产品目标

- GitHub 社区活跃度：stars、issues、PR 数量
- 可复制率：区块能在 5–10 分钟内集成
- 文档完善度：每个区块均有示例、Props 表

---

## 四、核心功能 & 需求

### 4.1 组件分类

- `animate-blocks/`：基于 Three.js / GSAP / Motion 的 Client Components
- `docs/`：文档与示例（MDX + Next.js）

### 4.2 区块规范

- `Component.tsx`（TypeScript + Props 定义）
- `README.md`（用途、Props、demo、性能注意）
- `demo/`（Next.js 页面或 Storybook story）

---

## 五、技术栈与工程化

- **语言/框架**：TypeScript + React + Next.js (App Router)
- **包管理**：pnpm monorepo
- **动画库**：three, framer-motion, gsap
- **样式**：TailwindCSS + cn()

---
