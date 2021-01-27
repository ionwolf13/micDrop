class User < ApplicationRecord
    has_many :challenges
    has_many :songs, through: :challenges
    
    # added code as of 01/27
    validates_presence_of :name
end
