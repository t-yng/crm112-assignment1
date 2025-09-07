# MongoDB Quick Start

このプロジェクトでは、Docker Composeを使ってMongoDBコンテナを簡単に起動できます。

## 必要な環境

- Docker
- Docker Compose
- Node.js（npmスクリプト使用時）

## 使用方法

### 1. MongoDBコンテナの起動

```bash
# Docker Composeで起動
docker-compose up -d mongodb

# またはnpmスクリプトで起動
npm run mongo:up
```

### 2. MongoDBコンテナの停止

```bash
# Docker Composeで停止
docker-compose down

# またはnpmスクリプトで停止
npm run mongo:down
```

### 3. ログの確認

```bash
# Docker Composeでログ確認
docker-compose logs -f mongodb

# またはnpmスクリプトでログ確認
npm run mongo:logs
```

### 4. MongoDBシェルに接続

```bash
# Docker Composeで接続
docker exec -it mongodb-container mongosh -u admin -p password123

# またはnpmスクリプトで接続
npm run mongo:shell
```

## 設定情報

- **コンテナ名**: `mongodb-container`
- **ポート**: `27017` (ホスト:コンテナ)
- **管理者アカウント**:
  - ユーザー名: `admin`
  - パスワード: `password123`
- **初期データベース**: `myapp`

## データベース構成

初期化時に以下のコレクションとサンプルデータが作成されます：

- `users` コレクション（サンプルユーザーデータ）
- `logs` コレクション（システムログデータ）

## 接続URL

アプリケーションから接続する場合のMongoDB URL:

```
mongodb://admin:password123@localhost:27017/myapp?authSource=admin
```

## セキュリティについて

本設定は開発・学習用です。本番環境では以下の変更を検討してください：

- 強力なパスワードの設定
- 環境変数の使用
- SSL/TLSの有効化
- ファイアウォールの設定
