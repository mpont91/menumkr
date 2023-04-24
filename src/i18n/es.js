export default {
  validation: {
    email: 'El campo {attribute} debe ser un correo electrónico válido.',
    required: 'El campo {attribute} es requerido.',
  },
  auth: {
    login: {
      email: 'Correo electrónico',
      password: 'Contraseña',
      action: 'Iniciar sesión',
      reset: '¿Has olvidado la contraseña?',
    },
    reset_password: {
      email: 'Correo electrónico',
      action: 'Enviar',
      login: 'Iniciar sesión a tu cuenta',
    },
    register: {
      email: 'Correo electrónico',
      password: 'Contraseña',
      password_confirm: 'Confirma contraseña',
      action: 'Registrarse',
      login: '¿Ya tienes una cuenta?',
    },
  },
}
