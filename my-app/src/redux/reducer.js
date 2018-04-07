const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SORT_STATUS':
            return {...state,
                status: action.payload.status };

        case 'FILTER':
            return {
                ...state,
                filter: action.payload.filter };

        case 'PROJECT_LENGTH':
            return { ...state,
                sumProject: action.payload.sumProject };

        default:
            return state;
    }
};

export default rootReducer;
