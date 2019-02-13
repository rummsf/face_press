class Api::V1::BooksController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        @books = Book.all 
        render json: @books
    end 

    def show 
        @book = Book.find_by(id:book_params[:id])
        render json: @book
    end 

    def create
        @book = Book.new(book_params)
            @writer =Writer.new(writer_params)

        if @book.valid? 
            @book.save
        render json: @book
        end
    end

    private 

    def book_params
        params.require(:book).permit(:title, :poet, :image, :description, :publisher, :review)
    end

    def writer_params 
        params.permit(:name)
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
