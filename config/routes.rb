Rails.application.routes.draw do

  get 'contacts/index'
  get '/contact', to: 'contacts#index'
  # get '/works', to: 'pages#works'
  match '/about', to: 'pages#about', via: :get

  get '/inspirations', to: 'pages#inspirations'
  get '/sp', to: 'pages#sp'
  get '/works', to: 'works#index'
  get '/works/cookpal', to: 'works#cookpal'
  get '/works/simplicruit', to: 'works#simplicruit'
  get '/works/smartalert' , to: 'works#smartalert'

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
