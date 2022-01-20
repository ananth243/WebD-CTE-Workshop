// Handling errors

const getDataFromSomewhere = () => {
    return undefined;
};


try {
    const data = getDataFromSomewhere();
    console.log(data.temperature);
} catch (error) {

    const names = Object.getOwnPropertyNames(error);
    const description = Object.getOwnPropertyDescriptors(error);
    console.log(description);
} finally {

    console.log("I am past the try-catch block.");

}


const male = {
    'name' : 'John',
    'age' : 47,
    'branch' : 'ECE'
}

console.log(Object.getOwnPropertyNames(male));