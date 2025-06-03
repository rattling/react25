import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import Sidebar from "./Sidebar";

export default function Body({ sidebar, children }) {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-1">{sidebar && <Sidebar />}</div>
      <div className="p-2">
        <Container>{children}</Container>
      </div>
    </Stack>
  );
}
