import { FC } from "react";

interface UpcomingEventsProps {
  eventData: any;
}

const UpcomingEventsCard: FC<UpcomingEventsProps> = ({ eventData }) => {

  return (
    <div className={`flex flex-col md:flex-row min-h-24 items-start` }>
      <div className={`flex flex-1 md:w-full items-center` }>
        <img className="object-cover w-full aspect-video" src={`${import.meta.env.VITE_REACT_APP_API_URL}${eventData.images[0]}`} />
      </div>
      <div className={`flex flex-col gap-4 md:gap-8 flex-1 md:pl-10 pt-4 justify-start` }>
        <p className='text-5xl font-bold'>
            {eventData.name}
        </p>
        <p className='text-4xl tracking-wide'>
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

        <p className='text-3xl font-semibold tracking-wide ml-auto'>
          {eventData.location}
        </p>
        <p className='text-3xl text-gray-500 font-semibold tracking-wide'>{eventData.description}</p>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
