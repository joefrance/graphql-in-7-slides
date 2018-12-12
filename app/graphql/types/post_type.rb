# defines a new GraphQL type
Types::PostType = GraphQL::ObjectType.define do
    # this type is named `Link`
    name 'Post'
  
    # it has the following fields
    field :id, !types.ID
    field :author_id, types.ID
    field :headline, types.String
    field :body, types.String

    field :bodyWithHeadline, types.String do
        resolve -> (obj, args, ctx) { "'#{obj.body}' + '#{obj.headline}'"  }
      end

    # Related types
    field :author, Types::PersonType, "Author of this post" do
        resolve -> (obj, args, ctx) {
            #debugger
            if obj.author_id.nil?
                #Person.new
                nil
            else
                Person.find(obj.author_id)
            end
        }
      end

  end