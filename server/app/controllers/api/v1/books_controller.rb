class Api::V1::BooksController < ApplicationController
    def index 
        @books = Book.all 
        render json: @books
    end 

    def show 
        @book = Book.find_by(id:params[:id])
        render json: @book
    end 

    def create
        binding.pry
        Book.create(params[:book])
        render :create, status: :created
    end
end

# {book: @book, writer: @book.writer}

# @book = Book.build
        # @book.title = params[:title]
        # @book.poet = params[:poet]
        # @book.image = params[:image]
        # @book.description = params[:description]
        # @book.publisher = params[:publisher]
        # @book.review = params[:review]
        # @book.contributor = params[:contributor]
        # @book.save
