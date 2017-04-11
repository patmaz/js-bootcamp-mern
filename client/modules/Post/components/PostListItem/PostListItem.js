import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

// Import Style
import styles from './PostListItem.css';

import { voteUpRequest, voteDownRequest } from '../../PostActions';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
      <p>
        <span className={styles['post-vote']} onClick={() => props.voteDownRequest(props.post.cuid, props.post.voteCount)}>-</span>
        {props.post.voteCount}
        <span className={styles['post-vote']} onClick={() => props.voteUpRequest(props.post.cuid, props.post.voteCount)}>+</span>
      </p>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch, props) {
  return {
    voteUpRequest: (cuid, votes) => dispatch(voteUpRequest(cuid, votes)),
    voteDownRequest: (cuid, votes) => dispatch(voteDownRequest(cuid, votes)),
  };
}

export default connect(null, mapDispatchToProps)(PostListItem);
