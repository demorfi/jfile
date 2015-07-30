# jFile
-------
This is “File uploading Ajax method for jQuery framework” [Check out the demo](https://demorfi.github.io/jfile)

Required
========
* jQuery framework >= 1.8
* [* JRE for build]

Features
========
* Light weight (min. 16KB code)
* Cross browser support (IE, Chrome, Firefox, Opera, Vivaldi)
* Wide API interfaces
* Supported old browsers through iframe
* Multiple file upload
* Supported file upload through Drag-and-drop
* Customize the way you like

How to Use
==========

Install the jfile in the footer
```javascript
<script src="/javascript/jfile.jquery.min.js"></script>
<script>$(function() {$('input[type="file"], .drag-object').jfile()});</script>
```

Markup is pretty straightforward, it looks something like this
``` html
<form method="POST" enctype="multipart/form-data">
  <fieldset>
    <legend><span>Uploading file using type file</span></legend>
    <div id="type-file-list"></div>
    <ul>
      <li>
        <label for="type-file">Select file:</label>
        <input type="file" name="type-file" id="type-file" data-jfile-id="type-file-list" />
      </li>
      <li>
        <input type="submit" value="Save" />
      </li>
    </ul>
  </fieldset>
</form>
```

For uploading file using type button
``` html
<form method="POST" enctype="multipart/form-data">
  <fieldset>
    <legend><span>Uploading file using type button</span></legend>
    <div id="type-button-list"></div>
    <ul>
      <li>
        <label for="type-button">Select file:</label>
        <input type="file" name="type-button" data-jfile-id="type-button" id="type-button" />
        <input type="button" value="Select File" data-jfile-id="type-button-list"
          data-jfile-ref="type-button" class="select-button" />
      </li>
      <li>
        <input type="submit" value="Save" />
      </li>
    </ul>
  </fieldset>
</form>
```

For uploading file using type Drag-and-drop
``` html
<form method="POST" enctype="multipart/form-data">
  <fieldset>
    <legend><span>Uploading file using type drag and drop</span></legend>
    <ul>
      <li>
        <div id="type-drag"></div>
        <div class="drag-object" data-jfile-id="type-drag"></div>
      </li>
      <li>
        <input type="submit" value="Save" />
      </li>
    </ul>
  </fieldset>
</form>
```

or add special class for your `<input>` or `<button>` or `<div>` element `<input class="jfile-trigger">`.
Use attribute data-jfile-id to specify a reference to the block display the file list.

Options
=======
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>jfile</td>
    <td>[string] Name send file</td>
  </tr>
  <tr>
    <td>type</td>
    <td>empty</td>
    <td>[string] Default work type</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>true</td>
    <td>[boolean] Support multi select file</td>
  </tr>
  <tr>
    <td>maxSize</td>
    <td>0</td>
    <td>[number] Maximum files upload size (KB)</td>
  </tr>
  <tr>
    <td>allowMimeType</td>
    <td>[]</td>
    <td>[Array] Allow files mime type</td>
  </tr>
  <tr>
    <td>submit</td>
    <td>false</td>
    <td>[boolean|string] Id or class submit upload form</td>
  </tr>
  <tr>
    <td>autoSubmit</td>
    <td>false</td>
    <td>[boolean] Support auto submit form to select file</td>
  </tr>
  <tr>
    <td>sizeImageScreen</td>
    <td>300</td>
    <td>[number] Size image preview screen (px)</td>
  </tr>
  <tr>
    <td>url</td>
    <td>/</td>
    <td>[string] Url send file and params</td>
  </tr>
  <tr>
    <td>response</td>
    <td>text</td>
    <td>[string] Type of server response</td>
  </tr>
  <tr>
    <td>useThrownErrors</td>
    <td>true</td>
    <td>[boolean] Use thrown errors for ajax errors callback</td>
  </tr>
  <tr>
    <td>params</td>
    <td>{}</td>
    <td>[Array] Additional parameters sent form</td>
  </tr>
</table>

Callback
========
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>callback.init</td>
    <td>null</td>
    <td>[function] Callback init wrapper</td>
  </tr>
  <tr>
    <td>callback.addList</td>
    <td>null</td>
    <td>[function] Callback create file list</td>
  </tr>
  <tr>
    <td>callback.validateFiles</td>
    <td>null</td>
    <td>[function] Callback validate file</td>
  </tr>
  <tr>
    <td>callback.duplicate</td>
    <td>null</td>
    <td>[function] Callback duplicate select file in list</td>
  </tr>
  <tr>
    <td>callback.errorFile</td>
    <td>function (message, file, el, list, event)</td>
    <td>[function] Callback error select file</td>
  </tr>
  <tr>
    <td>callback.errorMime</td>
    <td>function (file, el, list, event)</td>
    <td>[function] Callback error select mime file type</td>
  </tr>
  <tr>
    <td>callback.errorSize</td>
    <td>function (file, el, list, event)</td>
    <td>[function] Callback error size files in list</td>
  </tr>
  <tr>
    <td>callback.validateSuccess</td>
    <td>null</td>
    <td>[function] Callback success validate select file</td>
  </tr>
  <tr>
    <td>callback.appendList</td>
    <td>null</td>
    <td>[function] Callback append list select file</td>
  </tr>
  <tr>
    <td>callback.addFile</td>
    <td>null</td>
    <td>[function] Callback insert file in list</td>
  </tr>
  <tr>
    <td>callback.changeFile</td>
    <td>null</td>
    <td>[function] Callback change file button</td>
  </tr>
  <tr>
    <td>callback.dropFile</td>
    <td>null</td>
    <td>[function] Callback drop file area</td>
  </tr>
  <tr>
    <td>callback.dragOver</td>
    <td>null</td>
    <td>[function] Callback hover drag and drop area file</td>
  </tr>
  <tr>
    <td>callback.preview</td>
    <td>function (objImage)</td>
    <td>[function] Callback show preview image</td>
  </tr>
  <tr>
    <td>callback.previewOut</td>
    <td>function (objImage)</td>
    <td>[function] Callback out area preview image</td>
  </tr>
  <tr>
    <td>callback.submit</td>
    <td>null</td>
    <td>[function] Callback submit file list form</td>
  </tr>
  <tr>
    <td>callback.success</td>
    <td>null</td>
    <td>[function] Callback success uploading default user function</td>
  </tr>
  <tr>
    <td>callback.failed</td>
    <td>null</td>
    <td>[function] Callback failed uploading default user function</td>
  </tr>
  <tr>
    <td>callback.upload</td>
    <td>null</td>
    <td>[function] Callback upload files</td>
  </tr>
  <tr>
    <td>callback.uploadProgress</td>
    <td>function (item, progress)</td>
    <td>[function] Callback upload progress files</td>
  </tr>
  <tr>
    <td>callback.uploadSuccess</td>
    <td>function (item)</td>
    <td>[function] Callback upload success files</td>
  </tr>
  <tr>
    <td>callback.uploadBreak</td>
    <td>function (item)</td>
    <td>[function] Callback upload break files</td>
  </tr>
  <tr>
    <td>callback.uploadError</td>
    <td>function (item, message)</td>
    <td>[function] Callback upload error files</td>
  </tr>
</table>

Animate
=======
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>animate.add.start</td>
    <td>{height: 0, padding-top: 0, padding-bottom: 0, opacity: 0}</td>
    <td>[object] Start animate</td>
  </tr>
  <tr>
    <td>animate.add.end</td>
    <td>{height: 34, padding-top: 5, padding-bottom: 5, opacity: 1}</td>
    <td>[object] End animate</td>
  </tr>
  <tr>
    <td>animate.remove</td>
    <td>{height: 0, padding-top: 0, padding-bottom: 0, opacity: 0}</td>
    <td>[object] Animate remove file in list</td>
  </tr>
  <tr>
    <td>animate.time</td>
    <td>500</td>
    <td>[number] Time animate (ms)</td>
  </tr>
</table>

Messages
=======
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>messages.dragInsertFile</td>
    <td>Drag file to load</td>
    <td>[string] Message insert file</td>
  </tr>
  <tr>
    <td>messages.sizeError</td>
    <td>Size exceeded</td>
    <td>[string] Message size file</td>
  </tr>
  <tr>
    <td>messages.mimeError</td>
    <td>Invalid file format</td>
    <td>[string] Message error mime</td>
  </tr>
  <tr>
    <td>messages.remove</td>
    <td>Delete file from list</td>
    <td>[string] Message remove file</td>
  </tr>
  <tr>
    <td>messages.upload</td>
    <td>Uploaded: {time}</td>
    <td>[string] Message upload file</td>
  </tr>
  <tr>
    <td>messages.break</td>
    <td>Upload canceled</td>
    <td>[string] Message cancel upload file</td>
  </tr>
  <tr>
    <td>messages.error</td>
    <td>Upload interrupted</td>
    <td>[string] Message error file</td>
  </tr>
</table>

Template insert file (tpl.addToList)
====================================
``` html
<div class="jfile-type"></div>
<div class="jfile-name">{name}</div>
<div class="jfile-size">{size}</div>
<div class="jfile-progress">
  <div class="jfile-progress-percent"></div>
</div>
<div class="jfile-remove"></div>
```

Test Upload
===========
```javascript
$(function ()
{
  $('input[type="file"], input[type="button"], .drag-object').jfile(
  {
    'callbacks':
    {
      'success': function (data)
      {
        var debug = function (data) {
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
```

Build
=====
```bash
cd ~ && git clone https://github.com/demorfi/jfile.git jfile && cd jfile
make && ls builds -lX

# rebuild
make clean && make && ls builds -lX
```

or use ready files in directories.

Change Log
==========
v1.0 - July 31, 2015
--------------------
 * Initialize version 1.0

License
=======
This is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
