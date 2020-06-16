const allComms = document.getElementById("comments")

function newComment() {
    const message = document.getElementById("message").value
    if (message.replace(/ /g, '')=="")
    {
      return;
    }
    const comment = document.createTextNode(message)

    //creating the todo item in our unorderedlist
    const comments = document.createElement("li")
    comments.appendChild(comment)

    //creates todo text
    allComms.appendChild(comments)

    document.getElementById("message").value=""
}
