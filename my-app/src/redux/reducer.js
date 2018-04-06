const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        ...state
        case 'SORT_STATUS':
            return { status: action.payload.status };

        ...state
        case 'FILTER':
            return { filter: action.payload.filter };

        ...state
        case 'PROJECT_LENGTH':
            return { sumProject: action.payload.sumProject };

        default:
            return state;
    }
};

export default rootReducer;
