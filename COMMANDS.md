# Referência de Comandos - Unit Converter CLI

## Sintaxe Geral

```bash
node bin/index.js <comando> [opções] [argumentos]
```

---

## Comandos Disponíveis

### 1. `convert` - Realizar Conversão

Converte um valor de uma unidade para outra.

**Sintaxe:**
```bash
node bin/index.js convert <valor> <unidade_origem> <unidade_destino> <tipo_unidade>
```

**Argumentos:**
- `<valor>`: Número a converter (pode ser inteiro ou decimal)
- `<unidade_origem>`: Abreviação da unidade de partida
- `<unidade_destino>`: Abreviação da unidade de chegada
- `<tipo_unidade>`: Tipo de unidade (length, mass, time, etc)

**Exemplos:**

```bash
# Comprimento: 100 centímetros para metros
node bin/index.js convert 100 cm m length

# Massa: 1 quilograma para libras
node bin/index.js convert 1 kg lb mass

# Temperatura: 0 graus Celsius para Fahrenheit
node bin/index.js convert 0 c f temperature

# Tempo: 1 hora para segundos
node bin/index.js convert 1 h s time

# Área: 1 hectare para metros quadrados
node bin/index.js convert 1 hectare m2 area

# Volume: 1 litro para mililitros
node bin/index.js convert 1 l ml volume

# Corrente: 1 ampere para miliamperes
node bin/index.js convert 1 A mA current
```

---

### 2. `list` - Listar Tipos de Unidades

Mostra todos os tipos de unidades disponíveis com alguns exemplos de cada.

**Sintaxe:**
```bash
node bin/index.js list
```

**Exemplo de Saída:**
```
📚 Tipos de Unidades Suportados:

  length:
    m, km, cm, mm, in, ft, ...

  mass:
    kg, g, lb, oz, t, ...

  temperature:
    c, f, k
```

---

### 3. `units` - Listar Unidades de um Tipo

Mostra todas as unidades disponíveis para um tipo específico.

**Sintaxe:**
```bash
node bin/index.js units <tipo_unidade>
```

**Argumentos:**
- `<tipo_unidade>`: Nome do tipo (length, mass, time, temperature, etc)

**Exemplos:**

```bash
# Mostrar todas as unidades de comprimento
node bin/index.js units length

# Mostrar todas as unidades de massa
node bin/index.js units mass

# Mostrar todas as unidades de temperatura
node bin/index.js units temperature

# Mostrar todas as unidades de tempo
node bin/index.js units time
```

**Unidades Disponíveis por Tipo:**

| Tipo | Unidades |
|------|----------|
| length | m, km, hm, dam, dm, cm, mm, um, nm, in, ft, yd, mi, nmi |
| mass | kg, g, mg, ug, t, lb, oz, cg, hg, dag, dg |
| time | ks, hs, das, s, ds, cs, ms, us, ns, ps, min, h, d |
| temperature | c, f, k |
| current | kA, A, mA, uA, nA, pA, MA |
| area | km2, hm2, dam2, m2, dm2, cm2, mm2, um2, in2, ft2, yd2, mi2, hectare, acre |
| volume | km3, hm3, dam3, m3, dm3, cm3, mm3, um3, in3, ft3, yd3, l, ml, gal |
| substanceAmount | kmol, mol, mmol, umol, nmol, pmol |
| luminousIntensity | kcd, cd, mcd, ucd, ncd, pcd |

---

## Opções Globais

### `--version` ou `-v`
Mostra a versão do programa.

```bash
node bin/index.js --version
```

### `--help` ou `-h`
Mostra a mensagem de ajuda.

```bash
node bin/index.js --help
node bin/index.js convert --help
node bin/index.js units --help
```

---

## Casos de Uso Comuns

### Converter de Unidades Imperiais para Métricas

```bash
# Polegadas para centímetros
node bin/index.js convert 10 in cm length

# Libras para quilogramas
node bin/index.js convert 150 lb kg mass

# Milhas para quilômetros
node bin/index.js convert 5 mi km length

# Galões para litros
node bin/index.js convert 1 gal l volume
```

### Converter de Unidades Métricas para Imperiais

