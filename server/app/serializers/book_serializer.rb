class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :pages, :price, :year, :image
  # has_many :writers, serializer: WriterBookSerializer
  # , through: :writer_book
end
