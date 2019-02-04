class User < ApplicationRecord
    has_many :writer_books
    has_many :writers, through: :writer_books
    has_many :books, through: :writer_books
end
