class WriterSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :biography, :url
  has_many :books, through: :writer_book 
end
