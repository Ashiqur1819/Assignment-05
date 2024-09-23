// Donation for Noakhali
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const noakhaliInputValue = getInputValuById("noakhali-input");
  const noakhaliBalance = parseFloat(getBalanceById("noakhali-balance"));
  const mainBalance = parseFloat(getBalanceById("main-balance"));

 if (noakhaliInputValue === "" || isNaN(noakhaliInputValue) || noakhaliInputValue <= 0 || noakhaliInputValue > mainBalance) {
   return alert("Invalid Donation Amount");
 }

  const newBalance = noakhaliBalance + parseFloat(noakhaliInputValue);
  document.getElementById("noakhali-balance").innerText = newBalance;

  const remainingBalance = mainBalance - noakhaliInputValue;
  document.getElementById("main-balance").innerText = remainingBalance;

  const historySection = document.getElementById("history-section");
  const noakhaliTitle = document.getElementById("noakhali-title").innerText;

  const myModal = document.getElementById("my-modal");
  myModal.showModal();

  const div = document.createElement("div");
  div.innerHTML = `
        <div class="border p-4 md:p-6 lg:p-8 rounded-lg mt-5">
          <h2 class="text-xl text-primary font-medium mb-3">${noakhaliInputValue} Taka is Donated for ${noakhaliTitle}</h2>
          <p class="text-secondary">Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
        </div>
  `;
  historySection.appendChild(div);
});

// Donation for Feni
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniInputValue = getInputValuById("feni-input");
  const feniBalance = parseFloat(getBalanceById("feni-balance"));
  const mainBalance = parseFloat(getBalanceById("main-balance"));

  if (feniInputValue === "" || isNaN(feniInputValue) || feniInputValue <= 0 || feniInputValue > mainBalance) {
    return alert("Invalid Donation Amount");
  }

  const newBalance = feniBalance + parseFloat(feniInputValue);
  document.getElementById("feni-balance").innerText = newBalance;

  const remainingBalance = mainBalance - feniInputValue;
  document.getElementById("main-balance").innerText = remainingBalance;

  const historySection = document.getElementById("history-section");
  const feniTitle = document.getElementById("feni-title").innerText;

  const myModal = document.getElementById("my-modal");
  myModal.showModal();

  const div = document.createElement("div");
  div.innerHTML = `
        <div class="border p-4 md:p-6 lg:p-8 rounded-lg mt-5">
          <h2 class="text-xl text-primary font-medium mb-3">${feniInputValue} Taka is Donated for ${feniTitle}</h2>
          <p class="text-secondary">Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
        </div>
  `;
  historySection.appendChild(div);
});

// Donate for Quota
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaInputValue = getInputValuById("quota-input");
  const quotaBalance = parseFloat(getBalanceById("quota-balance"));
  const mainBalance = parseFloat(getBalanceById("main-balance"));

  if (quotaInputValue === "" || isNaN(quotaInputValue) || quotaInputValue <= 0 || quotaInputValue > mainBalance) {
    return alert("Invalid Donation Amount");
  }

  const newBalance = quotaBalance + parseFloat(quotaInputValue);
  document.getElementById("quota-balance").innerText = newBalance;

  const remainingBalance = mainBalance - quotaInputValue;
  document.getElementById("main-balance").innerText = remainingBalance;

  const historySection = document.getElementById("history-section");
  const quotaTitle = document.getElementById("quota-title").innerText;

  const myModal = document.getElementById("my-modal");
  myModal.showModal();

  const div = document.createElement("div");
  div.innerHTML = `
        <div class="border p-4 md:p-6 lg:p-8 rounded-lg mt-5">
          <h2 class="text-xl text-primary font-medium mb-3">${quotaInputValue} Taka is Donated for ${quotaTitle}</h2>
          <p class="text-secondary">Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
        </div>
  `;
  historySection.appendChild(div);
});

// Donation section
document.getElementById("donation-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");
  const donationBtn = document.getElementById("donation-btn");

  historyBtn.classList.remove(
    "bg-primary",
    "border-border",
    "hover:bg-lime-400",
    "text-primary"
  );
  historyBtn.classList.add(
    "bg-gray-100",
    "border-input",
    "hover:bg-gray-200",
    "text-secondary"
  );

  donationBtn.classList.add(
    "bg-primary",
    "border-border",
    "hover:bg-lime-400",
    "text-primary"
  );
  donationBtn.classList.remove(
    "bg-gray-100",
    "border-input",
    "hover:bg-gray-200",
    "text-secondary"
  );

  const donationSection = document.getElementById("history-section");
  donationSection.classList.add("hidden");

  const historySection = document.getElementById("donation-section");
  historySection.classList.remove("hidden");

  const footer = document.getElementById("footer");
  footer.classList.remove("hidden");
});

// History section
document.getElementById("history-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");
  const donationBtn = document.getElementById("donation-btn");

  historyBtn.classList.add(
    "bg-primary",
    "border-border",
    "hover:bg-lime-400",
    "text-primary"
  );
  historyBtn.classList.remove(
    "bg-gray-100",
    "border-input",
    "hover:bg-gray-200",
    "text-secondary"
  );

  donationBtn.classList.remove(
    "bg-primary",
    "border-border",
    "hover:bg-lime-400",
    "text-primary"
  );
  donationBtn.classList.add(
    "bg-gray-100",
    "border-input",
    "hover:bg-gray-200",
    "text-secondary"
  );

  const donationSection = document.getElementById("donation-section");
  donationSection.classList.add("hidden");

  const historySection = document.getElementById("history-section");
  historySection.classList.remove("hidden");

  const footer = document.getElementById("footer");
  footer.classList.add("hidden");
});

// Blog section
const blog = document
  .getElementById("blog-btn")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });
