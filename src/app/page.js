import Navbar from "../components/navbar";
import Content from "../components/Content";
export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Navbar />
      <Content />
    </div>
  );
}
