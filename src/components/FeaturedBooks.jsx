import BooksCard from "./BooksCard";

const FeaturedBooks = async() => {
    const res = await fetch('https://book-borrowing-xi.vercel.app/data.json')
    const data= await res.json()
    const topBooks = data.slice(0, 4)
    
   
    return (
        <div>
          <h1 className="text-4xl font-bold text-center mx-auto">Featured Books</h1>

          <div>
            {
                topBooks.map(book=> <BooksCard key={book.id} book={book}/> )
            }
          </div>
        </div>
    );
};

export default FeaturedBooks;