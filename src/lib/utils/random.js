export const ran = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const bool = (chance = 0.5) => Math.random() < chance;