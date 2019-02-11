class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :poet
      t.string :image
      t.integer :year
      t.integer :pages
      t.string :description
      t.integer :price
      t.integer :availability
      t.string :publisher
      t.string :review
      t.string :contributor

      t.timestamps
    end
  end
end
