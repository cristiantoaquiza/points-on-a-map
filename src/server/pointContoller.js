const getPoints = (req, res) => {
  res.status(200).send({ points: ['point1', 'point2'] })
}

const savePoint = (req, res) => {
  res.status(201).end()
}

export { getPoints, savePoint }
