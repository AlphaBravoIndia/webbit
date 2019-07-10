# frozen_string_literal: true

Rails.application.routes.draw do
  resources :submissions
  devise_for :users
  root to: 'submissions#index'
end
