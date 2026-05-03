import BooksCard from "@/components/BooksCard";


const AllBooksPage = async() => {
    const res= await fetch('https://book-borrowing-xi.vercel.app/data.json')
    const allBooks= await res.json();
   
    return (
        <div>
            <h1 className="text-4xl font-bold text-center  my-10 mx-auto">All Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    allBooks.map(book=> <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;
