const unicID = require('uniqid');
const fs = require('fs');
const { saveCube } = require('../controllers/database')

// let isDbRead = false;
// function addToDb(newCube){
        
//     if (isDbRead){
//         setTimeout(addToDb, 0 , newCube)
//         return
//     }

//     isDbRead = true;
//     fs.readFile(dataBaseFile, (err, dbData) => {
//         if (err) {
//             throw err
//         }
//         const cubes = JSON.parse(dbData)
//         cubes.push(newCube)

//         fs.writeFile(dataBaseFile, JSON.stringify(cubes), error => {
//             if (error) {
//                 throw error
//             }
//             console.log('New cube is succesfully stored');
//             isDbRead = false;
//         })
//     })
// }

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = unicID()
        this.name = name || 'No name'
        this.description = description;
        this.imageUrl = imageUrl || 'placeholder'
        this.difficulty = difficulty || 0
    }

    //saveCube


    save(callback) {
        const newCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty,
        }
        // addToDb(newCube)
        saveCube(newCube, callback)
    }

}

module.exports = Cube