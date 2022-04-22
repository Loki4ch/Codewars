function findShort(s){
	let minLen = 0;
	let letterCounter = 0;
	for(let i = 0; i <= s.length; i++) {

	if (s[i] === ' ' || i === s.length) {
		if (minLen > letterCounter || minLen === 0) {
			minLen = letterCounter; 
		}
		letterCounter = 0;
		continue;
	}
	letterCounter++;
	}
	return minLen;
}

console.log(findShort("hello my name is E"))


// lc = 1 2 3 4 5 0 1 2 0 1 
// minl 5 2