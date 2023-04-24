export default {
  validation: {
    email: 'The {attribute} must be a valid email address.',
    required: 'The {attribute} field is required.',
  },
  auth: {
    login: {
      email: 'Email',
      password: 'Password',
      action: 'Login',
      reset: 'Forgot your password?',
    },
    reset_password: {
      email: 'Email',
      action: 'Submit',
      login: 'Login into your account',
    },
    register: {
      email: 'Email',
      password: 'Password',
      password_confirm: 'Confirm password',
      action: 'Sign up',
      login: 'Do you already have an account?',
    },
  },
}
