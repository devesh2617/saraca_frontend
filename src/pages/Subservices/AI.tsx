import { Helmet } from "react-helmet";
import React, { useEffect, useRef } from "react";
import DiscoverMoreCards from "../../components/DiscoverMoreCards";
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";

type DiscoverMoreCardsData = {
  imageSrc: string;
  link: string;
};

type TrendingTechnologiesObject = {
  title: string;
  link: string;
  imageSrc: string;
};

const TrendingTechnologiesData = [
  {
    heading: "Explainable AI (XAI)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/Explainable.jpg`,
  },
  {
    heading: "Edge AI",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/Edge Ai.jpg`,
  },
  {
    heading: "Federated Learning",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/Federated Learning.jpg`,
  },
  {
    heading: "Generative Adversarial Networks (GANs)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/Generative.jpg`,
  },
  {
    heading: "Reinforcement Learning",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/learning.jpg`,
  },
];

const ServiceOfferings = [
  {
    heading: "AI Strategy Consulting",
    description:
      "We help businesses develop robust AI strategies tailored to their unique needs and objectives. Our consulting services encompass AI roadmap development, opportunity assessments, and implementation planning to ensure seamless integration with your business goals.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/consult.svg`,
  },
  {
    heading: "AI Product Development",
    description:
      "From concept to deployment, we guide businesses through the entire AI product development lifecycle. Our team of experts specializes in designing and building AI-powered solutions that transform data into actionable insights, driving innovation and value creation.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/Product.svg`,
  },
  {
    heading: "Natural Language Processing (NLP)",
    description:
      "We leverage state-of-the-art NLP techniques to extract insights from unstructured text data, enabling businesses to unlock valuable information and improve decision-making processes. Our NLP solutions span text classification, sentiment analysis, entity recognition, and more.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/nlp.svg`,
  },
  {
    heading: "Computer Vision Solutions",
    description:
      "Saraca's Computer Vision solutions empower businesses to extract meaningful information from visual data. From object detection and image classification to video analytics and augmented reality applications, we deliver custom-built solutions to address diverse business needs.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/vision.svg`,
  },
  {
    heading: "AI-powered Automation",
    description:
      "We help businesses streamline operations and enhance efficiency through AI-powered automation solutions. From intelligent process automation to predictive maintenance and anomaly detection, Saraca enables organizations to optimize workflows and drive cost savings.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/powerd.svg`,
  },
  {
    heading: "Machine Learning Engineering",
    description:
      "Saraca offers end-to-end Machine Learning engineering services, including data preprocessing, model development, training, and deployment. Our expertise in advanced algorithms and frameworks enables us to deliver scalable and high-performance ML solutions that drive business outcomes.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/ml.svg`,
  },
  {
    heading: "AI Solution Design and Development",
    description:
      "From ideation to deployment, we specialize in designing and developing AI solutions tailored to your business objectives. Our agile methodologies ensure rapid iteration and deployment of AI-powered applications that deliver tangible results.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/Design.svg`,
  },
  {
    heading: "AI Infrastructure and Optimization",
    description:
      "Future-proof your AI infrastructure with Saraca's AI infrastructure and optimization services. We help businesses architect scalable, high-performance AI systems while optimizing costs and resource utilization for maximum efficiency.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/AI/opti.svg`,
  },
];

const TrendingTechnologiesCards = (data: TrendingTechnologiesObject) => {
  return (
    <div className="w-48 group">
      <div className="h-48 w-48 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img
          src={data.imageSrc}
          className=" w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h6 className="text-md text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.heading}
      </h6>
    </div>
  );
};

const DiscoverMoreCardsData = [
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#",
  },
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#",
  },
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#",
  },
];

const Industry = () => {
  const cardsRefs = Array.from({ length: ServiceOfferings.length }, () =>
    useRef(null)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("blur-sm");
          } else {
            entry.target.classList.remove("opacity-100");
            entry.target.classList.add("blur-sm");
          }
        });
      },
      {
        root: null, // use the viewport as the root
        rootMargin: "0px 0px -100px 0px", // adjust the bottom margin
        threshold: 0.5, // optional threshold value
      }
    );

    // Observe each element in the array of refs
    cardsRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Highlights Saraca's expertise in AI engineering solutions, appealing
          to businesses seeking to leverage AI for digital transformation
        </title>
        <meta
          property="og:title"
          content="Highlights Saraca's expertise in AI engineering solutions, appealing to businesses seeking to leverage AI for digital transformation"
        />
        <meta
          name="description"
          content="Provides an overview of Saraca's services in AI engineering, emphasizing capabilities in strategy consulting, product development, NLP, computer vision, and automation."
        />
        <meta
          name="keywords"
          content="AI, edge AI, federated learning, GANs, and reinforcement learning, targeting organizations interested in implementing advanced AI solutions"
        />
        <meta
          property="og:description"
          content="Provides an overview of Saraca's services in AI engineering, emphasizing capabilities in strategy consulting, product development, NLP, computer vision, and automation."
        />
        <meta
          property="og:keywords"
          content="AI, edge AI, federated learning, GANs, and reinforcement learning, targeting organizations interested in implementing advanced AI solutions"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className="w-full aspect-video relative">
        <div
          aria-label="overlay-container"
          className=" from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                Artifical Intelligence
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Unleashing the Power of AI for Digital Transformation
              </p>
            </div>
          </div>
        </div>

        <video
          className="h-full w-full object-cover"
          autoPlay={true}
          loop
          playsInline
          muted
        >
          <source
            src={`${
              import.meta.env.VITE_REACT_APP_API_URL
            }/Services/Digital/AI/landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Artifical Intelligence
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            At Saraca, we recognize the profound impact of AI engineering in
            shaping the digital landscape and driving transformative change. In
            today's digital ecosystem, AI serves as a catalyst for innovation,
            enabling businesses to automate processes, gain actionable insights,
            and deliver personalized experiences at scale. AI engineering
            ensures the reliability, efficiency, and intelligence of digital
            solutions, empowering organizations to stay competitive in a rapidly
            evolving market.{" "}
          </p>
        </div>
      </div>

      <div
        aria-label="trending-technologies-section"
        className={`min-h-[30vh] w-full bg-cyan-950 py-24 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/trending-technologies-pattern.svg')] bg-cover`}
      >
        <h1 className="text-white text-5xl font-semibold text-center">
          Trending Technologies
        </h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto">
          {TrendingTechnologiesData.map((data: TrendingTechnologiesObject) =>
            TrendingTechnologiesCards(data)
          )}
        </div>
      </div>

      <div aria-label="Our Service Offerings" className="py-24">
        <h1 className="text-5xl md:text-5xl font-semibold text-black text-center">
          Our Service Offerings
        </h1>
        <div className="mt-24">
          <div className="w-1/2 border-r-[3px] border-gray-300">
            <div className="w-[100vw]">
              <div className="flex flex-col gap-12 relative z-1">
                {cardsRefs.map(
                  (ref: React.RefObject<HTMLDivElement>, index: number) => (
                    <ServiceOfferingsCards
                      key={index}
                      ref={ref}
                      cardsData={ServiceOfferings[index]}
                      contentPosition={index % 2 === 0 ? "left" : "right"}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
                <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
                <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
                    {DiscoverMoreCardsData.map((data: DiscoverMoreCardsData, index: number) => {
                        return (
                            <DiscoverMoreCards key={index} imageSrc={data.imageSrc} link={data.link} />
                        )
                    })}
                </div>
            </div> */}
    </div>
  );
};

export default Industry;
