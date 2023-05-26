document.addEventListener("DOMContentLoaded", () => {
    const fileList = document.getElementById("fileList");
    const fileElem = document.getElementById("fileElem");

    // Handle file input change event
    fileElem.addEventListener("change", () => {
        handleFiles(fileElem.files);
    });

    function handleFiles(files) {
        if (!files.length) {
            fileList.innerHTML = "<li>No files selected.</li>";
        } else {
            const list = fileList.querySelector("ul") || document.createElement("ul");
            fileList.appendChild(list);
            for (let i = 0; i < files.length; i++) {
                const li = document.createElement("li");
                const fileName = document.createTextNode(files[i].name);
                li.appendChild(fileName);
                list.appendChild(li);
            }
        }
    }
});
