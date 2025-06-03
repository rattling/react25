function Post(props) {
  return (
    <p>
      <b>{props.post.author.username}</b>&mdash; {props.post.timestamp}
      <br />
      {props.post.text}
    </p>
  );
}

function renderPost(post) {
  return <Post key={post.id} post={post} />;
}

export default function Posts() {
  const posts = [
    {
      id: 1,
      text: "Hello, world!",
      timestamp: "a minute ago",
      author: { username: "susan" },
    },
    {
      id: 2,
      text: "Second Post!",
      timestamp: "a second ago",
      author: { username: "john" },
    },
  ];
  return (
    <>
      {posts.length === 0 ? (
        <p>There are no blog posts</p>
      ) : (
        posts.map(renderPost)
      )}
    </>
  );
}
