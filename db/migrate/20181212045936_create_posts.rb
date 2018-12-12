class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.bigint :author_id
      t.string :headline
      t.text :body

      t.timestamps
    end
  end
end
