class UsersController < ApplicationController

    def index
        users = User.all
        render json: User.all.to_json({include: [:songs, :challenges], except: [:created_at, :updated_at]})
    end

    def show
        user = User.find_or_create_by(params[:id])
        render json: User.find(params[:id]).to_json({include: [:songs, :challenges]})
    end

    def create
        user = User.create(user_params(:name))
        render json: user
    end

    def update
        user = User.create(user_params(:name,:hobbies))
        render json: user
    end

    def delete
        user = User.create(user_params(:name,:hobbies,:image))
        render json: user
    end


    private

    def user_params(*args)
        params.require(:user).permit(*args)
    end


end


