

function newFunction() {
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("mouseover", function () {
			this.classList.add("highlight");
		});
		links[i].addEventListener("mouseout", function () {
			this.classList.remove("highlight");
		});
	}
}




document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        isValid = false;
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email || !emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        isValid = false;
        document.getElementById('messageError').style.display = 'block';
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    if (isValid) {
        alert('Feedback submitted successfully!');
        // Here you can also add the code to submit the form data to the server
        document.getElementById('feedbackForm').reset();
    }
});
