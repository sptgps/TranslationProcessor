# Translation Processor
### Powered by SPT

## Project Description
This project is designed for processing the Already-Translated-Strings and To-Be-Translated-Strings on OneSky.

## Feastures
* Merge Translated String Files
* Find those already translated strings
* Generate a file for strings need to be translated

## How to merge files
`node mergeFiles.js {language_code}`

## Note
language_code: en, de, el, es, fr, it, ja, ko, pt-PT, zh-CN

After merged all the string files, remove the last comma in the "all_strings.json" and check if there is any specital character, escape them.

## How to process the merged file
`node processFile.js {language_code}`

## Note
If the key exists, the processor would translate for you. Otherwise, the key would be in the newly generated file, which can be submitted to OneSky.

After the two files are generated, remove the last comma in "to_be_translated.json" and "translated.json".