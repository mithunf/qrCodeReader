import QrCode from 'qrcode-reader';
import $ from 'jquery';
var qr = new QrCode();

$(document).ready(function() {

  qr.callback = function(result,err) {
    if( result ) {
      console.log("result : " + result);	
      $('#imageContainer').append(result);
    }
    if( err ) {
      console.log("error : " + err);
      $('#imageContainer').append(err);
    }
  }

  var canvas =  document.getElementById("qr-canvas");
  var ctx = canvas.getContext("2d");

  var input = document.querySelector('input[type=file]');
  input.addEventListener('change', function () {
    var file = input.files[0];
    check(file);
  });

  function check(file) {

    var reader = new FileReader();

    reader.onload = function (e) {
      var dataURL = e.target.result;

      $('#tempImage').attr("src", dataURL);
      $('#tempImage').css("display","none");	       
      var img =  document.getElementById('tempImage');
      
      img.onload = function() {

        var nw = img.naturalWidth, nh = img.naturalHeight;
        ctx.drawImage(img, 0, 0, nw, nh, 0, 0, img.width, img.height);

        var mpImg = new MegaPixImage(img);
        mpImg.render(canvas, { width: img.width, height: img.height });
        $('#qr-canvas').css("display", "none");
       	qr.decode();
      };
    }; 
    reader.readAsDataURL(file);
  }

});