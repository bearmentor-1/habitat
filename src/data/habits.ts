export let dataHabits = [
  {
    id: 1,
    title: "Drink water for 2L",
    isDone: true,
  },
  {
    id: 2,
    title: "Morning jogging",
    isDone: false,
  },
  {
    id: 3,
    title: "Breakfast",
    isDone: true,
  },
  {
    id: 4,
    title: "Learn or practice coding",
    isDone: false,
  },
  {
    id: 5,
    title: "Get a rest",
    isDone: false,
  },
];

export function getHabits() {
  return dataHabits;
}

export function getHabitById(id: number) {
  const foundHabit = dataHabits.find((habit) => habit.id === id);
  return foundHabit;
}

export function addHabit({
  title,
  isDone,
}: {
  title: string;
  isDone: boolean;
}) {
  const nextId =
    dataHabits.length > 0 ? dataHabits[dataHabits.length - 1].id + 1 : 1;

  const newHabit = { id: nextId, title, isDone };
  const newDataHabits = [...dataHabits, newHabit];

  dataHabits = newDataHabits;

  console.log({ title, isDone });
}
