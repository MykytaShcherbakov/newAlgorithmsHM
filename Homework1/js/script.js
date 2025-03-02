function frequencyAnalysis(str) {
    const frequencyMap = {};
    
    for (const char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;
        }
    }
    
    const sortedEntries = Object.entries(frequencyMap).sort();
    
    for (const [char, count] of sortedEntries) {
        console.log(`${char} - ${count}`);
    }
}


const input = "AbraCadabra";
frequencyAnalysis(input);