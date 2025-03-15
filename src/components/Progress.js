export default function ProgressIndicator(currentStep) {
    const container = document.createElement('div');
    container.className = "progressContainer";
    container.innerHTML = `
        <div class="step ${currentStep >= 1 ? 'active' : ''}">1</div>
        <div class="step ${currentStep >= 2 ? 'active' : ''}">2</div>
        <div class="step ${currentStep >= 3 ? 'active' : ''}">3</div>
    `;
    return container;
}
