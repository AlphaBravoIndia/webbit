document.addEventListener("turbolinks:load", () => {
  const dropdown = document.querySelector(".js-dropdown-user-target");
  const dropdownList = document.querySelector(".dropdown-list");

  dropdown.addEventListener("click", (e) => e.preventDefault());

  document.addEventListener("click", (e) => {
    if(e.target.closest(".dropdown")) {
      // Hide dropdown if click target is the dropdown element
      dropdownList.classList.remove("hidden");
    } else {
      // Remove dropdown if no target is the dropdown element
      dropdownList.classList.add("hidden");
    }
  });
});
