import { v4 as uuidv4 } from 'uuid'

// Database
let users = []

/**
 * Function that get a user list
 *
 * @param {*} req petition
 * @param {*} res response
 */
export const getUsers = (req, res) => {
  // Response the list
  res.send(users)
}

/**
 * Function that response a user by id
 *
 * @param {*} req petition
 * @param {*} res response
 */
export const getUser = (req, res) => {
  // Get the id
  const { id } = req.params
  // Response the user by id
  res.send(users.find((user) => user.id === id))
}

/**
 * Function that create a user
 *
 * @param {*} req petition
 * @param {*} res response
 */
export const createUser = (req, res) => {
  const user = req.body
  users.push({ ...user, id: uuidv4() })
  // Response a message
  res.send(`User with the id ${req.id} has been added to the database!`)
}

/**
 * Function that modify a user by id
 *
 * @param {*} req petition
 * @param {*} res response
 */
export const modifyUser = (req, res) => {
  // Get the id
  const { id } = req.params
  // Get value to be updated
  const { firstName, lastName, age } = req.body
  // Get the user to be updated
  const userToBeUpdated = users.find((user) => user.id === id)
  // Update values
  if (firstName) userToBeUpdated.firstName = firstName
  if (lastName) userToBeUpdated.lastName = lastName
  if (age) userToBeUpdated.age = age
  // Response a message
  res.send(`User with the id ${id} has been updated from the database!`)
}

/**
 * Function that delete a user by id
 *
 * @param {*} req petition
 * @param {*} res response
 */
export const deleteUser = (req, res) => {
  // Get the id
  const { id } = req.params
  // Remove user from list
  users = users.splice(users.findIndex((user) => user.id === id), 1)
  // Response a message
  res.send(`User with the id ${id} has been deleted from the database!`)
}
