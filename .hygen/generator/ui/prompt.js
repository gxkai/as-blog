module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter a module name',
    validate: input => input !== '',
  },
]
