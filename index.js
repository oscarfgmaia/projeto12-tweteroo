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
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
  },

  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
  },
];
let c = 1;
const tweets = [
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Usopp",
    avatar:
      "https://i.pinimg.com/736x/51/80/9d/51809d19d36ea87335edde7f74e982ae.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Sanji",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2021/10/DXSH4n_XUAAigjE-1-910x512.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Zoro",
    avatar:
      "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Chopper",
    avatar:
      "https://i.pinimg.com/originals/89/ff/79/89ff79195daf1da1b138b18d0cc63304.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Franky",
    avatar:
      "https://i.pinimg.com/originals/62/81/74/628174766c32cf1c1afe53041cbf8bf5.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Brook",
    avatar: "https://criticalhits.com.br/?attachment_id=208749",
    tweet: `Mensagem de número: ${c++}`,
  },
  {
    username: "Robin",
    avatar:
      "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin-one-piece-1.jpg",
    tweet: `Mensagem de número: ${c++}`,
  },
];

app.listen(5000, () => {
  console.log("Server started at port 5000...");
});

function isValidUrl(urlString) {
  try {
    return Boolean(new URL(urlString))
  }
  catch (e) {
    return false
  }
}
app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const actualUser = {
    username,
    avatar,
  };
  const myUserRegex = /^[-.@_a-z0-9]+$/gi.exec(username)
  if( !myUserRegex ||username.length > 30){
    res.status(422).send('Insira um usuário válido')
    return
  }
  if (!isValidUrl(avatar)) {
    res.status(422).send("Insira uma URL válida");
    return;
  }

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
  const { tweet } = req.body;
  const { user } = req.headers;

  if(tweet.length > 1000){
    res.status(422).send("Tamanho máximo de 1000 caracteres");
    return
  }
  const userLoggedIn = users.find(
    (obj) => obj.username.toLocaleLowerCase() === user.toLocaleLowerCase()
  );

  if (!userLoggedIn) {
    res.status(404).send("Usuário inválido");
    return;
  }
  if (!userLoggedIn.username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios");
    return;
  }

  const newTweet = {
    username: userLoggedIn.username,
    avatar: userLoggedIn.avatar,
    tweet,
  };

  tweets.push(newTweet);
  res.status(201).send("OK");
});

function loadTenLastObjByPage(arr, page) {
  const newArrWith10 = [];
  let counter = 1;
  if (Number(page) === 1) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (counter > 10) {
        break;
      }
      newArrWith10.push(arr[i]);
      counter++;
    }
  } else {
    for (let i = arr.length - 1 - ((page - 1) * 10); i >= 0; i--) {
      if (counter > 10) {
        break;
      }
      newArrWith10.push(arr[i]);
      counter++;
    }
  }
  return newArrWith10;
}

app.get("/tweets", (req, res) => {
  const { page } = req.query;
  const lastTenTweets = loadTenLastObjByPage(tweets, page);
  res.send(lastTenTweets);
});

app.get("/tweets/:USERNAME", (req, res) => {
  const username = req.params.USERNAME.toLocaleLowerCase();

  if (!users.find((obj) => obj.username.toLocaleLowerCase() === username)) {
    res.status(404).send("Usuário não cadastrado!");
    return;
  }

  const tweetsByUser = tweets.filter((obj) => {
    if (obj.username.toLocaleLowerCase() === username) {
      return true;
    }
  });
  if (tweetsByUser.length === 0) {
    res.status(404).send("Não há tweets para esse usuário");
    return;
  }
  res.send(tweetsByUser);
});
