window.onload = function() {
    processOrder();
};

function processOrder() {
    const userInput = prompt("Enter your froyo flavors (comma-separated):");
    const flavors = userInput.split(",");
    const flavorCounts = countFlavors(flavors);
    displayFlavorCounts(flavorCounts);
}

function countFlavors(flavors) {
    const counts = {};
    flavors.forEach(flavor => {
        counts[flavor] = (counts[flavor] || 0) + 1;
    });
    return counts;
}

function displayFlavorCounts(flavorCounts) {
    console.table(flavorCounts);
}
