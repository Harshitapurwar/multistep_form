// export default function Step3(formData, submitForm, prevStep) {
//     const container = document.createElement("div");
//     container.innerHTML = `
//         <h2>Step 3: Summary</h2>
//         <p><strong>Name:</strong> ${formData.name}</p>
//         <p><strong>Date of Birth:</strong> ${formData.dob}</p>
//         <p><strong>Gender:</strong> ${formData.gender}</p>
//         <p><strong>Email:</strong> ${formData.email}</p>
//         <p><strong>Phone:</strong> ${formData.phone}</p>
//         <p><strong>Address:</strong> ${formData.address}</p>
//         <button id="back">Back</button>
//         <button id="submit">Submit</button>
//     `;

//     container.querySelector("#submit").addEventListener("click", submitForm);
//     container.querySelector("#back").addEventListener("click", prevStep);

//     return container;
// }
const Step3 = (formData, onSubmit, onEdit) => {
    const container = document.createElement("div");
    container.classList.add("fade-in");

    const summaryCard = document.createElement("div");
    summaryCard.classList.add("summary-card");

    summaryCard.innerHTML = `
        <h2>Summary</h2>
        <div class="summary-item"><strong>Name:</strong> ${formData.name || "N/A"}</div>
        <div class="summary-item"><strong>Date of Birth:</strong> ${formData.dob || "N/A"}</div>
        <div class="summary-item"><strong>Gender:</strong> ${formData.gender || "N/A"}</div>
        <div class="summary-item"><strong>Email:</strong> ${formData.email || "N/A"}</div>
        <div class="summary-item"><strong>Phone:</strong> ${formData.phone || "N/A"}</div>
        <div class="summary-item"><strong>Address:</strong> ${formData.address || "N/A"}</div>
        
        <div class="button-group">
            <button id="edit-btn">Edit</button>
            <button id="submit-btn">Submit</button>
        </div>
    `;

    container.appendChild(summaryCard);

    // Add event listeners
    summaryCard.querySelector("#edit-btn").addEventListener("click", onEdit);
    summaryCard.querySelector("#submit-btn").addEventListener("click", onSubmit);

    return container;
};

export default Step3;
