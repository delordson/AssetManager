function createImageUploader(element, contentItem, previewStyle) {

    var $element = $(element);

    if (window.FileReader) {
        createHTML5Uploader();
    }

    function createHTML5Uploader() {
        var $file_browse_button = $('<input name="file" type="file" style="margin-bottom: 10px;" />');
        $element.append($file_browse_button);

        var $preview = $('<div></div>');
        $element.append($preview);

        $file_browse_button.bind('change', function handleFileSelect(evt) {
            var files = evt.target.files;
            if (files.length == 1) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    previewImageAndSetContentItem(e.target.result, $preview, contentItem);
                };
                reader.readAsDataURL(files[0]);
            } else {
                // if no file was chosen (e.g., if file-choosing was cancelled),
                //     explicity ensure that the content is set back to null:
                previewImageAndSetContentItem(null, $preview, contentItem);
            }
        });
    }

    function previewImageAndSetContentItem(fullBinaryString, $preview, contentItem) {
        $preview.empty();

        if ((fullBinaryString == null) || (fullBinaryString.length == 0)) {
            contentItem.value = null;
        } else {
            $preview.append($('<img src="' + fullBinaryString + '" style="' + previewStyle + '" />'));
            // As far as storing the data in the database, beyond previewing it,
            //     remove the preamble returned by FileReader or the server 
            //     (always of the same form: "data:jpeg;base64," with variations only on the 
            //     type of data -- jpeg, png, etc).
            //     The first comma serves as the necessary marker where the binary data begins.
            contentItem.value = fullBinaryString.substring(fullBinaryString.indexOf(",") + 1);
        }
    }
}