class CreateChallenges < ActiveRecord::Migration[6.1]
  def change
    create_table :challenges do |t|
      t.integer :user_id
      t.integer :song_id
      t.float   :score, default: 0
      t.timestamps
    end
  end
end
