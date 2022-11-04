import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const users = [
  {
    username: "luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
  },
  {
    username: "sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
  },
  {
    username: "zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
  },
  {
    username: "nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
  },
  {
    username: "shanks",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2022/07/Shanks-910x455.jpg",
  },
  {
    username: "usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
  },
];

const tweets = [
  {
    username: "luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "Eu vou ser o rei dos piratas!",
  },
  {
    username: "nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: "Odeio quando não pagam o que me deve!",
  },
  {
    username: "shanks",
    avatar:
    "https://criticalhits.com.br/wp-content/uploads/2022/07/Shanks-910x455.jpg",
    tweet: "...",
  },
  {
    username: "luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: "Sanjiiiii quero carne!!!!",
  },
  {
    username: "sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet:"Só depois que eu terminar a sobremesa das meninas!"
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
  const user = users.find(
    (obj) => obj.username.toLocaleLowerCase() === username.toLocaleLowerCase()
  );
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

//todo when discover about pages
app.get("/tweets/:USERNAME", (req, res) => {
  const username = req.params.USERNAME.toLocaleLowerCase();

  if (!users.find((obj) => obj.username === username)) {
    res.status(404).send("Usuário não cadastrado!");
    return;
  }

  const tweetsByUser = tweets.filter((obj) => {
    if (obj.username === username) {
      return true;
    }
  });
  if (tweetsByUser.length === 0) {
    res.status(404).send("Não há tweets para esse usuário");
    return;
  }
  res.send(tweetsByUser);
});
