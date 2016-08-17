// This is where it all goes :)

$(document).ready(function() {
    var dropzoneElement = $('#my-awesome-dropzone')

    console.log(dropzoneElement)

    dropzoneElement.on('drop', function() {
        console.log("Dropped")
    })
    dropzoneElement.on('dragover', function() {
        console.log("File draged")
    })
    dropzoneElement.on('maxfilesexceeded', function() {
        console.log("File limit exceeded")
    })
    dropzoneElement.on('complete', function() {
        console.log("file uploaded")
    })
    dropzoneElement.on('removedfile', function() {
        console.log("file deleted")
    })


})

Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 10, // MB
    method: 'put',
    parallelUploads: 5,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    autoProcessQueue: false, // used for stopping auto processing uploads
    autoDiscover: false,
    accept: function(file, done) {
        if (file.name == "eastwood_good_ugly.jpg") {
            done("clint eastwood");
        } else { done(); }
    }
};