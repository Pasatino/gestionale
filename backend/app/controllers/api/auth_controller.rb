module Api
    class AuthController < ApplicationController
        def login
          @utente = Utente.find_by(username: params[:username])
          if @utente&.authenticate(params[:password])
            token = jwt_encode(utente_id: @utente.id)
            render json: { token: token, utente: @utente.as_json(except: :password_digest) }, status: :ok
          else
            render json: { error: 'Username o password non validi' }, status: :unauthorized
          end
        end
    
        def register
          @utente = Utente.new(utente_params)
          if @utente.save
            token = jwt_encode(utente_id: @utente.id)
            render json: { token: token, utente: @utente.as_json(except: :password_digest) }, status: :created
          else
            render json: { errors: @utente.errors.full_messages }, status: :unprocessable_entity
          end
        end
    
        private
    
        def utente_params
          params.require(:utente).permit(:username, :password, :nome, :cognome, :data_nascita, :email)
        end
    
        def jwt_encode(payload, exp = 24.hours.from_now)
          payload[:exp] = exp.to_i
          JWT.encode(payload, Rails.application.secrets.secret_key_base)
        end
      end
end