import * as yup from "yup";

const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("O email digitado é inválido")
    .required("O campo email é obrigatório"),
  senha: yup.string().required("O campo de senha é obrigatório"),
});

export async function validaDadosFormularioLogin(user) {
  try {
    await schemaLogin.validate(user);

    return { valid: true, path: "", message: "Validação foi um sucesso!" };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}
