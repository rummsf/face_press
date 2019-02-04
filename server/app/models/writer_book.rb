class WriterBook < ApplicationRecord
    belongs_to :book 
    belongs_to :writer
    belongs_to :user
end
