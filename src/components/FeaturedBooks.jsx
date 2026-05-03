import BooksCard from "./BooksCard";

const FeaturedBooks = async() => {
    const res = await fetch('https://book-borrowing-xi.vercel.app/data.json')
    const data= await res.json()
    const topBooks = data.slice(0, 4)
    
   
    return (
        <div>
          <h1 className="text-4xl font-bold text-center mx-auto">Featured Books</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {
                topBooks.map(book=> <BooksCard key={book.id} book={book}/> )
            }
          </div>
        </div>
    );
};

export default FeaturedBooks;