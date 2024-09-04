document.addEventListener("DOMContentLoaded", function () {
	const addAlternativeNameButton =
		document.getElementById("addAlternativeName");
	const alternativeNamesContainer = document.getElementById(
		"alternativeNamesContainer"
	);

	function updateAlternativeNameNumbers() {
		const alternativeNames = document.querySelectorAll(".alternative-name");
		alternativeNames.forEach((nameDiv, index) => {
			const input = nameDiv.querySelector("input");
			input.id = `alternativeName${index + 1}`;
			input.name = `alternativeNames[${index}]`;
			input.placeholder = `Alternative Name ${index + 1}`;
		});
	}

	addAlternativeNameButton.addEventListener("click", function () {
		const alternativeNames = document.querySelectorAll(".alternative-name");
		const newIndex = alternativeNames.length + 1;
		const newAlternativeNameDiv = document.createElement("div");
		newAlternativeNameDiv.classList.add("alternative-name");
		newAlternativeNameDiv.innerHTML = `
            <input type="text" id="alternativeName${newIndex}" name="alternativeNames[${
			newIndex - 1
		}]" placeholder="Alternative Name ${newIndex}">
            <button type="button" class="removeAlternativeName">Remove</button>
        `;
		alternativeNamesContainer.insertBefore(
			newAlternativeNameDiv,
			addAlternativeNameButton
		);
	});

	alternativeNamesContainer.addEventListener("click", function (event) {
		if (event.target.classList.contains("removeAlternativeName")) {
			event.target.parentElement.remove();
			updateAlternativeNameNumbers();
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const addDirectorButton = document.getElementById("addDirector");
	const directorsContainer = document.getElementById("directorsContainer");

	function updateDirectorNumbers() {
		const directors = document.querySelectorAll(".director");
		directors.forEach((directorDiv, index) => {
			const directorNumber = index + 1;
			directorDiv.querySelector(
				"h3"
			).textContent = `Director ${directorNumber}`;
			directorDiv.querySelectorAll("label").forEach((label) => {
				const labelFor = label.getAttribute("for");
				label.setAttribute("for", labelFor.replace(/\d+/, directorNumber));
			});
			directorDiv.querySelectorAll("input, textarea").forEach((input) => {
				const inputId = input.id;
				input.id = inputId.replace(/\d+/, directorNumber);
				const nameAttr = input.name;
				input.name = nameAttr.replace(/\d+/, index);
			});
		});
	}

	addDirectorButton.addEventListener("click", function () {
		const directors = document.querySelectorAll(".director");
		const newIndex = directors.length + 1;
		const newDirectorDiv = document.createElement("div");
		newDirectorDiv.classList.add("director");
		newDirectorDiv.innerHTML = `
            <h3>Director ${newIndex}</h3>
            <label for="directorName${newIndex}">Full Name:</label>
            <input type="text" id="directorName${newIndex}" name="directors[${
			newIndex - 1
		}][name]" required />
            <small>Enter the full legal name of the director.</small>

            <label for="directorDob${newIndex}">Date of Birth:</label>
            <input type="date" id="directorDob${newIndex}" name="directors[${
			newIndex - 1
		}][dob]" required />

            <label for="directorNationality${newIndex}">Nationality:</label>
            <input type="text" id="directorNationality${newIndex}" name="directors[${
			newIndex - 1
		}][nationality]" required />

            <label for="directorIdNumber${newIndex}">Identification Number:</label>
            <input type="text" id="directorIdNumber${newIndex}" name="directors[${
			newIndex - 1
		}][idNumber]" required />

            <label for="directorAddress${newIndex}">Residential Address:</label>
            <textarea id="directorAddress${newIndex}" name="directors[${
			newIndex - 1
		}][address]" rows="4" required></textarea>

            <label for="directorEmail${newIndex}">Email Address:</label>
            <input type="email" id="directorEmail${newIndex}" name="directors[${
			newIndex - 1
		}][email]" required />

            <label for="directorPhone${newIndex}">Phone Number:</label>
            <input type="tel" id="directorPhone${newIndex}" name="directors[${
			newIndex - 1
		}][phone]" required />

            <!-- Button to remove a director -->
            <button type="button" class="removeDirector">Remove Director</button>
        `;
		directorsContainer.insertBefore(newDirectorDiv, addDirectorButton);
	});

	directorsContainer.addEventListener("click", function (event) {
		if (event.target.classList.contains("removeDirector")) {
			event.target.parentElement.remove();
			updateDirectorNumbers();
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const addShareholderButton = document.getElementById("addShareholder");
	const shareholdersContainer = document.getElementById(
		"shareholdersContainer"
	);

	function updateShareholderNumbers() {
		const shareholders = document.querySelectorAll(".shareholder");
		shareholders.forEach((shareholderDiv, index) => {
			const shareholderNumber = index + 1;
			shareholderDiv.querySelector(
				"h3"
			).textContent = `Shareholder ${shareholderNumber}`;
			shareholderDiv.querySelectorAll("label").forEach((label) => {
				const labelFor = label.getAttribute("for");
				label.setAttribute("for", labelFor.replace(/\d+/, shareholderNumber));
			});
			shareholderDiv.querySelectorAll("input, textarea").forEach((input) => {
				const inputId = input.id;
				input.id = inputId.replace(/\d+/, shareholderNumber);
				const nameAttr = input.name;
				input.name = nameAttr.replace(/\d+/, index);
			});
		});
	}

	addShareholderButton.addEventListener("click", function () {
		const shareholders = document.querySelectorAll(".shareholder");
		const newIndex = shareholders.length + 1;
		const newShareholderDiv = document.createElement("div");
		newShareholderDiv.classList.add("shareholder");
		newShareholderDiv.innerHTML = `
            <h3>Shareholder ${newIndex}</h3>
            <label for="shareholderName${newIndex}">Full Name:</label>
            <input type="text" id="shareholderName${newIndex}" name="shareholders[${
			newIndex - 1
		}][name]" required />
            <small>Enter the full legal name of the shareholder.</small>

            <label for="shareholderDob${newIndex}">Date of Birth:</label>
            <input type="date" id="shareholderDob${newIndex}" name="shareholders[${
			newIndex - 1
		}][dob]" required />

            <label for="shareholderNationality${newIndex}">Nationality:</label>
            <input type="text" id="shareholderNationality${newIndex}" name="shareholders[${
			newIndex - 1
		}][nationality]" required />

            <label for="shareholderIdNumber${newIndex}">Identification Number:</label>
            <input type="text" id="shareholderIdNumber${newIndex}" name="shareholders[${
			newIndex - 1
		}][idNumber]" required />

            <label for="shareholderAddress${newIndex}">Residential Address:</label>
            <textarea id="shareholderAddress${newIndex}" name="shareholders[${
			newIndex - 1
		}][address]" rows="4" required></textarea>

            <label for="shareholderEmail${newIndex}">Email Address:</label>
            <input type="email" id="shareholderEmail${newIndex}" name="shareholders[${
			newIndex - 1
		}][email]" required />

            <label for="shareholderPhone${newIndex}">Phone Number:</label>
            <input type="tel" id="shareholderPhone${newIndex}" name="shareholders[${
			newIndex - 1
		}][phone]" required />

            <label for="numberOfShares${newIndex}">Number of Shares:</label>
            <input type="number" id="numberOfShares${newIndex}" name="shareholders[${
			newIndex - 1
		}][shares]" required />

            <!-- Button to remove a shareholder -->
            <button type="button" class="removeShareholder">Remove Shareholder</button>
        `;
		shareholdersContainer.insertBefore(newShareholderDiv, addShareholderButton);
	});

	shareholdersContainer.addEventListener("click", function (event) {
		if (event.target.classList.contains("removeShareholder")) {
			event.target.parentElement.remove();
			updateShareholderNumbers();
		}
	});
});

const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
	event.preventDefault(); // Prevent default form submission

	// Gather form data
	const formData = new FormData(form);

	// Send data to Google Apps Script using Fetch API
	fetch(form.action, {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.text(); // Assuming your Apps Script returns a simple text response
		})
		.then((data) => {
			// Display success message
			alert(
				"Thank you for your business, your form has been submitted and will be reviewed within a period of 3 business days. We will contact you as soon as possible."
			);
			form.reset(); // Clear the form
		})
		.catch((error) => {
			// Display error message
			alert(
				"Oops, it seems something went wrong, please try refreshing the form then re-submitting. If the problem persists, kindly contact us for assistance."
			);
			console.error("Error submitting form:", error);
		});
});
