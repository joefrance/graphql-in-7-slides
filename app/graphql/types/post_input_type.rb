Types::PostInputType = GraphQL::InputObjectType.define do
  name "PostInput"

  argument :author_id, types.ID
  argument :headline, types.String
  argument :body, types.String

end
