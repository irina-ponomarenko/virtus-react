const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SORT_STATUS':
            return { status: action.payload.status };

        case 'FILTER':
            return { filter: action.payload.filter };

        case 'PROJECT_LENGTH':
            return { sumProject: action.payload.sumProject };

        case 'PROJECT_SORT':
            return { sortProject: action.payload.sortProject };

        default:
            return state;
    }
};

export default rootReducer;
