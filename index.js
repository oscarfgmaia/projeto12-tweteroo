import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const users = [
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
  },
  {
    username: "Shanks",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2022/07/Shanks-910x455.jpg",
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
  },
];

const tweets = [
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "1",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "2",
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "3",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "4",
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "5",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "6",
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "7",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "8",
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "9",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "10",
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "11",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "12",
  },
];

app.listen(5000, () => {
  console.log("Server started at port 5000...");
});

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const actualUser = {
    username,
    avatar,
  };
  if (
    users.find(
      (obj) => obj.username.toLocaleLowerCase() === username.toLocaleLowerCase()
    )
  ) {
    res.status(409).send("Usuário já cadastrado!");
    return;
  }
  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios");
    return;
  }
  users.push(actualUser);
  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  if (!username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios");
    return;
  }
  const user = users.find((obj) => obj.username.toLocaleLowerCase() === username.toLocaleLowerCase());
  if (!user) {
    res.status(404).send("Usuário inválido");
    return;
  }
  const newTweet = {
    username: username,
    avatar: user.avatar,
    tweet,
  };
  tweets.push(newTweet);
  res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  const lastTenTweets = [];
  for (let i = tweets.length - 1; i > tweets.length - 1 - 10; i--) {
    if (i < 0) {
      break;
    }
    lastTenTweets.push(tweets[i]);
  }
  res.send(lastTenTweets);
});
