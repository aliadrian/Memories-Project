import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import CommentSection from "./CommentSection";

import { getPost } from "../../actions/posts";
import useStyles from "./styles";

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  // const [setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  // useEffect(() => {
  //   dispatch(getPosts(id));
  // }, [id]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6" component="span">
            Created by: {post.name}
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">Likes: {post.likes.length}</Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <CommentSection post={post} />
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      <Divider style={{ margin: "20px 0" }} />

      {/* <div>
        <Posts setCurrentId={setCurrentId} />
      </div> */}
      <Typography gutterBottom variant="h5">
        Check out other posts like:
      </Typography>
      <div className={classes.div1}>
        {recommendedPosts.map(({ title, _id, selectedFile, createdAt }) => (
          <Paper
            className={classes.div2}
            onClick={() => openPost(_id)}
            key={_id}
            elevation={6}
          >
            <div>
              <Typography variant="subtitle1">{title}</Typography>
            </div>
            <div>
              <img src={selectedFile} width="200px" />
            </div>
            <div>
              <Typography variant="body1">
                {moment(createdAt).fromNow()}
              </Typography>
            </div>
          </Paper>
        ))}
      </div>
      {/* {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{
                    margin: "20px 20px 20px 0",
                    cursor: "pointer",
                    width: "min-content",
                  }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6" component="span">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ fontSize: "1vw" }}
                  >
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              )
            )}
          </div>
        </div>
      )} */}
    </Paper>
  );
};

export default Post;
