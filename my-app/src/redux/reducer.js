const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SORT_STATUS':
            return { status: action.payload.status };

        case 'FILTER':
            return { filter: action.payload.filter };

        default:
            return state;
    }
};

export default rootReducer;
