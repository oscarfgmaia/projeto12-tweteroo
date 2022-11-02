import express from "express";
import cors from "cors";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const user = {
  username:"",
  avatar:"",
};
const tweets = [
  {
    username: "luffy",
    avatar:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
    tweet:'eu amo o hub'
  },
  {
    username: "nami",
    avatar:
      "https://animes.olanerd.com/wp-content/uploads/2022/09/1662502357_One-Piece-Nami-tem-Haki.jpg",
    tweet:'eu odeio o hub'
  },
];

app.listen(5000, () => {
  console.log("Server started at port 5000...");
});

app.post('/sign-up',(req,res)=>{
    user.username = req.body.username
    user.avatar = req.body.avatar
    res.send(user);
})

app.post('/tweets',(req,res)=>{
    console.log(req.body)
    let newTweet = {...req.body,avatar:user.avatar}
    tweets.push(newTweet)
    console.log(tweets)
    res.send(tweets)
})

app.get("/tweets", (req, res) => {
  res.send(tweets);
});
