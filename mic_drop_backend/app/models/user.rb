class User < ApplicationRecord
    has_many :challenges
    has_many :songs, through: :challenges
end
