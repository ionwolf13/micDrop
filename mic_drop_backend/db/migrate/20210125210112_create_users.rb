class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :image, default: 'image/The4Horsemen.png'
      t.string :hobbies, default: "singer"
      t.float :rating, default: 0
      t.timestamps
    end
  end
end
