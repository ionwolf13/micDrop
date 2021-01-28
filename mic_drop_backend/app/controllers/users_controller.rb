class UsersController < ApplicationController

    def index
        # users = User.all
        render json: User.all.to_json({include: [:songs, :challenges]})
    end

    def show
        # user = User.find(params[:id])
        render json: User.find(params[:id]).to_json({include: [:songs, :challenges]})
    end


end


