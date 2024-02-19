import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <Products />
      </div>
    </main>

  );
}
