const fs = require('fs')
const path = require('path')
const dataBaseFile = path.join(__dirname, '..', 'config/database.json')


const saveCube = (cube, callback) => {
    getCubes((cubes) => {
    cubes.push(cube)
    fs.writeFile(dataBaseFile, JSON.stringify(cubes), error => {
        if (error) {
            throw error
        }
        console.log('New cube is succesfully stored');
        callback()
    })
})
}

const getCube = ( id, callback) => {
getCubes( cubes => {
 const cube = cubes.filter(c => c.id === id)[0]
 callback(cube)
})
}

const getCubes = (callBack) => {

    fs.readFile(dataBaseFile, (err, dbData) => {
        if (err) {
            throw err
        }
        const cubes = JSON.parse(dbData)
      callBack(cubes)
    })
}

module.exports ={
    getCube,
    getCubes,
    saveCube
}