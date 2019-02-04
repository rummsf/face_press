class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :purchased_books
      t.string :favourite_writers
      t.string :recommended_books

      t.timestamps
    end
  end
end
