const fs = require('fs');

const language_code = 'en'; // en, de, el, es, fr, it, ja, ko, pt-PT, zh-CN

const strings = require(`./translated_strings/${language_code}/strings`);
const strings2 = require(`./translated_strings/${language_code}//strings2`);
const strings3 = require(`./translated_strings/${language_code}//strings3`);
const new_strings = require(`./translated_strings/${language_code}//new strings`);

fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,'{\n// strings\n', (err)=>{
	if (err) throw err;
	// console.log('all_strings { is appended!');
});

for (var key in strings) {
    if (strings.hasOwnProperty(key)) {
    	var stringToPrint = '"' + key + '"' + ': ' + '"' + strings[key] + '"' + ',\n';
        fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,stringToPrint, (err)=>{
			if (err) throw err;
			// console.log('all_strings { is appended!');
		});
    }
}

// strings2
fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,'\n// strings2\n', (err)=>{
	if (err) throw err;
	// console.log('all_strings { is appended!');
});

for (var key in strings2) {
    if (strings2.hasOwnProperty(key)) {
    	var string2ToPrint = '"' + key + '"' + ': ' + '"' + strings2[key] + '"' + ',\n';
        fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,string2ToPrint, (err)=>{
			if (err) throw err;
			// console.log('all_strings { is appended!');
		});
    }
}

// strings3
fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,'\n// strings3\n', (err)=>{
	if (err) throw err;
	// console.log('all_strings { is appended!');
});

for (var key in strings3) {
    if (strings3.hasOwnProperty(key)) {
    	var string3ToPrint = '"' + key + '"' + ': ' + '"' + strings3[key] + '"' + ',\n';
        fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,string3ToPrint, (err)=>{
			if (err) throw err;
			// console.log('all_strings { is appended!');
		});
    }
}

// new_strings
fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,'\n// new_strings\n', (err)=>{
	if (err) throw err;
	// console.log('all_strings { is appended!');
});

for (var key in new_strings) {
    if (new_strings.hasOwnProperty(key)) {
    	var newstringToPrint = '"' + key + '"' + ': ' + '"' + new_strings[key] + '"' + ',\n';
        fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,newstringToPrint, (err)=>{
			if (err) throw err;
			// console.log('all_strings { is appended!');
		});
    }
}

fs.appendFile(`./translated_strings/${language_code}/all_strings.json`,'}', (err)=>{
	if (err) throw err;
	// console.log('all_strings } is appended!');
});

console.log('all_strings.json is generated!');