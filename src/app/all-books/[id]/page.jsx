import { Button, Card, Chip } from "@heroui/react";
import { Bitcount_Ink } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://book-borrowing-xi.vercel.app/data.json')
    const allBooks = await res.json();
    const book = allBooks.find(b => b.id == id)

    return (
        <div>
            <h2 className="text-4xl font-bold text-center  my-10 mx-auto">Book Details</h2>

                    <div className="flex gap-10 justify-center w-8/12 mx-auto bg-slate-100 border rounded-xl p-5 ">
                        <div className="">
                            <Image
                                src={book.image_url}
                                height={400}
                                width={400}
                                alt={book.title}
                                className=" rounded-xl"
                            />
                        </div>
                        <div className="space-y-5 bg-slate-200 p-5 border rounded-xl">
                            <h2 className="text-2xl font-bold mb-4 mx-auto">Book Info</h2>

                            <Chip size='lg' className=" right-1 top-1">{book.category}</Chip>
                            <h2 className="text-4xl font-bold">{book.title}</h2>
                            <p>By {book.author}</p>
                            <p>{book.description}</p>
                            <h4 className="font-semibold">Available Quantity : {book.available_quantity}</h4>
                             
                                            <Button variant="tertiary" className={'font-bold bg-blue-300'}>
                                               Borrow This Book</Button>
                                        
                        </div>
                    </div>
                


            
        </div>


    );
};

export default BookDetailsPage;
