class CreateWriterBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :writer_books do |t|
      t.integer :writer_id
      t.integer :book_id
      t.integer :user_id

      t.timestamps
    end
  end
end
