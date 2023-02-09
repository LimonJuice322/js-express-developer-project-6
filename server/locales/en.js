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
      statuses: {
        create: {
          success: 'Status has been created successfully',
          error: 'An error occurred while creating',
        },
        edit: {
          error: 'Wrong data',
          success: 'Data changed successfully',
        },
        delete: {
          success: 'Status has been deleted successfully',
          error: 'An error occurred while deleting',
        },
      },
      authError: 'Access denied! Please login',
    },
    fields: {
      password: 'Password',
      email: 'Email',
      name: 'Name',
      firstName: 'First name',
      lastName: 'Last name',
    },
    layouts: {
      application: {
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
        statuses: 'Statuses',
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
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        edit: {
          submit: 'Submit',
          signUp: 'Edit settings',
        }
      },
      statuses: {
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        create: 'Create',
      },
      status: {
        heading: 'Create status',
        editHeading: 'Change status',
        submit: 'Submit',
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
    },
    action: {
      edit: 'Edit',
      delete: 'Delete',
    },
  },
};
