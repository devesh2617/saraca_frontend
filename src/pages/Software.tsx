import {Helmet} from "react-helmet"
import DiscoverMoreCards from '../components/DiscoverMoreCards';

type DiscoverMoreCardsData = {
  imageSrc: string,
  link: string
}

type ServiceOfferings = {
  imageSrc: string,
  link: string,
  title: string
}

const ServiceOfferings = [
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Application Development.png`,
  title: "Application Development",
  link: "/Service/Software/ApplicationDevelopment"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Software testing.png`,
  title: "Software Testing",
  link: "/Service/Software/SoftwareTesting"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud.png`,
  title: "Cloud",
  link: "/Service/Software/Cloud"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM .png`,
  title: "PLM",
  link: "/Service/Software/PLM"
},
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Artificial Intelligence.png`,
//   title: "Artificial Intelligence",
//   link: ""
// }
]

const DiscoverMoreCardsData = [{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
}]

const serviceOfferingCards = (data: ServiceOfferings) => {
  return (
    <a href={data.link}>
       <div className='bg-white w-[16rem] rounded-xl overflow-hidden'>
          <img src={data.imageSrc} className='w-full object-cover min-h-52'/>
          <h1 className=' font-bold text-center text-2xl py-4'>
            {data.title}
          </h1>
         </div>
    </a>
   
  )
}

const Industry = () => {
  return (
    <div>
      <Helmet>
        <title>Saraca Solutions: Innovating Software Engineering for Seamless Business Solutions</title>
        <meta
          property="og:title"
          content="Saraca Solutions: Innovating Software Engineering for Seamless Business Solutions"
        />
        <meta
          name="description"
          content="Description	Discover Saraca Solutions, a leader in Software Engineering innovations. Our expert team delivers bespoke software solutions including custom application development, quality assurance, cloud applications, and PLM integration. Partner with us for scalable, secure, and reliable digital transformations that drive business growth and enhance customer satisfaction."
        />
        <meta
          name="keywords"
          content="custom application development, software testing services, cloud application development, PLM integration, digital transformation solutions, bespoke software solutions, Saraca Solutions, software engineering innovations"
        />
        <meta
          property="og:description"
          content="Description	Discover Saraca Solutions, a leader in Software Engineering innovations. Our expert team delivers bespoke software solutions including custom application development, quality assurance, cloud applications, and PLM integration. Partner with us for scalable, secure, and reliable digital transformations that drive business growth and enhance customer satisfaction."
        />
        <meta
          property="og:keywords"
          content="custom application development, software testing services, cloud application development, PLM integration, digital transformation solutions, bespoke software solutions, Saraca Solutions, software engineering innovations"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className="w-full aspect-video relative">
                <div
                    aria-label="overlay-container"
                    className= " bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                Software
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Next-Gen Software Engineering Solutions: Transformative, Scalable, Secure 
                            </p>

                        </div>
                    </div>
                </div>

                <video  
                  
                  className="h-full w-full object-fill"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Landing.mp4`} type="video/mp4" />
                </video>  

            </div>
      <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center pb-24'>
                    Software Engineering
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                    In the digital era, software has become the backbone of modern businesses, enabling automation, connectivity, and seamless user experiences. Software Engineering ensures the reliability, scalability, and security of digital solutions, facilitating efficient operations, accelerated growth, and enhanced customer satisfaction.
                    <br />
                    <br />
                    At Saraca, we are committed to pioneering significant innovations in the Software Engineering domain. Our team of experts leverages cutting-edge technologies and industry best practices to deliver transformative solutions that drive value and competitiveness for our clients.

                    </p>
                </div>
                <div>
                    <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
                        What We Serve
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                        <strong>Custom Application Development:</strong> Saraca Solutions offers tailored application development services to meet the unique needs of businesses. Whether it's a web-based application, mobile app, or enterprise software solution, our team of experienced developers can create custom applications from scratch.
                        <br />
                        <br />
                        <strong>Quality Assurance and Software Testing:</strong> Ensure the reliability and performance of your software applications with Saraca's comprehensive quality assurance and testing services. We employ industry-leading testing frameworks and methodologies to identify and mitigate defects, ensuring flawless user experiences.
                        <br />
                        <br />
                        <strong>Cloud Application Development:</strong> Saraca Solutions specializes in developing cloud-native applications that leverage the scalability, reliability, and flexibility of cloud computing platforms such as AWS, Azure, and Google Cloud. We help businesses harness the power of the cloud to reduce infrastructure costs, improve agility, and accelerate time-to-market for their applications.
                        <br />
                        <br />
                        <strong>Product Lifecycle Management (PLM) Integration:</strong> Saraca Solutions offers PLM integration services to streamline product development processes, from ideation to retirement. We help businesses integrate PLM systems with other enterprise applications such as ERP, CRM, and CAD/CAM systems to ensure seamless data flow and collaboration across departments.
 
                    </p>
                </div>

            </div>

      <div aria-label='our-service-offerings' className='w-full py-24 bg-cyan-600'>
        <div>
        <h1 className='text-6xl font-semibold text-center text-white'>
          Our Service Offerings 
        </h1>
        <div className=' mt-24 w-full flex justify-evenly flex-wrap gap-8'>
         {ServiceOfferings.map((data:ServiceOfferings)=>serviceOfferingCards(data))}
        </div>
        </div>
      </div>

      {/* <div aria-label='our-approach' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Our Approach
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        At SARACA, we believe in a collaborative approach, working closely with our clients to understand their unique needs, challenges, and aspirations. Through transparent communication, meticulous planning, and agile methodologies, we ensure timely delivery of solutions that exceed expectations and drive tangible results.         </p>
        </div>
      </div> */}

      
      
      {/* <div aria-label="discover more section" className={`w-full bg-cyan-700 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')]`}>
        <h1 className="text-white text-6xl text-center font-semibold pb-24">Discover More</h1>
        <div className="w-full flex justify-evenly flex-wrap gap-8">
          {DiscoverMoreCardsData.map((data: DiscoverMoreCardsData, index: number) => {
            return (
              <DiscoverMoreCards key={index} imageSrc={data.imageSrc} link={data.link} />
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Industry