const uploadBtn = document.getElementById("upload-btn");

const progressBar = document.getElementById("progress-bar");

const message = document.getElementById("message");

uploadBtn.addEventListener("click", () => {

	const fileInput = document.getElementById("file");	const file = fileInput.files[0];

	if (!file) {

		message.innerHTML = "Please select a file.";

		return;

	}

	

	const xhr = new XMLHttpRequest();

	xhr.open("POST", "upload.php");

	xhr.upload.addEventListener("progress", (event) => {

		if (event.lengthComputable) {

			const percentComplete = (event.loaded / event.total) * 100;

			progressBar.style.width = percentComplete + "%";

		}

	});

	

	xhr.onreadystatechange = () => {

		if (xhr.readyState === XMLHttpRequest.DONE) {

			if (xhr.status === 200) {

				message.innerHTML = "File uploaded successfully.";

			} else {

				message.innerHTML = "An error occurred while uploading the file.";

			}

		}

	};

	

	const formData = new FormData();

	formData.append("file", file);

	xhr.send(formData);

});
