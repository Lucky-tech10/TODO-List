function newElement() {
  const inputValue = document.getElementById("myInput").value;
  if (inputValue.trim() === "") return; // Don't add empty tasks

  const li = document.createElement("li");

  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("onclick", "checkBox();");
  li.appendChild(input);

  li.appendChild(document.createTextNode(inputValue));

  // Add a close button
  const span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  li.appendChild(span);

  // Handle task removal when close button is clicked
  span.onclick = function () {
    const listItem = this.parentElement;
    listItem.style.display = "none";
  };

  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = ""; // Clear input field
}

function checkBox() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const listItem = this.parentElement;
      if (this.checked) {
        // Mark task as complete (e.g., add styles)
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "#888"; // Optional
      } else {
        // Unmark task (remove styles)
        listItem.style.textDecoration = "none";
        listItem.style.color = "#000"; // Optional
      }
    });
  });
}
