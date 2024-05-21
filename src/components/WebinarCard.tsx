import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { FC } from "react";
interface CardProps {
    title: string;
    id: string;
    img: string;
}
const BlogCard: FC<CardProps> = ({ cardsData }) => {
    return (
        <Card className="w-80 min-h-92 flex flex-col pb-4 overflow-hidden shadow-lg">
            <img src={import.meta.env.VITE_REACT_APP_API_URL+cardsData?.img} alt="Card Image" className="w-full aspect-[4/3] object-cover" />
            <div className="mt-4">
                <CardTitle className="text-lg font-medium text-center text-gray-600">{cardsData?.title}</CardTitle>
            </div>
            <div className="flex mt-auto mr-4">
                    <a href={cardsData?.link} target="_blank" className="ml-auto">
                        <Button variant="secondary" className="mt-2">
                            Watch Now
                        </Button>
                    </a>
                </div>
        </Card>
    );
};

export default BlogCard;