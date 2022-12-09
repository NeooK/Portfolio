import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/img/dev.png"; 
import designe from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ivan Horyn Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link className="dark:text-white" rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-1 flex justify-between'>
            <h1 className='text-xl font-zendots dark:text-white'>Developer</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:text-white" />
              </li>
              <li>
                <a className="bg-gradient-to-t from-cyan-500 to-teal-300 text-white px-4  py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">Ivan Horyn</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">React Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-500">Freelancer providing services for programming and design content needs. Join me down below and let`s get to know each other better</p>
          </div>
          <div className="text-7xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="#"><AiFillTwitterCircle className="text-teal-600" /></a>
            <a href="#"><AiFillLinkedin className="text-blue-900"/></a>
            <a href="#"><AiFillYoutube /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Servises I offer</h3>
            <p className="text-md py-2 leanding-8 text-gray-80 dark:text-gray-200">
              Since the beginning of my jorneyas a freelance designer
              developer, I've done remote work for 
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I ofer from a wide range of services, including brand designe,
              programming and teaching.
            </p>
           <div className="lg:flex gap-10">
             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
               <Image src={designe} width={100} height={100} className="display: inline-block"/>
               <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designe</h3>
               <p className="py-2">
                 Creating elegant designs suited for your needs following core designe theory.
               </p>
               <h4 className="py-4 text-teal-500">Designe too I use</h4>
               <p className="tex-gray-800 py-2">Illustrator</p>
               <p className="tex-gray-800 py-2">Figma</p>
               <p className="tex-gray-800 py-2">Figma</p>
             </div>
             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
               <Image src={code} width={100} height={100} className="display: inline-block"/>
               <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designe</h3>
               <p className="py-2">
                 Creating elegant designs suited for your needs following core designe theory.
               </p>
               <h4 className="py-4 text-teal-500">Designe too I use</h4>
               <p className="tex-gray-800 py-2">Illustrator</p>
               <p className="tex-gray-800 py-2">Figma</p>
               <p className="tex-gray-800 py-2">Figma</p>
             </div>
             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
               <Image src={consulting} width={100} height={100} className="display: inline-block"/>
               <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designe</h3>
               <p className="py-2">
                 Creating elegant designs suited for your needs following core designe theory.
               </p>
               <h4 className="py-4 text-teal-500">Designe too I use</h4>
               <p className="tex-gray-800 py-2">Illustrator</p>
               <p className="tex-gray-800 py-2">Figma</p>
               <p className="tex-gray-800 py-2">Figma</p>
             </div>
           </div>
         </div>
        </section>
        <section>
        <div>
            <h3 className="text-3xl py-1">Servises I offer</h3>
            <p className="text-md py-2 leanding-8 text-gray-80 dark:text-gray-200">
              Since the beginning of my jorneyas a freelance designer
              developer, I've done remote work for 
              <span className="text-teal-500"> agencies</span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I ofer from a wide range of services, including brand designe,
              programming and teaching.
            </p>
           </div>
           <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1"><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className="basis-1/3 flex-1"><Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className="basis-1/3 flex-1"><Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className="basis-1/3 flex-1"><Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className="basis-1/3 flex-1"><Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className="basis-1/3 flex-1"><Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
           </div>
        </section>
      </main>
    </div>
  )
}
