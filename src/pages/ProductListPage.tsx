import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import styled from "styled-components";
const Container = styled.div``;

const ProductListPage = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
    </Container>
  );
};

export default ProductListPage;
