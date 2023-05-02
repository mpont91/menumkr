export default {
  api: {
    error_message: 'Lo sentimos. Se ha producido un error.',
    error_caption: 'Intentalo más tarde. Si el problema persiste contacta con nosotros.',
    success: 'La acción se ha ejecutado con éxito.',
    validation: 'Hay errores de validación',
  },
  field: {
    name: 'Nombre',
    email: 'Correo electrónico',
    password: 'Contraseña',
    password_confirm: 'Confirmar contraseña',
  },
  action: {
    dismiss: 'Descartar',
  },
  menu: {
    auth_login: 'Iniciar sesión',
    auth_register: 'Registrarse',
    auth_logout: 'Cerrar sesión',
    dashboard: 'Panel',
  },
  validation: {
    email: 'El campo {attribute} debe ser un correo electrónico válido.',
    required: 'El campo {attribute} es requerido.',
    password_confirm: 'Las contraseñas no coinciden.',
    password_length: 'La contraseña debe contener más de {n} carácteres.',
  },
  language: {
    es: 'Español',
    en: 'Inglés',
  },
  auth: {
    login: {
      title: 'Iniciar sesión a tu cuenta',
      action: 'Iniciar sesión',
      forgot_password: '¿Has olvidado la contraseña?',
      success_message: 'Has iniciado correctamente la sesión.',
      success_caption: 'Serás redirigido automáticamente.',
    },
    forgot_password: {
      title: '¿Has olvidado tu contraseña?',
      action: 'Enviar',
      login: 'Iniciar sesión a tu cuenta',
      success_message: 'Te hemos enviado un email con las instrucciones para restablecer la contraseña.',
    },
    reset_password: {
      title: 'Restableciendo tu contraseña',
      action: 'Resetear contraseña',
      login: '¿Ya tienes una cuenta?',
      success_message: 'Has restablecido correctamente la contraseña.',
      success_caption: 'Serás redirigido a la página de login automáticamente.',
    },
    register: {
      title: 'Creando una cuenta nueva',
      action: 'Registrarse',
      login: '¿Ya tienes una cuenta?',
      success_message: 'Te has registrado correctamente.',
      success_caption: 'Se te iniciará la sesión y serás redirigido automaticamente.',
    },
    logout: {
      success_message: 'Has cerrado correctamente la sesión.',
      success_caption: 'Serás redirigido automáticamente.',
    },
  },
}
