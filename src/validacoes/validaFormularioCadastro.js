import * as yup from "yup";

const schemaCadastro = yup.object().shape({
  nome: yup.string().required("O campo de nome é obrigatório"),
  email: yup
    .string()
    .email("O email digitado é inválido")
    .required("O campo email é obrigatório"),
  senha: yup.string().required("O campo de senha é obrigatório"),
});

export async function validaDadosFormularioCadastro(user) {
  try {
    await schemaCadastro.validate(user);

    return { valid: true, path: "", message: "Validação foi um sucesso!" };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}
