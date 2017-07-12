
let getNewState = (state) => {
    let tables = state.tables;
    tables.forEach(table => {
        table.participants.forEach(item => {
            let randomValue = Math.random();
            if(randomValue >= 0.5) {
                item.active = !item.active;
            }
        });
    });

    return Object.assign({}, state, {
        tables
    });
};

const tables = (state = {tables: []}, action) => {
    switch (action.type) {
        case 'UPDATE_TABLES':
            return getNewState(state);
        case 'REQUEST_DATA':
            return state;
        case 'RECEIVE_DATA':
            return Object.assign({}, state, {
                tables: action.data.tables,
            });
        case 'FETCH_DATA':
            return state;
        default:
            return state
    }
};

export default tables;
