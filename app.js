const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const City = require("./models/City");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect("mongodb://admin:password123@localhost:27017/myapp?authSource=admin")
  .then(() => {
    console.log("MongoDBに接続しました");
  })
  .catch((err) => {
    console.error("MongoDBの接続エラー:", err);
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/cities", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).send("都市名を入力してください");
    }

    const city = new City({
      name: name.trim(),
    });

    await city.save();
    console.log("新しい都市が登録されました:", name);
    res.redirect("/");
  } catch (error) {
    console.error("都市の登録エラー:", error);
    res.status(500).send("都市の登録に失敗しました");
  }
});

app.get("/api/cities", async (req, res) => {
  try {
    const cities = await City.find().sort({ createdAt: -1 });
    res.json(cities);
  } catch (error) {
    console.error("都市一覧の取得エラー:", error);
    res.status(500).json({ error: "都市一覧の取得に失敗しました" });
  }
});

app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました`);
  console.log(`http://localhost:${PORT} でアクセスできます`);
});
