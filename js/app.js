// Crear la seccion de comentarios / tweets que hicimos en clase. Que un formulario tome un texto escrito por el usuario y que al presionar un botón de publicar, aparezca en otra sección de la página
// Resuelto en la parte final de la clase del 11/05

function publish(event) {
    event.preventDefault();
    let publish = document.getElementById('comment').value;
    let commentSection = document.querySelector('#comment-section');
    let newComment = document.createElement('div');
    let id = Math.floor(Math.random()*100);
  newComment.id= id;
      newComment.innerHTML = `
    ${publish} <button class="btn btn-dark my-2" onclick="deleteComment(event)">Delete Comment    
            </button>`
   commentSection.appendChild(newComment);
   console.log(commentSection);
   document.getElementById('comment-form').reset();
}
function deleteComment(event){
    event.preventDefault();   
    event.target.parentElement.remove();
    let commentSection = document.querySelector('#comment-section');
}