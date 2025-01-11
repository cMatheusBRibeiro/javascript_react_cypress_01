import * as yup from "yup";

async function validaDadosFormularioCadastro(user) {
  let schemaCadastro = yup.object().shape({
    nome: yup.string().required("O campo de nome é obrigatório"),
    email: yup
      .string()
      .email("O email digitado é inválido")
      .required("O campo email é obrigatório"),
    senha: yup.string().required("O campo de senha é obrigatório"),
  });

  try {
    await schemaCadastro.validate(user);

    return { valid: true, path: "", message: "Validação foi um sucesso!" };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}

async function validaDadosFormularioLogin(user) {
  let schemaLogin = yup.object().shape({
    email: yup
      .string()
      .email("O email digitado é inválido")
      .required("O campo email é obrigatório"),
    senha: yup.string().required("O campo de senha é obrigatório"),
  });

  try {
    await schemaLogin.validate(user);

    return { valid: true, path: "", message: "Validação foi um sucesso!" };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}

export { validaDadosFormularioLogin, validaDadosFormularioCadastro };
