import {ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, EDIT_COMMENT} from './actions'
/*
const initialState = {
    comments: []
//    users: []
};
*/

function comments(state = [], action) {
    switch(action.type) {
      case ADD_COMMENT:
          return [...state,
            {
              id: action.id,
              text: action.text,
              votes: 0
            }
          ];
        case REMOVE_COMMENT:
            return  state.filter(comment => comment.id !== action.id);
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
            return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes - 1}
                }
            return comment;
            });
        case EDIT_COMMENT:
            let input = prompt('Edit');
            if (input === null) {
                input = action.text;
            }
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, text: input}
                }
                return comment;
            });
        default:
            return state;
    }
}

export default comments;
