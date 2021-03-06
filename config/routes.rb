# frozen_string_literal: true

Rails.application.routes.draw do
  resources :communities
  resources :submissions
  devise_for :users
  root to: 'submissions#index'
end
