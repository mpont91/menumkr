export default {
  api: {
    error_message: 'We are sorry. Something went wrong.',
    error_caption: 'Try it again and if the problem persists contact us.',
    success: 'The action has been executed successfully.',
    validation: 'There are some validation errors.',
  },
  field: {
    name: 'Name',
    email: 'Email',
    password: 'Password',
    password_confirm: 'Confirm password',
  },
  action: {
    dismiss: 'Dismiss',
  },
  menu: {
    auth_login: 'Login',
    auth_register: 'Register',
    auth_logout: 'Logout',
    dashboard: 'Dashboard',
  },
  validation: {
    email: 'The {attribute} must be a valid email address.',
    required: 'The {attribute} field is required.',
    password_confirm: 'Passwords did not match.',
    password_length: 'Password length must be greater than {n} characters.',
  },
  language: {
    es: 'Spanish',
    en: 'English',
  },
  auth: {
    login: {
      title: 'Login to your account',
      action: 'Login',
      forgot_password: 'Have you forgotten your password?',
      success_message: 'You have been logged in successfully.',
      success_caption: 'You will be redirected automatically.',
    },
    forgot_password: {
      title: 'Have you forgotten your password?',
      action: 'Submit',
      login: 'Login into your account',
      success_message: 'We have sent you an email with the instructions for resetting the password.',
    },
    reset_password: {
      title: 'Resetting your password',
      action: 'Reset password',
      login: 'Do you already have an account?',
      success_message: 'You have reset the password successfully.',
      success_caption: 'You will be redirected to the login page automatically.',
    },
    register: {
      title: 'Creating a new account',
      action: 'Register',
      login: 'Do you already have an account?',
      success_message: 'You have been registered successfully.',
      success_caption: 'You will logged in and redirected automatically.',
    },
    logout: {
      success_message: 'You have been logged out successfully.',
      success_caption: 'You will be redirected automatically.',
    },
  },
}
