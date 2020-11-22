class MatchingGame {
    constructor(cards, totalTime) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeCounter = totalTime;

        this.timer = document.getElementById('time-counter');
        this.ticker = document.getElementById('flips');
    }

    startGame() {
        this.totalClick = 0;
        this.timeCounter = this.totalTime;
        this.flipping = true;
        this.flippedCard1 = null;
        this.matchedCard = [];
        setTimeout(() => {
            this.flipping = false;
            this.randomCard(this.cardsArray);
            this.countdown = this.startCountDown();
        }, 500)
        this.ticker.innerText = this.totalClick;
        this.timer.innerText = this.timeCounter;
        this.hideCard();
    }

    startCountDown() {
        return setInterval(() => {
            this.timeCounter--;
            this.timer.innerText = this.timeCounter;
            if (this.timeCounter === 0) {
                this.gameOver();
            }
        }, 1000);
    }

    gameOver() {
        clearInterval(this.startCountDown);
        document.getElementById('game-over-text').classList.add('visible');
    }

    victory() {
        clearInterval(this.countdown);
        document.getElementById('victory-text').classList.add('visible');
    }

    hideCard() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });

    }

    flip(card) {
        if (this.canFlip(card)) {
            this.totalClick++;
            this.ticker.innerText = this.totalClick;
            card.classList.add('visible');

            if (this.flippedCard1) {
                this.checkingCard(card);
            } else {
                this.flippedCard1 = card;
            }
        }
    }

    checkingCard(card) {
        if (this.cardTextValue(card) === this.cardTextValue(this.flippedCard1)) 
            this.match(card, this.flippedCard1);
        else 
            this.mismatch(card, this.flippedCard1);
        
        this.flippedCard1 = null;
    }

    cardTextValue(card) {
        console.log(card.getElementsByClassName('card-value')[0].id);
        return card.getElementsByClassName('card-value')[0].id;
        
    }

    match(card1, card2) {
        this.matchedCard.push(card1);
        this.matchedCard.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if (this.matchedCard.length === this.cardsArray.length)
            this.victory();
    }

    mismatch(card1, card2) {
        this.flipping = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.flipping = false;
        }, 1000);
    }

    randomCard(cardsArray) {
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let index = Math.floor(Math.random() * (i + 1));
            cardsArray[index].style.order = i;
            cardsArray[i].style.order = index;
        }
    }

    canFlip(card) {
        return !this.flipping && !this.matchedCard.includes(card) && card !== this.checkingCard;
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
    

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MatchingGame(cards, 200);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });


    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flip(card);
        });
    });
}
