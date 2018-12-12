class Post < ApplicationRecord
    belongs_to :person, optional: true

end
