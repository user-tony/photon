http://photon.com/
# Usage in Rails

To see this gem in action -

 - create a new Rails or greater project
 - add this to the gemfile:

	gem "photon-rails"
 - bundle
 - add that above code snippet to a file: app/assets/stylesheets/layout.css.scss
 - fire up the rails app
 - use curl from a shell to grab the file:

	curl http://locahost:3000/assets/layout.css

- script
    //= require js/plugins/modernizr.custom.js
    //= require js/plugins/jquery.pnotify.min.js
    //= require js/plugins/less-1.3.1.min.js
    //= require js/plugins/xbreadcrumbs.js
    //= require js/plugins/jquery.maskedinput-1.3.min.js
    //= require js/plugins/jquery.autotab-1.1b.js
    //= require js/plugins/charCount.js
    //= require js/plugins/jquery.textareaCounter.js
    //= require js/plugins/elrte.min.js
    //= require js/plugins/elrte.en.js
    //= require js/plugins/select2.js
    //= require js/plugins/jquery-picklist.min.js
    //= require js/plugins/jquery.validate.min.js
    //= require js/plugins/additional-methods.min.js
    //= require js/plugins/jquery.form.js
    //= require js/plugins/jquery.metadata.js
    //= require js/plugins/jquery.mocx.js
    //= require js/plugins/jquery.uniform.min.js
    //= require js/plugins/jquery.tagsinput.min.js
    //= require js/plugins/jquery.rating.pack.js
    //= require js/plugins/farbtastic.js
    //= require js/plugins/jquery.timeentry.min.js
    //= require js/plugins/jquery.dataTables.min.js
    //= require js/plugins/jquery.jstree.js
    //= require js/plugins/dataTables.bootstrap.js
    //= require js/plugins/jquery.mousewheel.min.js
    //= require js/plugins/jquery.mCustomScrollbar.js
    //= require js/plugins/jquery.flot.js
    //= require js/plugins/jquery.flot.stack.js
    //= require js/plugins/jquery.flot.pie.js
    //= require js/plugins/jquery.flot.resize.js
    //require js/plugins/raphael.2.1.0.min.js
    //= require js/plugins/justgage.1.0.1.min.js
    //= require js/plugins/jquery.qrcode.min.js
    //= require js/plugins/jquery.clock.js
    //= require js/plugins/jquery.countdown.js
    //= require js/plugins/jquery.jqtweet.js
    //= require js/plugins/jquery.cookie.js
    //= require js/plugins/bootstrap-fileupload.min.js
    //= require js/plugins/prettify/prettify.js
    //= require js/plugins/bootstrapSwitch.js
    //= require js/plugins/mfupload.js
    //= require js/common.js

# Versioning Semantics

Since this is simply packaging up an existing asset, I will use the version number of the asset I'm packaging, adding a least significant digit for any modifications to this gem, for things like documentation, dependencies, etc.

# License

The original asset is licensed under the Apache License, and that has been included in the vendor/assets/stylesheets directory as to be as close as possible to the original licensed work.

# Thanks

Thanks to Tyler Tate.  I'm just packaging his work up here in a format that plugs into Rails.
