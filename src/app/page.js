import Image from "next/image";
import Navbar from "./navbar/page";
import Content from "./content/page";
export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Navbar />
      <Content />
    </div>
  );
}
