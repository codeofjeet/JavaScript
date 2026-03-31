function changeicon()
  {
    const images = [
        {img:"image/pic1.jpg", time:2000},
        {img:"image/pic2.jpg", time:2000},
        {img:"image/pic3.jpg", time:2000},
        {img:"image/pic4.jpg", time:2000},
        {img:"image/pic5.jpg", time:2000},
        {img:"image/pic6.jpg", time:2000},
        {img:"image/pic7.jpg", time:2000}
      ];
  
      //const img = document.querySelector('img');
      let img=document.getElementById("icon");
      let index = 0;
  
      function showNextImage()
      {
        const image = images[index++];
          if(!image)
          {
            index=0;
            showNextImage();
          }
      img.src = image.img;
      setTimeout(showNextImage, image.time);
      };
      showNextImage();
  }
  changeicon();
