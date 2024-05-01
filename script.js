




function handleSubmit(x) {
  
    var btn = document.querySelector('.btn');
    
    btn.innerHTML = 'Loading...';

    setTimeout(function() {
     
      btn.innerHTML = 'Submit';
      btn.style.backgroundColor = '#F5F4F4'; 
      btn.style.color = '#BEBEBF'; 
      btn.style.border = '1px solid var(--input-border-color)'; 
      x.disabled = true;
      btn.classList.add("post");
    }, 2000);
}
