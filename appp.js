// let numbers = [10,34,45,65,12,23,987,567,345,23,43,19];

// console.log(numbers.sort());
// console.log(numbers.pop());
// console.log(numbers.push(500));
// console.log(numbers.toString());
// console.log(numbers.length);
// console.log(numbers.shift());

const customers = [
    {
        name: "Nimal",
        age: 23,
        address: "Panadura"
    },
    {
        name: "Vimal",
        age: 26,
        address: "Panadura"
    }
];

function addCustomer() {
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let address = document.getElementById("txtAddress").value;

    customers.push({
        name,
        age,
        address
    });

    console.log(customers);
    showAllCustomers();
}

function showAllCustomers() {
    let tblCustomers = document.getElementById("tblCustomers");

    let tableBody = `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
    </tr>`;

    customers.forEach(data => {
        console.log(data);

        tableBody += `<tr>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.address}</td>
                    </tr>`;
    });
    tblCustomers.innerHTML = tableBody;
    console.log(tableBody);
}