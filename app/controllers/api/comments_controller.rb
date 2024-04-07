module Api
  class CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # post /api/features/:feature_id/comments
    def create
      feature = Feature.find(params[:feature_id])
      comment = feature.comments.create(comment_params)
      if comment.save
        render json: comment, status: :created
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end

    # get /api/features/:feature_id/comments
    def index
      feature = Feature.find(params[:feature_id])
      comments = feature.comments
      render json: comments, status: :ok
    end

    private

    def comment_params
      params.require(:comment).permit(:body)
    end
  end
end
