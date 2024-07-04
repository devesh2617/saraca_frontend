import { getApi } from "@/api/adminApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    useEffect(() => {
        getApi('check_user').then(res => {
          if (!res?.data?.valid || location.pathname.split("/")[2] !== res?.data?.role && res?.data?.role !== "superuser") return navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/login`)
        }).catch(()=>navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/login`))
      }, [])
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">SARACA TA Admin</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => document.getElementById("navlinks")?.classList.toggle('hidden')} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
                </button>
            </div>
            <div id="navlinks" className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:flex-grow">
                    <a href={`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/dashboard`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                        Dashboard
                    </a>
                    <a href={`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/regions`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                        Regions
                    </a>
                    <a href={`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/positions`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                        Positions
                    </a>   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;