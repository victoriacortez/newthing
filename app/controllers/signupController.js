var bcrypt = require('bcrypt'),
    Model = require('../model/models.js')

module.exports.show = function(req, res) {
  res.render('signup')
}

module.exports.signup = function(req, res) {
  var firstname = req.body.firstname
  var lastname = req.body.lastname
  var birthday = req.body.birthday
  var emailaddress = req.body.emailaddress
  var emailaddress2 = req.body.emailaddress2
  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }
  
  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }

  if (emailaddress !== emailaddress2){
    req.flash('error', "Please, enter the same Email address twice.")
    res.redirect('signup')
  }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  
  var newUser = {
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    emailaddress: emailaddress,
    emailaddress2: emailaddress2,
    username: username,
    salt: salt,
    password: hashedPassword
  }
  
  Model.User.create(newUser).then(function() {
    res.redirect('/')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
}