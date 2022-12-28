/*
 importando e usando o "create" do arquivo para usar o email e senha
 assim que registrado
 */
import { operations } from "../database/dao/users";

operations.create(user).then((usuario) => {
  // chamando o email e senha assim que registrado e colocando em uma constante
  const email = usuario.email;
  const password = usuario.senha;

  // registrar no firebase os dados (email e senha)
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("usuario logado com sucesso");
    })
    .catch((error) => {
      console.error(error);
    });
});


//fazer login no firebase em um usuário existente com um e-mail e senha

/*
auth.signInWithEmailAndPassword(email, password)
  .then(user => {
    console.log('User logged in successfully!');
  })
  .catch(error => {
    console.error(error);
  });

*/
