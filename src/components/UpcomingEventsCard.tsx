import { FC } from "react";

interface UpcomingEventsProps {
  eventData: any;
}

const UpcomingEventsCard: FC<UpcomingEventsProps> = ({ eventData }) => {

  return (
    <div className={`flex pl-40 pr-40 lg:h-[70vh] sm:flex-col lg:flex-row sm:min-h-24 lg:items-center sm:items-center` }>
      <div className={`flex h-[80%] w-[50%] items-center sm:w-[90%]` }>
        <img className="w-full aspect-video" src={`${import.meta.env.VITE_REACT_APP_API_URL}${eventData.images[0]}`} />
      </div>
      <div className={`flex flex-col h-[80%] w-[50%] p-10 sm:pt-10 sm:w-[90%] ` }>
        <p className='text-5xl font-semibold pb-20'>
            {eventData.name}
        </p>
        <p className='text-3xl font-semibold tracking-wide'>
          {new Date(eventData.from_date).toLocaleString('en-IN', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'Asia/Kolkata', // Setting the timezone to IST
          })} 
          {eventData.to_date ? ` - ${new Date(eventData.to_date).toLocaleString('en-IN', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'Asia/Kolkata',
          })}` : ''}
        </p>

        <p className='text-2xl font-semibold tracking-wide mt-4'>
          {eventData.location}
        </p>
        <p className='pt-10 text-2xl mt-4 text-gray-500 font-semibold tracking-wide'>{eventData.description}</p>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
