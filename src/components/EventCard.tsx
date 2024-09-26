import { FC } from "react";

interface Participant {
    name: string;
    designation: string;
}

interface EventCardProps {
    data: {
        id: string;
        event_name: string;
        date: string;
        venue: string;
        domain: string;
        description: string;
        images: string[]; // Array of image URLs
        participants: Participant[];
    };
}

const EventCard: FC<EventCardProps> = ({ data }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            {data.images.map((img, index) => (
                <img key={index} src={`${import.meta.env.VITE_REACT_APP_API_URL}${img}`} alt={data.event_name} className="w-full h-40 object-cover" />
            ))}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{data.event_name}</h2>
                <p className="text-gray-600">{new Date(data.date).toLocaleDateString()}</p>
                <p className="text-gray-600">{data.venue}</p>
                <p className="text-gray-600">{data.domain}</p>
                <p className="mt-2">{data.description}</p>
                <p className="mt-2 text-blue-700">Participants:</p>
                <ul>
                    {data.participants.map((participant, index) => (
                        <li key={index} className="text-gray-600">
                            {participant.name} - {participant.designation}
                        </li>
                    ))}
                </ul>
                <a href={`/event/${data.id}`}>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                </a>
            </div>
        </div>
    );
};

export default EventCard;
