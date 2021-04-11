import express from 'express'
import { getUsers, getUser, createUser, deleteUser, modifyUser } from '../controllers/users.js'

// Initialize express router
const router = express.Router()

// Get Users
router.get('/', getUsers)
router.get('/:id', getUser)

// Create Users
router.post('/', createUser)

// Modify Users
router.patch('/:id', modifyUser)

// Delete Users
router.delete('/:id', deleteUser)

export default router
