class Book < ApplicationRecord
    has_many :writer_books
    has_many :writers, through: :writer_books
    has_many :users, through: :writer_books

end
