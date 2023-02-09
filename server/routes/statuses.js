// @ts-check

import i18next from 'i18next';

export default (app) => {
  app
    .get('/statuses', { name: 'statuses' }, async (req, reply) => {
      const statuses = await app.objection.models.taskStatus.query();

      reply.render('statuses/index', { statuses });
      return reply;
    })
    .get('/statuses/new', { name: 'statusCreate' }, async (req, reply) => {
      reply.render('statuses/new');
      return reply;
    })
    .get('/statuses/:id/edit', { name: 'statusEdit' }, async (req, reply) => {
      const { id } = req.params;
      const status = await app.objection.models.taskStatus.query().findById(+id);

      reply.render('statuses/edit', { status });
      return reply;
    })
    .post('/statuses', { name: 'statusNew' }, async (req, reply) => {
      const status = new app.objection.models.taskStatus();
      status.$set(req.body.data);

      try {
        const validUser = await app.objection.models.taskStatus.fromJson(req.body.data);
        await app.objection.models.taskStatus.query().insert(validUser);
        req.flash('info', i18next.t('flash.statuses.create.success'));
        reply.redirect('/statuses');
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.statuses.create.error'));
        reply.render('statuses/new', { status, errors: data });
      }

      return reply;
    })
    .patch('/statuses/:id', { name: 'editStatus' }, async (req, reply) => {
      const { id } = req.params;
      const status = await app.objection.models.taskStatus.query().findById(+id);

      try {
        const validStatus = await app.objection.models.taskStatus.fromJson(req.body.data);
        await status.$query().patch(validStatus);
        req.flash('info', i18next.t('flash.statuses.edit.success'));
        reply.redirect('/statuses');
      } catch({ data }) {
        req.flash('error', i18next.t('flash.statuses.edit.error'));
        reply.render('statuses/edit', { status, errors: data });
      }

      return reply;
    })
    .delete('/statuses/:id', { name: 'deleteStatus' }, async (req, reply) => {
      const { id } = req.params;

      try {
        await app.objection.models.taskStatus.query().deleteById(+id);

        req.flash('info', i18next.t('flash.statuses.delete.success'));
      } catch(e) {
        console.log(e);
        req.flash('error', i18next.t('flash.statuses.delete.error'));
      }

      reply.redirect('/statuses');
      return reply;
    });
};
