export default function Step1(nextStep, formData, updateFormData) {
    const container = document.createElement("div");
    container.className = "fade-in"; // Animation

    container.innerHTML = `
        <h2>Step 1: Basic Details</h2>
        <label>Name: <input type="text" id="name" value="${formData.name || ""}"></label>
        <label>Date of Birth: <input type="date" id="dob" value="${formData.dob || ""}"></label>
        <label>Gender:
            <select id="gender">
                <option value="Male" ${formData.gender === "Male" ? "selected" : ""}>Male</option>
                <option value="Female" ${formData.gender === "Female" ? "selected" : ""}>Female</option>
            </select>
        </label>
        <button id="next">Next</button>
    `;

    container.querySelector("#next").addEventListener("click", () => {
        updateFormData({
            name: container.querySelector("#name").value,
            dob: container.querySelector("#dob").value,
            gender: container.querySelector("#gender").value,
        });
        nextStep();
    });

    return container;
}
//Step1.js
