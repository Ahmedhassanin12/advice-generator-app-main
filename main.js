'use strict'
let array = [
    "“Invest in quality pieces, they never go out of style.”",
    "“I make myself go out every day, even if it’s only to walk around the block. The key to staying young is to keep moving.”",
    "“I make myself go out every day, even if it’s only to walk around the block. The key to staying young is to keep moving.”",
    "“Exercise, to me, is totally unnecessary. I think it’s mostly overrated.”",
    "“The use of vitamins? Forget it. And I don’t encourage going to a lot of doctors, either.”",
    "“Fall in love, get married. Sex is to be encouraged.”",
    "“Even if you feel hatred, keep it to yourself. Don’t hurt other people for any reason.”",
    "“Don’t ever give up on love.”",
    "“Nobody else controls you.”",
    "“Nobody else controls you.”",
    "“Make time to cry.”",
    "Travel while you’re young and able. Don’t worry about the money, just make it work. Experience is far more valuable than money will ever be.”",
    "“Don’t compare. You’ll never be happy with your life. The grass is always greener.”",
    "“If you are embarrassed to be dating someone, you should not be dating them.”",
    "“Do one thing each day that is just for you.”",
    " “Don’t be a cheapskate.”",
    "“Forgive.”",
    "“Find your passion and live it.”",
    "“Most time things will figure themselves out.”",
    "“Choose the right parents.”",
    "“Learn to adapt.”",
    "“Take time to mourn what you’ve lost.”",
    "“Keep going and never give up.”",
    "“Make yourself walk.”",
    "“I drink the faucet water.”",
    "“Don’t just die all because you want to.”",
    "“Think positive.”",
    "“Don’t die too early.”",
    "“Just go ahead and do your thing no matter what.”",
    "“Just keep going.”",
    "“You can involve yourself in local problems. There are all sorts of things that have to be tended to in the world.”",
    "“Just keep going.”",
    "“I attribute my longevity to a great extent to walking, not being in the back of the car strapped down.”",
    "“I try not to worry. I just try to live.”",
    "“I try to have enough trust and confidence in myself to deal with things as they come.”",
    "“Keep busy doing what you like.”",
    "“You gotta have good genes.”",
    "“You gotta be… lucky for 100 years.”",
    "“Quit while you’re ahead.”",
    "“When you laugh at yourself, you prevent others from laughing at you.”",
    "“Age is not a disease.”",
    "“Don’t get hurt.”",
    "“Take naps every day.”",
    "“Learning new things makes you happy and keeps your mind active.”",
    "“Sleep well, try not to worry, and enjoy good dreams.”",
    "“Write it on your heart that every day is the best day in the year.”",
    "“Everything in moderation, including moderation.”",
    "“The past is behind, learn from it. The future is ahead, prepare for it. The present is here, live it.”"
]

let textAdvice = document.querySelector('.advice');
let numAdvice = document.querySelector('.num-advice span')
function advice() {
    let rand = Math.trunc(Math.random()* 49) + 1;
    textAdvice.innerHTML= array[rand]
    numAdvice.innerHTML = `#${rand}`

}
let ad = document.querySelector(".sv");
ad.addEventListener("click", advice)