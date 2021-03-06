const { append, find, map } = require('ramda')

const catsData = [
  {
    id: 2,
    type: 'cat',
    breed: 'Siamese',
    desc:
      'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the rtgs: wichianmat landrace, one of several varieties of cat native to Thailand.'
  },
  {
    id: 3,
    type: 'cat',
    breed: 'Maine Coon',
    desc:
      'The Maine Coon is the largest domesticated breed of cat. It has a distinctive physical appearance and valuable hunting skills.'
  },
  {
    id: 4,
    type: 'cat',
    breed: 'Pixie-bob',
    desc:
      'The Pixie-bob is a breed of domestic cat claimed by breed founder Carol Ann Brewer of Washington State to be the progeny of naturally occurring bobcat hybrids.'
  }
]

function add(cat, callback) {
  callback(append(catsData, cat))
}

function listCats(callback) {
  //good - callback(null, data), bad - callback(err)
  callback(null, catsData)
}

function listCat(catID, callback) {
  //good - callback(null, data), bad - callback(err)
  callback(null, find(cat => cat.id == catID, catsData))
}

function replaceCat(updatedCat, catID, callback) {
  console.log(map(cat => cat.id == catID, catsData))
  callback(
    null,
    map(cat => {
      if (cat.id == catID) {
        return updatedCat
      } else {
        return cat
      }
    }, catsData)
  )
}

const dal = {
  add,
  listCats,
  listCat,
  replaceCat
}

module.exports = dal
