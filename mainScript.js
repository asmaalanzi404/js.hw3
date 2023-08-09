Books =[
    {
    Book_title:"in one",
    Author:"saad",
    Number_ofpages:20,
    available:true
    },
{   
    Book_title:"in two",
    Author:"Ahmeed",
    Number_ofpages:30,
    available:false
    },
    {  
        Book_title:"in three",
        Author:"sara",
        Number_ofpages:40,
        available:true 
        },
        { 
            Book_title:"in four",
            Author:"mram",
            Number_ofpages:21,
            available:true
            },
            {  
                Book_title:"in five",
                Author:"nora",
                Number_ofpages:35,
                available:false
                }
]


console.log('------------------ requirement 1---------------------------------');
for (let i=0;i<Books.length;i++ ) {

//   console.log(Books[i]);
console.log(`the book name is ${Books[i].Book_title} and the Author is ${Books[i].Author} and the Number of page is ${Books[i].Number_ofpages}`);
}
 
console.log("-----------------------------requirement 2 -----------------------------------------");
function borrowBook(book_name, borrower) {
    for (let index = 0; index < Books.length; index++) {
      if (Books[index].Book_title === book_name) {
        if (Books[index].available === true) {
          console.log(book_name + " is available.");
          Books[index].available = false;
          Books[index].borrower = borrower;
          console.log(book_name + " is updated to borrowed.");
          console.log(Books[index]);
        } else {
          console.log(book_name + " is not available.");
        }
        return; 
      }
    }
    console.log(book_name + " is not in our library.");
  }
  borrowBook("in one", "Assma");
  console.log('----------------------------requirement 3 ------------------------');
  function returnBook(book_name) {
    for (let index = 0; index < Books.length; index++) {
      if (Books[index].Book_title === book_name) {
        if (Books[index].borrower) {
          Books[index].available = true;
          delete Books[index].borrower;
          console.log(book_name + " is returned.");
          console.log(Books[index]);
        } else {
          console.log(book_name + " was never borrow.");
        }
        return; 
      }
    }
    console.log(book_name + " is not in our library.");
  }

  returnBook('in one')
  console.log('-----------------------requirement 4 ----------------------');
  
  for (let index = 0; index < Books.length; index++) {
    const book = Books[index];
    console.log(book);
  }
  
  console.log('-----------------------requirement 5 ----------------------');
  
  function addBook(NewBook)
  {
    Books.push(NewBook)
  }
  let newBook = {
    title: "in sevn",
    author: "rehab",
    Number_ofpages: 33,
    available: true,
  };
  addBook(newBook);
  console.log(Books);
  console.log('-----------------------requirement 6 ----------------------');

  function searchBook(searchTerm) {
  let searchResults = [];

  for (let index = 0; index < Books.length; index++) {
    let book1 = Books[index];

   
    if (
      book. Book_title.includes(searchTerm) ||
      book.author.includes(searchTerm) ||
      (book.borrower && book.borrower.Includes(searchTerm))
    ) {
        Search.push(book);
    }
  }

  return Search;
}
console.log('-----------------------requirement 7 ----------------------');

console.log(searchBook("in one"));
console.log(searchBook("in three"));

// 10
// 20
// 30

              /*Books.forEach((currentValue) => {
                 console.log(currentValue)
})





              /* let  borrowBook=Books.every(function())     
    
               let eve7 =characters.every(function(currentValue2) {
                return currentValue2.height < 200;
            })
            console.log(eve7);*/
            








