# Architecture Design

## 1. Overview

本アプリはタスク管理を目的としたSPA（Single Page Application）です。

React + TypeScript を用いたモダンフロントエンド構成を採用し、
コンポーネント分離・状態管理・再利用性を重視しています。

---

## 2. Tech Stack

| Category | Technology |
|---|---|
| Framework | React (Vite) |
| Language | TypeScript |
| State Management | Context API / useReducer |
| Styling | CSS Modules |
| Build Tool | Vite |
| Version Control | Git / GitHub |

---

## 3. Architecture Concept

### 設計方針

- UIとロジックの分離
- Feature単位での責務分割
- 状態管理のスコープ最小化
- 再利用可能なコンポーネント設計

---

## 4. Directory Structure

src/
├── components/     # 汎用UI
│   └── ui/
├── features/       # 機能単位
│   └── tasks/
│       ├── components/
│       ├── hooks/
│       ├── types/
│       └── context/
├── pages/
└── styles/

### 設計意図

- components → 再利用可能UI
- features → ビジネスロジック集約
- pages → 画面単位の構成

（実務React構成に準拠）

---

## 5. Component Design

### Component Hierarchy

Layout
└── TodoPage
├── TaskForm
├── TaskList
│     └── TaskItem

### 責務分離

| Component | Responsibility |
|---|---|
| TaskForm | タスク作成 |
| TaskList | 一覧管理 |
| TaskItem | 単一表示 |
| Layout | 共通レイアウト |

---

## 6. State Management Strategy

### なぜ Context + useReducer を採用したか

タスク状態は複数コンポーネントで共有されるため、
props drilling を防ぐ目的で Context を採用。

Reducer により：

- 状態更新の一元管理
- Reduxライクな設計
- 可読性向上

---

### State Flow

User Action
↓
dispatch(action)
↓
reducer
↓
state更新
↓
UI再描画

---

## 7. Data Model

```ts
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
```

---

## 8. Styling Strategy

CSS Modules を採用。

理由：
	•	スコープ汚染防止
	•	コンポーネント単位管理
	•	大規模開発への拡張性

---

## 9. Future Improvements
	•	Redux Toolkitへの移行
	•	API連携（React Query導入）
	•	認証機能追加
	•	テスト導入（Vitest）

---

## 10. Learning Notes
  本プロジェクトでは以下を重点的に学習：
	•	React設計思想
	•	状態管理設計
	•	コンポーネント責務分割
	•	実務想定ディレクトリ構成

---