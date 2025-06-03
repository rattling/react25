import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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

function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default function App() {
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
    <Container fluid className="App">
      <Header />
      <Stack direction="horizontal" gap={3}>
        <div className="p-1">
          <Sidebar />
        </div>
        <div className="p-2">
          <Container>
            {posts.length === 0 ? (
              <p>There are no blog posts</p>
            ) : (
              posts.map(renderPost)
            )}
          </Container>
        </div>
      </Stack>
    </Container>
  );
}
