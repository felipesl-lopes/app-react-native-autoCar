import * as Keychain from 'react-native-keychain';

/**
 * Função para salvar as credenciais.
 * @param login
 * @param password
 */
export const saveCredentials = async (login: string, password: string) => {
  await Keychain.setGenericPassword(login, password);
};

/**
 * Função para buscar as credenciais.
 * Se possuir credenciais salvas, elas são retornadas. Senão, retorna false.
 * @returns
 */
export const getCredentials = async () => {
  return Keychain.getGenericPassword();
};

/**
 * Função para apagar as credenciais.
 */
export const removeCredentials = async () => {
  await Keychain.resetGenericPassword();
};
