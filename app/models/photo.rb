class Photo < ActiveRecord::Base
##	mount_uploader :image, ImageUploader
	has_attached_file :image
	validates_attachment_presence :image
	validates_attachment_content_type :image, :content_type => [ 'image/png','image/jpeg','image/jpeg']
end
