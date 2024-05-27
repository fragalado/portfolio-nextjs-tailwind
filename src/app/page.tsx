import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";
import Card from "./ui/card";
import Inicio from "./ui/inicio";
import SobreMi from "./ui/sobremi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">

      {/* Inicio */}
      <Inicio />

      {/* Sobre mi */}
      <SobreMi />
    </main>
  );
}
