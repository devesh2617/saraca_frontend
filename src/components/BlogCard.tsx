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
        <Card className="w-full min-h-92 flex flex-col overflow-hidden shadow-lg relative group">
            <div className="relative z-1 w-full">
                <img
                    src={`${import.meta.env.VITE_REACT_APP_API_URL}${cardsData?.img}`}
                    alt="Card Image"
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            <div className="relative z-[2] bg-white h-full py-4">
                <CardTitle className="text-4xl font-medium text-center text-gray-600">
                    {cardsData?.title}
                </CardTitle>
            </div>
            
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-[1] bg-black bg-opacity-20 backdrop-blur-[2px] transition-opacity duration-500">
                <a href={`/blog/${cardsData?.id}`} className="text-center">
                    <Button variant="secondary" className="text-2xl py-8">
                        Read more
                    </Button>
                </a>
            </div>
        </Card>
    );
};

export default BlogCard;
