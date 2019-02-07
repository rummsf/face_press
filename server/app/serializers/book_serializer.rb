class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :pages, :price
  has_many :writers, through: :writer_book
end
