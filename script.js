// ===============================
// MOBILE SIDEBAR
// ===============================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});


// ===============================
// USER TABLE SEARCH
// ===============================

const tableSearch = document.getElementById("tableSearch");
const rows = document.querySelectorAll("#userTable tr");

tableSearch.addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();

    rows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});


// ===============================
// GLOBAL SEARCH
// ===============================

const globalSearch = document.getElementById("globalSearch");

globalSearch.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    rows.forEach(row => {

        const text = row.textContent.toLowerCase();

        row.style.display =
            text.includes(value) ? "" : "none";

    });

});


// ===============================
// ADD USER BUTTON
// ===============================

const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", () => {

    const name = prompt("Enter user name:");

    if (!name) return;

    const email = prompt("Enter user email:");

    if (!email) return;

    const table = document.getElementById("userTable");

    const newRow = document.createElement("tr");

    const newId = String(table.rows.length + 1).padStart(3, "0");

    newRow.innerHTML = `
        <td>${newId}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>User</td>
        <td>
            <span class="status active-status">
                Active
            </span>
        </td>
        <td>
            <button class="action-btn">⋮</button>
        </td>
    `;

    table.appendChild(newRow);

    alert("User added successfully!");

});