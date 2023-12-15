
//Função para criar o tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, columns) => {
            return {
                row,
                columns,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

//Espalhar as minas por todo o campo
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

//criar o tabuleiro com as minas plantadas
const createMineBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

//clona o tabuleiro criado
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

//pega os vizinhos
const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]

    //validações para os vizinhos
    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length

            //validação para adicionar como vizinho válido
            if (diferent && validColumn && validRow) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors

}
//valida se a vizinhança é segura
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

//Responsável por abrir um campo quando o usuário clicar
const openField = (board, row, column) => {
    const field = board[row][column]

    //se não aberto, abre o field
    if (!field.opened) {
        field.opened = true

        //se o field estiver minado acontece uma explosão
        if (field.mined) {
            field.exploded = true
        }

        //se for a vizinhança for segura, abre os campos até que não seja mais
        else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        }

        //caso a vizinhança não seja mais segura, calcula a quantidade de minas ao redor
        else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

//para percorrer todos os campos com um array
const fields = board => [].concat(...board)

const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0
//finção para validar se o campo está pendente(se o usuário ganhou ou não)
const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && !field.opened)

//valida se o usuario ganho o jogo
const wonGame = board => fields(board).filter(pendding).length === 0

//mostra as minas que existem no jogo caso o usuário perca
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

export {
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
}