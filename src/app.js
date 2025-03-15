
import Step1 from "./components/Step1.js";
import Step2 from "./components/Step2.js";
import Step3 from "./components/Step3.js";
import { validateStep1, validateStep2 } from "./utils/validation.js";

document.addEventListener("DOMContentLoaded", () => {
    let currentStep = 1;
    let formData = {};

    const container = document.getElementById("form-container");
    const progressBar = document.getElementById("progress-bar"); 

    function updateProgressBar() {
        const progress = ((currentStep - 1) / 2) * 100; // Converts step to percentage
        progressBar.style.width = `${progress}%`;
    }
    function render() {
        container.innerHTML = "";
        updateProgressBar(); 
    
        if (currentStep === 1) {
            container.appendChild(Step1(() => validateAndGoToStep(2), formData, updateFormData));
        } else if (currentStep === 2) {
            container.appendChild(Step2(() => validateAndGoToStep(3), () => goToStep(1), formData, updateFormData));
        } else if (currentStep === 3) {
            container.appendChild(Step3(formData, () => alert("Form submitted!"), () => goToStep(2)));
        }
    }
    
    function goToStep(step) {
        currentStep = step;
        render();
    }

    function validateAndGoToStep(step) {
        const errors = step === 2 ? validateStep1(formData) : validateStep2(formData);

        if (Object.keys(errors).length > 0) {
            alert(Object.values(errors).join("\n"));
            return;
        }

        goToStep(step);
    }

    function updateFormData(data) {
        formData = { ...formData, ...data };
    }

    render();
});
