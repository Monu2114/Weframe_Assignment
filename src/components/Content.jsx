import Header from "../components/header";
import Board from "../components/board";
import Footer from "../components/footer";
export default function Content() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}
