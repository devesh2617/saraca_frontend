import { getApi } from "@/api/adminApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getApi(`api/get_event/${id}`)
            .then(res => setEvent(res?.data?.event))
            .catch(e => console.log(e));
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div>
            <h1>{event.event_name}</h1>
            {event.images.map((img, index) => (
                <img key={index} src={`${import.meta.env.VITE_REACT_APP_API_URL}${img}`} alt={event.event_name} />
            ))}
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.venue}</p>
            <p>{event.domain}</p>
            <p>{event.description}</p>
            <h2>Participant:</h2>
            <p>{event.participant?.name} - {event.participant?.designation}</p>
        </div>
    );
};

export default EventDetail;
