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
        <Card className="w-full min-h-92 flex flex-col pb-4 overflow-hidden shadow-lg">
            <img src={import.meta.env.VITE_REACT_APP_API_URL+cardsData?.img} alt="Card Image" className="w-full aspect-[16/9] object-cover" />
            <div className="mt-4">
                <CardTitle className="text-lg font-medium text-center text-gray-600">{cardsData?.title}</CardTitle>
            </div>
            <div className="flex mt-auto mr-4">
                    <a href={`/blog/${cardsData?.id}`} className="ml-auto">
                        <Button variant="secondary" className="mt-2">
                            read more
                        </Button>
                    </a>
                </div>
        </Card>
    );
};

export default BlogCard;