// Shorthand for on document ready
$(() => {
  const renderLists = arr => {
    arr.forEach(idx => {
      const listItem = `<a href='#' id='${idx.id}' class='list-group-item list-group-item-action'>${idx.name}</a>`;
      if (!idx.isEaten) {
        $("#uneaten").append(listItem);
      } else {
        $("#eaten").append(listItem);
      }
    });
  };
  const clearBurgers = () => {
    $("#uneaten").html("");
    $("#eaten").html("");
  };
  // Fetch burgers on page load and insert them into appropriate list
  const getBurgers = () => {
    $.get("/burgers").then(response => {
      clearBurgers();
      renderLists(response);
    });
  };
  getBurgers();
  $("#uneaten").on("click", e => {
    let clicked = $(e.target).attr("id");
    console.log(clicked);
    $.post(`/eat/${clicked}`).then(() => {
      getBurgers();
    });
  });
  $("#eaten").on("click", e => {
    let clicked = $(e.target).attr("id");
    console.log(clicked);
    $.post(`/uneat/${clicked}`).then(() => {
      getBurgers();
    });
  });
});
