//set cookies that expire in 7 days
function greetUser(){
    // Check if visitedBefore cookie exists
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if (hasVisitedBefore) {
        alert(" Weclome back to Moth Explorer!");
    } else {
        // sets cookie with 7 days exoury
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `visitedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to Moth Explorer!");
    }
}
greetUser()