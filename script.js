document.getElementById("year").textContent = new Date().getFullYear();


// Copy

// document.getElementById("copyButton").addEventListener("click", function() {
//   const scriptTag = '<script src="https://haseefmuhammed.github.io/adisomapi/adisomapiHaseefSwiftv1r25032025.js"></script>';

//   navigator.clipboard.writeText(scriptTag).then(function() {
//     alert("Copied to clipboard!");
//   }).catch(function(err) {
//     console.error('Could not copy text: ', err);
//     alert("Sorry, copying to clipboard failed. Please copy the code manually.");
//   });
// });

ScrollReveal().reveal('.scaleUp',
  { scale: 0.85 ,  duration: 1000 });

  ScrollReveal().reveal('.flip', {
    rotate: {
        x: 20,
        z: 20
    }
});