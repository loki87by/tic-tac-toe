class TicTacToe {
    constructor() {
        this.player = 'player1'
        this.gameArea = [[null, null, null,], [null, null, null], [null, null, null]]
        this.gameOver = false;
        this.winner = null;
        this.draw = false;
    }

    getCurrentPlayerSymbol() {
        if(this.player === 'player1') {return 'x'}
        else {return 'o'}
    }

    changePlayer() {
        if(this.player === 'player1') {this.player = 'player2'}
        else {this.player = 'player1'}
    }

    noMoreTurns() {
        const arr = []
        this.gameArea.forEach((ar) => {
            arr.push(ar.every((i) => {return i !== null}))
        })
        return arr.every((item) => {return item !== false})
    }

    isDraw() {
        return this.draw
    }

    checkProgress() {
        const verticals = [[this.gameArea[0][0], this.gameArea[1][0], this.gameArea[2][0]], [this.gameArea[0][1], this.gameArea[1][1], this.gameArea[2][1]], [this.gameArea[0][2], this.gameArea[1][2], this.gameArea[2][2]]]
        const diagonals = [[this.gameArea[0][0], this.gameArea[1][1], this.gameArea[2][2]], [this.gameArea[0][2], this.gameArea[1][1], this.gameArea[2][0]]]
        const res = []
        verticals.forEach((item) => {
            const vertX = item.every((i) => {return i === 'x'})
            const vertY = item.every((i) => {return i === 'o'})
            if (vertX) {res.push('x')}
            else if (vertY) {res.push('o')}
            else {res.push(null)}
        })
        diagonals.forEach((item) => {
            const diagX = item.every((i) => {return i === 'x'})
            const diagY = item.every((i) => {return i === 'o'})
            if (diagX) {res.push('x')}
            else if (diagY) {res.push('o')}
            else {res.push(null)}
        })
        this.gameArea.forEach((item) => {
            const horizX = item.every((i) => {return i === 'x'})
            const horizY = item.every((i) => {return i === 'o'})
            if (horizX) {res.push('x')}
            else if (horizY) {res.push('o')}
            else {res.push(null)}
        })
        const winnerX = res.some((i) => {return i === 'x'})
        const winnerY = res.some((i) => {return i === 'o'})
        if (winnerX) {
            this.gameOver = true
            this.winner = 'x';
        }
        if (winnerY) {
            this.gameOver = true
            this.winner = 'o';
        }
        if(this.noMoreTurns() && this.winner === null) {
            this.gameOver = true
            this.draw = true
        }
    }

    nextTurn(rowIndex, columnIndex) {
        const symbol = this.getCurrentPlayerSymbol()
        if(this.gameArea[rowIndex][columnIndex] !== null){return}
        this.gameArea[rowIndex][columnIndex] = symbol
        this.checkProgress()
        this.changePlayer()
    }

    isFinished() {
        return this.gameOver
    }

    getWinner() {
        return this.winner
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameArea[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
