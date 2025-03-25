function sendMail() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let companyName = document.getElementById("companyName").value.trim();
  let webUrl = document.getElementById("companyWebsite").value.trim();
  let fileInput = document.getElementById("adImg");
  let plan = document.getElementById("plan").value.trim();
  let agreement = document.getElementById("termsAndConditions").checked;

  // Check if all fields are filled
  if (!name || !email || !companyName || !webUrl || !fileInput.files.length || !plan || !agreement) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  let fileName = fileInput.files[0].name; // Get only the filename

  let params = {
    name: name,
    email: email,
    companyName: companyName,
    webUrl: webUrl,
    ad: fileName, // Send only the file name
    plan: plan,
    agriment: agreement ? "Accepted" : "Not Accepted",
  };

  const serviceId = "service_7sxwogw";
  const templateId = "template_6yz3qnq";

  emailjs.send(serviceId, templateId, params)
    .then((res) => {
      // Reset form fields after successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("companyName").value = "";
      document.getElementById("companyWebsite").value = "";
      fileInput.value = ""; // Clear file input
      document.getElementById("plan").value = "";
      document.getElementById("termsAndConditions").checked = false;
      
      alert("Thankyou for choosing Adisom , Our team contact you soon through email.");
      console.log("Email sent:", res);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      alert("Failed to send email. Please try again.");
    });
}
