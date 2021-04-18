# Бестиарий

Список заранее придуманных мобов

## Параметры монстра

**Базовые:**

1. name
2. description

**Страхи/Резисты:**

1. fears
2. resist

**Характеристики:**

1. strength
2. agility
3. intelligence
4. charisma

Значения характеристик должны быть ```>=0```. Главная характеристика отрицательна.

**Базовые характеристики:**

1. hp
2. armor
3. mana

**Оружие/шмот/спелы/эффекты:**

1. weapon
2. spells
3. effects

## Как считаются параметры

```js
const hp = hp + 0.5 * strength + [modificators];
const mana = mana + 2 * intelligence + [modificators];

const damage = 0.5 * main + [modificators];
const recive_damage = damage - armor - [modificators];
```
