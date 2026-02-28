# Task Management App

React + TypeScript + Vite を使用したタスク管理アプリです。<br>
Redux Toolkit による状態管理と API 通信を想定した構成で、<br>
実務開発を意識して設計しました。<br>

## URL

[https://xxxxx.vercel.app](https://xxxxx.vercel.app)

## Tech Stack

- React
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Axios
- CSS Modules

## Purpose

React 実務案件への参画を想定し、以下を学習目的として作成しました。

- コンポーネント設計の理解
- Redux Toolkit を用いた状態管理
- API通信と非同期処理の実装
- 再利用可能なUI設計

## Features

- タスク追加 / 編集 / 削除
- 状態フィルタリング
- 非同期API取得（JSONPlaceholder使用）
- ローディング・エラーハンドリング
- Redux状態管理

## Architecture

src/
├── components/<br>
├── features/<br>
│   └── tasks/<br>
│       ├── taskSlice.ts<br>
│       └── TaskList.tsx<br>
├── pages/<br>
├── store/<br>
└── hooks/<br>

Redux Toolkit の feature-based 構成を採用しています。

## State Management

- グローバル状態：Redux Toolkit
- UI状態：useState
- 共通設定：Context API

## Challenges & Improvements

- 不要な再レンダリングを防ぐため selector を分離
- コンポーネント責務を分割
- カスタムフックでロジックを共通化

## Setup

npm install<br>
npm run dev

## Future Improvements

- テスト導入（Vitest）
- 認証機能追加
- APIモック（MSW）導入

