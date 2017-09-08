const fs = require('fs');

let language_code = 'en'; // en, de, el, es, fr, it, ja, ko, pt-PT, zh-CN

process.argv.forEach((val, index) => {
  if (index === 2) {
  	language_code_arr = ['en', 'de', 'el', 'es', 'fr', 'it', 'ja', 'ko', 'pt-PT', 'zh-CN'];
  	if (language_code_arr.includes(val)) {
  		language_code = val;
  	} else {
  		throw new Error('Unrecognised language!');
  	}
  }
});

// set the file you want to process
const mobile_app_strings = require(`./translated_strings/en/mobile_app_strings`);
const all_strings = require(`./translated_strings/${language_code}/all_strings`);

// set the output file names
const process_result_file = 'mobile_app_strings_translated.json';
const process_result_file_2 = 'mobile_app_strings_to_be_translated.json';

fs.appendFile(`./translated_strings/${language_code}/${process_result_file}`,'{\n', (err)=>{
  if (err) throw err;
  // console.log('process_result_file { is appended!');
});
fs.appendFile(`./translated_strings/${language_code}/${process_result_file_2}`,'{\n', (err)=>{
  if (err) throw err;
  // console.log('process_result_file_2 { is appended!');
});

for (var key in mobile_app_strings) {
  if (mobile_app_strings.hasOwnProperty(key)) {
    // check if the key exits in old translation file
    let keyFound = false;
    let keyValue = '';
  	for (var keyRaw in all_strings) {
  		if (all_strings.hasOwnProperty(keyRaw)) {
				if ( key.toLowerCase() === keyRaw.toLowerCase() ) {
					keyFound = true;
          keyValue = all_strings[keyRaw];
          var stringToPrint = '"' + key + '"' + ': ' + '"' + keyValue + '"' + ',\n';
          fs.appendFile(`./translated_strings/${language_code}/${process_result_file}`,stringToPrint, (err)=>{
            if (err) throw err;
            // console.log('all_strings { is appended!');
          });
				}
      }
  	}
    
    // key does not exist
    if (keyFound === false) {
      keyValue = mobile_app_strings[key];
      var string2ToPrint = '"' + key + '"' + ': ' + '"' + keyValue + '"' + ',\n';
      fs.appendFile(`./translated_strings/${language_code}/${process_result_file_2}`,string2ToPrint, (err)=>{
        if (err) throw err;
        // console.log('all_strings { is appended!');
      });
    }
  }
}

fs.appendFile(`./translated_strings/${language_code}/${process_result_file}`,'}', (err)=>{
  if (err) throw err;
  // console.log('all_strings } is appended!');
});
fs.appendFile(`./translated_strings/${language_code}/${process_result_file_2}`,'}', (err)=>{
  if (err) throw err;
  // console.log('all_strings } is appended!');
});
