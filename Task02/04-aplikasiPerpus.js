let books = 
  [
    {
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      status: 'tersedia'
    },
    {
      name: 'Sprint',
      author: 'Jake Knapp',
      status: 'tidak tersedia'
    },
    {
      name: '7 Habits of highly effective peoples',
      author: 'Stephen R. Covey',
      status: 'tersedia'
    }
  ]

function findBook(bookTitle) {
  books.find(function(book) {
    if(book.name === bookTitle) {
      console.log(`Status dari buku ${book.name} adalah ${book.status}`);
    }
  })
}

function showStatus() {
  
  console.log('List buku yang tersedia');
  console.log('===========');
  
  books.map(function(book) {
    if(book.status === 'tersedia') {
      console.log(`Book name: ${book.name}`);
    }
  })
}

findBook('Sprint')
showStatus()