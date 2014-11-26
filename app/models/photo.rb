class Photo < ActiveRecord::Base
##	mount_uploader :image, ImageUploader
	has_attached_file :image

end

