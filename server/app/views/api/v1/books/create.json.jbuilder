# json.books @books do |book|
#   json.title book.title
#   json.price number_to_currency book.price
#   json.description book.description

#   json.writers book.writers do |writer|
#     json.name writer.name
#     json.biography writer.biography
#   end
# end

# json.data do 
# json.book do
#   json.call (@book, :title, :description)
# end 
# end 

# json.writer do 
# json.user do 

json.title @book.title 
json.description @book.description 
json.image @book.image
json.pages @book.pages 
json.year @book.year
json.publisher @book.publisher
json.review @book.review 
json.contributor @book.contributor
