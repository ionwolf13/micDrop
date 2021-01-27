# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

# Users Data
    User.create(name: "Raul",   image:"image/RaulFurbyNightMareFuel.png")
    User.create(name: "Angelo", image:"image/ICantStopNow.png")
    User.create(name: "Adam",   image:"image/OneofUs.png")
    User.create(name: "Dane",   image:"image/WhatHaveIDone.png")



# Songs Data
    Song.create(name: 'Mr. Brightside',        artist: 'The Killers',   genre: 'Rock',      difficulty: 'Hard',     time: 3, lyrics: 'vszjchvgscvszhfcx')
    Song.create(name: 'Wannabe',               artist: 'Spice Girls',   genre: 'Pop',       difficulty: 'Medium',   time: 3, lyrics: 'fvdxvdxfvdcfbcb')
    Song.create(name: 'Livin On A Prayer',     artist: 'Bon Jovi',      genre: 'Rock',      difficulty: 'Medium',   time: 4, lyrics: 'vdgrdfbgfbg')
    Song.create(name: 'I Will Survive',        artist: 'Gloria Gaynor', genre: 'R&B',       difficulty: 'Medium',   time: 3 , lyrics: 'dfgbdgxdfxgdxfgx')
    Song.create(name: 'Eye Of The Tiger',      artist: 'Survivor',      genre: 'Rock',      difficulty: 'Easy',     time: 2,  lyrics: 'hvjhvghjvghjv')
    Song.create(name: 'Tears In Heaven ',      artist: 'Eric Clapton',  genre: 'Soft Rock', difficulty: 'Ease',     time: 3,  lyrics: 'jbjbkjbjkb')
    Song.create(name: 'Let It Go',             artist: 'Elsa',          genre: 'Pop',       difficulty: 'Hard',     time: 163, lyrics: 'hilkhlh')
    Song.create(name: 'Everything Is Awesome', artist: 'Lego',          genre: 'Pop',       difficulty: 'Hard',     time: 2,  lyrics: 'hlh')



# Challenges Data

    Challenge.create(user_id: User.all.sample.id, song_id: Song.all.sample.id)
    Challenge.create(user_id: User.all.sample.id, song_id: Song.all.sample.id)
    Challenge.create(user_id: User.all.sample.id, song_id: Song.all.sample.id)
    Challenge.create(user_id: User.all.sample.id, song_id: Song.all.sample.id)
    Challenge.create(user_id: User.all.sample.id, song_id: Song.all.sample.id)
    Challenge.create(user_id: User.all.sample.id, song_id: Song.all.sample.id)

puts "Done"





