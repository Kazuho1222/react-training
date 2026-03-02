# Technical Decision Log

本ドキュメントは、本プロジェクトにおける技術選定および設計判断の記録です。

---

## Decision 001: Vite を採用

### Context

React開発環境の構築が必要だった。

### Options

- Create React App
- Next.js
- Vite

### Decision

Vite を採用。

### Reason

- 起動速度が高速
- 設定がシンプル
- SPA開発に適している
- 最近の実務案件でも採用が増加

### Consequence

SSRは行わない構成となる。

---

## Decision 002: TypeScript を採用

### Context

保守性の高いコード設計を行いたかった。

### Decision

TypeScript を使用。

### Reason

- 型安全性向上
- リファクタ耐性
- 実務案件の標準技術

### Consequence

型設計コストが初期に発生。

---

## Decision 003: Context + useReducer を採用

### Context

複数コンポーネント間でタスク状態を共有する必要があった。

### Options

- useState + props
- Context
- Redux

### Decision

Context + useReducer

### Reason

- props drilling 回避
- Reduxに近い設計思想を学習可能
- 小規模アプリに適切

### Consequence

Provider設計が必要。

---

## Decision 004: CSS Modules を採用

### Context

スタイルの衝突を防ぎたかった。

### Options

- Global CSS
- Tailwind CSS
- CSS Modules

### Decision

CSS Modules

### Reason

- コンポーネント単位管理
- クラス名衝突防止
- 実務で広く利用

### Consequence

ファイル数が増加。

---

## Decision 005: Feature-based Structure を採用

### Context

コンポーネント数増加に備える必要があった。

### Decision

features単位ディレクトリ構成。

### Reason

- スケーラビリティ向上
- 責務明確化
- 大規模React開発で一般的

### Consequence

初期理解コストが上がる。