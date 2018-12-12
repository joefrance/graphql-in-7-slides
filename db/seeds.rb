# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Person.create first_name: 'John', last_name: 'Doe'
Person.create first_name: 'Yulia', last_name: 'Goolia'


Post.create headline: 'Post 1', body: 'Lorem ipsum dolor sit amet...', author_id: 1
Post.create headline: 'Post 2', body: 'Imperdiet proin fermentum leo vel orci...', author_id: 1

Post.create headline: 'Post 3', body: 'Lorem ipsum dolor sit amet...', author_id: 2
Post.create headline: 'Post 4', body: 'Imperdiet proin fermentum leo vel orci...', author_id: 2
