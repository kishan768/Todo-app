import { styled } from "styled-components";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Wrapper>
      <ToastContainer position="top-center" autoClose={1000} />
      <Home />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: 100vw;
  padding: 1rem;
`;

export default App;
