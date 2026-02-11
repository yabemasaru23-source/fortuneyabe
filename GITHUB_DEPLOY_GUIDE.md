# GitHub Pages デプロイ手順書

## 概要
この四柱推命鑑定サイトをGitHub Pagesで公開するための手順書です。

## 必要なもの
- GitHubアカウント
- このプロジェクトファイル

## デプロイ手順

### 1. GitHubリポジトリの作成
1. GitHubにログイン
2. 新規リポジトリを作成
3. リポジトリ名を入力（例：`four-pillars-fortune`）
4. "Public"を選択
5. "Add a README file" はオフ
6. "Create repository" をクリック

### 2. ファイルのアップロード
1. 作成したリポジトリのページで "Add file" → "Upload files" をクリック
2. 以下のファイルをすべてアップロード：
   - `index.html`
   - `404.html`
   - `css/style.css`
   - `js/fourPillarsData.js`
   - `js/calculator.js`
   - `js/main.js`
   - `README.md`
3. "Commit changes" をクリック

### 3. GitHub Pagesの有効化
1. リポジトリの "Settings" タブをクリック
2. 左側のメニューから "Pages" を選択
3. "Source" セクションで以下を設定：
   - Branch: `main`
   - Folder: `/(root)`
4. "Save" をクリック

### 4. アクセス確認
1. Settings → Pages ページに戻る
2. 以下のようなメッセージが表示される：
   "Your site is live at https://[your-username].github.io/[repository-name]/"
3. リンクをクリックして動作確認

## URLパラメータでの直接アクセス

以下のようなURLで直接鑑定結果を表示できます：

```
https://[your-username].github.io/[repository-name]/?name=名前&birthDate=1975-03-31&birthTime=09:56&gender=male&birthPlace=
```

### パラメータ説明
- `name`: お名前（URLエンコード推奨）
- `birthDate`: 生年月日（YYYY-MM-DD形式）
- `birthTime`: 生まれの時刻（HH:MM形式）
- `gender`: 性別（male/female）
- `birthPlace`: 出生地（オプション）

### 例
```
https://yabemasaru23-source.github.io/fortuneyabe/?name=%E7%9F%A2%E9%83%A8%E5%A4%A7&birthDate=1975-03-31&birthTime=09:56&gender=male&birthPlace=
```

## トラブルシューティング

### 404エラーが出る場合
- リポジトリ名が正しいか確認
- GitHub Pagesが有効化されているか確認
- 数分待ってから再試行（反映に時間がかかる場合あり）

### 鑑定結果が表示されない場合
- ブラウザのコンソールを開いてエラーを確認
- URLパラメータが正しくURLエンコードされているか確認
- 日付形式（YYYY-MM-DD）と時刻形式（HH:MM）を確認

### スタイルが適用されない場合
- ブラウザのキャッシュをクリア
- CSSファイルのパスが正しいか確認

## カスタマイズ

### デザインの変更
`css/style.css`を編集して、色やフォントを変更できます。

### 計算ロジックの変更
`js/calculator.js`を編集して、四柱推命の計算方法を変更できます。

### 新機能の追加
`js/main.js`を編集して、新しい機能を追加できます。

## 注意事項
- このアプリケーションは簡易的な四柱推命計算を行います
- 商用利用の場合は、適切なライセンスを確認してください
- 正確な鑑定を希望される場合は、専門家にご相談ください