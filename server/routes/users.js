// @ts-check

import i18next from 'i18next';

export default (app) => {
  app
    .get('/users', { name: 'users' }, async (req, reply) => {
      const users = await app.objection.models.user.query();
      reply.render('users/index', { users });
      return reply;
    })
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = new app.objection.models.user();
      reply.render('users/new', { user });
    })
    .get('/users/:id/edit', { name: 'settings' }, async (req, reply) => {
      const { id } = req.params;
      const user = await app.objection.models.user.query().findById(+id);

      reply.render('users/edit', { user });
      return reply;
    })
    .post('/users', async (req, reply) => {
      const user = new app.objection.models.user();
      user.$set(req.body.data);

      try {
        const validUser = await app.objection.models.user.fromJson(req.body.data);
        await app.objection.models.user.query().insert(validUser);
        req.flash('info', i18next.t('flash.users.create.success'));
        reply.redirect('/users');
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.users.create.error'));
        reply.render('users/new', { user, errors: data });
      }

      return reply;
    })
    .patch('/users/:id', { name: 'editUser' }, async (req, reply) => {
      const { id } = req.params;
      const user = await app.objection.models.user.query().findById(+id);

      try {
        const validUser = await app.objection.models.user.fromJson(req.body.data);
        await user.$query().patch(validUser);
        req.flash('info', i18next.t('flash.users.edit.success'));
        reply.redirect('/users');
      } catch({ data }) {
        req.flash('error', i18next.t('flash.users.edit.error'));
        reply.render('users/edit', { user, errors: data });
      }

      return reply;
    })
    .delete('/users/:id', { name: 'deleteUser' }, async (req, reply) => {
      const { id } = req.params;

      try {
        await app.objection.models.user.query().deleteById(+id);

        req.flash('info', i18next.t('flash.users.delete.success'));
      } catch(e) {
        console.log(e);
        req.flash('error', i18next.t('flash.users.delete.error'));
      }

      reply.redirect('/users');
      return reply;
    });
};
