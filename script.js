function checkAge(){
    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    let errorMessage = "";

    if(isNaN(age) || age % 1 !== 0){
        errorMessage = "Please enter a valid age.";
    }
    else if(age < 18){
        errorMessage = "You are too young for this website!";
    }
    else if(age > 120){
        errorMessage = "You are too old for this website!";
    }
    else{
        errorMessage = "";
    }

    if (errorMessage === ""){
        // make main content visible
        document.getElementById("main-content").style.visibility = "visible";
        // hide error content
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        // make error content visible
        document.getElementById("error-content").style.visibility = "visible";
        // hide main content
        document.getElementById("main-content").style.visibility = "hidden";
    }
}