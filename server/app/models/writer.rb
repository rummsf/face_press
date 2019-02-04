class Writer < ApplicationRecord
    has_many :writer_books
    has_many :books, through: :writer_books
    has_many :users, through: :writer_books

end
