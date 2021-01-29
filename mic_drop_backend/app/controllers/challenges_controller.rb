class ChallengesController < ApplicationController

    def index
        challenges = Challenge.all
        render json: challenges
    end

    def show
        challenge = Challenge.find(params[:id])
        render json: challenge
    end

    def create
        challenge = Challenge.create(challenge_params(:user_id, :song_id))
        render json: challenge
    end

    private

    def challenge_params(*args)
        params.require(:challenge).permit(*args)
    end
end