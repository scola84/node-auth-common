export default {
  scola: {
    auth: {
      caps: 'Caps Lock is on.',
      closed: 'You are not connected to the server.',
      login: {
        link: 'Inloggen',
        pop: {
          ok: 'OK',
          title: 'Login failed'
        }
      },
      password: 'Password',
      password2: 'Retype password',
      persistent: 'Keep me logged in',
      reset: {
        comment: 'Enter your e-mail address above and send the form. You will the receive an e-mail containing a link to reset your password',
        error: {
          title: 'Sending failed'
        },
        link: 'Reset password',
        pop: {
          ok: 'OK'
        },
        success: {
          text: 'If the account exists, an e-mail has been sent',
          title: 'E-mail sent'
        }
      },
      set: {
        comment: 'Enter a strong password above. Use at least 8 characters, of which 1 uppercase, 1 lowercase, 1 numeric and 1 special charcter.',
        error: {
          title: 'Resetting failed'
        },
        pop: {
          ok: 'OK'
        },
        success: {
          text: 'Your password has been set. You will now be sent to the login page.',
          title: 'Password set'
        }
      },
      username: 'Username'
    },
    error: {
      invalid_auth: 'You have no access.',
      invalid_credentials: 'Your username and/or password are incorrect.',
      invalid_hash: 'A server error occurred.',
      invalid_mail: 'A server error occurred.',
      invalid_password: 'The password is not strong enough. Please see the instructions below the form.',
      invalid_password2: 'The passwords are not equal.',
      invalid_sign: 'The session could not be started.',
      invalid_token_login: 'Your session has expired.',
      invalid_token_reset: 'The link to reset your password has expired.',
      invalid_user: 'You are not logged in.',
      short: {
        invalid_auth: 'No Access',
        invalid_credentials: 'Credentials Incorrect',
        invalid_hash: 'Server Error',
        invalid_mail: 'Server Error',
        invalid_password: 'Password Not Strong',
        invalid_password2: 'Passwords Not Equal',
        invalid_sign: 'Session Error',
        invalid_token_login: 'Session Error',
        invalid_token_reset: 'Link Expired',
        invalid_user: 'Not Logged In'
      }
    }
  }
};
