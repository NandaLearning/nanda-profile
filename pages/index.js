import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import deved from "../public/gambar.jpg";
import web1 from "../public/alquran.png";
import web2 from "../public/header.png";
import web3 from "../public/extension.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ananda Lukman Ramadhan</title>
        <meta name="description" content="Portfolio of Ananda Lukman Ramadhan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Ananda Lukman Ramadhan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1ZtrrL_1M-sDaH8sYv9nBWC7rzM5Ze8qU/view"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ananda Lukman Ramadhan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Indie Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Indie Developer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About me🔥</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Perkenalkan nama saya Ananda Lukman Ramadhan, kamu boleh memanggilku Nanda. Saya seorang Indie Developer. Saya berpengalaman magang selama 3 bulan sebagai IT support di RSUD Cengkareng. Di waktu luang, saya belajar dasar-dasar pemrograman di sana dan perjalanan programming saya dimulai sejak saya berusia 17 tahun. Awalnya saya memulai dari frontend dengan React Js dan hingga saat ini saya sudah mencapai Backend dengan Express Js.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <h1 className="text-2xl font-bold text-white text-center mb-4">Al Quran Website</h1>
              <Link href="https://readalquran.vercel.app/">
                <a>
                  <Image
                    className="rounded-lg object-cover hover:scale-105 duration-200 cursor-pointer"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web1}
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <h1 className="text-2xl font-bold text-white text-center mb-4">API Secure Library</h1>
              <Link href="https://www.npmjs.com/package/headerlock">
                <a>
                  <Image
                    className="rounded-lg object-cover hover:scale-105 duration-200 cursor-pointer"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web2}
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <h1 className="text-2xl font-bold text-white text-center mb-4">VS Code Extension Started Template</h1>
              <Link href="https://marketplace.visualstudio.com/items?itemName=NandaKaws.bociljs">
                <a>
                  <Image
                    className="rounded-lg object-cover hover:scale-105 duration-200 cursor-pointer"
                    width={"100%"}
                    height={"60%"}
                    layout="responsive"
                    src={web3}
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
