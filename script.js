import { drawInitialStructure } from "./canvas.js";
import { categories, alphabetLetters } from "./words.js";

let chosenWord = "";

const categoryContainer = document.getElementById("category-container");
const alphabetContainer = document.querySelector(".alphabet-container");

document.addEventListener("DOMContentLoaded", () => {
    displayCategories();
    createAlphabetButtons();
    drawInitialStructure();
});

const displayCategories = () => {
    Object.keys(categories).forEach((category) => {
        const button = document.createElement("button");
        button.classList.add("category");
        button.textContent = category;
        button.addEventListener("click", () => selectCategory(category));
        categoryContainer.appendChild(button);
    });
};

const selectCategory = (selectedCategory) => {
    document.querySelectorAll(".category").forEach((button) => {
        button.textContent.toLowerCase() === selectedCategory
            ? button.classList.add("active")
            : (button.disabled = true);
    });

    alphabetContainer.classList.add("active");
    const hiddenWord = document.getElementById("hidden-word");
    hiddenWord.textContent = "";

    if (!chosenWord) {
        const wordsArray = categories[selectedCategory];
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        chosenWord = wordsArray[randomIndex].toUpperCase();
        hiddenWord.innerHTML = chosenWord
            .split("")
            .map(() => '<span class="dashes">-</span>')
            .join("");
        hiddenWord.classList.add("active");
    }
};

const createAlphabetButtons = () => {
    const alphabet = alphabetLetters.split("");
    alphabet.forEach((letter) => {
        const button = document.createElement("button");
        button.classList.add("letter");
        button.textContent = letter;
        alphabetContainer.appendChild(button);
    });
};
