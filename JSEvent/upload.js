// File Upload
// 
function ekUpload() {
  function Init() {


    var fileSelect = document.getElementById('file-upload'),
      fileDrag = document.getElementById('file-drag'),
      submitButton = document.getElementById('submit-button');

    fileSelect.addEventListener('change', fileSelectHandler, false);

    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag.addEventListener('dragover', fileDragHover, false);
      fileDrag.addEventListener('dragleave', fileDragHover, false);
      fileDrag.addEventListener('drop', fileSelectHandler, false);
    }
    // Submit button
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
      var selectedFile = fileSelect.files[0];

      if (selectedFile) {
        uploadFile(selectedFile);
      } else {
        alert('Vui lòng chọn một hình ảnh để tải lên! (づ￣ 3￣)づ');
        return;
      }
    }, false);
  }



  function fileDragHover(e) {
    var fileDrag = document.getElementById('file-drag');

    e.stopPropagation();
    e.preventDefault();

    fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
  }

  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
    }
  }

  // Output
  function output(msg) {
    // Response
    var m = document.getElementById('messages');
    m.innerHTML = msg;
  }

  function parseFile(file) {

    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );

    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start').classList.add("hidden");
      document.getElementById('response').classList.remove("hidden");
      document.getElementById('notimage').classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image').classList.remove("hidden");
      document.getElementById('file-image').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image').classList.add("hidden");
      document.getElementById('notimage').classList.remove("hidden");
      document.getElementById('start').classList.remove("hidden");
      document.getElementById('response').classList.add("hidden");
      document.getElementById("file-upload-form").reset();
    }
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  // Tạo một đối tượng để lưu trạng thái của các nút toggle
  var toggleStates = {
    size: false,
    trans: false,
    trim: false,
    rename: false,
    rmb: false,
    color: false,
    effect: false,
    greyscale: false,
    invert: false,
    sepia: false
  };

  // Cập nhật trạng thái của nút toggle khi nó được nhấn
  sizeBtn.addEventListener('click', () => toggleStates.size = !toggleStates.size);
  transBtn.addEventListener('click', () => toggleStates.trans = !toggleStates.trans);
  trimBtn.addEventListener('click', () => toggleStates.trim = !toggleStates.trim);
  renameBtn.addEventListener('click', () => toggleStates.rename = !toggleStates.rename);
  rmbBtn.addEventListener('click', () => toggleStates.rmb = !toggleStates.rmb);
  colorBtn.addEventListener('click', () => toggleStates.color = !toggleStates.color);
  effectBtn.addEventListener('click', () => toggleStates.effect = !toggleStates.effect);
  greyscale.addEventListener('click', () => toggleStates.greyscale = !toggleStates.greyscale);
  invert.addEventListener('click', () => toggleStates.invert = !toggleStates.invert);
  sepia.addEventListener('click', () => toggleStates.sepia = !toggleStates.sepia);

  // Kiểm tra trạng thái của nút toggle khi form được submit
  function uploadFile(file) {
    var input = document.querySelector('input[type="file"]')

    var format = document.getElementById('convert').value;
    var quality = document.getElementById('quality').value;

    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var scale = document.getElementById('scale').value;

    var rotate = document.getElementById('rotate').value;
    var flip = document.getElementById('flip-select').value

    var trimWidth = document.getElementById('trimWidth').value;
    var trimHeight = document.getElementById('trimHeight').value;
    var trimPositionX = document.getElementById('trimPositionX').value;
    var trimPositionY = document.getElementById('trimPositionY').value;
    var name = document.getElementById('rename_edit').value;

    var brightness = document.getElementById('brightness').value;
    var contrast = document.getElementById('contrast').value;
    var opacity = document.getElementById('opacity').value;
    var greyscale = toggleStates.greyscale;
    var invert = toggleStates.invert;
    var blur = document.getElementById('blur').value;

    var sepia = toggleStates.sepia;
    var posterize = document.getElementById('posterize').value;

    var rmb = toggleStates.rmb;

    var data = new FormData()

    // Chỉ thêm dữ liệu vào form nếu nút toggle tương ứng đang được bật
    data.append('file', input.files[0]);
    data.append('format', format);
    data.append('quality', quality);

    if (toggleStates.size) {
      data.append('width', width);
    }
    if (toggleStates.size) {
      data.append('height', height);
    }
    if (toggleStates.size) {
      data.append('scale', scale);
    }

    if (toggleStates.trans) {
      data.append('rotate', rotate);
    }
    if (toggleStates.trans) {
      data.append('flip', flip);
    }

    if (toggleStates.trim) {
      data.append('trimWidth', trimWidth);
    }
    if (toggleStates.trim) {
      data.append('trimHeight', trimHeight);
    }
    if (toggleStates.trim) {
      data.append('trimPositionX', trimPositionX);
    }
    if (toggleStates.trim) {
      data.append('trimPositionY', trimPositionY);
    }

    if (toggleStates.color) {
      data.append('brightness', brightness);
    }
    if (toggleStates.color) {
      data.append('contrast', contrast);
    }
    if (toggleStates.color) {
      data.append('opacity', opacity);
    }
    if (toggleStates.color) {
      data.append('greyscale', greyscale);
    }
    if (toggleStates.color) {
      data.append('invert', invert);
    }
    if (toggleStates.color) {
      data.append('blur', blur);
    }

    if (toggleStates.rename) {
      data.append('rename', name);
    }

    if (toggleStates.rmb) {
      data.append('rmb', rmb);
    }

    if (toggleStates.effect) {
      data.append('sepia', sepia);
    }
    if (toggleStates.effect) {
      data.append('posterize', posterize);
    }

    fetch('/uploads', {
      method: 'POST',
      body: data
    })
      .then(response => response.json()) // Điều này giả định rằng server trả về JSON
      .then(data => {
        // Xử lý dữ liệu trả về từ server (nếu cần)
        // Hiển thị thông báo cho người dùng
        alert('Chuyển đổi hình ảnh thành công !!! (❁´◡`❁)');
      })
      .catch(error => {
        console.error('Lỗi trong quá trình chuyển đổi hình ảnh:', error);
        // Xử lý lỗi (nếu cần)
      });
  }

  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById('file-drag').style.display = 'none';
  }
}
ekUpload();