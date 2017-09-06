const fs = require('fs');

const language_code = 'en'; // en, de, el, es, fr, it, ja, ko, pt-PT, zh-CN

const mobile_app_strings = require(`./translated_strings/${language_code}/mobile_app_strings`);
const all_strings = require(`./translated_strings/${language_code}/all_strings`);

const process_result_file = 'mobile_app_strings_translated.json';
const process_result_file_2 = 'mobile_app_strings_to_be_translated.json';

for (var key in mobile_app_strings) {
    if (mobile_app_strings.hasOwnProperty(key)) {
    	for (var keyRaw in all_strings) {
    		if (all_strings.hasOwnProperty(keyRaw)) {
				if ( key.toLowerCase() === keyRaw.toLowerCase() ) {
					console.log('found a matched key', key);
					console.log('found a matched keyRaw', keyRaw);

					var stringToPrint = '"' + key + '"' + ': ' + '"' + all_strings[keyRaw] + '"' + ',\n';
			        fs.appendFile(`./translated_strings/${language_code}/${process_result_file}`,stringToPrint, (err)=>{
						if (err) throw err;
						// console.log('all_strings { is appended!');
					});
				} else {
					var string2ToPrint = '"' + key + '"' + ': ' + '"' + mobile_app_strings[key] + '"' + ',\n';
			        fs.appendFile(`./translated_strings/${language_code}/${process_result_file_2}`,string2ToPrint, (err)=>{
						if (err) throw err;
						// console.log('all_strings { is appended!');
					});
				}
			}
    	}
    	
    }
}