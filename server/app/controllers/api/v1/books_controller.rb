class Api::V1::BooksController < ApplicationController
    def index 
        @books = Book.all 
        render json: @books
    end 

    def show 
        @book = Book.all.find_by(id:params[:id])
        render json: @book
    end 
end
