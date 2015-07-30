/*!
 * jFile is “File uploading Ajax method for jQuery framework”.
 *
 * @author demorfi <demorfi@gmail.com>
 * @version 1.0
 * @source https://github.com/demorfi/jfile
 * @license http://opensource.org/licenses/MIT Licensed under MIT License
 */
(function ($)
{

    /**
     * Initialize.
     *
     * @param {object} [options] Available options
     * @param {string} [options.name] Name send file
     * @param {string} [options.type] Default work type
     * @param {boolean} [options.multiple] Support multi select file
     * @param {number} [options.maxSize] Maximum files upload size
     * @param {Array} [options.allowMimeType] Allow files mime type
     * @param {boolean|string} [options.submit] Id or class submit upload form
     * @param {boolean} [options.autoSubmit] Support auto submit form to select file
     * @param {number} [options.sizeImageScreen] Size image preview screen
     * @param {string} [options.url] Url send file and params
     * @param {string} [options.response] Type of server response
     * @param {boolean} [options.useThrownErrors] Use thrown errors for ajax errors callback
     * @param {Array} [options.params] Additional parameters sent form
     * @param {object} [options.callback] Size Function callback
     * @param {function} [options.callback.init] Callback init wrapper
     * @param {function} [options.callback.addList] Callback create file list
     * @param {function} [options.callback.validateFiles] Callback validate file
     * @param {function} [options.callback.duplicate] Callback duplicate select file in list
     * @param {function} [options.callback.errorFile] Callback error select file
     * @param {function} [options.callback.errorMime] Callback error select mime file type
     * @param {function} [options.callback.errorSize] Callback error size files in list
     * @param {function} [options.callback.validateSuccess] Callback success validate select file
     * @param {function} [options.callback.appendList] Callback append list select file
     * @param {function} [options.callback.addFile] Callback insert file in list
     * @param {function} [options.callback.changeFile] Callback change file button
     * @param {function} [options.callback.dropFile] Callback drop file area
     * @param {function} [options.callback.dragOver] Callback hover drag and drop area file
     * @param {function} [options.callback.preview] Callback show preview image
     * @param {function} [options.callback.previewOut] Callback out area preview image
     * @param {function} [options.callback.submit] Callback submit file list form
     * @param {function} [options.callback.success] Callback success uploading default user function
     * @param {function} [options.callback.failed] Callback failed uploading default user function
     * @param {function} [options.callback.upload] Callback upload files
     * @param {function} [options.callback.uploadProgress] Callback upload progress files
     * @param {function} [options.callback.uploadSuccess] Callback upload success files
     * @param {function} [options.callback.uploadBreak] Callback upload break files
     * @param {function} [options.callback.uploadError] Callback upload error files
     * @param {object} [options.animate] Animate effect
     * @param {object} [options.animate.add] Animate add file to list
     * @param {object} [options.animate.add.start] Start animate
     * @param {object} [options.animate.add.end] End animate
     * @param {object} [options.animate.remove] Animate remove file in list
     * @param {number} [options.animate.time] Time animate
     * @param {object} [options.messages] Set messages
     * @param {string} [options.messages.dragInsertFile] Message insert file
     * @param {string} [options.messages.sizeError] Message size file
     * @param {string} [options.messages.mimeError] Message error mime
     * @param {string} [options.messages.remove] Message remove file
     * @param {string} [options.messages.upload] Message upload file
     * @param {string} [options.messages.break] Message cancel upload file
     * @param {string} [options.messages.error] Message error file
     * @param {object} [options.tpl] Used template list
     * @param {string} [options.tpl.addToList] Template insert file
     * @param {object} [options.class] Used css class list
     * @param {string} [options.class.wrapper] Use class for element jfile-wrapper
     * @param {string} [options.class.list] Use class for element jfile-list
     * @param {string} [options.class.name] Use class for element jfile-name
     * @param {string} [options.class.type] Use class for element jfile-type
     * @param {string} [options.class.size] Use class for element jfile-size
     * @param {string} [options.class.remove] Use class for element jfile-remove
     * @param {string} [options.class.progress] Use class for element jfile-progress
     * @param {string} [options.class.progressPercent] Use class for element jfile-progress-percent
     * @param {string} [options.class.uploadBreak] Use class for element jfile-upload-break
     * @param {string} [options.class.drag] Use class for element jfile-drag
     * @param {string} [options.class.dragObject] Use class for element jfile-drag-object
     * @param {string} [options.class.dragOver] Use class for element jfile-drag-over
     * @param {string} [options.class.error] Use class for element jfile-error
     * @param {string} [options.class.success] Use class for element jfile-success
     * @param {string} [options.class.imagePreview] Use class for element jfile-image-preview
     * @param {string} [options.class.successIndicator] Use class for element jfile-indicator-success
     * @param {string} [options.class.errorIndicator] Use class for element jfile-indicator-error
     * @param {string} [options.class.indicator] Use class for element jfile-indicator
     * @param {string} [options.class.fileExt] Use class for element jfile-ext
     * @param {string} [options.class.preview] Use class for element jfile-preview
     * @return {object} jfile
     */
    $.fn.jfile = function (options)
    {
        var obj = new $__construct(this, options);
        obj.init();
        return (obj);
    };

    /**
     * Constructor application.
     * Merge default setting.
     *
     * @param {object} el <ul> html element
     * @param {object} [options] Available options
     * @param {string} [options.name] Name send file
     * @param {string} [options.type] Default work type
     * @param {boolean} [options.multiple] Support multi select file
     * @param {number} [options.maxSize] Maximum files upload size
     * @param {Array} [options.allowMimeType] Allow files mime type
     * @param {boolean|string} [options.submit] Id or class submit upload form
     * @param {boolean} [options.autoSubmit] Support auto submit form to select file
     * @param {number} [options.sizeImageScreen] Size image preview screen
     * @param {string} [options.url] Url send file and params
     * @param {string} [options.response] Type of server response
     * @param {boolean} [options.useThrownErrors] Use thrown errors for ajax errors callback
     * @param {Array} [options.params] Additional parameters sent form
     * @param {object} [options.callback] Size Function callback
     * @param {function} [options.callback.init] Callback init wrapper
     * @param {function} [options.callback.addList] Callback create file list
     * @param {function} [options.callback.validateFiles] Callback validate file
     * @param {function} [options.callback.duplicate] Callback duplicate select file in list
     * @param {function} [options.callback.errorFile] Callback error select file
     * @param {function} [options.callback.errorMime] Callback error select mime file type
     * @param {function} [options.callback.errorSize] Callback error size files in list
     * @param {function} [options.callback.validateSuccess] Callback success validate select file
     * @param {function} [options.callback.appendList] Callback append list select file
     * @param {function} [options.callback.addFile] Callback insert file in list
     * @param {function} [options.callback.changeFile] Callback change file button
     * @param {function} [options.callback.dropFile] Callback drop file area
     * @param {function} [options.callback.dragOver] Callback hover drag and drop area file
     * @param {function} [options.callback.preview] Callback show preview image
     * @param {function} [options.callback.previewOut] Callback out area preview image
     * @param {function} [options.callback.submit] Callback submit file list form
     * @param {function} [options.callback.success] Callback success uploading default user function
     * @param {function} [options.callback.failed] Callback failed uploading default user function
     * @param {function} [options.callback.upload] Callback upload files
     * @param {function} [options.callback.uploadProgress] Callback upload progress files
     * @param {function} [options.callback.uploadSuccess] Callback upload success files
     * @param {function} [options.callback.uploadBreak] Callback upload break files
     * @param {function} [options.callback.uploadError] Callback upload error files
     * @param {object} [options.animate] Animate effect
     * @param {object} [options.animate.add] Animate add file to list
     * @param {object} [options.animate.add.start] Start animate
     * @param {object} [options.animate.add.end] End animate
     * @param {object} [options.animate.remove] Animate remove file in list
     * @param {number} [options.animate.time] Time animate
     * @param {object} [options.messages] Set messages
     * @param {string} [options.messages.dragInsertFile] Message insert file
     * @param {string} [options.messages.sizeError] Message size file
     * @param {string} [options.messages.mimeError] Message error mime
     * @param {string} [options.messages.remove] Message remove file
     * @param {string} [options.messages.upload] Message upload file
     * @param {string} [options.messages.break] Message cancel upload file
     * @param {string} [options.messages.error] Message error file
     * @param {object} [options.tpl] Used template list
     * @param {string} [options.tpl.addToList] Template insert file
     * @param {object} [options.class] Used css class list
     * @param {string} [options.class.wrapper] Use class for element jfile-wrapper
     * @param {string} [options.class.list] Use class for element jfile-list
     * @param {string} [options.class.name] Use class for element jfile-name
     * @param {string} [options.class.type] Use class for element jfile-type
     * @param {string} [options.class.size] Use class for element jfile-size
     * @param {string} [options.class.remove] Use class for element jfile-remove
     * @param {string} [options.class.progress] Use class for element jfile-progress
     * @param {string} [options.class.progressPercent] Use class for element jfile-progress-percent
     * @param {string} [options.class.uploadBreak] Use class for element jfile-upload-break
     * @param {string} [options.class.drag] Use class for element jfile-drag
     * @param {string} [options.class.dragObject] Use class for element jfile-drag-object
     * @param {string} [options.class.dragOver] Use class for element jfile-drag-over
     * @param {string} [options.class.error] Use class for element jfile-error
     * @param {string} [options.class.success] Use class for element jfile-success
     * @param {string} [options.class.imagePreview] Use class for element jfile-image-preview
     * @param {string} [options.class.successIndicator] Use class for element jfile-indicator-success
     * @param {string} [options.class.errorIndicator] Use class for element jfile-indicator-error
     * @param {string} [options.class.indicator] Use class for element jfile-indicator
     * @param {string} [options.class.fileExt] Use class for element jfile-ext
     * @param {string} [options.class.preview] Use class for element jfile-preview
     * @private
     * @constructor
     * @return {object} this
     */
    var $__construct = function (el, options)
    {
        this.version = 1.0;
        this.options = $.extend(true, {
            'name'           : 'jfile',
            'type'           : '',
            'multiple'       : true,
            'maxSize'        : 0,
            'allowMimeType'  : [],
            'submit'         : false,
            'autoSubmit'     : false,
            'sizeImageScreen': 300,
            'url'            : '/',
            'response'       : 'text',
            'useThrownErrors': true,
            'params'         : {},
            'callbacks'      : {
                'init'           : null,
                'addList'        : null,
                'validateFiles'  : null,
                'duplicate'      : null,
                'validateSuccess': null,
                'appendList'     : null,
                'addFile'        : null,
                'changeFile'     : null,
                'dropFile'       : null,
                'dragOver'       : null,
                'submit'         : null,
                'success'        : null,
                'failed'         : null,
                'upload'         : null,

                /**
                 * Callback error select file.
                 *
                 * @param {string} message Message error file
                 * @param {object} file File
                 * @param {object} el File element
                 * @param {string} list Id element to files list
                 * @param {object} event Event file
                 * @return {void}
                 */
                'errorFile': function (message, file, el, list, event)
                {
                    // fake append file
                    var item = (this.addToList(
                        list,
                        {
                            'list'  : [file],
                            'size'  : file.size,
                            'length': 1
                        },
                        el,
                        event
                    )[0]).removeData('jfileItem');

                    // auto remove file from list
                    this.changeStatus(list, 'error', message);
                    setTimeout($.proxy(function (item)
                    {
                        item.find(this.getClass('remove', true)).trigger('click.jfileRemove');
                    }, this, item), 4000);
                },

                /**
                 * Callback error select mime file type.
                 *
                 * @param {object} file File
                 * @param {object} el File element
                 * @param {string} list Id element to files list
                 * @param {object} event Event file
                 * @return {void}
                 */
                'errorMime': function (file, el, list, event)
                {
                    this.getCallback('errorFile').call(this,
                        this.getMessage('mimeError'), file, el, list, event);
                },

                /**
                 * Callback error size files in list.
                 *
                 * @param {object} file File
                 * @param {object} el File element
                 * @param {string} list Id element to files list
                 * @param {object} event Event file
                 * @return {void}
                 */
                'errorSize': function (file, el, list, event)
                {
                    this.getCallback('errorFile').call(this,
                        this.getMessage('sizeError'), file, el, list, event);
                },

                /**
                 * Callback show preview image.
                 *
                 * @param {jQuery} objImage Preview image
                 * @return {void}
                 */
                'preview': function (objImage)
                {
                    objImage.stop().fadeIn(300);
                },

                /**
                 * Callback hide preview image.
                 *
                 * @param {jQuery} objImage Preview image
                 * @return {void}
                 */
                'previewOut': function (objImage)
                {
                    objImage.stop(false, true).fadeOut(300);
                },

                /**
                 * Animate progress upload.
                 *
                 * @param {object} item jQuery item file upload
                 * @param {number} progress Uploaded progress
                 * @return {void}
                 */
                'uploadProgress': function (item, progress)
                {
                    item.find(this.getClass('progressPercent', true)).stop().animate({
                        'width': progress + '%'
                    }, 100);
                },

                /**
                 * Callback upload success files.
                 *
                 * @param {object} item jQuery item file upload
                 * @return {void}
                 */
                'uploadSuccess': function (item)
                {
                    // add uploading time
                    var time = this.getMessage('upload')
                        .replace('{time}', (new Date().toLocaleFormat('%d.%m.%y %H:%M')));

                    this.changeStatus(item, 'success', time);
                },

                /**
                 * Callback upload break files.
                 *
                 * @param {object} item jQuery item file upload
                 * @return {void}
                 */
                'uploadBreak': function (item)
                {
                    this.changeStatus(item, 'error', this.getMessage('break'));
                },

                /**
                 * Callback upload error files.
                 *
                 * @param {object} item jQuery item file upload
                 * @param {string} message Uploaded message error
                 * @return {void}
                 */
                'uploadError': function (item, message)
                {
                    message = this.getOption('useThrownErrors')
                        ? message : this.getMessage('error');

                    this.changeStatus(item, 'error', message);
                }
            },

            'animate': {
                'add'   : {
                    'start': {
                        'height'        : 0,
                        'padding-top'   : 0,
                        'padding-bottom': 0,
                        'opacity'       : 0
                    },
                    'end'  : {
                        'height'        : 34,
                        'padding-top'   : 5,
                        'padding-bottom': 5,
                        'opacity'       : 1
                    }
                },
                'remove': {
                    'height'        : 0,
                    'padding-top'   : 0,
                    'padding-bottom': 0,
                    'opacity'       : 0
                },
                'time'  : 500
            },

            'messages': {
                'dragInsertFile': 'Drag file to load',
                'sizeError'     : 'Size exceeded',
                'mimeError'     : 'Invalid file format',
                'remove'        : 'Delete file from list',
                'upload'        : 'Uploaded: {time}',
                'break'         : 'Upload canceled',
                'error'         : 'Upload interrupted'
            },

            'tpl': {
                'addToList': '<div class="jfile-type"></div>'
                             + '<div class="jfile-name">{name}</div>'
                             + '<div class="jfile-size">{size}</div>'
                             + '<div class="jfile-progress"><div class="jfile-progress-percent"></div></div>'
                             + '<div class="jfile-remove"></div>'
            },

            'class': {
                'wrapper'         : 'jfile-wrapper',
                'list'            : 'jfile-list',
                'name'            : 'jfile-name',
                'type'            : 'jfile-type',
                'size'            : 'jfile-size',
                'remove'          : 'jfile-remove',
                'progress'        : 'jfile-progress',
                'progressPercent' : 'jfile-progress-percent',
                'uploadBreak'     : 'jfile-upload-break',
                'drag'            : 'jfile-drag',
                'dragObject'      : 'jfile-drag-object',
                'dragOver'        : 'jfile-drag-over',
                'error'           : 'jfile-error',
                'success'         : 'jfile-success',
                'imagePreview'    : 'jfile-image-preview',
                'successIndicator': 'jfile-indicator-success',
                'errorIndicator'  : 'jfile-indicator-error',
                'indicator'       : 'jfile-indicator',
                'fileExt'         : 'jfile-ext',
                'preview'         : 'jfile-preview'
            }
        }, options);

        this.$el = $(el);
        return (this);
    };

    /**
     * Constructor application prototype.
     *
     * @private
     * @constructor
     */
    $__construct.prototype = {

        /**
         * Initialize in prototype.
         *
         * @return {void}
         */
        init: function ()
        {
            var $self = this;

            // submit trigger send form
            var submit = this.getOption('submit');
            if (submit) {
                if (/^(#|\.)/g.test(submit) && !$(submit).data('jfileSubmit')) {
                    this.triggerSubmit = $(submit).on('click.jfileSubmit', this, $.proxy(this.submit, this));
                    $(submit).data('jfileSubmit', this.triggerSubmit);
                }
            }

            $.each(this.$el, function ()
            {
                // hide region by file name
                if ($(this).attr('name') == $(this).data('jfile-id')) {
                    $(this).css({
                        'position': 'absolute',
                        'left'    : '-99999px'
                    });
                }
                else {
                    $(this).wrap($('<div>').addClass($self.getClass('wrapper'))).show();
                }

                // define of used type
                var type = $self.getOption('type');
                if ($self.getOption('type') == '') {
                    var objType = $(this).attr('type');
                    type = objType != 'file' && objType != 'button' ? 'range' : objType;
                }

                // add an event based on method used uploading
                var eventType = type.toLowerCase().charAt(0).toUpperCase() + type.slice(1);
                $self.addEventType(this, eventType);
            });

            this.getCallback('init').call(this, this.$el);
        },

        /**
         * Add event element type.
         *
         * @private
         * @param {object} el jQuery init element
         * @param {string} name Event method name
         * @return {boolean}
         */
        addEventType: function (el, name)
        {
            if (!$.isFunction(this['init' + name])) {
                return (false);
            }

            // trigger submit form
            var submitForm = $(el).closest('form');
            if (submitForm.length && !this.getOption('submit') && !submitForm.data('jfileSubmit')) {
                this.triggerSubmit = submitForm.on('submit.jfileSubmit', this, $.proxy(this.submit, this))
                    .data('jfileSubmit', this.triggerSubmit);
            }

            $(el).data('jfileSelf', this);
            $(el).attr('type') == 'file' && $(el).val('');

            this['init' + name].call(this, el);
            return (true);
        },

        /**
         * Change status item file.
         *
         * @param {object} item jQuery file item
         * @param {string} [status] Status type
         * @param {string} [message] Message status
         * @return {void}
         */
        changeStatus: function (item, status, message)
        {
            var $self = this;

            item.find(this.getClass('indicator', true)).remove();
            item.find(this.getClass('progress', true)).stop().fadeTo(500, !status ? 1 : 0, status ? function ()
            {
                $(this).hide().after(
                    $('<div>').addClass($self.getClass('indicator ' + status + 'Indicator'))
                        .text(message).hide().fadeTo(500, 1)
                );
            } : $.noop);
        },

        /**
         * Get class name.
         *
         * @param {string} name Class or classes id
         * @param {boolean} [selector] Use css selector
         * @return {string}
         */
        getClass: function (name, selector)
        {
            if (name.indexOf(' ') !== -1) {
                return (name.split(' ').map($.proxy(function (name)
                {
                    if (name.length) {
                        return (this.getClass(name, selector));
                    }
                }, this)).join(selector ? '' : ' '));
            }
            return ((selector ? '.' : '') + this.options['class'][name]);
        },

        /**
         * Get callback function.
         *
         * @param {string} name Callback id
         * @return {function}
         */
        getCallback: function (name)
        {
            return ($.isFunction(this.options.callbacks[name]) ? this.options.callbacks[name] : $.noop);
        },

        /**
         * Get option value.
         *
         * @param {string} name Option id
         * @return {*}
         */
        getOption: function (name)
        {
            return (this.options[name]);
        },

        /**
         * Change option.
         *
         * @param {string} name Option id
         * @param {*} value Option value
         * @return {void}
         */
        setOption: function (name, value)
        {
            this.options[name] = value;
        },

        /**
         * Get app version.
         *
         * @return {number}
         */
        getVersion: function ()
        {
            return (this.version);
        },

        /**
         * Get animate options.
         *
         * @param {string} name Animate id
         * @return {object}
         */
        getAnimateOptions: function (name)
        {
            return (this.options.animate[name]);
        },

        /**
         * Get template.
         *
         * @param {string} name Template id
         * @return {string}
         */
        getTemplate: function (name)
        {
            return (this.options.tpl[name]);
        },

        /**
         * Change template.
         *
         * @param {string} name Template id
         * @param {string} value Template
         * @return {void}
         */
        setTemplate: function (name, value)
        {
            this.options.tpl[name] = value;
        },

        /**
         * Get message string.
         *
         * @param {string} name Message string id
         * @return {string}
         */
        getMessage: function (name)
        {
            return (this.options.messages[name]);
        },

        /**
         * Get link items list.
         *
         * @param {object} el jQuery field element
         * @return {object|boolean}
         */
        getList: function (el)
        {
            var jfileId = $(el).data('jfile-id');
            if (jfileId) {
                var jfileRef = $('[data-jfile-ref="' + jfileId + '"]');
                if (jfileRef.length) {
                    return (this.getList(jfileRef));
                }

                var jfileRefId = $('#' + jfileId);
                return (jfileRefId.length ? jfileRefId : false);
            }
            return (false);
        },

        /**
         * Get input name for type file.
         *
         * @param {object|string} el jQuery file element
         * @return {string} Find item or name of options
         */
        getNameToFile: function (el)
        {
            // check parent element
            var parent  = $(el).data('jfileItemParent'),
                objReal = $(parent ? parent : el);
            if (objReal.attr('type') == 'file' && objReal.attr('name').length) {
                return (objReal.attr('name'));
            }
            return (this.getOption('name'));
        },

        /**
         * Add wrap <ul> files list.
         *
         * @param {object|string} el jQuery element or jQuery selector
         * @return {object} jQuery link created list
         */
        addList: function (el)
        {
            var wrap = $(el).find('ul');
            if (!wrap.length) {
                wrap = $('<ul>').addClass(this.getClass('list')).prependTo(el);
                this.getCallback('addList').call(this, el);
            }
            return (wrap);
        },

        /**
         * Get formatting file size.
         *
         * @param {number} size File size
         * @return {string} 1b, 100Kb, 200Mb, 1Gb
         */
        fileSize: function (size)
        {
            var unit  = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
                index = Math.floor(Math.floor(Math.log(size) / Math.log(1024)));
            return (Math.round(size / Math.pow(1024, index)) + unit[index]);
        },

        /**
         * Get info select file.
         *
         * @param {object} file File object
         * @return {object} File formatting info
         */
        getFileInfo: function (file)
        {
            var ext = /\.([^.\\/:*?"<>|\r\n]+$)/.exec(file.name);
            return ({
                'name': file.name,
                'size': this.fileSize(file.size),
                'type': file.type,
                'ext' : ext ? ext[1].toLowerCase() : ''
            });
        },

        /**
         * Find duplicate file in files list.
         *
         * @param {object} file File element
         * @param {Array} fileList Files list
         * @return {boolean}
         */
        checkDuplicateFile: function (file, fileList)
        {
            for (var item in fileList) {
                if (fileList.hasOwnProperty(item)) {

                    item = fileList[item];
                    if (item.name == file.name && item.size == file.size) {
                        return (true);
                    }
                }
            }
            return (false);
        },

        /**
         * Validate select file.
         *
         * @private
         * @param {object} el jQuery selected file
         * @param {object} event Event selected file
         * @return {object|boolean} Validate information file
         */
        validateFiles: function (el, event)
        {
            var list          = this.getList(el),
                dataList      = $(list).data('jfileList'),
                dataSize      = parseInt(dataList ? dataList.size : 0),
                currList      = dataList ? dataList.list : [],
                maxSize       = this.getOption('maxSize'),
                allowMimeType = this.getOption('allowMimeType').join('|').replace(/\*/g, '.*').replace(/\//g, '\\/');

            // template validated files
            var files = {
                'length'  : 0,
                'size'    : 0,
                'list'    : [],
                'validate': false
            };

            // if setting area drag and drop, use event as el object
            if ($(event.currentTarget).hasClass(this.getClass('dragObject'))) {
                el = event;
            }

            // empty files
            if (!el.files || $.isEmptyObject(el.files)) {
                return (false);
            }

            this.getCallback('validateFiles').call(this, el, list, event);

            // each file list
            for (var i = 0; i < el.files.length; i++) {
                var file = el.files[i];

                // search duplicate select file
                if (currList.length && this.checkDuplicateFile(file, currList)) {
                    this.getCallback('duplicate').call(this, file, el, currList, event);
                    continue;
                }

                // check exceeded file size
                if (maxSize && maxSize <= Math.round((dataSize + file.size) / 1024)) {
                    this.getCallback('errorSize').call(this, file, el, list, event);
                    continue;
                }

                // check allow file mime type
                if (allowMimeType.length && !(new RegExp(allowMimeType, 'g')).test(file.type)) {
                    this.getCallback('errorMime').call(this, file, el, list, event);
                    continue;
                }

                // addition validate file information
                files.list[files.length] = file;
                files.length++;
                dataSize += file.size;
                files.size += file.size;
                files.validate = true;

                this.getCallback('validateSuccess').call(this, el, list, file, files, event);
            }
            return (files.length ? files : false);
        },

        /**
         * Append new upload file to list.
         *
         * @private
         * @param {object} list jQuery files list
         * @param {object} files Validate files
         * @return {void}
         */
        addFilesToList: function (list, files)
        {
            var jfileList = $(list).data('jfileList'),
                currList   = jfileList ? jfileList : [],
                wrap       = $(list).closest(this.getClass('wrapper', true));

            // wrapper list if prev created
            !wrap.length && $(list).wrap($('<div>').addClass(this.getClass('wrapper')));

            // merge append files list
            if (currList.length && this.getOption('multiple') && files.validate) {
                $(list).data('jfileList', {
                    'list'  : $.merge(currList.list, files.list),
                    'length': currList.length + files.length,
                    'size'  : currList.size + files.size
                });
            } else {
                files.validate && $(list).data('jfileList', files);
            }

            this.getCallback('appendList').call(this, list, files);
        },

        /**
         * Build files list.
         *
         * @private
         * @param {object} list jQuery files list
         * @param {object} files Validate files
         * @param {object} el Item element
         * @param {object} event Item element
         * @return {object|Array} List insert
         */
        addToList: function (list, files, el, event)
        {
            if (!files.length) {
                return (list);
            }

            // update file list
            if (!list && files.validate) {
                $(el).data('jfileList', files);
                return (list);
            }

            // append files list
            this.addFilesToList(list, files);

            // each insert files to list
            var insertList = [];
            for (var i = 0; i < files.list.length; i++) {
                var file      = files.list[i],
                    fileInfo  = this.getFileInfo(file),
                    linkList  = this.addList(list),

                    // check file type. If type image, add label zoom
                    imageFile = FileReader !== undefined && /^image\/.*$/g.test(fileInfo.type),

                    // template file name and file size - visual information
                    template  = this.getTemplate('addToList')
                        .replace('{name}', fileInfo.name).replace('{size}', fileInfo.size);

                // file item information
                var item = $('<li>')
                    .data('jfileItem', file)
                    .data('jfileItemParent', el)
                    .css(this.getAnimateOptions('add').start)
                    .stop().animate(this.getAnimateOptions('add').end, this.getAnimateOptions('time'))
                    .append(template);

                item.on({

                    // trigger upload file
                    'jfileUpload': $.proxy(function (item, list)
                    {
                        return (this.upload([
                            {
                                'list': list,
                                'item': item,
                                'file': $(item).data('jfileItem')
                            }
                        ]));
                    }, this, item, list),

                    // trigger remove file, not upload
                    'jfileRemove': $.proxy(function (item)
                    {
                        return ($(item).find(this.getClass('remove', true).trigger('click.jfileRemove')));
                    }, this, item, list)
                });

                // element type file
                item.find(this.getClass('type', true))
                    .addClass(this.getClass('fileExt' + (imageFile ? ' preview' : '')) + ' ' + fileInfo.ext)
                    .on({

                        // trigger view image window screen
                        'click.jfileType': $.proxy(function (file, event)
                        {
                            // check support browser method FileReader
                            if (FileReader !== undefined && /^image\/.*$/g.test(file.type)) {

                                // loaded image
                                var objImage = $(event.currentTarget).find('img');
                                if (objImage.length) {
                                    this.getCallback('preview').call(this, objImage, event);
                                } else {
                                    $('<img>').addClass(this.getClass('imagePreview'))
                                        .appendTo(event.currentTarget).hide();

                                    // calculate position image
                                    objImage = $(event.currentTarget).find('img').css({
                                        'top' : $(event.currentTarget).height() / 2,
                                        'left': $(event.currentTarget).width() + 2
                                    });

                                    // trigger load image screen
                                    var reader = new FileReader();
                                    reader.onload = $.proxy(function ($self, event)
                                    {
                                        $(this).attr('src', event.target.result).hide();
                                        setTimeout($.proxy(function ($self, event)
                                        {
                                            var sizeScreen  = $self.getOption('sizeImageScreen'),
                                                imageWidth  = $(this).width(),
                                                imageHeight = $(this).height();

                                            // check width and height image window
                                            if (imageWidth > imageHeight && imageWidth > sizeScreen) {
                                                $(this).attr('width', sizeScreen);
                                            }
                                            else {
                                                if (imageHeight > sizeScreen) {
                                                    $(this).attr('height', sizeScreen);
                                                }
                                            }

                                            $self.getCallback('preview').call($self, this, event);
                                        }, this, $self, event), 100);
                                    }, objImage, this);

                                    reader.readAsDataURL(file);
                                }
                            }
                        }, this, file),

                        // trigger view image window screen
                        'mouseout.jfileType': $.proxy(function (file, event)
                        {
                            // check support browser method FileReader
                            if (FileReader !== undefined && /^image\/.*$/g.test(file.type)) {
                                this.getCallback('previewOut').call(this, $(event.currentTarget).find('img'), event);
                            }
                        }, this, file)
                    });

                // element remove file
                item.find(this.getClass('remove', true))
                    .attr('title', this.getMessage('remove'))

                    // trigger remove file in list
                    .on('click.jfileRemove', $.proxy(function (el, parent, event)
                    {
                        var list     = $(event.currentTarget).closest('ul'),
                            listItem = $(event.currentTarget).closest('li'),
                            files    = list.parent().data('jfileList'),
                            file     = listItem.data('jfileItem');

                        if (files) {

                            // check file in list
                            for (var i = 0; i < files.length; i++) {
                                var fileName = files.list[i].name,
                                    fileSize = files.list[i].size;

                                // update file list
                                if (fileName !== undefined && fileName == file.name && fileSize == file.size) {
                                    files.list.splice(i, 1);

                                    // calculate files information
                                    files.length--;
                                    if (files.size && file.size) {
                                        files.size -= file.size;
                                    }
                                }
                            }
                        }

                        // upload break
                        $(event.currentTarget).trigger('jfileUploadBreak');
                        list.parent().data('jfileList', files);
                        listItem.addClass('jfileAnimate')

                            // animate remove file in list
                            .stop().animate(
                            this.getAnimateOptions('remove'),
                            this.getAnimateOptions('time'),
                            $.proxy(function (el)
                            {
                                var list = $(this).closest('ul');
                                $(this).remove();

                                // if last file in the list, setting empty value file field
                                if (!$(list).find('li').length) {
                                    $(list).remove();
                                    $(el).val('');
                                }
                            }, listItem, el));

                    }, this, el, event));

                item.appendTo(linkList);
                insertList.push(item);

                this.getCallback('addFile').call(this, item, fileInfo, list, files);
            }
            return (insertList);
        },

        /**
         * Initialize file method.
         *
         * @param {object} el File element
         * @return {void}
         */
        initFile: function (el)
        {
            $(el).attr({
                'accept'  : this.getOption('allowMimeType').join(','),
                'multiple': this.getOption('multiple') ? 'multiple' : false
            });

            // trigger change select file
            $(el).on('change.jfileItem', $.proxy(function (el, event)
            {
                this.getCallback('changeFile').call(this, el, event);

                var list  = this.getList(el),
                    files = this.validateFiles(el, event);
                if (files.length) {
                    this.addToList(list, files, el, event);
                }

                // auto submit upload form
                if (this.getOption('autoSubmit') && !this.triggerSubmit) {
                    this.submit(event);
                }
            }, this, el));
        },

        /**
         * Initialize button method.
         *
         * @param {object} el Button element
         * @return {void}
         */
        initButton: function (el)
        {
            if ($(el).data('jfile-ref')) {

                // trigger select file
                $(el).on('click.jfileButton', $.proxy(function (el)
                {
                    // call trigger insert file to list
                    $('[data-jfile-id="' + $(el).data('jfile-ref') + '"]').val('')
                        .trigger('click.jfileItem');
                }, this, el));
            }
        },

        /**
         * Initialize drag and drop method.
         *
         * @param {object} el Area drag and drop
         * @return {void}
         */
        initRange: function (el)
        {
            // browser not support File API
            if (!FileReader) {
                return;
            }

            // create wrapper drag and drop
            $(el).append($('<div>').addClass(this.getClass('drag'))
                .append($('<div>').addClass(this.getClass('dragObject'))
                    .text(this.getMessage('dragInsertFile'))));

            $(el).find(this.getClass('dragObject', true))
                .on({
                    'dragenter.jfileRange': function ()
                    {
                        return (false);
                    },

                    // add indicator status
                    'dragover.jfileRange': $.proxy(function (el, event)
                    {
                        $(event.currentTarget).addClass(this.getClass('dragOver'));

                        // hover drag and drop callback
                        this.getCallback('dragOver').call(this, event);
                        return (false);
                    }, this, el),

                    // remove indicator status
                    'dragleave.jfileRange': $.proxy(function (el, event)
                    {
                        $(event.currentTarget).removeClass(this.getClass('dragOver'));
                        return (false);
                    }, this, el),

                    // add drop file to list
                    'drop.jfileRange': $.proxy(function (el, event)
                    {
                        event.preventDefault();
                        this.getCallback('dropFile').call(this, event);

                        var list  = this.getList(el),
                            files = this.validateFiles(el, $.extend(event, {
                                'files': event.originalEvent.dataTransfer.files
                            }));

                        if (files.length) {
                            this.addToList(list, files, el, event);
                        }

                        // auto submit upload form
                        if (this.getOption('autoSubmit') && !this.triggerSubmit) {
                            this.submit(event);
                        }
                        return (false);
                    }, this, el)
                });
        },

        /**
         * Event submit form.
         *
         * @private
         * @param {object} event Submit object
         * @return {void}
         */
        submit: function (event)
        {
            event.preventDefault();
            event.stopPropagation();

            // each list file and drafting files upload object
            var upload,
                list = $(event.currentTarget).find(this.getClass('list', true)),
                wrap = $(event.currentTarget).find(this.getClass('wrapper', true) + ' input');

            if (list.length) {
                upload = list.map(function (i)
                {
                    return ($(this).find('li').map($.proxy(function (i, j, self)
                    {
                        var file = $(self).data('jfileItem');

                        // file object not empty
                        if (file && !$(self).data('jfileUpload')) {
                            return ({
                                'list': this,
                                'item': self,
                                'file': file
                            });
                        }
                    }, this, i)).get());
                }).get();
            }
            else {
                upload = wrap.map(function ()
                {
                    var jfileList = $(this).data('jfileList');
                    if (jfileList && jfileList.list) {
                        return (($(this).data('jfileList').list).map($.proxy(function (file)
                        {
                            return ({
                                'list': this,
                                'item': this,
                                'file': file
                            });
                        }, this)));
                    }
                }).get();
            }

            this.getCallback('submit').call(this, upload, event);

            // callback upload files
            if (upload.length && this.getCallback('upload').call(this, upload, event) !== true) {
                $.extend(upload, {
                    'el'   : event.currentTarget,
                    'event': event
                });
                this.upload(upload);
            }
        },

        /**
         * Uploading files.
         *
         * @private
         * @param {object} data Files upload
         * @return {void}
         */
        upload: function (data)
        {
            // browser not support File API
            if (!FormData) {
                this.uploadIframe(data);
                return;
            }

            var form   = new FormData(),
                params = this.getOption('params');

            // append file to FormData object
            for (var index in data) {
                if (data.hasOwnProperty(index) && data[index].item) {

                    var fieldName = this.getNameToFile(data[index].item);
                    if (this.getOption('multiple') && !(/\[?(.*)]/g.test(fieldName))) {
                        fieldName += '[]';
                    }
                    form.append(fieldName, data[index].file);
                }
            }

            // add more params form send
            if ($.isEmptyObject(params) || $.isArray(params)) {
                for (var name in params) {
                    if (params.hasOwnProperty(name)) {
                        if ($.isArray(params)) {
                            form.append(params[name].name, params[name].value);
                        } else {
                            form.append(name, params[name]);
                        }
                    }
                }
            }

            $.ajax({
                'xhr': function ()
                {
                    var xhr = new XMLHttpRequest();

                    // event progress indicator upload file
                    xhr.upload.addEventListener("progress", $.proxy(function (event)
                    {
                        if (event.lengthComputable) {
                            for (var index in this.request) {
                                if (this.request.hasOwnProperty(index)) {

                                    // file not empty
                                    var request = this.request[index];
                                    if (request.file) {
                                        var progress = Math.ceil((event.loaded * 100) / request.file.size);

                                        // information progress empty
                                        if (!$(request.item).data('jfileUpload')) {

                                            // added uploading break process callback
                                            $(request.item).on('jfileUploadBreak', {
                                                'self'   : this.self,
                                                'request': this.request,
                                                'index'  : index
                                            }, $.proxy(function (request, event)
                                            {
                                                var upload = $(event.currentTarget)
                                                    .addClass(this.getClass('uploadBreak')).data('jfileUpload');

                                                // upload data not empty
                                                if (upload && upload.xhr) {
                                                    var item = $(request.item),
                                                        list = $(event.currentTarget)
                                                            .closest(this.getClass('list', true));

                                                    upload.xhr.abort();
                                                    if (!item.data('uploadSuccess') && !item.data('uploadBreak')) {
                                                        item.data('uploadBreak', true);
                                                        this.getCallback('uploadBreak')
                                                            .call(this, item, list, request, event);
                                                    }
                                                }
                                            }), this, request);
                                        }

                                        // save uploading data progress
                                        $(request.item).data('jfileUpload', {
                                            'percent': progress,
                                            'file'   : request,
                                            'upload' : false,
                                            'xhr'    : xhr
                                        });

                                        this.self.getCallback('uploadProgress')
                                            .call(this.self, $(request.item), progress, request);
                                    }
                                }
                            }
                        }
                    }, this), false);
                    return (xhr);
                },

                'type'       : 'POST',
                'url'        : this.getOption('url'),
                'data'       : form,
                'dataType'   : this.getOption('response'),
                'cache'      : false,
                'contentType': false,
                'processData': false,
                'request'    : data,

                // save this link
                'self'   : this,
                'success': function (data, status, xhr)
                {
                    var date = xhr.getResponseHeader('Date');
                    for (var index in this.request) {
                        if (this.request.hasOwnProperty(index)) {
                            var request = this.request[index],
                                item    = $(request.item);

                            // update uploading file data
                            item.data('jfileUpload', {
                                'percent': 100,
                                'file'   : request,
                                'upload' : true,
                                'date'   : date
                            }).data('uploadSuccess', true);

                            this.self.getCallback('uploadProgress').call(this.self, item, 100, request);
                            this.self.getCallback('uploadSuccess')
                                .call(this.self, item, data, this.request, xhr);
                        }
                    }

                    this.getCallback('success').call(this, data, this.request, xhr);
                },
                'error'  : function (xhr, status, thrown)
                {
                    // each request field file
                    for (var index in this.request) {
                        if (this.request.hasOwnProperty(index)) {
                            var item = $(this.request[index].item);

                            this.self.getCallback('uploadError')
                                .call(this.self, item, thrown.toString(), this.request, xhr);
                        }
                    }

                    this.self.getCallback('failed').call(this.self, thrown.toString(), this.request, xhr);
                }
            });
        },

        /**
         * Uploading files method iframe.
         * Used for not support browser File API.
         *
         * @private
         * @param {object} data Files upload
         * @return {void}
         */
        uploadIframe: function (data)
        {
            var form = $(data[0].list).closest('form');

            // check duplicate iframe
            if ($(form).next('iframe').length) {
                return;
            }

            var files      = $(form).find('[type="file"]'),
                params     = this.getOption('params'),
                formIframe = $('<form method="POST" enctype="multipart/form-data" target="jfile-frame">')
                    .attr('action', this.getOption('url'));

            // append clone files to iframe
            $(files).each(function ()
            {
                formIframe.append($(this).clone());
            });

            // added more params form send
            if ($.isEmptyObject(params) || $.isArray(params)) {
                for (var name in params) {
                    if (params.hasOwnProperty(name)) {
                        if ($.isArray(params)) {
                            formIframe.append(
                                $('<input type="hidden" name="' + params[name].name
                                  + '" value="' + params[name].value + '" />')
                            );
                        } else {
                            formIframe.append(
                                $('<input type="hidden" name="' + name + '" value="' + params[name] + '" />')
                            );
                        }
                    }
                }
            }

            var iframe = $('<iframe name="jfile-frame" src="data:text/plain;base64">')
                .css({
                    'position': 'absolute',
                    'left'    : '-10000px'
                }).append(formIframe).insertAfter(form);

            // loading iframe callback
            iframe.on('load', $.proxy(function (frame, event)
            {
                var html    = event.currentTarget,
                    doc     = html.contentDocument ? html.contentDocument : html.contentWindow.document,
                    content = doc.body.innerHTML;

                // parsing json content
                if (this.getOption('response') == 'json') {
                    try {
                        content = $.parseJSON(content);
                    }
                    catch (e) {
                    }
                }

                this.getCallback('success').call(this, content);
                $(iframe).remove();
            }, this, iframe)).children('form').submit();
        }
    };

    /**
     * An anonymous call to the class .jfile-trigger file object and drag area.
     */
    $(function ()
    {
        $('.jfile-trigger').jfile();
    });

    /**
     * Data formatting.
     *
     * @param {string} format Date format {y, m, d, H, M, S}
     * @return {string}
     */
    Date.prototype.toLocaleFormat = function (format)
    {
        var types = {
            'y': this.getYear() + 1900,
            'm': this.getMonth() + 1,
            'd': this.getDate(),
            'H': this.getHours(),
            'M': this.getMinutes(),
            'S': this.getSeconds()
        };

        // format date input string
        for (var type in types) {
            if (types.hasOwnProperty(type)) {
                var findType = types[type];
                format = format.replace('%' + type, findType < 10 ? '0' + findType : findType);
            }
        }
        return (format);
    };
})(jQuery);
