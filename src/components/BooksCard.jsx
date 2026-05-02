import { Card } from "@heroui/react";
import { Bitcount_Ink } from "next/font/google";
import Image from "next/image";

const BooksCard = ({book}) => {
    const {title, image_url} = book;

    return (
        <Card>
            <div>
                <Image
                src={image_url}
                height={200}
                width={200}
                alt={title}
                />
            </div>
            
        </Card>
    );
};

export default BooksCard;