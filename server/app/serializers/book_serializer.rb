class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :pages, :price, :year, :image, :poet, :review, :publisher, :contributor
  has_many :writers, serializer: WriterBookSerializer
  # , through: :writer_book
end
