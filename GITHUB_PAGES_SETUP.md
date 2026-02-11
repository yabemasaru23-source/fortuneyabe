# GitHub Pages Configuration

## リポジトリ設定
1. GitHubリポジトリの Settings → Pages から GitHub Pages を有効化
2. Source を "Deploy from a branch" に設定
3. Branch を "main" に設定
4. Folder を "/ (root)" に設定

## 動作確認
以下のURLで動作確認できます：
`https://[username].github.io/[repository-name]/`

## URLパラメータでの直接アクセス
以下のようなURLで直接鑑定結果を表示できます：
`https://[username].github.io/[repository-name]/?name=名前&birthDate=1975-03-31&birthTime=09:56&gender=male&birthPlace=`

パラメータ：
- name: お名前（URLエンコード推奨）
- birthDate: 生年月日（YYYY-MM-DD形式）
- birthTime: 生まれの時刻（HH:MM形式）
- gender: 性別（male/female）
- birthPlace: 出生地（オプション）

## 注意事項
- このアプリケーションはブラウザで動作する静的サイトです
- サーバーサイドの処理は不要です
- 相対パスでリソースを読み込むように設定されています