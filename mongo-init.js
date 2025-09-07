// MongoDB初期化スクリプト
// このスクリプトはコンテナ起動時に自動実行されます

// データベースを作成
db = db.getSiblingDB("myapp");

// サンプルコレクションを作成
db.createCollection("cities");

print("Database initialization completed!");
