 const dialog = document.querySelector('#delete-popup');

  document.querySelector('#delete-page').onclick = function(){
    dialog.showModal();
  };
  document.querySelector('#close').onclick = function(){
    dialog.close();
  };

