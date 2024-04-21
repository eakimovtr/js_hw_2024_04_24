const ageBtn = document.getElementById("age-group")
const symbolBtn = document.getElementById("symbol")
const digitsBtn = document.getElementById("same-digits")
const leapBtn = document.getElementById("leap-year")
const palindromeBtn = document.getElementById("palindrome")

ageBtn.onclick = function() {
    const usrInput = prompt("Enter your age")
    const usrAge = Number(usrInput)
    if (usrAge < 0) {
        alert("Invalid age")
        return
    }
    let res = "Your age group: "
    if (usrAge < 2) {
        res += "infant"
    } else if (usrAge < 12) {
        res += "child"
    } else if (usrAge < 18) {
        res += "teen"
    } else if (usrAge < 60) {
        res += "adult"
    } else {
        res += "senior"
    }
    alert(res)
}

symbolBtn.onclick = function() {
    const usrInput = prompt("Enter digit")
    switch (usrInput) {
        case "0":
            alert(")")
            break
        case "1":
            alert("!")
            break
        case "2":
            alert("@")
            break
        case "3":
            alert("#")
            break
        case "4":
            alert("$")
            break
        case "5":
            alert("%")
            break
        case "6":
            alert("^")
            break
        case "7":
            alert("&")
            break
        case "8":
            alert("*")
            break
        case "9":
            alert("(")
            break
        default:
            alert("Invalid input")
            return
    }
}

digitsBtn.onclick = function() {
    const usrInput = prompt("Enter number")
    if (usrInput.length == 1) {
        alert("No repeating digits")
        return
    }
    const digits = new Map()
    for (let i = 0; i < usrInput.length; i++) {
        const char = usrInput.charAt(i)
        if (digits.get(char) == undefined) {
            digits.set(char, 0)
        }
        digits.set(char, digits.get(char) + 1)
    }
    let header = "Repeating digits.\nDigit\t|\tTimes"
    let res = ""
    for (const [key, value] of digits) {
        if (value > 1) {
            res += `\n${key}\t|\t${value}`
        }
    }
    if (res == "") {
        alert("No repeating digits")
        return
    } 
    alert(header + res)
}

leapBtn.onclick = function() {
    const usrInput = prompt("Enter year")
    const year = Number(usrInput)
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        alert("Year " + year + " is leap")
        return
    }
    alert("Year " + year + " is common")
}

palindromeBtn.onclick = function() {
    const usrInput = prompt("Enter number")
    let reverseNumber = ""
    for (let i = usrInput.length-1; i >= 0; i--) {
        reverseNumber += usrInput.charAt(i)
    }
    if (usrInput == reverseNumber) {
        alert("Number " + usrInput + " is a palindrome")
        return
    }
    alert("Number " + usrInput + " is not a palindrome")
}