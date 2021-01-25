class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :lyrics
      t.string :genre
      t.string :difficulty
      t.integer :time
      t.timestamps
    end
  end
end
