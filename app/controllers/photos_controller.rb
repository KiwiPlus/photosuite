class PhotosController < ApplicationController

  respond_to :html

  def index
    @photos = Photo.all
    respond_with(@photos)
  end

 def show
    @photo = Photo.find(params[:id])
  end

 def new
  @photo = Photo.new
 end

def create
  @photo = Photo.create( photo_params )
  @photo.save!
  redirect_to photos_path, notice: 'Photo uploaded'

end

  def update
    @photo.update(photo_params)
    respond_with(@photo)
  end

  def destroy
    @photo.destroy
    respond_with(@photo)
  end

  private


    def photo_params
      params.require(:photo).permit(:image)
    end
end
