# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_11_002129) do

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.integer "year"
    t.integer "pages"
    t.string "description"
    t.integer "price"
    t.integer "availability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "purchased_books"
    t.string "favourite_writers"
    t.string "recommended_books"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "writer_books", force: :cascade do |t|
    t.integer "writer_id"
    t.integer "book_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "writers", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.string "image"
    t.string "biography"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
