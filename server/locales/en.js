// @ts-check

export default {
  translation: {
    appName: 'Fastify Boilerplate',
    flash: {
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register',
          success: 'User registered successfully',
        },
        edit: {
          error: 'Wrong data',
          success: 'Data changed successfully',
        },
        delete: {
          success: 'User has been deleted successfully',
          error: 'An error occurred while deleting',
        }
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
        settings: 'Settings',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        id: 'ID',
        email: 'Email',
        firstName: 'First name',
        lastName: 'Last Name',
        actions: 'Actions',
        action: {
          edit: 'Edit',
          delete: 'Delete',
        },
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        edit: {
          submit: 'Submit',
          signUp: 'Edit settings',
        }
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
    },
  },
};
