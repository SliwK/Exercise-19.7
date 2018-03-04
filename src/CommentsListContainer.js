import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions.js';

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
