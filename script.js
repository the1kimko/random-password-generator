const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}\/|;:`~,.<>?";

    const passwordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8;

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
        //console.log(password);
    }

    passwordBox.value = password;


}

button.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    const passwordCopy = passwordBox.value.trim();

    if (!passwordCopy) {
        alert("Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(passwordCopy)
        .then(() => {
            alert("Password copied to clipboard");
        })
        .catch((err) => {
            console.error("Failed to copy password: ", err);
    });
})