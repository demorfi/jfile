/**
 * jFile is “File uploading Ajax method for jQuery framework”.
 *
 * @author demorfi <demorfi@gmail.com>
 * @version 1.0
 * @source https://github.com/demorfi/jfile
 * @license http://opensource.org/licenses/MIT Licensed under MIT License
 */

$(function ()
{
    $('input[type="file"], input[type="button"], .drag-object').jfile({
        'callbacks': {
            'init': function ()
            {
                $('.jfile-forms').addClass('jfile-init');
            },

            'success': function (data)
            {
                var debug = function (data)
                {
                    if (typeof data === 'object') {
                        var parse = [];
                        for (var index in data) {
                            if (data.hasOwnProperty(index)) {
                                parse.push(debug(data[index]));
                            }
                        }
                        return ('[' + parse.join(',') + ']');
                    }
                    return (data);
                };

                data = typeof data === 'string' ? {data: data} : data;
                $('.response ol').append($('<li>').html(debug(data.data)));
            },

            'failed': function (message)
            {
                $('.response ol').append($('<li>').html(message));
            }
        }
    });
});
