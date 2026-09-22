const inputParaElmt = document.getElementById("inputPara")
const resultElmt = document.getElementById("result")

function checkVowels(){
    str = inputParaElmt.value 
    const vowels = "aeiouAEIOU"
    let count = 0
    len = str.length
    for(i=0;i<len;i++){
        // console.log(str.charAt(i))
        if(vowels.includes(str.charAt(i))){
            // console.log("*", str.charAt(i), i)
            count++
        }
    }
    // console.log("String contains", count ," vowels")
    resultElmt.textContent = "Count of Vowels in paragraph : "+ count
}

function checkPalindrome(){
    str = (inputParaElmt.value).toLowerCase() 
    lastIndex = str.length - 1
    revSTR = ''
    for(i = lastIndex; i>=0; i--){
        // revSTR = revSTR + str.charAt(i)
        revSTR += str.charAt(i) 
    }
    if(str == revSTR){
        // console.log("Palindrome")
        resultElmt.textContent = "Given String is Paloindrome"
    }else{
        // console.log("Not Palindrome")
        resultElmt.textContent = "It is Not Palindrome"
    }


}