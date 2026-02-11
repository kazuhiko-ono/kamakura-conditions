# 鎌倉コンディション

鎌倉 七里ヶ浜・坂ノ下エリアの風・気温・波のリアルタイム状況を表示するWebアプリ。

## 公開URL

<!-- デプロイ後に追記 -->

## 使用技術

- HTML / CSS / JavaScript（単一ファイル構成）
- [Open-Meteo API](https://open-meteo.com/)（天気・海洋データ）
- [Cloudflare Pages](https://pages.cloudflare.com/)（ホスティング）

## ローカル起動

```bash
npx http-server -p 8080 .
```

ブラウザで http://localhost:8080 を開く。

## テスト実行

```bash
npm install
npx playwright install
npx playwright test
```
