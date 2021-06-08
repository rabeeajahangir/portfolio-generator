var commandLineArgs = process.argv;
console.log(commandLineArgs);

var profileDataArgs = process.argv.slice(2, process,argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDatArr.length; i+=1) {
    console.log(profileDaraArr[i]);
    }
    console.log('================');

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);
