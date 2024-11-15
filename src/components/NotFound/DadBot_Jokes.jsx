import React from 'react';
import './notFound.scss';

const DadBot = () => {
  const sentences = [
    "What did one ethical robot say to the other? I think Before I firmware!", 
    "Why do robots always behave ethically? Because they follow the ‘byte’path.",
    "What’s a robot’s least favorite ethical dilemma? Having to decide between ‘ctrl-x’ and ‘ctrl-c’.",
    "Why couldn’t the robot take the ethical decisions? Why couldn’t the robot take the ethical decisions?",
    "What did the kind robot do? He carried out his duties without showing any ‘byte’. ", 
    "Why don’t robots cheat? Their creators install anti-virus, not anti-values.",
    "What do you call a polite robot? Sir-cuit, of course!",
    "How do robots resolve ethical conflicts? They just have a quick circuit meeting.",
    "what do you call a robot that always follows the rules? A ‘law’bot.",
    "Why don’t robots make good politicians? Their processors can’t handle thaSt many ethical dilemmas!",
        "DadBot 404 crash error: Joke not found.", "What did Dadbot and Garret read at book club? Harry Potter and the Goblet of Wire!"," This DadBot-JokeGen Created by LlamaMaster33 on Github.com",
    "A robot musician’s collection of instruments will never be complete. They can never get any organs.",
    "Did you hear about the writing robot who combined all the books ever written into one big novel? It's a long story.",
    "How do you use a remote control to calm down a robot dog? You press the paws button.",
    "How many robots does it take to screw in a light bulb? Three — one to hold the bulb, and two to turn the ladder!",
    "I bought one of those early 2000s robot dogs but have nowhere to charge it; I can’t find a place to pug it in.",
    "I finally fulfilled my dream to become a half-cyborg! It did cost me an arm and a leg, though.",
    "I was bored, so I made a robot that distributes herbs. It helped pass the thyme.",
    "If a Norwegian robot analyzed a bird, then it… Scanned-a-navian.",
    "Scientists have discovered a planet populated entirely by robots. They call it Mars.",
    "A robot orders a robot steak. The robot waiter asks them how they wants their robot steak prepared. The robot replies: Weld on."
    ];

  const dadBot = sentences[Math.floor(Math.random() * sentences.length)];

  return (
    <div>
      <p>{dadBot}</p>
    </div>
  );
};

export default DadBot;