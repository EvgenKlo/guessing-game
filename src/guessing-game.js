class GuessingGame {
    constructor() {
        this.result;
        this.max;
        this.min;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
        this.result = Math.round(this.max / 2);
    }

    guess() {
        return this.result;
    }

    lower() {
        this.max = this.result;
        this.result = Math.round((this.max + this.min) / 2);
    }

    greater() {
        this.min = this.result;
        this.result = Math.round((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;
