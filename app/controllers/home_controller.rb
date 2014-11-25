class HomeController < ApplicationController
def welcome
render "welcome"
mount_uploader :avatar, AvatarUploader

end
end