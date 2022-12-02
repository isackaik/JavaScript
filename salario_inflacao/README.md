## Aplicação de salário x inflação

![Tela da aplicacao salario x inflacao](/salario_inflacao/img/img_salario_inflacao.png)

O objetivo da aplicação é listar o histórico do salário mínimo e da inflação (IPCA) entre os anos de 2010 e 2020. Além disso, o sistema deve ser capaz de calcular o crescimento percentual do salário mínimo ano a ano nesse período.

#### Requisitos:

- O usuário da aplicação deve escolher uma dentre três opções:
    
    - Listar o histórico do salário mínimo
    - Listar o histórico da taxa IPCA (inflação)
    - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)

- Ao escolher a opção 1 a aplicação deve acessar e listar o histórico do salário mínimo entre 2010 e 2020. Os dados necessários devem estar no código da aplicação.
- Ao escolher a opção 2 a aplicação deve acessar e listar o histórico da inflação entre 2010 e 2020. Os dados da inflação também devem estar no código da aplicação.
- Ao escolher a opção 3 a aplicação deve listar o histórico de 2010 a 2020 do salário mínimo e da inflação. Além disso, na opção 3 deve ser calculado o percentual de crescimento do salário mínimo.
- O percentual de crescimento é calculado com base na diferença entre o salário do ano e do ano anterior, dessa forma, o percentual de crescimento só deve ser apresentado a partir de 2011.

#### Cálculo do percentual de crescimento:

diferenca = salarioAtual - SalarioAnterior;
crescimentoSalarial = (diferenca / salarioAnterior) * 100;

Exemplo prático considerando que:

salário de 2010 = R$ 510
Salário de 2011 = R$ 545

diferenca = 545 - 510;
crescimentoSalarial = (diferenca / 510) * 100;
crescimentoSalarial = 6.86%;

- O valor da inflação (IPCA) já é dado em porcentagem, portanto, não precisa ser calculado.
- Os dados devem ser formatados com o seguinte padrão:
    
    - Valores monetários devem ser precedidos por R$
    - Valores monetários devem ter duas casas decimais, ainda que o valor dos decimais seja 0. Ex.: R$ 599,00
    - Valores percentuais devem ter o símbolo % após os números
    - O separador decimal utilizado deve ser a vírgula (,) e não o ponto (.)
- A aplicação deve exibir o resultado na tela e encerrar o processamento, sendo necessário executá-la novamente para escolher uma nova opção.