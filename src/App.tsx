import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CookieConsent from "react-cookie-consent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AdminLogin from "./pages/AdminLogin";
import MedicalDevices from "./pages/SubIndustries/Medical";
import Footer from "./components/Footer";
import Industries from "./pages/LifeSciences";
import AerospaceDefence from "./pages/Aerospace&Defence";
import Automotive from "./pages/Automotive";
import Semiconductor from "./pages/Semiconductor";
import RailTransportation from "./pages/RailTransportation";
import Consumer from "./pages/Consumer";
// import Industrial from "./pages/Industrial";
import Digital from "./pages/Digital";
import Mechanical from "./pages/Mechanical";
import Embedded from "./pages/Embedded";
import Software from "./pages/Software";
import System from "./pages/System";
import Manufacturing from "./pages/Manufacturing";
import TechPub from "./pages/Techpub";
import Cybersecurity from "./pages/Subservices/CyberSecurity"
import { useEffect } from "react";
import Aerospace from "./pages/SubIndustries/Aerospace";
import Defense from "./pages/SubIndustries/Defence";
import Space from "./pages/SubIndustries/Space";
import AboutUs from "./pages/AboutUs";
import OffHighwayVehicle from "./pages/SubIndustries/OffHighwayVehicles";
import ElectricVehicle from "./pages/SubIndustries/ElectricVehicles";
import TruckBuses from "./pages/SubIndustries/TrucksandBuses";
import PassengerCar from "./pages/SubIndustries/PassengerCar";
import Pharmaceuticals from "./pages/SubIndustries/Pharmaceuticals";
import DesignDevelopment from "./pages/SubIndustries/DesignDevelopment";
// import VerificationValidation from "./pages/SubIndustries/VerificationValidation";
import PhysicalDesign from "./pages/SubIndustries/PhysicalDesign";
import DFT from "./pages/SubIndustries/DFT";
import Appliances from "./pages/SubIndustries/Appliances";
// import SmartHomes from "./pages/SubIndustries/SmartHomes";
import OilGas from "./pages/SubIndustries/OilGas";
// import Infrastructure from "./pages/SubIndustries/Infrastructure";
// import Renewables from "./pages/SubIndustries/Renewables";
import RollingStocks from "./pages/SubIndustries/RollingStocks";
import Signalling from "./pages/SubIndustries/Signalling";
import Client_Testimonials from "./pages/Client_Testimonials";
import CaseStudies from "./pages/CaseStudies";
import AI from "./pages/Subservices/AI";
import IOT from "./pages/Subservices/IOT";
import Sustainability from "./pages/Subservices/Sustainability";
import Industry4 from "./pages/Subservices/Industry4";
import DNDMechanical from "./pages/Subservices/DesignDevelopment";
import CAD from "./pages/Subservices/CAD";
// import CAxAutomation from "./pages/Subservices/CAxAutomation";
import Hardware from "./pages/Subservices/Hardware";
import Firmware from "./pages/Subservices/Firmware";
import VNVEmbedded from "./pages/Subservices/VerificationValidation";
import ApplicationDevelopment from "./pages/Subservices/ApplicationDevelopment";
import SoftwareTesting from "./pages/Subservices/SoftwareTesting";
import Cloud from "./pages/Subservices/Cloud";
import PLM from "./pages/Subservices/PLM";
import MBD from "./pages/Subservices/MBD";
import SystemTesting from "./pages/Subservices/SystemTesting";
import MachiningStrategy from "./pages/Subservices/MachiningStrategy";
import SupplyChainManagement from "./pages/Subservices/SupplyChainManagement";
import ProcessEngineering from "./pages/Subservices/ProcessEngineering";
// import ProjectManagement from "./pages/Subservices/ProjectManagement";
// import ManufacturingTransfer from "./pages/Subservices/ManufacturingTransfer";
// import ARVR from "./pages/Subservices/ARVR";
// import CBT from "./pages/Subservices/CBT";
// import Authoring from "./pages/Subservices/Authoring";
import X1Platform from "./pages/X1Platform";
import FastPMCF from "./pages/FastPMCF"
import { Toaster } from "sonner";
import Careers from "./pages/Careers";
import TAadminDashboard from "./pages/TAadminDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ApplicationForm from "./pages/ApplicationForm";
import AdminNews from "./pages/AdminNews";
import AdminWebinar from "./pages/AdminWebinar";
import AdminBlog from "./pages/AdminBlog";
import AdminWhitePapers from "./pages/AdminWhitePapers";
import AdminCaseStudy from "./pages/AdminCaseStudies";
import TAadminRegions from "./pages/TAadminRegions";
import TAadminPositions from "./pages/TAadminPositions";
import AdminEditWhitePaper from "./pages/AdminEditWhitePaper";
import AdminEditCaseStudy from "./pages/AdminEditCaseStudy";
import AdminEditBlog from "./pages/AdminEditBlog";
import AdminEditNews from "./pages/AdminEditNews";
import AdminEditWebinar from "./pages/AdminEditWebinar";
import Position from "./pages/Position"
import TAadminEditPosition from "./pages/TAadminEditPosition";
import TAadminEditRegion from "./pages/TAadminEditRegion";
import PositionCards from "./pages/Positions";
import ContactUs from "./pages/ContactUs";
import WhitePapers from "./pages/WhitePapers";
import VerifyEmail from "./pages/VerifyEmail";
import Webinars from "./pages/Webinars";
import Blogs from "./pages/Blogs";
import Certificates from "./pages/Certificates";
import News from "./pages/News";
import Blog from "./pages/Blog";
import CaseStudy from "./pages/CaseStudy";
import WhitePaper from "./pages/WhitePaper";
import SearchPage from "./pages/SearchPage";
import EFlexPine from "./pages/EFlexSpine"
import HealthcareApplications from "./pages/SubIndustries/HealthcareApplications"
import Error404 from "./pages/Error404";
import UnsubscribePage from "./components/Unsubscribe";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Memberships from "./pages/Memberships";
import TechPubAds from "./pages/TechpubAds"
import Awards from "./pages/Awards";
import PMCFAds from "./pages/PMCFAds";
import Invitro from "./pages/InVitroDiagnostics";
import PastEvents from "./pages/PastEvents";


