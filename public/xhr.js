function xhrAPI(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const res = JSON.parse(xhr.responseText);
      console.log(res);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}