function firstNonRepeatedChar(str) {
 // Write your code here

	let charObj = {
    // y:2
}
// console.log(str[0])

for(let s of str){
    
if(charObj[s]){
    charObj[s] += 1
}
else charObj[s] = 1
}

console.log(charObj)

for(let char in charObj){
    // console.log(char)
    if(charObj[char] == 1){
        return char
    }
	
}
	return null
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
