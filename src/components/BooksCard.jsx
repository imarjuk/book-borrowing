import { Button, Card, Chip } from "@heroui/react";
import { Bitcount_Ink } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const BooksCard = ({book}) => {
    const {title, image_url, author, category} = book;

    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                src={image_url}
               fill
                alt={title}
                className="object-cover rounded-xl"
                />
                <Chip size='sm' className="absolute right-1 top-1">{category}</Chip>
            </div>
            <div>
                <h2 className="text-2xl font-medium">{title}</h2>
                <p>By {author}</p>
            </div>
            <div>
                
               <Link href={`/all-books/${book.id}`}>
                <Button variant="outline" 
                className={'w-full'} >
                    View Details</Button>
               </Link>
            </div>
            
        </Card>
    );
};

export default BooksCard;