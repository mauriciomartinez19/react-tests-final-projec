const data = require('./tours-data.json')

let tours = [...data]

const getPeople = (req, res) => {
    res.status(200).json(tours)
}

const putPeople = (req, res) => {
    tours = [...data]
    res.status(200).json({ succes: true, data: tours })
}

const deletePeople = (req, res) => {
    const tour = tours.find((tour) => tour.id === req.params.id)
    if (!tour) {
        return res.status(404).json({ succes: false, msg: `no person with id ${req.params.id}` })
    } else {
        tours = tours.filter((tour) => tour.id !== req.params.id)
        return res.status(200).json({ succes: true, data: tours })
    }
}

module.exports = {
    getPeople,
    putPeople,
    deletePeople
}