module.exports = {
    getTodos: (req, res) => {
        req.app.get('db').get_todos()
        .then(todos => res.status(200).send(todos))
        .catch(err => res.status(500).send(err))
    },
    addTodo: (req, res) => {
        const {todo} = req.body
        req.app.get('db').add_todo(todo)
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteTodo: (req, res) => {
        const {id} = req.params
        req.app.get('db').delete_todo(id)
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}