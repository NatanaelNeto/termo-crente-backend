const { BAD_REQUEST, NOT_FOUND } = require('../../utils/statusCode');
const model = require('../models/admin');

const passwordRegEx = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/

const login = async (nome, senha) => {
  if (nome.length < 5) return {
    error: BAD_REQUEST,
    message: 'Some fields are invalid',
  }

  if (!passwordRegEx.test(senha)) return {
    error: BAD_REQUEST,
    message: 'Some fields are invalid',
  }


  const result = await model.getAdmin(nome, senha);
  if (!result) return {
    error: NOT_FOUND,
    message: 'Account not found on database',
  };

  const { id, name } = result;

  return { id, name };
};

const addAdmin = async (nome, senha) => {
  if (nome.length >20)
};

module.exports = {
  login,
  addAdmin,
};