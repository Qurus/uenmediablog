NEWSCHEMA('Contact').make(function(schema) {

	schema.define('id', 'String(20)');
	schema.define('firstname', 'Camelize(40)', true);
	schema.define('lastname', 'Camelize(40)', true);
	schema.define('email', 'Email', true);
	schema.define('body', String, true);
	schema.define('phone', 'Phone');
	schema.define('language', 'Lower(2)');
	schema.define('recaptcha', 'String', true);

	// Saves the model into the database
	schema.addWorkflow('reCAPTCHA', function(error, model, options, callback, controller) {
        RESTBuilder.make(function(builder) {
            builder.url('https://www.google.com/recaptcha/api/siteverify');
            builder.set('secret', '6LdfcSYUAAAAAC8ryR4ZomFbMQpjfc4nK3fM0oxn');
            builder.set('response', model.recaptcha);
            controller && builder.set('remoteip', controller.ip);
            builder.urlencoded();
            builder.exec(function(err, response) {
                if (err || !response.success)
                    error.push('error-recaptcha');
                callback(SUCCESS(true));
            });
        }); 
    });
	schema.setSave(function(error, model, options, callback, controller) {

		model.id = UID();
		model.datecreated = F.datetime;
		controller && (model.ip = controller.ip);

		NOSQL('contactforms').insert(model.$clean());
		MODULE('webcounter').increment('contactforms');
		callback(SUCCESS(true));

		F.emit('contact.save', model);

		// Sends email
		var mail = F.mail(F.config.custom.emailcontactform, '@(Contact form #) ' + model.id, '=?/mails/contact', model, model.language || '');
		mail.reply(model.email, true);
	});
	

});