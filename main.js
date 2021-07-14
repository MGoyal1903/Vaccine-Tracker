let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let date = dd + "%2F" + mm + "%2F" + yyyy;
// let date1 = dd+"-"+mm+"-"+yyyy;
// console.log(date1)

let button = document.getElementById("submit");
button.addEventListener("click", async function () {
  let pin = document.getElementById("pin").value;
  let url =
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
    pin +
    "&date=" +
    date;
  // let url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" + pin + "&date=" + date1;

  let response = await fetch(url);
  let jsondata = await response.json();
  // console.log(jsondata);

  let dataobj = jsondata.sessions;
  console.log(dataobj.length);

  let emp = document.getElementById("emp");
  const emptext = "No Centers and Slots Are Available for this PinCode";
  if (dataobj.length == 0) {
    emp.innerHTML = emptext;
  }
  displayTable(dataobj);
});

function displayTable(presidents) {
  let table = document.getElementById("presidents");

  for (let i = 0; i < presidents.length; ++i) {
    let president = presidents[i];

    let row = document.createElement("tr");

    let properties = [
      "name",
      "address",
      "state_name",
      "district_name",
      "pincode",
      "fee_type",
      "date",
      "available_capacity_dose1",
      "available_capacity_dose2",
      "available_capacity",
      "fee",
      "min_age_limit",
      "vaccine",
      "slots",
    ];

    for (let i = 0; i <= 13; i++) {
      let cell = document.createElement("th");
      cell.innerHTML = properties[i];
      cell.classList.add("coloryellow");
      row.appendChild(cell);
    }
    let row1 = document.createElement("tr");
    for (let j = 0; j < properties.length; ++j) {
      let cell1 = document.createElement("td");

      cell1.innerHTML = president[properties[j]];
      cell1.classList.add("colorwhite");

      row1.appendChild(cell1);
    }

    table.appendChild(row);
    table.appendChild(row1);
  }
}

// let button1 = document.getElementById("search");
// button1.addEventListener("click", async function()
// {

//     let BID = document.getElementById("cer").value;

//     let DCer = "https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=" + BID;

//     let cert = await fetch(DCer);
//     console.log(cert);

// });

// let otp = document.getElementById("otp");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", async function()
// {
//     let data = await fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP");
//     console.log(data)
// })
