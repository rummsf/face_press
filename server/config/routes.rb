Rails.application.routes.draw do
  namespace 'api' do 
    namespace 'v1', defaults: {format: :json} do 
      resources :users 
      resources :books
      resources :writers
      resources :writer_books
    end 
  end 
end
