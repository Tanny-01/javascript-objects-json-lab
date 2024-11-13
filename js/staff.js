console.info("ready");

fetch("data/staff.json")
  .then((response) => response.json())
  .then((data) => {
    console.dir(data);
  })

  data.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");

  })

  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
   