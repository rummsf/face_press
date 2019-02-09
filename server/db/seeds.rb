Book.destroy_all
Writer.destroy_all
WriterBook.destroy_all

books =[
  {
    title: "Mother; Beautiful Things",
    image: "https://i.imgur.com/f9n58v3.jpg",
    year: 2017,
    pages: 36,
    price: 5,
    availability: 44,
    description: "Saddle stitched into black card wrappers, in sparkly integral dust jacket; azure endpapers.  Digitally printed in black, blue, and red throughout."
  },
  {
    title: "Confection",
    image: "https://i.imgur.com/Sox6bqk.jpg",
    year: 2011,
    pages: 16,
    price: 4,
    availability: 0,
    description: "Cover art by Raul Perdomo.  Edition of 200 copies."
  },
  {
    title: "The Artwar Reader",
    image: "https://i.imgur.com/eHtwjcH.jpg",
    year: 2012,
    pages: 16,
    price: 3,
    availability: 10,
    description: "A facsimile reprint of the first edition.  Edition of 300 copies."
  },
  {
    title: "Urgent Film",
    image: "https://i.imgur.com/5iJhRrk.jpg",
    year: 2012,
    pages: 12,
    price: 5,
    availability: 0,
    description: "A facsimile reprint of the first edition.  Available in eight colours (red, orange, yellow, green, blue, purple, violet, pink).  Edition of 300 copies."
  },
  {
    title: "Al-Dente",
    image: "https://i.imgur.com/R8fgvdC.gif",
    year: 2014,
    pages: 250,
    price: 6,
    availability: 0,
    description: "8 poems"
  },
  {
    title: "Graft and Corruption: Shakespeare’s Sonnet 15",
    image: "https://i.imgur.com/QZ5705e.jpg",
    year: 2015,
    pages: 170,
    price: 3,
    availability: 0,
    description: ""
  },
  {
    title: "The Last Shyness",
    image: "https://i.imgur.com/m26MzTF.jpg",
    year: 2017,
    pages: 32,
    price: 4,
    availability: 0,
    description: "Saddle stitched into letterpressed wrappers; scarlet endpapers.  Risograph printed in black and yellow."
  },
  {
    title: "Got On",
    image: "https://i.imgur.com/Lqk1lpF.jpg",
    year: 2011,
    pages: 20,
    price: 5,
    availability: 0,
    description: "Letterpress. Colour endpapers by the author. Cover art by Travis Frazelle (in two styles). Edition of 200 copies."
  },
  {
    title: "Average Cabin",
    image: "https://i.imgur.com/53k1ON3.jpg",
    year: 2015,
    pages: 250,
    price: 6,
    availability: 0,
    description: "Covers and endpapers in various colour combinations.  Edition of 250 copies"
  },
  {
    title: "Poems (2012-2017)",
    image: "https://i.imgur.com/ph1qSUl.jpg",
    year: 2017,
    pages: 144,
    price: 3,
    availability: 0,
    description: "Perfect bound, in dust jacket.  Letterpressed spine label."
  },
  {
    title: "Poems",
    image: "https://i.imgur.com/hLtux75.jpg",
    year: 2017,
    pages: 28,
    price: 7,
    availability: 0,
    description: "Covers letterpressed in silver ink."
  },
  {
    title: "Nine Plays",
    image: "https://i.imgur.com/9ajLOKl.jpg",
    year: 2014,
    pages: 367,
    price: 7,
    availability: 0,
    description: "Edited and introduced by Ian Heames.  Afterword by J.H. Prynne.  Hardback in dust jacket."
  },
  {
    title: "Regrets, after Joachim du Bellay and others",
    image: "https://i.imgur.com/DOFF9VS.jpg",
    year: 2013,
    pages: 20,
    price: 5,
    availability: 0,
    description: "Versions of poems by du Bellay, de Sponde, and Machado.  Hand-sewn booklet"
  },
  {
    title: "‘Sonatine’",
    image: "https://i.imgur.com/n43Oh5N.jpg",
    year: 2015,
    pages: 70,
    price: 6.50,
    availability: 0,
    description: "Large folded broadside. Risograph printed. Edition of c. 70 copies."
  },
  {
    title: "Acrobat",
    image: "https://i.imgur.com/AFmPvTH.jpg",
    year: 2012,
    pages: 16,
    price: 5,
    availability: 0,
    description: "Edition of 200 copies"
  },
  {
    title: "Nettle Range Bladefear",
    image: "https://i.imgur.com/0RdwiXT.jpg",
    year: 2009,
    pages: 20,
    price: 4,
    availability: 0,
    description: "Letterpress.  Second impression of 140 copies.  [First impression of 60 copies SOLD OUT.]"
  },
  {
    title: "Team You",
    image: "https://i.imgur.com/ShKyh8t.jpg",
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
    biography: "poetry &c -- noli me tangere -- shabby not chic. phd-in-progress on dylan thomas @caiuscollege. lyricritic someday",
    image: "https://i.imgur.com/o2RbsjR.jpg",
    url: "https://www.english.cam.ac.uk/people/graduates/Imogen.Cassels"
  },
  {
    name: "Dobran, Ryan",
    biography: "Ryan: I live in Philadelphia. When not working, I write poems and think about how to write them, often accompanied by fragmentary critical prose.",
    image: "https://i.imgur.com/UMMeVbL.jpg",
    url: "https://ryandobran.com/"
  },
  {
    name: "Keen, Jeff",
    biography: "(1923–2012) was born in Trowbridge, Wiltshire. After being drafted into National Service during WWII, he studied for a short time at Chelsea School of Art and Design, after which he moved to Brighton (UK) where he lived and worked until his death.",
    image: "https://i.imgur.com/IyolBXS.jpg",
    url: "http://www.jeffkeen.co.uk/"
  },
  {
    name: "Prynne, J.H.",
    biography: "Born in 1936 and a leading late modernist poet. He was a key contributor to The English Intelligencer - a series of circulated works between poets based in Cambridge. He is the author of several collections of poetry and of books of critical and academic prose, including works on Saussure, Wordsworth and Shakespeare. He has also written poetry in classical Chinese under the name Pu Ling-en.",
    image: "https://i.imgur.com/i8gnyCY.png",
    url: "https://specialcollections-blog.lib.cam.ac.uk/?p=16166"
  },
  {
    name: "Raworth, Tom",
    biography: "Tom Raworth was born and grew up in London. During the 1970s he travelled and worked in the USA and Mexico, returning to England in 1977 to be Resident Poet at King's College, Cambridge, in which city he still lived at the time of his death, aged 82, in April 2017.",
    image: "https://i.imgur.com/nSnEI53.jpg",
    url: "https://www.poetryfoundation.org/poets/tom-raworth"
  },
 
  {
    name: "Sogumi, Oki",
    biography: "Oki Sogumi is a writer who lives in Philadelphia. She is interested in rebellion, speculation, waywardness, politics of care, and will talk for way too long about their favorite kdrama or weird new life habit. okisogumi.tumblr.com",
    image: "https://i.imgur.com/RMNDmJB.jpg",
    url: "https://www.poetryproject.org/people/oki-sogumi/"
  },
  {
    name: "Stuart, Will",
    biography: "Theatre writer and poet",
    image: "https://i.imgur.com/xnZNTgF.jpg",
    url: "https://www.camdram.net/shows/2010-william-fergus-stuart"
  },
 
  {
    name: "Thornton, Timothy",
    biography: "Based in Brighton.  Likes to write about ghosts, foxes, cities + the sea.",
    image: "https://i.imgur.com/s6UgcK3.jpg",
    url: "http://www.timothythornton.co.uk"
  },
  {
    name: "Tiplady, Jonty",
    biography: "Heaven and earth are heartless/ but nothing ever happens to me/ except that I love you",
    image: "https://i.imgur.com/m94DYfZ.jpg",
    url: "https://bebrowed.wordpress.com/2012/02/04/interview-with-jonty-tiplady-pt-1/"
  },
  {
    name: "Toal, Jefferson",
    biography: "Children's bookseller, writer and teacher",
    image: "https://i.imgur.com/ljZc1M8.jpg",
    url: "https://mattressofenthusiasm.com/"
  },
  {
    name: "Wallace-Hadrill, Mike",
    biography: "Actor and poet",
    image: "https://i.imgur.com/4sZolBO.jpg", 
    url: "https://www.youtube.com/watch?v=BriqHOdTCtI"
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