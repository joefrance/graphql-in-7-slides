Rails.application.routes.draw do
  root to: "pages#root"
  get 'pages/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