function App() {


  const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path='/TAadmin/dashboard' element={<TAadminDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/webinars" element={<AdminWebinar />} />
        <Route path="/admin/blogs" element={<AdminBlog />} />
        <Route path="/admin/white_papers" element={<AdminWhitePapers />} />
        <Route path="/admin/edit_white_paper/:id" element={<AdminEditWhitePaper />} />
        <Route path="/admin/edit_case_study/:id" element={<AdminEditCaseStudy />} />
        <Route path="/admin/edit_blog/:id" element={<AdminEditBlog />} />
        <Route path="/admin/edit_news/:id" element={<AdminEditNews />} />
        <Route path="/admin/edit_webinar/:id" element={<AdminEditWebinar />} />
        <Route path="/admin/case_studies" element={<AdminCaseStudy />} />
        <Route path="/TAadmin/regions" element={<TAadminRegions />} />
        <Route path="/TAadmin/positions" element={<TAadminPositions />} />
        <Route path="/TAadmin/edit_position/:id" element={<TAadminEditPosition />} />
        <Route path="/TAadmin/edit_region/:id" element={<TAadminEditRegion />} />
      </Routes>
    )
  }
  const Layout = ({ children }) => {
    const location = useLocation()

    return (
      <div className={`relative overflow-x-hidden bg-background bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/background.svg')] bg-repeat w-full overflow-y-auto min-h-[100vh] flex flex-col`}
        style={{ backgroundImage: `url('${import.meta.env.VITE_REACT_APP_API_URL}/background.svg')` }}
      >
        {location.pathname.split("/")[1] !== "activate" ? <Navbar /> : ""}
        {children}
        {location.pathname.split("/")[1] !== "activate" ? <Footer /> : ""}
        {location.pathname.split("/")[1] !== "activate" ? (
          <a href="/Contact_Us">
            {location.pathname.split("/")[1] !== "Contact_Us" ? (<button className="fixed z-10 bg-red-400 px-8 rounded-full py-4 pr-12 text-white text-2xl font-semibold bottom-[0.5rem] left-[0.5rem] hover:bg-red-600 duration-500">
              <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "2rem" }} />
              <span id="contact_us_button" className="ml-4">Contact</span>
            </button>) : ""}
          </a>
        ) : ""}
        <CookieConsent style={{backgroundColor:"black", padding:"1rem 0"}} buttonText="Accept Cookies" buttonStyle={{backgroundColor:"white", fontSize:"1.5rem"}}>
          <p className=" text-white text-2xl">
            We use cookies to improve your experience on our site. By continuing to use our site, you accept our use of cookies.
          </p>
        </CookieConsent>
      </div>
    );
  }


  useEffect(() => {

  }, [])
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" />
      <Routes>
        <Route path={`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/*`} element={<AdminRoutes />}
        />
        <Route path="/*" element={<Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Industry/LifeSciences" element={<Industries />} />
            <Route path="/Industry/Automotive" element={<Automotive />} />
            <Route path="/Industry/Aerospace_Defense" element={<AerospaceDefence />} />
            <Route path="/Industry/Aerospace_Defense/Aerospace" element={<Aerospace />} />
            <Route path="/Industry/Aerospace_Defense/Defense" element={<Defense />} />
            <Route path="/Industry/Aerospace_Defense/Space" element={<Space />} />
            <Route path="/Industry/Automotive/ElectricVehicles" element={<ElectricVehicle />} />
            <Route path="/Industry/Automotive/PassengerCar" element={<PassengerCar />} />
            <Route path="/Industry/Automotive/TruckandBuses" element={<TruckBuses />} />
            <Route path="/Industry/Automotive/OffHighwayVehicles" element={<OffHighwayVehicle />} />
            <Route path="/Industry/Semiconductor" element={<Semiconductor />} />
            <Route path="/Industry/Semiconductor/ASIC_FPGA_Design_Development" element={<DesignDevelopment />} />
            {/* <Route path="/Industry/Semiconductor/Verification_Validation" element={<VerificationValidation />} /> */}
            <Route path="/Industry/Semiconductor/PhysicalDesign" element={<PhysicalDesign />} />
            <Route path="/Industry/Semiconductor/DFT" element={<DFT />} />
            <Route path="/Industry/RailTransportation" element={<RailTransportation />} />
            <Route path="/Industry/RailTransportation/RollingStocks" element={<RollingStocks />} />
            <Route path="/Industry/RailTransportation/Signalling" element={<Signalling />} />
            <Route path="/Industry/Consumer" element={<Consumer />} />
            <Route path="/Industry/Consumer/Appliances" element={<Appliances />} />
            {/* <Route path="/Industry/Consumer/SmartHomes" element={<SmartHomes />} /> */}
            {/* <Route path="/Industry/Industrial" element={<Industrial />} /> */}
            <Route path="/Industry/Industrial/Oil_Gas" element={<OilGas />} />
            {/* <Route path="/Industry/Industrial/Infrastructure" element={<Infrastructure />} /> */}
            {/* <Route path="/Industry/Industrial/Renewables" element={<Renewables />} /> */}
            <Route path="/Industry/LifeSciences/MedicalDevices" element={<MedicalDevices />} />
            <Route path="/Industry/LifeSciences/Pharmaceuticals" element={<Pharmaceuticals />} />
            <Route path="/Industry/LifeSciences/HealthcareApplications" element={<HealthcareApplications />} />
            <Route path="/Service/Digital" element={<Digital />} />
            <Route path="/Service/Digital/Cybersecurity" element={<Cybersecurity />} />
            <Route path="/Service/Digital/IOT" element={<IOT />} />
            <Route path="/Service/Digital/Sustainability" element={<Sustainability />} />
            <Route path="/Service/Digital/Industry4.0" element={<Industry4 />} />
            <Route path="/Service/Digital/ArtificialIntelligence" element={<AI />} />
            <Route path="/Service/Mechanical" element={<Mechanical />} />
            <Route path="/Service/Mechanical/Design_Development" element={<DNDMechanical />} />
            <Route path="/Service/Mechanical/CAD_CAM" element={<CAD />} />
            {/* <Route path="/Service/Mechanical/CAxAutomation" element={<CAxAutomation />} /> */}
            <Route path="/Service/Embedded" element={<Embedded />} />
            <Route path="/Service/Embedded/Hardware" element={<Hardware />} />
            <Route path="/Service/Embedded/Firmware" element={<Firmware />} />
            <Route path="/Service/Embedded/Verification_Validation" element={<VNVEmbedded />} />
            <Route path="/Service/Software" element={<Software />} />
            <Route path="/Service/Software/ApplicationDevelopment" element={<ApplicationDevelopment />} />
            <Route path="/Service/Software/SoftwareTesting" element={<SoftwareTesting />} />
            <Route path="/Service/Software/Cloud" element={<Cloud />} />
            <Route path="/Service/Software/PLM" element={<PLM />} />
            <Route path="/Service/System" element={<System />} />
            <Route path="/Service/System/MBD" element={<MBD />} />
            <Route path="/Service/System/SystemTesting" element={<SystemTesting />} />
            <Route path="/Service/Manufacturing" element={<Manufacturing />} />
            <Route path="/Service/Manufacturing/MachiningStrategy" element={<MachiningStrategy />} />
            <Route path="/Service/Manufacturing/SupplyChainManagement" element={<SupplyChainManagement />} />
            <Route path="/Service/Manufacturing/ProcessEngineering" element={<ProcessEngineering />} />
            {/* <Route path="/Service/Manufacturing/ProjectManagement" element={<ProjectManagement />} />
            <Route path="/Service/Manufacturing/ManufacturingTransfer" element={<ManufacturingTransfer />} /> */}
            <Route path="/Service/TechPub" element={<TechPub />} />
            {/* <Route path="/Service/TechPub/ARVRMR" element={<ARVR />} />
            <Route path="/Service/TechPub/CBTWBT" element={<CBT />} />
            <Route path="/Service/TechPub/Authoring" element={<Authoring />} /> */}
            <Route path="/About_Us" element={<AboutUs />} />
            <Route path="/Success_Stories/Client_Testimonials" element={<Client_Testimonials />} />
            <Route path="/Success_Stories/Case_Studies" element={<CaseStudies />} />
            <Route path="/Success_Stories/Memberships" element={<Memberships />} />
            <Route path="/Success_Stories/Awards" element={<Awards/>}/>
            {/*<Route path="/Success_Stories/Events/Expo/Summit" element={<Events_Expo_Summit/>}/>*/}
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Careers/ApplicationForm/:positionId" element={<ApplicationForm />} />
            <Route path="/Careers/Positions/:region_name" element={<PositionCards />} />
            <Route path="/Careers/Position/:positionId" element={<Position />} />
            <Route path="/Contact_Us" element={<ContactUs />} />
            <Route path="/Insights/White_Papers" element={<WhitePapers />} />
            <Route path="/Insights/Webinars" element={<Webinars />} />
            <Route path="/Insights/Blogs" element={<Blogs />} />
            <Route path="/Insights/Certificates" element={<Certificates />} />
            <Route path="/Blog/:id" element={<Blog />} />
            <Route path="/White_Paper/:id" element={<WhitePaper />} />
            <Route path="/Insights/News" element={<News />} />
            <Route path="/Insights/Certificates" element={<Certificates />} />
            <Route path="/Case_Study/:id" element={<CaseStudy />} />
            <Route path="/activate/:id" element={<VerifyEmail />} />
            <Route path="/Innovation/X1_Platform" element={<X1Platform />} />
            <Route path="/Innovation/FastPMCF" element={<FastPMCF />} />
            <Route path="/Innovation/eFleXpine" element={<EFlexPine />} />
            <Route path="/Search" element={<SearchPage />} />
            <Route path="/Unsubscribe" element={<UnsubscribePage/>}/>
            <Route path="/Privacy_Policy" element={<PrivacyPolicy/>}/>
            <Route path="/technical-publication-services" element={<TechPubAds/>}/>
            <Route path="/in-vitro-diagnostics" element={<Invitro/>}/>     
            <Route path="/post-market-clinical-followup" element={<PMCFAds/>}/>  
            <Route path="/events" element={<PastEvents />}/>  
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
