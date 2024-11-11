import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex items-center justify-center bg-pink-400 text-white h-screen"
      >
        <div className="text-center px-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Lorem ipsum dolor
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <Link
            className="inline-block px-6 py-3 bg-green-700 text-white text-lg "
            href="/contact"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section>
        <div className="bg-stone-800 text-xl grid gap-8">
          <p className="max-w-[600px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ipsum amet quas vel? Dolor eveniet perspiciatis temporibus aperiam
            pariatur porro rem eius sequi cupiditate inventore! Architecto
            possimus fuga aperiam optio.
          </p>
          <p className="max-w-[600px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ipsum amet quas vel? Dolor eveniet perspiciatis temporibus aperiam
            pariatur porro rem eius sequi cupiditate inventore! Architecto
            possimus fuga aperiam optio.
          </p>
          <p className="max-w-[600px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ipsum amet quas vel? Dolor eveniet perspiciatis temporibus aperiam
            pariatur porro rem eius sequi cupiditate inventore! Architecto
            possimus fuga aperiam optio.
          </p>
          <p className="max-w-[600px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ipsum amet quas vel? Dolor eveniet perspiciatis temporibus aperiam
            pariatur porro rem eius sequi cupiditate inventore! Architecto
            possimus fuga aperiam optio.
          </p>
        </div>
      </section>
    </>
  );
}
