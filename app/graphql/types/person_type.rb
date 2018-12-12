# defines a new GraphQL type
Types::PersonType = GraphQL::ObjectType.define do
    # this type is named `Link`
    name 'Person'
  
    # it has the following fields
    field :id, !types.ID
    field :first_name, types.String
    field :last_name, types.String

    field :fullName, types.String do
        resolve -> (obj, args, ctx) { "#{obj.first_name} #{obj.last_name}"  }
      end

  end