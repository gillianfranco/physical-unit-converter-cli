# Physical Unit Converter CLI

Conversor de Unidades Físicas - Uma ferramenta de linha de comando para converter entre diferentes unidades de medida física.

## 📋 Características

- ✅ Suporte para 9 tipos de unidades (comprimento, massa, tempo, temperatura, corrente, área, volume, quantidade de substância, intensidade luminosa)
- ✅ Interface de linha de comando intuitiva com Commander.js
- ✅ Saídas coloridas com Chalk
- ✅ Tratamento robusto de erros
- ✅ Validação completa de entrada
- ✅ 63 testes automatizados com 100% de cobertura
- ✅ Conversões bidirecionais
- ✅ Suporte a conversões de temperatura (com funções diretas)

## 🚀 Instalação

```bash
npm install
```

## 📖 Uso

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

node bin/index.js convert 1 km mi length
# Saída: 1 km = 0.621371 mi
```

**Massa:**
```bash
node bin/index.js convert 1 kg lb mass
# Saída: 1 kg = 2.20462 lb

node bin/index.js convert 1000 g kg mass
# Saída: 1000 g = 1 kg
```

**Tempo:**
```bash
node bin/index.js convert 60 s min time
# Saída: 60 s = 1 min

node bin/index.js convert 1 h s time
# Saída: 1 h = 3600 s
```

**Temperatura:**
```bash
node bin/index.js convert 0 c f temperature
# Saída: 0 c = 32 f

node bin/index.js convert 100 c k temperature
# Saída: 100 c = 373.15 k
```

**Área:**
```bash
node bin/index.js convert 1 hectare m2 area
# Saída: 1 hectare = 10000 m2

node bin/index.js convert 1 m2 cm2 area
# Saída: 1 m2 = 10000 cm2
```

**Volume:**
```bash
node bin/index.js convert 1 m3 l volume
# Saída: 1 m3 = 1000 l

node bin/index.js convert 1 gal l volume
# Saída: 1 gal = 3.785 l
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

### Ajuda

```bash
node bin/index.js --help
node bin/index.js convert --help
node bin/index.js units --help
```

## 🧪 Testes

Executar todos os testes:

```bash
npm test
```

Executar testes em modo watch:

```bash
npm run test:watch
```

## 🎯 Tipos de Unidades Suportados

| Tipo | Unidades | Exemplo |
|------|----------|---------|
| **length** | m, km, cm, mm, in, ft, yd, mi, nmi | `convert 100 cm m length` |
| **mass** | kg, g, mg, lb, oz, t, cg, hg, dag, dg, ug | `convert 1 kg lb mass` |
| **time** | s, ms, min, h, d, ks, hs, das, ds, cs, us, ns, ps | `convert 60 s min time` |
| **temperature** | c, f, k | `convert 0 c f temperature` |
| **current** | A, mA, kA, uA, nA, pA, MA | `convert 1 A mA current` |
| **area** | m2, km2, cm2, mm2, um2, hectare, acre | `convert 1 hectare m2 area` |
| **volume** | m3, l, ml, gal, cm3, dm3, km3, hm3, dam3 | `convert 1 m3 l volume` |
| **substanceAmount** | mol, mmol, kmol, umol, nmol, pmol | `convert 1 kmol mol substanceAmount` |
| **luminousIntensity** | cd, mcd, kcd, ucd, ncd, pcd | `convert 1 cd mcd luminousIntensity` |

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

## 📝 Exemplos Completos

### Conversão de Receitas

```bash
# Converter 2 xícaras (cups) para mililitros
# 1 cup ≈ 240 ml
# Usar galões (gal) como aproximação
node bin/index.js convert 0.47 gal ml volume
# Saída: 0.47 gal = 1778.95 ml
```

### Conversão de Temperaturas de Forno

```bash
# Forno a 350°F em Celsius
node bin/index.js convert 350 f c temperature
# Saída: 350 f = 176.667 c

# Forno a 180°C em Fahrenheit
node bin/index.js convert 180 c f temperature
# Saída: 180 c = 356 f
```

### Conversão de Distâncias

```bash
# Maratona em milhas para quilômetros
node bin/index.js convert 26.2 mi km length
# Saída: 26.2 mi = 42.1648 km

# Altura em pés para metros
node bin/index.js convert 6 ft m length
# Saída: 6 ft = 1.8288 m
```

## 🧠 Implementação com TDD

O projeto foi desenvolvido seguindo rigorosamente os princípios de Test-Driven Development (TDD):

1. **Red Phase**: Testes escritos primeiro, que falharam inicialmente
2. **Green Phase**: Implementação mínima para passar nos testes
3. **Refactor Phase**: Otimização e documentação do código

### Cobertura de Testes

- **63 testes totais** passando
- Cobertura de 100% em `src/convert.js`
- Testes para todos os 9 tipos de unidades
- Testes de validação de entrada
- Testes de casos de borda (zero, negativos, decimais)
- Testes de precisão de ponto flutuante

## 🎨 Personalizações com Chalk

A CLI usa Chalk para fornecer uma experiência visual agradável:

- **Cyan**: Descrições e seções principais
- **Yellow**: Tipos de unidades e labels
- **Green**: Mensagens de sucesso
- **Red**: Mensagens de erro
- **Gray**: Informações secundárias
- **White**: Valores e resultados

## 📐 Algoritmo de Conversão

O projeto usa um algoritmo eficiente em duas etapas:

1. **Conversão para Unidade Base**: `value * fromFactor`
2. **Conversão para Unidade Alvo**: `baseValue / toFactor`

**Exceção**: Temperatura usa funções de conversão diretas devido aos offsets (não é linear).
