class User < ApplicationRecord
    has_many :challenges
    has_many :songs, through: :challenges
    
    # added code as of 01/27
    validates_presence_of :name


    # def getUserRating
    #     total = 0
    #     arr = Challenge.all.map{|challenge| challenge.user.id == self.id}
    #     arr.each |challenge| do {
    #         total += challenge.rating
    #     }
    #     total/arr.length
    # end
end
