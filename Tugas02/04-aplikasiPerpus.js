let library = {
  books: [
    {
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      status: 'available'
    },
    {
      name: 'Sprint',
      author: 'Jake Knapp',
      status: 'none'
    },
    {
      name: '7 Habits of highly effective peoples',
      author: 'Stephen R. Covey',
      status: 'available'
    }
  ]
}

function showStatus() {
  let books = library.books
  
  console.log('List buku yang tersedia');
  console.log('===========');
  
  books.map(function(book) {
    if(book.status === 'available') {
      console.log(`Book name: ${book.name}`);
    }
  })
}

showStatus()