```bash
# Metros para pés
node bin/index.js convert 10 m ft length

# Quilogramas para libras
node bin/index.js convert 75 kg lb mass

# Quilômetros para milhas
node bin/index.js convert 10 km mi length

# Litros para galões
node bin/index.js convert 10 l gal volume
```

### Conversões de Temperatura

```bash
# Congelamento da água
node bin/index.js convert 0 c f temperature    # 32°F

# Fervura da água
node bin/index.js convert 100 c f temperature  # 212°F

# Temperatura corporal
node bin/index.js convert 37 c f temperature   # 98.6°F

# Celsius para Kelvin
node bin/index.js convert 25 c k temperature   # 298.15K
```

### Conversões de Múltiplas Unidades

```bash
# Milímetros para milhas
node bin/index.js convert 1000000 mm mi length

# Gramas para toneladas
node bin/index.js convert 1000000 g t mass

# Milissegundos para horas
node bin/index.js convert 3600000 ms h time
```

---

## Tratamento de Erros

### Valor Inválido

```bash
$ node bin/index.js convert abc cm m length

✗ Valor inválido: "abc" não é um número
```

### Unidade Inválida

```bash
$ node bin/index.js convert 100 invalid m length

✗ Erro na conversão: Invalid unit: invalid is not a valid length unit
```

### Tipo de Unidade Inválido

```bash
$ node bin/index.js convert 100 cm m invalid_type

✗ Erro na conversão: Invalid unit type
```

---

## Dicas e Truques

1. **Valores Negativos**: Suportados em conversões normais (exceto temperatura absoluta)
   ```bash
   node bin/index.js convert -10 c f temperature  # -50°F
   ```

2. **Valores Decimais**: Totalmente suportados
   ```bash
   node bin/index.js convert 1.5 m cm length  # 150 cm
   node bin/index.js convert 2.5 kg g mass    # 2500 g
   ```

3. **Conversões Diretas**: Conversão da mesma unidade
   ```bash
   node bin/index.js convert 100 m m length  # 100 m
   ```

4. **Precisão**: O programa usa precisão de até 10 dígitos significativos
   ```bash
   node bin/index.js convert 1 kg lb mass
   # Saída: 2.20462442 lb (10 dígitos significativos)
   ```

5. **Explorar Unidades**: Sempre use `list` ou `units` para descobrir opções
   ```bash
   node bin/index.js list              # Ver todos os tipos
   node bin/index.js units length      # Ver todas as unidades de comprimento
   ```

---

## Exemplos Práticos

### Receita de Cozinha

```bash
# Converter 2 xícaras para mililitros (1 cup ≈ 240ml)
node bin/index.js convert 0.47 gal ml volume
# Resultado: ~1778ml (aproximação)

# Temperatura do forno: 350°F em Celsius
node bin/index.js convert 350 f c temperature
# Resultado: ~176.67°C
```

### Fitnessepeso

```bash
# Você pesa 70kg, quantas libras?
node bin/index.js convert 70 kg lb mass
# Resultado: 154.32 lb

# Meta de corrida: 5 milhas em quilômetros?
node bin/index.js convert 5 mi km length
# Resultado: 8.047 km
```

### Ciência e Engenharia

```bash
# Comprimento de onda em nanômetros para micrômetros
node bin/index.js convert 650 nm um length
# Resultado: 0.65 um

# Corrente em miliamperes para amperes
node bin/index.js convert 500 mA A current
# Resultado: 0.5 A

# Área de um hectare em metros quadrados
node bin/index.js convert 2 hectare m2 area
# Resultado: 20000 m2
```

---

## Estrutura de Resposta

Cada conversão bem-sucedida retorna no formato:

```
✓ Conversão realizada com sucesso!

  <valor_origem> <unidade_origem> = <valor_resultado> <unidade_destino>
```

**Exemplo:**
```
✓ Conversão realizada com sucesso!

  100 cm = 1 m
```

---

## Suporte

Para obter ajuda sobre um comando específico:

```bash
node bin/index.js convert --help
node bin/index.js units --help
node bin/index.js list --help
```

Para listar todos os comandos disponíveis:

```bash
node bin/index.js --help
```
