import Navbar from "../components/navbar";
import Content from "./content/page.jsx";
export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Navbar />
      <Content />
    </div>
  );
}
