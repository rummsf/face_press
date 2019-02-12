class Api::V1::WritersController < ApplicationController
     def index 
        @writers = Writer.find_admin
        render json: @writers
    end 

    def show 
        @writer = Writer.all.find_by(id:params[:id])
        render json: @writer
    end 
end
