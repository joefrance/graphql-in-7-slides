class Resolvers::CreatePost < GraphQL::Function
    argument :body, types.String
    argument :headline, types.String
    argument :author_id, types.ID
  
    type Types::PostType
  
    def call(_obj, args, _ctx)
        Post.create!(
            author_id: args[:author_id],
            headline: args[:headline],
            body: args[:body]
        )
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end