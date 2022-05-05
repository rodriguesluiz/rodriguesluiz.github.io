function playsoundtrack() {
  var music = document.getElementById("soundtrack");  
  var title = document.getElementById("readingtitle");
  var content = document.getElementById("readingcontent");
  var startbtn = document.getElementById("startbutton");
  var finishbtn = document.getElementById("finishbutton");
  
  music.play();
  title.textContent = "READING TITLE";
  content.textContent = "Nam non erat feugiat, pellentesque mi ut, finibus tellus. Ut eget ex sodales, feugiat elit non, semper ex. Sed laoreet lectus nisl, sit amet porttitor lacus porta nec. Quisque sit amet metus sagittis, tincidunt tellus in, efficitur lorem. Sed scelerisque tellus nisl, eget tincidunt elit aliquet vitae. Integer id felis ut ipsum tristique iaculis. Mauris sed nibh enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sagittis rhoncus sollicitudin. Maecenas eget dui a neque rutrum tincidunt sed non ipsum.";
  finishbtn.hidden = false;
  startbtn.hidden = true;
}

function pausesoundtrack() {
  var music = document.getElementById("soundtrack");
  music.pause();
}