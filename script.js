function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = document.querySelector("#list");
    $("#list").append(li);
    $("#input").val("");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  function deleteListItem() {
    li.addClass("delete");
  }
  $("#list").sortable();
}

let input = $("#input");

input.on("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    $("#button").click();
    $("#input").val("");
  }
});
