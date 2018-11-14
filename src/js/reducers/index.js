import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
    articles: [
        { title: "Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [ ...state.articles, action.payload]};
        default:
            return state;
    }
};