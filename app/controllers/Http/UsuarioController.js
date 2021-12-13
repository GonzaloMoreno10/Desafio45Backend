'use strict'

const Usuario = use('App/Models/Usuario')

class UsuarioController {
    async login({ request,response, auth }) {
        const { email, password } = request.all();
       
        try{
          const token = await auth.attempt(email, password);
          response.json({msg:"Login OK",token:token})
        }
        catch(err){{
          console.log(err)
        }}
      }
    
      async store({ request, response }) {
        try {
          await auth.check();
        } catch (error) {
          response.status(401).send("Missing or invalid jwt token");
        }
    
        const { user, email, password } = request.all();
    
        try {
          const usuario = await Usuario.create({
            user,
            email,
            password,
          });

          console.log(usuario)
    
          return response.json({msg:"Usuario creado ", usr:usuario});
        } catch (err) {
          console.log(err.message);
          return err.message;
        }
      }
};

module.exports = UsuarioController
