class CreateWriters < ActiveRecord::Migration[5.2]
  def change
    create_table :writers do |t|
      t.string :name
      t.string :url
      t.string :image
      t.string :biography

      t.timestamps
    end
  end
end
