// Strings in Javascript
// Declaration
company1 = "wisdom" 
company2 = 'sprouts'
description = `Lorem dfgh rtyui
 fghjk yuio ghjk 
 fghjkl hjkl;uyt dfghjk`

// String Properties
// length

console.log(description.length)
lengthOfDesri = description.length

// Accessing Characters
// charAt()
firstLetter = company1.charAt(0)
console.log(firstLetter)
console.log(company2.charAt(5))

// Concatenation 
// concat() ; + 
company = company1.concat(" ",company2)
console.log(company)
// wisdom 
// sprouts 

// Wisdom Sprouts 

console.log("----------------------")
console.log(company1.charAt(0).toUpperCase() +
 company1.substring(1, (company1.length)) + " " +
 company2.charAt(0).toUpperCase() + 
 company2.substring(1, company2.length)
)
console.log("----------------------")

console.log(company1.charAt(0).toUpperCase() +
    company1.slice(1, company1.length) )

console.log("----------------------")


console.log(company1 + " " + company2)
console.log(5 + 5 + "5" + 5)
console.log("5" + 5)

// Case Conversion
// .toUpperCase() and .toLowerCase()
console.log(company.toUpperCase())
user = "JOHN DOE"
console.log(user.toLowerCase())

console.log("*******************************")
// Searching Strings
// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().
sentence4 = "A little progress each day adds up to big results for next day."

console.log(sentence4.indexOf("progress"))
console.log(sentence4.indexOf("oiuytrsxcvb"))

console.log(sentence4.indexOf("day"), "using indexOf method")
console.log(sentence4.lastIndexOf("day"), "using lastIndexOf")

console.log(sentence4.includes("Day"))
console.log(sentence4.startsWith("A"))
console.log(sentence4.endsWith("!!!!!"))

console.log("*******************************")

// Extracting Substrings
// .slice(), .substring(), .substr()

console.log(company.slice(2, 6))
console.log(company.slice(2, 6).length)

console.log(company.substring(2,6))
console.log(company.substring(2,6).length)

console.log("-------substr--------")
console.log(company.substr(8))

// Trimming Strings
// .trim(), .trimStart(), .trimEnd().
userName = "        ROHAN                       "
console.log(userName.length)
console.log(userName.trim().length)
console.log(userName.trimStart().length)
console.log(userName.trimEnd().length)

// Replacing Substrings
// .replace() and .replaceAll().
sent = "I like HTML. HTML is easy to learn"
sent2 = sent.replace("HTML", "JAVASCRIPT")
console.log(sent2)
sent3 = sent.replaceAll("HTML", "JAVSCRIPT")
console.log(sent3)


// Splitting Strings
// split()
num = "123456789"
numArray = num.split("")
console.log(numArray)
userNames = 'Ajay|Vijay|Ramesh|Suresh'

userArray = userNames.split("|")
console.log(userArray)
// Assignments
// Write a program to count the number of vowels in a given string.
//   sentence4 = "A little progress each day adds up to big results for next day."

function countVowels(str){
    const vowels = "aeiouAEIOU"
    let count = 0
    len = str.length
    for(i=0;i<len;i++){
        // console.log(str.charAt(i))
        if(vowels.includes(str.charAt(i))){
            console.log("*", str.charAt(i), i)
            count++
        }
    }
    console.log("String contains", count ," vowels")
}
// vowels       
//               i     str.charAt(i)       count  
// 1st           0.   str.chartAt(0) = a    1 
// 2nd           1               (1) =   




countVowels("a team")
// countVowels(sentence4)

// Check if a string is a palindrome.
// step reverse of string 
// compare it 

function checkPalindrome(str){
    lastIndex = str.length - 1
    revSTR = ''
    for(i = lastIndex; i>=0; i--){
        // revSTR = revSTR + str.charAt(i)
        revSTR += str.charAt(i) 
    }
    if(str == revSTR){
        console.log("Palindrome")
    }else{
        console.log("Not Palindrome")
    }
    console.log("Reverse string", revSTR)
}
checkPalindrome("MADAM")
checkPalindrome("TEAM")




// Extract the first word of a sentence.
function getFirstWord(str){
    len = str.length
    firstWord = ''
    for(i=0;i<len;i++){
        if(str.charAt(i) == " "){
            break
        }else{
            firstWord += str.charAt(i)
        }
    }
    console.log(firstWord)
}
getFirstWord("Hello world")





// Replace all spaces in a string with hyphens (-).
// Split a string into an array of words.
// Convert the first letter of each word in a string to uppercase.
// Reverse the characters in a string manually (without built-in functions).
// Count the number of occurrences of a specific character in a string.
// Remove all non-alphanumeric characters from a string.
// Check if a string starts and ends with the same character.
// Convert given string to capitalize.
// Convert given string to lower case 
