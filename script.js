function showText(currentFlag) {
    if (!currentFlag.className.includes("show-name")) {
        currentFlag.className += " show-name";
    }
}

function hideText(currentFlag) {
    if (currentFlag.className.includes("show-name")) {
        currentFlag.className = currentFlag.className.replace("show-name", "");
    }
}
