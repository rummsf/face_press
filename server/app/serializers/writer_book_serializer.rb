class WriterBookSerializer < ActiveModel::Serializer
  attributes :id, :writer_id, :book_id
  belongs_to :book 
  belongs_to :writer
end
