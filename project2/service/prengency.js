// Toggle visibility of extra content
function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Pregnancy Weight Assessment (Recommended Gain Based on Pre-Pregnancy BMI)
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weightInput").value);
    let height = parseFloat(document.getElementById("heightInput").value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let result = "Your Pre-Pregnancy BMI is " + bmi + " - ";

        if (bmi < 18.5) {
            result += "Underweight: Recommended gain 12.5 - 18 kg";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result += "Normal Weight: Recommended gain 11.5 - 16 kg";
        } else if (bmi >= 25 && bmi < 29.9) {
            result += "Overweight: Recommended gain 7 - 11.5 kg";
        } else {
            result += "Obese: Recommended gain 5 - 9 kg";
        }

        document.getElementById("bmiResult").innerText = result;
    } else {
        document.getElementById("bmiResult").innerText = "Please enter valid numbers.";
    }
}
