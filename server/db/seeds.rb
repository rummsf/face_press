Book.destroy_all
Writer.destroy_all
WriterBook.destroy_all

books =[
  {
    title: "Mother; Beautiful Things",
    image: "",
    year: 2017,
    pages: 150,
    price: 5,
    availability: 44,
    description: "36 pages, saddle stitched into black card wrappers, in sparkly integral dust jacket; azure endpapers.  Digitally printed in black, blue, and red throughout."
  },
  {
    title: "Confection",
    image: "",
    year: 2011,
    pages: 200,
    price: 4,
    availability: 0,
    description: "Cover art by Raul Perdomo.  Edition of 200 copies.  16pp"
  },
  {
    title: "The Artwar Reader",
    image: "",
    year: 2012,
    pages: 16,
    price: 3,
    availability: 10,
    description: "A facsimile reprint of the first edition.  Edition of 300 copies."
  },
  {
    title: "Urgent Film",
    image: "",
    year: 2012,
    pages: 12,
    price: 5,
    availability: 0,
    description: "A facsimile reprint of the first edition.  Available in eight colours (red, orange, yellow, green, blue, purple, violet, pink).  Edition of 300 copies."
  },
  {
    title: "Al-Dente",
    image: "",
    year: 2014,
    pages: 250,
    price: 6,
    availability: 0,
    description: "8 poems"
  },
  {
    title: "Graft and Corruption: Shakespeare’s Sonnet 15",
    image: "",
    year: 2015,
    pages: 170,
    price: 3,
    availability: 0,
    description: ""
  },
  {
    title: "The Last Shyness",
    image: "",
    year: 2017,
    pages: 32,
    price: 4,
    availability: 0,
    description: "Saddle stitched into letterpressed wrappers; scarlet endpapers.  Risograph printed in black and yellow."
  },
  {
    title: "Got On",
    image: "",
    year: 2011,
    pages: 20,
    price: 5,
    availability: 0,
    description: "Letterpress. Colour endpapers by the author. Cover art by Travis Frazelle (in two styles). Edition of 200 copies."
  },
  {
    title: "Average Cabin",
    image: "",
    year: 2015,
    pages: 250,
    price: 6,
    availability: 0,
    description: "Covers and endpapers in various colour combinations.  Edition of 250 copies"
  },
  {
    title: "Poems (2012-2017)",
    image: "",
    year: 2017,
    pages: 144,
    price: 3,
    availability: 0,
    description: "144 pages, perfect bound, in dust jacket.  Letterpressed spine label."
  },
  {
    title: "Poems",
    image: "",
    year: 2017,
    pages: 200,
    price: 7,
    availability: 0,
    description: "Covers letterpressed in silver ink. 28pp."
  },
  {
    title: "Nine Plays",
    image: "",
    year: 2014,
    pages: 100,
    price: 7,
    availability: 0,
    description: "Edited and introduced by Ian Heames.  Afterword by J.H. Prynne.  Hardback in dust jacket.  367pp"
  },
  {
    title: "Regrets, after Joachim du Bellay and others",
    image: "",
    year: 2013,
    pages: 20,
    price: 5,
    availability: 0,
    description: "Versions of poems by du Bellay, de Sponde, and Machado.  20pp hand-sewn booklet"
  },
  {
    title: "‘Sonatine’",
    image: "",
    year: 2015,
    pages: 70,
    price: 6.50,
    availability: 0,
    description: "Large folded broadside. Risograph printed. Edition of c. 70 copies."
  },
  {
    title: "Arcobat",
    image: "",
    year: 2012,
    pages: 16,
    price: 5,
    availability: 0,
    description: "Edition of 200 copies"
  },
  {
    title: "Nettle Range Bladefear",
    image: "",
    year: 2009,
    pages: 20,
    price: 4,
    availability: 0,
    description: "Letterpress.  Second impression of 140 copies.  [First impression of 60 copies SOLD OUT.]"
  },
  {
    title: "Team You",
    image: "",
    year: 2012,
    pages: 24,
    price: 5,
    availability: 0,
    description: "Edition of 200 copies"
  }
] 

books.each {|book| Book.create(book)}

writers = [

  {
    name: "Anonymous",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Cassels, Imogen",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Dobran, Ryan",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Keen, Jeff",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Prynne, J.H.",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Raworth, Tom",
    biography: "",
    image: "",
    url: ""
  },
 
  {
    name: "Sogumi, Oki",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Stuart, Will",
    biography: "",
    image: "",
    url: ""
  },
 
  {
    name: "Thornton, Timothy",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Tiplady, Jonty",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Toal, Jefferson",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Wallace-Hadrill, Mike",
    biography: "",
    image: "",
    url: ""
  }
  
]
writers.each {|writer| Writer.create(writer)}

writer_books = [
  {
    writer_id: 15,
    book_id: 49
  },
  {
    writer_id: 16,
    book_id: 50
  },
  {
    writer_id: 17,
    book_id: 51
  },
  {
    writer_id: 17,
    book_id: 52
  },
  {
    writer_id: 18,
    book_id: 53
  },
  {
    writer_id: 18,
    book_id: 54
  },
  {
    writer_id: 18,
    book_id: 55
  },
  {
    writer_id: 18,
    book_id: 56
  },
  {
    writer_id: 18,
    book_id: 57
  },
  {
    writer_id: 18,
    book_id: 58
  },
  {
    writer_id: 18,
    book_id: 59
  },
  {
    writer_id: 19,
    book_id: 60
  },
  {
    writer_id: 19,
    book_id: 61
  },
  {
    writer_id: 19,
    book_id: 62
  },
  {
    writer_id: 20,
    book_id: 63
  },
  {
    writer_id: 20,
    book_id: 64
  },
  {
    writer_id: 21,
    book_id: 65
  },
  {
    writer_id: 22,
    book_id: 66
  },
  {
    writer_id: 22,
    book_id: 67
  },
  {
    writer_id: 23,
    book_id: 68
  },
  {
    writer_id: 24,
    book_id: 69
  },
  {
    writer_id: 25,
    book_id: 70
  },
  {
    writer_id: 26,
    book_id: 71
  },
  {
    writer_id: 26,
    book_id: 72
  }
]
writer_books.each {|writer_book| 
  writer = WriterBook.create(writer_book)
}