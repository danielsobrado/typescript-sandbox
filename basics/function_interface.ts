interface ResourceReader {
    (name: string): boolean
}

let fileReader: ResourceReader = function(name) {
    return true;
}

let fileReaded = fileReader("myFile.csv");