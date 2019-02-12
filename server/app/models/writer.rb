class Writer < ApplicationRecord
    has_many :writer_books
    has_many :books, through: :writer_books
    has_many :users, through: :writer_books

def self.find_admin
    Writer.all.select{|writer| !!writer.admin_created}
end 

end
