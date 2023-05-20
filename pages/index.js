import Head from 'next/head'
import Icon from '../components/Icon'
import { RiChatSmileLine } from 'react-icons/ri'
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page6 from '../components/Page6';
import Page7 from '../components/Page7';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  const [steps, setSteps] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);

    }

    let dHeight = Math.round(window.innerHeight);
    setSteps([0, 1 * dHeight, 2 * dHeight, 3 * dHeight, 4 * dHeight, 5 * dHeight, 6 * dHeight])
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const pageDetails = [
    {
      id: "123",
      imgLink: "/assets/page10.png",
      title: "",
      heading: "25M+ Downloads",
      span: "an appstore & google playstore",
      bgColor: "bg-violet-800",
      des: "We are the best web development company in the world",
      view: "Coming Soon"
    },
    {
      id: "234",
      imgLink: "",
      title: "The Next Big",
      heading: "Blockchain",
      span: "Revolution",
      bgColor: "bg-[#4004b8]",
      des: "We are the best web development company in the world",
      view: "Coming Soon"
    },
    {
      id: "345",
      imgLink: "",
      title: "Powered by advance",
      heading: "/assets/nasa.png",
      span: "algorithms",
      bgColor: "bg-[#010136]",
      des: "We are the best web development company in the world",
      view: "Coming Soon"
    },
    {
      id: "456",
      imgLink: "",
      title: "Redefining",
      heading: "UX Strategy",
      span: "and UI design",
      bgColor: "bg-gray-800",
      des: "We are the best web development company in the world",
      view: "View Case Study →"
    },
    {
      id: "567",
      imgLink: "",
      title: "Text Headline",
      heading: "Text Headline",
      span: "Footer headline",
      bgColor: "bg-[#024fc2]",
      des: "We are the best AR development company in the world",
      view: "View Case Study →"
    },
    {
      id: "678",
      imgLink: "",
      title: "Developing ERP Solution for",
      heading: "Text Headline",
      span: "in furniture industry",
      bgColor: "bg-[#0e00a8]",
      des: "Best since 2017 We offer wide range of web development and app development",
      view: "View Case Study →"
    },
    {
      id: "23478",
      imgLink: "/assets/page70.png",
      title: "Biggest Classifieds",
      heading: "East Aisa",
      span: "Countries",
      bgColor: "bg-green-700",
      des: "We are the best web development company in the world",
      view: "Coming Soon"
    }
  ]

  const [page, setPage] = useState(0);
  if (scroll < steps[1]) {
    if (page != 0) {
      setPage(0);
    }
  }
  else if (scroll < steps[2]) {
    if (page != 1) {
      setPage(1);
    }
  }
  else if (scroll < steps[3]) {
    if (page != 2) {
      setPage(2);
    }
  }
  else if (scroll < steps[4]) {
    if (page != 3) {
      setPage(3);
    }
  }
  else if (scroll < steps[5]) {
    if (page != 4) {
      setPage(4);
    }
  }
  else if (scroll < steps[6]) {
    if (page != 5) {
      setPage(5);
    }
  }
  else {
    if (page != 6) {
      setPage(6);
    }
  }


  const handleChange = (index) => {
    setPage(index);
  }

  return (
    <div className='App'>
      <Head >
        <title>JScroll</title>
        <meta name="description" content="CodesWear.com - Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='hidden justify-end sm:flex'>
        <div className={`w-[45%] bg-gray-800`}>
          {steps.map((step, index) => {
            return index == page && <div key={step}>
              <div className={`w-[45%] fixed top-0 left-0 flex flex-col ${pageDetails[page].bgColor} text-white h-full items-end animate-right`}>
                <div className={`-mr-28 mt-12 ${pageDetails[page].bgColor} rounded-full h-72 w-72 flex justify-center items-center`}>
                  <div className="flex items-center justify-center">
                    <Icon className='w-40' steps={steps} scroll={scroll} />
                    <div className="steps absolute right-12 animate-right">
                      <h4 className='text-lg'>{pageDetails[page].title}</h4>
                      {page != 2 ? <h2 className='text-4xl font-bold'>{pageDetails[page].heading}</h2> :
                        <Image priority src={pageDetails[page].heading} width={200} height={60} />}
                      <h4 className='text-right'>{pageDetails[page].span}</h4>
                    </div>
                  </div>
                </div>

                <div className='px-8 bottom-10 fixed space-y-3 left-0 animate-left'>
                  {pageDetails[page].imgLink.length > 0 && <Image priority src={pageDetails[page].imgLink} width={250} height={70} />}
                  <h2 className='text-4xl'>ABC {pageDetails[page].id}</h2>
                  <p className='w-[50%]'>{pageDetails[page].des}</p>

                  <div className='flex justify-between items-center pt-8 w-[40vw]'>
                    <p className='text-gray-300'>{pageDetails[page].view}</p>
                    <button className='uppercase text-2xl'>Skip</button>
                  </div>
                </div>

              </div>
            </div>
          })}
        </div>
        <div className='w-[55%] h-[700vh] top-0 right-0 -z-10 overflow-y-visible'>
          <div className='fixed top-0 right-0 w-[55%]'>
            {page == 0 && <Page1 />}
            {page == 1 && <Page2 />}
            {page == 2 && <Page3 />}
            {page == 3 && <Page4 />}
            {page == 4 && <Page5 />}
            {page == 5 && <Page6 />}
            {page == 6 && <Page7 />}
          </div>
          <button className='text-3xl font-lighter text-blue-600 bg-blue-600 w-15 h-15 rounded-full p-3 fixed bottom-4 right-4'>
            <RiChatSmileLine className='text-white' />
          </button>
        </div>
      </main>
      <main className='sm:hidden'>
        <div className='h-[60vh]'>
          <Carousel autoPlay={true} infiniteLoop={true} onChange={handleChange} showThumbs={false}>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
          </Carousel>
        </div>
        <div className={`${pageDetails[page].bgColor} text-white min-h-[40vh] p-8`}>
          {pageDetails[page].imgLink.length > 0 && <Image priority src={pageDetails[page].imgLink} width={250} height={70} />}
          <h2 className='text-4xl'>ABC {pageDetails[page].id}</h2>
          <p className=''>{pageDetails[page].des}</p>

          <div className='flex justify-between items-center pt-8'>
            <p className='text-gray-300'>{pageDetails[page].view}</p>
            <button className='uppercase text-2xl'>Skip</button>
          </div>
        </div>
      </main>
    </div>
  )
}
