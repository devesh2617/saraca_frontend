import { useState, useEffect } from "react";
import { getApi } from "@/api/adminApi";
import EventCard from "../components/EventCard";

const Events = () => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        getApi('api/get_events')
            .then(res => setEventsData(res?.data?.events))
            .catch(e => console.log(e));
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center my-8">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventsData.map((event) => (
                    <EventCard key={event.id} data={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
