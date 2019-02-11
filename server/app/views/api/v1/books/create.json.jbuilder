# json.books @books do |book|
#   json.title book.title
#   json.price number_to_currency book.price
#   json.description book.description

#   json.writers book.writers do |writer|
#     json.name writer.name
#     json.biography writer.biography
#   end
# end

json.data do 
json.book do
  json.call (@book, :title, :description)
end 
end 



# json.writer do 
# json.user do 
