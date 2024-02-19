import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vitae reiciendis animi voluptas? Sit quaerat eaque eveniet facere est cupiditate at nam voluptatum ipsa. Consectetur saepe iste dicta nam quos?</h1>
        
        </div>
       
      </div>
      

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        <Products />

      </div>
    </main>
  );
}
