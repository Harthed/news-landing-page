import Image from "next/image";
import logo from "@/img/codebox.png";
import codegirl from "@/img/Mask group.png";
import background from "@/img/Background.png";

export default function Home() {
  return (
    <main className="bg-pink-700 lg:bg-background bg-cover flex flex-col max-h-screen h-screen">
      <Image className="lg:sr-only" src={codegirl} alt="cover" />
      <div className="p-4 lg:p-16 mt-16 flex-1 flex flex-col justify-between h-full ">
        <Image src={logo} alt="logo" width={180} />
        <div className=" flex flex-col gap-4 ">
          <h1 className="text-2xl lg:text-5xl/10 font-bold text-white ">
            Receba notícias <br />
            atualizadas sobre o <br /> MERCADO DE TECNOLOGIA
          </h1>
          <button className=" bg-zinc-800 active:bg-pink-800 text-white rounded-lg w-full lg:w-72 p-4 ">
            Inscreva-se
          </button>
        </div>
      </div>
    </main>
  );
}
