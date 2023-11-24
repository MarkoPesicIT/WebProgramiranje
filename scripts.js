function openPopup(title, content) {
      document.getElementById('popup-title').innerText = title;
      document.getElementById('popup-content').innerText = content;
      document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
      document.getElementById('popup').style.display = 'none';
  }
  function openPopup(title, shortDescription, fullText, imageUrl) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerHTML = `<p>${shortDescription}</p><p>${fullText}</p>`;
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup').style.display = 'block';
}
