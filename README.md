# Physical Unit Converter CLI

Conversor de Unidades Físicas - Uma ferramenta de linha de comando para converter entre diferentes unidades de medida física.

## 🚀 Instalação

```bash
npm install
```

### Configuração Recomendada

Para facilitar o uso, recomenda-se configurar uma variável de ambiente ou alias para o comando:

**Opção 1: Alias no shell (Linux/macOS)**

```bash
# Adicione esta linha ao seu arquivo de configuração do shell
alias unit-converter="node /caminho/para/bin/index.js"

# Depois recarregue o shell
source ~/.bashrc  # ou source ~/.zshrc
```

**Opção 2: Variável de ambiente (Linux/macOS)**

```bash
# No seu arquivo de configuração do shell
export UNIT_CONVERTER="node /caminho/para/bin/index.js"

# Use assim:
$UNIT_CONVERTER convert 100 cm m length
```

**Opção 3: Alias no PowerShell (Windows)**

```powershell
# Abra o PowerShell como Administrador e execute:
$profile
# Se o arquivo não existir, crie-o com:
New-Item -Path $profile -Type File -Force

# Depois abra o arquivo do perfil e adicione:
function unit-converter { & node "C:\caminho\para\bin\index.js" @args }

# Recarregue o perfil:
. $profile
```

**Opção 4: Variável de ambiente (Windows)**

```powershell
# PowerShell (como Administrador):
[Environment]::SetEnvironmentVariable("UNIT_CONVERTER", "node C:\caminho\para\bin\index.js", "User")

# Use assim:
& $env:UNIT_CONVERTER convert 100 cm m length
```

Ou via CMD:

```cmd
# CMD (como Administrador):
setx UNIT_CONVERTER "node C:\caminho\para\bin\index.js"

# Depois reinicie o CMD e use:
%UNIT_CONVERTER% convert 100 cm m length
```

Depois disso, você pode usar simplesmente `unit-converter` em vez de `node bin/index.js`.

## 📖 Uso

Para uma referência completa de todos os comandos disponíveis, veja [COMMANDS.md](./COMMANDS.md).

### Comando de Conversão

Converte um valor de uma unidade para outra:

```bash
node bin/index.js convert <valor> <unidade_origem> <unidade_destino> <tipo_unidade>
```

#### Exemplos:

**Comprimento:**

```bash
node bin/index.js convert 100 cm m length
# Saída: 100 cm = 1 m
```

**Massa:**

```bash
node bin/index.js convert 1 kg lb mass
# Saída: 1 kg = 2.20462 lb
```

**Tempo:**

```bash
node bin/index.js convert 60 s min time
# Saída: 60 s = 1 min
```

**Temperatura:**

```bash
node bin/index.js convert 0 c f temperature
# Saída: 0 c = 32 f
```

**Área:**

```bash
node bin/index.js convert 1 hectare m2 area
# Saída: 1 hectare = 10000 m2
```

**Volume:**

```bash
node bin/index.js convert 1 m3 l volume
# Saída: 1 m3 = 1000 l
```

### Listar Tipos de Unidades

```bash
node bin/index.js list
```

Mostra todos os tipos de unidades disponíveis com exemplos.

### Listar Unidades de um Tipo

```bash
node bin/index.js units <tipo_unidade>
```

#### Exemplos:

```bash
node bin/index.js units length
# Mostra: m, km, cm, mm, in, ft, yd, mi, nmi

node bin/index.js units mass
# Mostra: kg, g, mg, lb, oz, t, cg, hg, dag, dg, ug

node bin/index.js units temperature
# Mostra: c, f, k
```

## 🎯 Tipos de Unidades Suportados

| Tipo                  | Unidades                                          | Exemplo                              |
| --------------------- | ------------------------------------------------- | ------------------------------------ |
| **length**            | m, km, cm, mm, in, ft, yd, mi, nmi                | `convert 100 cm m length`            |
| **mass**              | kg, g, mg, lb, oz, t, cg, hg, dag, dg, ug         | `convert 1 kg lb mass`               |
| **time**              | s, ms, min, h, d, ks, hs, das, ds, cs, us, ns, ps | `convert 60 s min time`              |
| **temperature**       | c, f, k                                           | `convert 0 c f temperature`          |
| **current**           | A, mA, kA, uA, nA, pA, MA                         | `convert 1 A mA current`             |
| **area**              | m2, km2, cm2, mm2, um2, hectare, acre             | `convert 1 hectare m2 area`          |
| **volume**            | m3, l, ml, gal, cm3, dm3, km3, hm3, dam3          | `convert 1 m3 l volume`              |
| **substanceAmount**   | mol, mmol, kmol, umol, nmol, pmol                 | `convert 1 kmol mol substanceAmount` |
| **luminousIntensity** | cd, mcd, kcd, ucd, ncd, pcd                       | `convert 1 cd mcd luminousIntensity` |

## 📦 Estrutura do Projeto

```
physical-unit-converter-cli/
├── bin/
│   └── index.js              # Ponto de entrada da CLI
├── src/
│   ├── cli.js                # Implementação da interface CLI
│   ├── convert.js            # Função principal de conversão
│   └── units.js              # Definições de unidades
├── tests/
│   └── convert.test.js       # Suite de testes (63 testes)
├── jest.config.js            # Configuração do Jest
├── jsconfig.json             # Configuração do BaseURL
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```

## 🔧 Dependências

### Produção

- **commander**: ^14.0.2 - Parser robusto para linha de comando
- **chalk**: ^5.6.2 - Colorização de saídas terminal

### Desenvolvimento

- **jest**: ^30.2.0 - Framework de testes
- **prettier**: ^3.8.1 - Formatador de código

## 🧪 Testes Automatizados

Executar todos os testes:

```bash
npm test
```

Executar testes em modo watch:

```bash
npm run test:watch
```

## 📐 Algoritmo de Conversão

O projeto usa um algoritmo eficiente em duas etapas:

1. **Conversão para Unidade Base**: `value * fromFactor`
2. **Conversão para Unidade Alvo**: `baseValue / toFactor`

**Exceção**: Temperatura usa funções de conversão diretas devido aos offsets (não é linear).
