import { useState } from "react";
import "../styles/Body.css";

export default function Body() {
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const [videoSrc, setVideoSrc] = useState(null);
  const [showGift, setShowGift] = useState(false);

 const questions = [
    {
      question: "What will you do if I text you 'I miss you'? 🌙",
      options: [
        { text: "Ignore 😴", msg: "wow heartless 💀", correct: false },
        { text: "Reply 'I miss you more' ❤️", msg: "Awwww 🥺💖", correct: true },
        { text: "Send meme 😂", msg: "modern romance 🤝", correct: false },
        { text: "Block 😂", msg: "coldest move 🧊", correct: false },
      ],
    },
    {
      question: "What is true love? ❤️",
      options: [
        { text: "Money 💸", msg: "bro really? 💀", correct: false },
        { text: "Care & Respect 💖", msg: "correct answer 😭", correct: true },
        { text: "Sleep 😴", msg: "lazy love 😂", correct: false },
        { text: "Food 🍕", msg: "hungry love 😂", correct: false },
      ],
    },
    {
      question: "If I cry in front of you 😢",
      options: [
        { text: "Laugh 😂", msg: "evil detected 💀", correct: false },
        { text: "Comfort me ❤️", msg: "green flag 💚", correct: true },
        { text: "Ignore 😶", msg: "cold heart 💔", correct: false },
        { text: "Run away 🏃", msg: "coward 😂", correct: false },
      ],
    },
    {
      question: "Who am I to you? 🥰",
      options: [
        { text: "Stranger", msg: "ouch 💔", correct: false },
        { text: "Enemy 😂", msg: "bruh 💀", correct: false },
        { text: "My favorite problem ❤️", msg: "aww 🥰", correct: true },
        { text: "Monkey 🙈", msg: "donkey detected 😂", correct: false },
      ],
    },
    {
      question: "If I say 'I’m ugly' 😭",
      options: [
        { text: "Agree 😂", msg: "bro savage 💀", correct: false },
        { text: "No, you are cute ❤️", msg: "smooth answer 😭💖", correct: true },
        { text: "Block 😂", msg: "bruh 💀", correct: false },
        { text: "Laugh 😂", msg: "evil mode 😂", correct: false },
      ],
    },
    {
      question: "What is your love language? 💌",
      options: [
        { text: "Caring ❤️", msg: "perfect 💖", correct: true },
        { text: "Arguing 😤", msg: "toxic 🚩", correct: false },
        { text: "Ignoring 😶", msg: "pain 💀", correct: false },
        { text: "Memes 😂", msg: "valid 🤝", correct: false },
      ],
    },
    {
      question: "If I call you cute 🥰",
      options: [
        { text: "Blush 🙈", msg: "shy mode 😭", correct: true },
        { text: "Deny 😤", msg: "ego 100 💀", correct: false },
        { text: "Block 😂", msg: "bruh 😂", correct: false },
        { text: "Ignore 😶", msg: "cold 🧊", correct: false },
      ],
    },
    {
      question: "What will you choose? 😏",
      options: [
        { text: "Me 💖", msg: "correct 😭❤️", correct: true },
        { text: "Food 🍔", msg: "food lover 😂", correct: false },
        { text: "Sleep 😴", msg: "lazy 🤡", correct: false },
        { text: "Game 🎮", msg: "gamer 💀", correct: false },
      ],
    },
    {
      question: "If I stop replying suddenly 😶",
      options: [
        { text: "Cry 😭", msg: "emotional damage 💔", correct: false },
        { text: "Wait patiently ❤️", msg: "real love 💖", correct: true },
        { text: "Block 😂", msg: "revenge mode 💀", correct: false },
        { text: "Forget you 😤", msg: "cold heart 🚩", correct: false },
      ],
    },
    {
      question: "What will you do if I am angry 😡",
      options: [
        { text: "Fight back 😤", msg: "war mode 💀", correct: false },
        { text: "Hug you ❤️", msg: "aww melt 💖", correct: true },
        { text: "Ignore 😶", msg: "bad idea 💀", correct: false },
        { text: "Laugh 😂", msg: "dangerous 😂", correct: false },
      ],
    },
    {
      question: "If I say 'I hate you' 😏",
      options: [
        { text: "Cry 😭", msg: "weak heart 💔", correct: false },
        { text: "I love you more ❤️", msg: "legend move 😭💖", correct: true },
        { text: "Block 😂", msg: "bruh 💀", correct: false },
        { text: "Ignore 😶", msg: "cold response 🧊", correct: false },
      ],
    },
    {
      question: "What is your personality? 🤔",
      options: [
        { text: "Funny 😂", msg: "clown energy 🤡", correct: true },
        { text: "Serious 😐", msg: "boring mode 💀", correct: false },
        { text: "Confused 🤯", msg: "same 😂", correct: false },
        { text: "Lazy 😴", msg: "sleepy king 🤡", correct: false },
      ],
    },
    {
      question: "If I send ❤️ emoji",
      options: [
        { text: "Send back ❤️", msg: "mutual love 💖", correct: true },
        { text: "Delete chat 💀", msg: "why 😂", correct: false },
        { text: "Seen only 😶", msg: "pain 💔", correct: false },
        { text: "Send meme 😂", msg: "modern love 🤝", correct: false },
      ],
    },
    {
      question: "What do you think about me? 😏",
      options: [
        { text: "Cute ❤️", msg: "aww 🥰", correct: true },
        { text: "Annoying 😤", msg: "rude 😂", correct: false },
        { text: "Weird 🤡", msg: "true but rude 💀", correct: false },
        { text: "Unknown 🤔", msg: "confused soul 😂", correct: false },
      ],
    },
    {
      question: "If I disappear 😶",
      options: [
        { text: "Forget 😤", msg: "cold heart 💀", correct: false },
        { text: "Search you ❤️", msg: "true love 💖", correct: true },
        { text: "Laugh 😂", msg: "evil 😂", correct: false },
        { text: "Sleep 😴", msg: "lazy mode 🤡", correct: false },
      ],
    },
    {
      question: "What is your mood right now? 😏",
      options: [
        { text: "Happy 😂", msg: "good vibe 💖", correct: true },
        { text: "Angry 😡", msg: "danger 🚩", correct: false },
        { text: "Confused 🤯", msg: "same 😂", correct: false },
        { text: "Sleepy 😴", msg: "always sleepy 🤡", correct: false },
      ],
    },
    {
      question: "If I say 'let’s run away together' 🏃❤️",
      options: [
        { text: "Yes ❤️", msg: "romantic ending 😭💖", correct: true },
        { text: "No 😶", msg: "boring life 💀", correct: false },
        { text: "Think 🤔", msg: "confused love 😂", correct: false },
        { text: "Block 😂", msg: "cold heart 🧊", correct: false },
      ],
    },
    {
      question: "If I become invisible for one day, what will you do? 👻",
      options: [
        { text: "Search everywhere for you ❤️", msg: "Aww loyal one 🥺💖", correct: true },
        { text: "Eat snacks peacefully 🍕", msg: "bro priorities 😂", correct: false },
        { text: "Sleep 😴", msg: "lazy legend 🤡", correct: false },
        { text: "Forget you 😶", msg: "cold heart 💀", correct: false },
      ],
    }
  ];


  const handleClick = (option) => {
    if (isLocked) return;

    setIsLocked(true);
    setMessage(option.msg);

    if (option.correct) {
      setVideoSrc("/smile.mp4");   // ✅ public folder
      setScore((prev) => prev + 1);

      setTimeout(() => {
        setMessage("");
        setVideoSrc(null);
        setQuestionIndex((prev) => prev + 1);
        setIsLocked(false);
      }, 3000);

    } else {
      setVideoSrc("/ayoo.mp4");    // ✅ public folder

      setTimeout(() => {
        setMessage("");
        setVideoSrc(null);
        setIsLocked(false);
      }, 3000);
    }
  };

  if (questionIndex >= questions.length) {
    return (
      <div className="main-container finish-screen">

        <h1>🎉 Quiz Finished!</h1>
        <h2>Your Score: {score}/{questions.length}</h2>

        {!showGift ? (
          <button
            className="gift-button"
            onClick={() => setShowGift(true)}
          >
            🎁 Open Your Gift
          </button>
        ) : (
          <div className="gift-box">
            <p className="your">You are someone who slowly became a special part of my life without even trying. The way you talk, the way you care, and the way you stay in my thoughts makes everything feel different and better. I may not always say it perfectly, but I truly care about you more than words can show. You matter to me in a way that feels calm, real, and important.

              And honestly, I don’t want to just keep these feelings inside anymore. I want to be open with you — I like you, and I want to be someone who stands beside you, supports you, and cares for you in every small and big moment. If you feel even a little the same, I would love to grow something beautiful with you, step by step, together.❤️‍🔥🥰</p>
          </div>
        )}

      </div>
    );
  }

  const currentQ = questions[questionIndex];

  return (
    <div className="main-container">

      <div className="Head-container">
        <h1>Score {score}/{questions.length}</h1>
      </div>

      <div className="qusition-container">
        <h1>{currentQ.question}</h1>

        {currentQ.options.map((opt, index) => (
          <button key={index} onClick={() => handleClick(opt)} disabled={isLocked}>
            {opt.text}
          </button>
        ))}

        {message && (
          <div className="card jump">
            <p>{message}</p>
          </div>
        )}

        {videoSrc && (
          <div className="video-popup">
            <video
              src={videoSrc}
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              width="350"
            />
          </div>
        )}

      </div>
    </div>
  );
}