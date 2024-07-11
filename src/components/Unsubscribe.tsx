import { postApi } from '@/api/adminApi';
import { useState } from 'react';
import { toast } from 'sonner';

const UnsubscribePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let hasError = false;
    let errors:{
      name:string,
      email:string,
      phone:string
    } = {
      name: '',
      email: '',
      phone: ''
    };
  
    if (!formData.name.trim().length) {
      errors.name = "Please enter your name";
      hasError = true;
    } else {
      errors.name = "";
    }
  
    if (!formData.email.trim().length) {
      errors.email = "Please enter your email";
      hasError = true;
    } else {
      errors.email = "";
    }
  
    if (!formData.phone.trim().length) {
      errors.phone = "Please enter your phone no.";
      hasError = true;
    } else {
      errors.phone = "";
    }
  
    setError(errors);
  
    if (!hasError) {
      try {
        const res = await postApi(`api/unsubscribe`, formData);
        if (res.status === 200) {
          toast.success(res.data.message);
          setFormData({
            name: "",
            email: "",
            phone: ""
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <div className='w-full min-h-screen flex items-center bg-cover justify-center' 
    style={{ backgroundImage:`url('${import.meta.env.VITE_REACT_APP_API_URL}/unsubscribe.jpg')`}}
    >
      <div className="my-10 p-6 bg-gray-600 bg-opacity-60 rounded-lg  mt-32 flex flex-col w-[40rem] backdrop-blur-md shadow-sm shadow-gray-200 relative">
        <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/mailicon.png`} alt=""  className='w-36 aspect-auto -top-12 absolute -left-12 -rotate-12'/>
      <h2 className="font-semibold text-center mb-6 text-4xl text-white">Do you want to unsubscribe?</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 text-2xl border-none outline-none rounded-lg"
            
          />
          <p className=' text-red-500'>{error.name}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-2xl border-none outline-none rounded-lg"
            
          />
          <p className=' text-red-500'>{error.email}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-white mb-2 font-semibold">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 text-2xl border-none outline-none rounded-lg"
            
          />
          <p className=' text-red-500'>{error.phone}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-[#43ACE2] text-white rounded-lg hover:bg-sky-700 text-2xl p-4 mt-2"
        >
          Unsubscribe
        </button>
        <p className='text-red-500 font-semibold text-xl mt-2'>By Providing your phone number, you agree to receive a text message from Saraca Solutions. Message and Data rates may apply, Message frequncey varies.</p>
      </form>
    </div>
    </div>
    
  );
};

export default UnsubscribePage;
