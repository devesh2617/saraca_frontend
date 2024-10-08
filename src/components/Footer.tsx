import { Mails, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [screenSize, setScreenSize] = useState("lg");
  const location = useLocation();
  const addresses = [
    {
      "New Delhi, India:":
        "A-18, Bhabha Marg, Sector 59 Noida, Uttar Pradesh, 201301",
    },
    {
      "Bengaluru, India:":
        "78/9, 1ft floor, Vaishnavi Signature, Outer Ring Road, Ballandur Village, Varthur Hobli, Bengaluru Urban, Bengaluru, Karnataka, 560103",
    },
    {
      "Pune, India:":
        "Sr No 133(P), CTS No 4944, Magarpatta Road, Kirtane Baugh, Magarpatta, Hadapsar, Pune, Maharashtra 411013",
    },
    {
      "South Carolina, USA:": "PO Box 61, Fair Play, South Carolina, 29643",
    },
    {
      "Boston, USA:":
        "33 Lyman St, Suite 205, Unit 9, Westborough , Massachusetts, 01581",
    },
  ];
  const industryLinks = [
    {
      name: "Life Sciences",
      link: "/Industry/LifeSciences",
    },
    {
      name: "Aerospace and Defense",
      link: "/Industry/Aerospace&Defense",
    },
    {
      name: "Automotive",
      link: "/Industry/Automotive",
    },
    {
      name: "Semiconductors",
      link: "/Industry/Semiconductor",
    },
    // {
    //   name: "Industrial",
    //   link: "/Industry/Industrial",
    // },
    {
      name: "Rail Transportation",
      link: "/Industry/RailTransportation",
    },
    {
      name: "Consumer",
      link: "/Industry/Consumer",
    },
  ];
  const serviceLinks = [
    {
      name: "Digital",
      link: "/Service/Digital",
    },
    {
      name: "Mechanical",
      link: "/Service/Mechanical",
    },
    {
      name: "Embedded",
      link: "/Service/Embedded",
    },
    {
      name: "Software",
      link: "/Service/Software",
    },
    {
      name: "System",
      link: "/Service/System",
    },
    {
      name: "Manufacturing",
      link: "/Service/Manufacturing",
    },
    // {
    //   name:"TechPub",
    //   link:"/Service/TechPub"
    // },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setScreenSize("sm");
      } else setScreenSize("lg");
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return location.pathname.split("/")[1] === "Innovation" &&
    screenSize === "lg" ? (
    ""
  ) : (
    <div aria-label="footer" className="mt-auto">
      <div
        aria-label="regular-footer"
        className={`max-w-full text-sky-200 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/footer.webp')] bg-cover mx-auto flex flex-col lg:flex-row leading-relaxed bg-black`}
        style={{
          backgroundImage: `url('${
            import.meta.env.VITE_REACT_APP_API_URL
          }/footer.jpg')`,
        }}
      >
        <div className="flex-1 text-center p-8 ">
          <h1 className="text-5xl text-blue-400">About Us</h1>
          <p className="text-lg text-left pt-10 pl-10 pr-10">
            SARACA is a rapidly growing product engineering services company
            with deep expertise in digital, artificial intelligence, and
            emerging new technologies. Founded in 2014, SARACA is powered by Gen
            Z and Millennials with greater focus on agility, customer
            centricity, faster technology adoption, and adherence to cultural
            sensitivity. Our digital natives perform their actions with speed
            and ensure that we exceed customer expectation every single time.
            SARACA adopted vertically integrated approach to build depth in the
            industries we operate in. Over the years we have built strong
            expertise in aerospace, defense, space, automotive, medical devices,
            Industrial, Farm Equipment, rail transportation, technology,
            semiconductor, and many other industries
          </p>
        </div>
        <div className="text-center flex-1 p-8">
          <h1 className="text-5xl text-blue-400">Get In Touch</h1>
          <div className="text-md text-left pt-10 pl-10 pr-10 flex flex-col gap-2">
            {addresses.map((address: object) => {
              return (
                <div>
                  <span className="font-bold text-lg italic">
                    {Object.keys(address)[0]}
                  </span>
                  <span className="ml-2">{Object.values(address)[0]}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 text-center p-8">
          <h1 className="text-5xl text-blue-400">Quick Links</h1>
          <div className="flex gap-6 text-left">
            <section className="flex-1 flex flex-col gap-2 text-lg pt-10 pl-10 pr-10">
              <h1 className="text-3xl text-blue-400">Industries</h1>
              {industryLinks?.map((data, index) => {
                return (
                  <a
                    key={index}
                    href={data?.link}
                    className="underline hover:text-red-400"
                  >
                    {data.name}
                  </a>
                );
              })}
            </section>
            <section className="flex-1 flex flex-col gap-2 text-lg p-8">
              <h1 className="text-3xl text-blue-400">Services</h1>
              {serviceLinks?.map((data, index) => {
                return (
                  <a
                    key={index}
                    href={data?.link}
                    className="underline hover:text-red-400"
                  >
                    {data.name}
                  </a>
                );
              })}
            </section>
          </div>
        </div>
      </div>
      <div
        aria-label="privacy-notice"
        className="bg-black min-h-36 text-white flex items-center"
      >
        <div className="container flex items-center justify-between flex-col md:flex-row gap-8 p-8">
          <img
            src={`${import.meta.env.VITE_REACT_APP_API_URL}/saraca-logo.svg`}
            alt=""
            className="h-12 object-contain"
          />
          <div>
            <p className="text-lg">
              &copy;2024 Saraca Solutions Private Limited
            </p>
            <div className="flex flex-row gap-x-4 underline mt-1 text-xl">
              <a
                href={`/Privacy_Policy`}
                className="underline hover:text-red-400"
              >
                Privacy Policy
              </a>
              <a href="/Unsubscribe" className="underline hover:text-red-400">
                Unsubscribe
              </a>
              <a href="/Contact_Us" className="underline hover:text-red-400">
                Contact Us
              </a>
            </div>
          </div>
          <div aria-label="links" className="flex gap-12 text-4xl px-8">
            <a
              href="https://www.linkedin.com/company/saraca-solutions/mycompany/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.instagram.com/saraca_solutions_/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram cursor-pointer hover:text-blue-400"></i>
            </a>
            <a href="https://www.facebook.com/saracasolutions" target="_blank">
              <i className="fa-brands fa-facebook-f cursor-pointer hover:text-blue-400"></i>
            </a>
            <a href="https://x.com/saracasolutions" target="_blank">
              <i className="fa-brands fa-x-twitter cursor-pointer hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.youtube.com/@saracasolutions8564"
              target="_blank"
            >
              <i className="fa-brands fa-youtube cursor-pointer hover:text-blue-400"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
